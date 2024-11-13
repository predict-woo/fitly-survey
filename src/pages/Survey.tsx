import Question from '../components/Question'
import Answer from '../components/Answer'
import { useState, useEffect, useCallback } from 'react'
import { questions, QuestionType } from '../state/input'
import { userInputStore } from '../state/input'
import RadioGroup from '../components/RadioGroup'
import Slider from '../components/Slider'
import ProgressBar from 'components/ProgressBar'
import ReactGA from 'react-ga4'
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded'
import { useLocation } from 'wouter'
function Survey() {
  const [index, setIndex] = useState<number>(0)
  const [question, setQuestion] = useState<QuestionType>(questions[index])
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, setLocation] = useLocation()

  useEffect(() => {
    setQuestion(questions[index])
  }, [index])

  const userInput = userInputStore((state) => state.value)

  const setKey = userInputStore((state) => state.setKey)

  const valid = useCallback((): boolean => {
    if (question.validation && !question.validation(userInput[question.key]))
      return false

    if (typeof userInput[question.key] === 'string' && !userInput[question.key])
      return false

    if (
      Array.isArray(userInput[question.key]) &&
      (userInput[question.key] as string[]).length === 0
    )
      return false

    return true
  }, [question, userInput])

  const handleNext = () => {
    ReactGA.event({
      category: 'button-click',
      action: 'submit-user-input',
      label: question.number.toString()
    })
    // 유효성 검사
    if (!valid()) return

    if (index === questions.length - 1) {
      setLocation('/loading')
      return
    }

    if (question.number === 7 && userInput.supplementUsed === '없음') {
      setIndex(index + 2)
    } else {
      setIndex(index + 1)
    }
  }

  const handleBack = () => {
    if (index === 0) {
      setLocation('/')
      return
    }
    if (userInput.supplementUsed === '없음' && question.number == 9) {
      setIndex(index - 2)
    } else {
      setIndex(index - 1)
    }
  }

  return (
    <div className="flex size-full w-full flex-col items-center">
      <div className="mb-10 flex w-full items-center justify-start gap-[24px]">
        <ArrowBackRoundedIcon
          onClick={handleBack}
          style={{ width: '24px', height: '24px' }}
        />
        <ProgressBar length={questions.length} index={index + 1} />
      </div>
      <div className="flex size-full flex-col items-center justify-between">
        <div className="flex w-full flex-col items-center gap-[34px]">
          <div className="flex w-full flex-col items-center gap-[40px]">
            <Question
              number={
                userInput.supplementUsed === '없음' && question.number > 7
                  ? question.number - 1
                  : question.number
              }
              title={question.title}
              subTitle={question.subTitle}
            />
            {question.input.type === 'text' && (
              <Answer
                key={question.number}
                value={userInput[question.key] as string}
                onChange={(e) => setKey(question.key, e)}
                placeholder={question.input.placeholder ?? ''}
              />
            )}
            {question.input.type === 'number' && (
              <Answer
                key={question.number}
                value={userInput[question.key]?.toString() ?? ''}
                onChange={(e) => {
                  if (!e) setKey(question.key, '')
                  if (isNaN(Number(e))) return
                  setKey(question.key, Number(e))
                }}
                placeholder={question.input.placeholder ?? ''}
                suffix={question.input.suffix ?? ''}
              />
            )}
            {question.input.type === 'select' && (
              <div className="max-h-[250px] overflow-y-auto">
                <RadioGroup
                  value={
                    userInput[question.key]
                      ? ([userInput[question.key]] as string[])
                      : []
                  }
                  onChange={(e) => setKey(question.key, e[0])}
                  labels={question.input.options}
                  multiSelect={false}
                />
              </div>
            )}
            {question.input.type === 'checkbox' && (
              <div className="max-h-[250px] overflow-y-auto">
                <RadioGroup
                  value={
                    userInput[question.key]
                      ? (userInput[question.key] as string[])
                      : []
                  }
                  onChange={(e) => setKey(question.key, e)}
                  labels={question.input.options}
                  multiSelect={true}
                />
              </div>
            )}
            {question.input.type === 'slider' && (
              <Slider
                value={
                  userInput[question.key]
                    ? (userInput[question.key] as number)
                    : question.input.value
                }
                onChange={(e: number) => setKey(question.key, e)}
                min={question.input.min || 0}
                max={question.input.max || 100}
              />
            )}
          </div>
        </div>

        <button
          onClick={handleNext}
          className={`my-10 w-[340px] rounded-lg px-6 py-4 text-white ${
            !valid() ? 'cursor-not-allowed bg-gray-400' : 'bg-primary'
          }`}
        >
          다음
        </button>
      </div>
    </div>
  )
}

export default Survey
