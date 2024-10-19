import { Link } from 'wouter'

function Start() {
  return (
    <div className="flex size-full flex-col items-center justify-between">
      <div className="text-center">
        <h1 className="mb-1 mt-32 text-2xl font-bold">더 강한 나를 위한</h1>
        <h1 className="text-2xl font-bold">피트니스 제품 추천받기</h1>
        <p className="mt-6 text-gray-400">
          내 취향과 목표에 맞는
          <br />
          피트니스 제품을 추천받을 수 있어요
        </p>
      </div>

      <div className="mt-10 flex h-40 w-full items-center justify-center bg-gray-100">
        <span className="text-lg text-gray-600">3D 아이콘 입력</span>
      </div>

      <Link href="/survey" className="w-[343px]">
        <button className="my-10 w-full rounded-lg bg-primary px-6 py-4 text-white">
          제품 추천받으러 가기
        </button>
      </Link>
    </div>
  )
}

export default Start
