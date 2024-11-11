import { useEffect, useState } from 'react'
import { resultStore } from 'state/result'
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded'
import { useLocation } from 'wouter'
import { Supplement, SupplementCategory } from 'utils/supplements'
import { userInputStore } from 'state/input'
import PreRegistration from 'components/PreRegistration'
import { fetchDescription } from 'utils/fetch'
import Modal from 'components/Modal'
import Review from 'components/Review'
import axios from 'axios'

const Result = () => {
  const supplements = resultStore((state) => state.supplements)
  const character = resultStore((state) => state.character)
  const userInput = userInputStore((state) => state.value)
  const backendUrl = 'https://strong_life_backend.sw-andyye.workers.dev'
  const [surveyId, setSurveyId] = useState('')

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, setLocation] = useLocation()
  const [supplementsByCategory, setSupplementsByCategory] = useState<
    {
      category: SupplementCategory
      supplements: Supplement[]
    }[]
  >([])

  const [descriptions, setDescriptions] = useState<
    { name: string; description: string }[]
  >([])

  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    fetchDescription().then(setDescriptions)
  }, [])

  useEffect(() => {
    if (!userInput.name || !character.name || !supplements.length) {
      setLocation('/')
    }
    // pick top 10 supplements
    const top10Supplements = supplements.slice(0, 10)
    // get all unique categories (which order is same as the order of the supplements)
    const uniqueCategories: SupplementCategory[] = []
    top10Supplements.forEach((supplement) => {
      if (!uniqueCategories.includes(supplement.category)) {
        uniqueCategories.push(supplement.category)
      }
    })
    // for each category, get the supplements from the top 10 supplements
    setSupplementsByCategory(
      uniqueCategories.map((category) => ({
        category,
        supplements: top10Supplements.filter(
          (supplement) => supplement.category === category
        )
      }))
    )
  }, [supplements, character, userInput, setLocation])

  // enable modal after 2 minutes
  useEffect(() => {
    setTimeout(() => {
      setIsModalOpen(true)
    }, 30 * 1000)
  }, [])

  const handleBack = () => {
    setLocation('/loading')
  }

  useEffect(() => {
    const main = async () => {
      const res = await axios.post(`${backendUrl}/survey`, userInput)
      console.log(res)
      setSurveyId(res.data.id)
    }
    main()
  }, [userInput])

  const handleReviewSubmit = async (star: number, review: string) => {
    setIsModalOpen(false)
    console.log(star, review)
    const res = await axios.post(`${backendUrl}/review`, {
      id: surveyId,
      star,
      review
    })
    console.log(res)
  }

  const handlePreRegistrationSubmit = async (email: string) => {
    const res = await axios.post(`${backendUrl}/registration`, {
      id: surveyId,
      email
    })
    console.log(res)
  }

  return (
    <div className="flex size-full w-full flex-col items-center">
      <div className="mb-10 flex w-full justify-start">
        <ArrowBackRoundedIcon
          onClick={handleBack}
          style={{ width: '20px', height: '20px' }}
        />
      </div>
      <div className="flex size-full flex-col">
        <h2 className="text-[14px] text-[#9DA0A3]">
          {userInput.name}님께 딱 맞는 근육캐릭터는?
        </h2>
        <h1 className="mt-[4px] text-[24px] font-bold text-[#373D42]">
          {character.name}
        </h1>
        <img src={character.image} alt={character.name} />
        <h1 className="mt-[22px] text-[20px] font-bold text-[#373D42]">
          {userInput.name}님께 추천드리는 제품이에요
        </h1>
        {supplementsByCategory.map((category) => (
          <div key={category.category}>
            <h2 className="mb-[16px] mt-[32px] border-l-[3px] border-l-primary px-[10px] pl-2 text-[16px] font-medium leading-5 text-primary">
              {category.category}
            </h2>
            <p className="text-[14px] text-gray-500">
              {
                descriptions.find((d) => d.name === category.category)
                  ?.description
              }
            </p>
            <div className="mt-[24px] flex flex-col gap-[24px]">
              {category.supplements.map((supplement) => (
                <div className="flex w-full" key={supplement.name}>
                  <div className="w-3/5">
                    <h3 className="overflow-hidden truncate whitespace-nowrap text-[14px] font-bold">
                      {supplement.name}
                    </h3>
                    <p className="mt-[4px] text-[12px] text-gray-500">
                      {supplement.description}
                    </p>
                    <div className="mt-[12px] flex items-center gap-4">
                      <span className="text-[12px] text-black">
                        {supplement.price.toLocaleString()}원
                      </span>
                      <a
                        href={supplement.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-full bg-primary px-[10px] py-[4px] text-[12px] font-medium text-white"
                      >
                        구매하러 가기
                      </a>
                    </div>
                  </div>
                  <div className="ml-auto flex size-[100px] items-center justify-center bg-gray-200">
                    <img src={supplement.image} alt={supplement.name} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
        <div className="mt-[75px]" />
        <PreRegistration onSubmit={handlePreRegistrationSubmit} />
        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
          <Review onSubmit={handleReviewSubmit} />
        </Modal>

        <div className="mt-[47px]" />
        <div className="mb-[24px] border-t border-gray-500 p-[12px]">
          <p className="flex gap-4 text-[14px] text-gray-500">
            Contact.{' '}
            <a
              className="font-bold"
              href="https://instagram.com/fitly.korea"
              target="_blank"
              rel="noopener noreferrer"
            >
              @fitly.korea
            </a>
            <svg
              width="20"
              height="21"
              viewBox="0 0 20 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.0286 0.50123C11.7583 0.49843 12.488 0.505764 13.2176 0.52323L13.4116 0.53023C13.6356 0.53823 13.8566 0.54823 14.1236 0.56023C15.1876 0.61023 15.9136 0.778231 16.5506 1.02523C17.2106 1.27923 17.7666 1.62323 18.3226 2.17923C18.831 2.67884 19.2244 3.28318 19.4756 3.95023C19.7226 4.58723 19.8906 5.31423 19.9406 6.37823C19.9526 6.64423 19.9626 6.86623 19.9706 7.09023L19.9766 7.28423C19.9943 8.01342 20.002 8.74283 19.9996 9.47223L20.0006 10.2182V11.5282C20.003 12.258 19.9954 12.9877 19.9776 13.7172L19.9716 13.9112C19.9636 14.1352 19.9536 14.3562 19.9416 14.6232C19.8916 15.6872 19.7216 16.4132 19.4756 17.0502C19.2252 17.718 18.8317 18.3228 18.3226 18.8222C17.8225 19.3306 17.2179 19.724 16.5506 19.9752C15.9136 20.2222 15.1876 20.3902 14.1236 20.4402C13.8566 20.4522 13.6356 20.4622 13.4116 20.4702L13.2176 20.4762C12.4881 20.494 11.7583 20.5017 11.0286 20.4992L10.2826 20.5002H8.97358C8.24384 20.5027 7.5141 20.495 6.78458 20.4772L6.59058 20.4712C6.35319 20.4626 6.11585 20.4526 5.87858 20.4412C4.81458 20.3912 4.08858 20.2212 3.45058 19.9752C2.78326 19.7246 2.17881 19.3311 1.67958 18.8222C1.17062 18.3225 0.776801 17.7178 0.525577 17.0502C0.278577 16.4132 0.110577 15.6872 0.0605769 14.6232C0.0494399 14.3859 0.0394398 14.1486 0.030577 13.9112L0.0255771 13.7172C0.00714068 12.9877 -0.00119355 12.258 0.000577001 11.5282V9.47223C-0.00221397 8.74283 0.00512015 8.01343 0.0225771 7.28423L0.029577 7.09023C0.037577 6.86623 0.047577 6.64423 0.059577 6.37823C0.109577 5.31323 0.277577 4.58823 0.524577 3.95023C0.77595 3.28285 1.17054 2.67868 1.68058 2.18023C2.17947 1.67098 2.78354 1.2768 3.45058 1.02523C4.08858 0.778231 4.81358 0.61023 5.87858 0.56023L6.59058 0.53023L6.78458 0.525231C7.51376 0.506803 8.24316 0.498469 8.97258 0.50023L11.0286 0.50123ZM10.0006 5.50123C9.33808 5.49186 8.68033 5.61425 8.06555 5.8613C7.45077 6.10834 6.89122 6.47511 6.41942 6.94029C5.94762 7.40546 5.57298 7.95977 5.31726 8.57099C5.06155 9.18222 4.92987 9.83817 4.92987 10.5007C4.92987 11.1633 5.06155 11.8192 5.31726 12.4305C5.57298 13.0417 5.94762 13.596 6.41942 14.0612C6.89122 14.5264 7.45077 14.8931 8.06555 15.1402C8.68033 15.3872 9.33808 15.5096 10.0006 15.5002C11.3267 15.5002 12.5984 14.9734 13.5361 14.0358C14.4738 13.0981 15.0006 11.8263 15.0006 10.5002C15.0006 9.17415 14.4738 7.90238 13.5361 6.9647C12.5984 6.02701 11.3267 5.50123 10.0006 5.50123ZM10.0006 7.50123C10.3991 7.49389 10.7951 7.56603 11.1654 7.71344C11.5357 7.86085 11.8729 8.08057 12.1574 8.35978C12.4418 8.63898 12.6678 8.97206 12.822 9.33957C12.9763 9.70708 13.0558 10.1016 13.0558 10.5002C13.0559 10.8988 12.9766 11.2934 12.8224 11.6609C12.6683 12.0285 12.4424 12.3617 12.1581 12.641C11.8737 12.9203 11.5366 13.1401 11.1663 13.2876C10.796 13.4352 10.4001 13.5074 10.0016 13.5002C9.20593 13.5002 8.44287 13.1842 7.88026 12.6216C7.31765 12.0589 7.00158 11.2959 7.00158 10.5002C7.00158 9.70458 7.31765 8.94152 7.88026 8.37891C8.44287 7.8163 9.20593 7.50023 10.0016 7.50023L10.0006 7.50123ZM15.2506 4.00123C14.928 4.01414 14.6229 4.15138 14.3992 4.3842C14.1755 4.61702 14.0506 4.92736 14.0506 5.25023C14.0506 5.5731 14.1755 5.88344 14.3992 6.11626C14.6229 6.34908 14.928 6.48632 15.2506 6.49923C15.5821 6.49923 15.9 6.36753 16.1345 6.13311C16.3689 5.89869 16.5006 5.58075 16.5006 5.24923C16.5006 4.91771 16.3689 4.59977 16.1345 4.36535C15.9 4.13093 15.5821 3.99923 15.2506 3.99923V4.00123Z"
                fill="black"
              />
            </svg>
          </p>
          <p className="mt-[12px] text-[14px] text-gray-500">
            2024. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Result
