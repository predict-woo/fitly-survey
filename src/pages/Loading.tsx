import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded'
import { userInputStore } from 'state/input'
import { useEffect } from 'react'
import { UserInput } from 'state/input'
import { resultStore } from 'state/result'
import { getCharacter } from 'utils/character'
import { fetchSupplements } from 'utils/fetch'
import { getSupplements } from 'utils/supplements'
import { useLocation } from 'wouter'

function Loading() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, setLocation] = useLocation()

  const handleBack = () => {
    setLocation('/survey')
  }

  const userInput = userInputStore((state) => state.value)

  const setCharacter = resultStore((state) => state.setCharacter)
  const setSupplements = resultStore((state) => state.setSupplements)
  useEffect(() => {
    if (!userInput.name) {
      setLocation('/')
    }
    const main = async () => {
      const resultCharacter = getCharacter(userInput as Partial<UserInput>)
      setCharacter(resultCharacter)
      const supplements = await fetchSupplements()
      const sortedSupplements = getSupplements(
        supplements,
        userInput as UserInput
      )

      setSupplements(sortedSupplements)
      // open result page after 1 second
      setTimeout(() => {
        setLocation('/result')
      }, 1000)
    }
    main()
  }, [userInput, setCharacter, setSupplements, setLocation])

  // console.log(resultCharacter)

  return (
    <div className="flex size-full w-full flex-col items-center">
      <div className="mb-10 flex w-full justify-start">
        <ArrowBackRoundedIcon
          onClick={handleBack}
          style={{ width: '20px', height: '20px' }}
        />
      </div>
      <div className="relative flex size-full flex-col items-center justify-center">
        <svg
          width="306"
          height="540"
          viewBox="0 0 306 540"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ overflow: 'visible' }} // Added this line
        >
          <path
            d="M27.3538 119.942L37.6037 140.958L14.278 139.327L27.3538 119.942Z"
            fill="#FF602E"
            className="animate-bounce"
            style={{ animationDelay: '0.3s' }}
          />
          <path
            d="M276.927 373.149L299.247 380.115L282.054 395.963L276.927 373.149Z"
            fill="#3888FF"
            className="animate-bounce"
            style={{ animationDelay: '0.2s' }}
          />
          <path
            d="M0.585986 524.619L21.2202 513.62L20.4285 536.989L0.585986 524.619Z"
            fill="#CCFF39"
            className="animate-bounce"
            style={{ animationDelay: '0.4s' }}
          />
          <rect
            x="16.2266"
            y="299"
            width="25"
            height="25"
            transform="rotate(21.6606 16.2266 299)"
            fill="#BA63FF"
            className="animate-bounce"
            style={{ animationDelay: '0.6s' }}
          />
          <rect
            x="132"
            y="407.182"
            width="25"
            height="25"
            transform="rotate(-11.9622 132 407.182)"
            fill="#30FFDA"
            className="animate-bounce"
            style={{ animationDelay: '0.8s' }}
          />
          <circle
            cx="72.5"
            cy="99.5"
            r="19.5"
            fill="#FFDB59"
            className="animate-bounce"
            style={{ animationDelay: '1s' }}
          />
          <circle
            cx="293.5"
            cy="510.5"
            r="9.5"
            fill="#FF7B36"
            className="animate-bounce"
            style={{ animationDelay: '1.2s' }}
          />
          <circle
            cx="196.5"
            cy="308.5"
            r="9.5"
            fill="#2DC39D"
            className="animate-bounce"
            style={{ animationDelay: '1.4s' }}
          />
          <rect
            x="239"
            y="16.7402"
            width="25"
            height="25"
            transform="rotate(-42.0388 239 16.7402)"
            fill="#FFF9CE"
            className="animate-bounce"
            style={{ animationDelay: '1.6s' }}
          />
        </svg>
        <div className="absolute top-[200px] text-[24px] font-bold text-gray-900">
          결과를 출력 중이에요
          <br />
          잠시만 기다려주세요!
        </div>
      </div>
    </div>
  )
}

export default Loading
