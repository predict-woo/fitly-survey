import { useState } from 'react'

const PreRegistration = ({
  onSubmit
}: {
  onSubmit: (email: string) => void
}) => {
  const [email, setEmail] = useState('')

  return (
    <div className="w-full">
      <h1 className="text-[24px] font-medium text-[#232323]">
        새로운 피트니스 커머스, <br />
        <span className="font-bold text-[#FF6100]">FITLY 사전신청 시작</span>
      </h1>
      <p className="mb-[56px] mt-[32px] text-[16px] text-[#232323]">
        추후에 앱이 런칭되면 입력해주신 <br />
        메일로 알림을 드려요.
        <br />
        <br />그 외의 재밌고 유익한
        <br />
        피트니스 소식과 정보를 제공해드립니다 :)
      </p>
      <div className="flex w-full gap-[16px] ">
        <input
          type="email"
          placeholder="이메일을 입력해주세요"
          className="w-full rounded-none border-b border-black outline-none focus:outline-none"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button
          className="whitespace-nowrap rounded-md border border-black px-4 py-2 text-[14px] font-semibold"
          onClick={() => onSubmit(email)}
        >
          알림 신청하기
        </button>
      </div>
    </div>
  )
}

export default PreRegistration
