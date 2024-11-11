import { useState } from 'react'
import StarRateRoundedIcon from '@mui/icons-material/StarRateRounded'

export type ReviewInfo = {
  star: number
  review: string
}

const Review = ({
  onSubmit
}: {
  onSubmit: (star: number, review: string) => void
}) => {
  const [star, setStar] = useState(0)
  const [review, setReview] = useState('')
  return (
    <div className="flex w-full flex-col gap-[20px]">
      <div className="flex flex-col items-center gap-[8px]">
        <h1 className="text-[18px] font-bold text-[#232323]">
          추천은 어떠셨나요?
        </h1>
        <div className="flex items-center gap-2 text-[42px]">
          {Array.from({ length: 5 }).map((_, index) => (
            <StarRateRoundedIcon
              key={index}
              className={`${
                star >= index ? 'text-[#FFCC34]' : 'text-gray-200'
              } cursor-pointer`}
              fontSize="inherit"
              onClick={() => setStar(index)}
            />
          ))}
        </div>
        <textarea
          placeholder="자유로운 의견을 남겨주세요! 저희에게 큰 도움과 힘이 됩니다"
          className="h-[250px] w-full rounded-lg border-none bg-[#F2F2F2] p-[24px]"
          value={review}
          onChange={(e) => setReview(e.target.value)}
        />
      </div>
      <button
        onClick={() => onSubmit(star, review)}
        className="rounded-[12px] bg-primary px-[10px] py-[14px] font-[16px] font-medium text-white"
      >
        제출하기
      </button>
    </div>
  )
}

export default Review
