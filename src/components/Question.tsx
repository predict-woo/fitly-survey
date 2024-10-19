import { ReactNode } from 'react'

const Question = ({
  number,
  title,
  subTitle
}: {
  number: number
  title: ReactNode
  subTitle: string
}) => {
  return (
    <div className="flex flex-col items-center justify-center gap-[32px]">
      <h1 className="text-[32px] font-medium">Q{number}.</h1>
      <div className="flex flex-col items-center justify-center gap-[8px]">
        <h1 className="text-center text-[20px] font-bold">{title}</h1>
        <p className="text-center text-[14px] text-gray-400">{subTitle}</p>
      </div>
    </div>
  )
}

export default Question
