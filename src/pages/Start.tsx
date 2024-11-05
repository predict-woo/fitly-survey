import { Link } from 'wouter'
import Marquee from 'react-fast-marquee'
import Title from 'components/Title'

function Start() {
  return (
    <div className="flex size-full flex-col items-center justify-between pt-[50px]">
      <Title />
      <div className="fixed bottom-[90px] left-0 z-0 w-full text-[#636363]">
        <Marquee className="border-t border-[#DADADA] py-[20px]">
          <span className="text-[25px]">
            #Protein 프로틴 #BCAA 아미노산 #Booster 부스터 #Creatine 크레아틴
            #Gainer 게이너 #Vitamin 비타민 #Omega 3 오메가 3 #Beta-alanine
            베타알라닌
          </span>
        </Marquee>
        <Marquee
          className="border-t border-[#DADADA] py-[20px]"
          direction="right"
          speed={60}
        >
          <span className="text-[25px]">
            #Protein 프로틴 #BCAA 아미노산 #Booster 부스터 #Creatine 크레아틴
            #Gainer 게이너 #Vitamin 비타민 #Omega 3 오메가 3 #Beta-alanine
            베타알라닌
          </span>
        </Marquee>
        <Marquee className="border-t border-[#DADADA] py-[20px]" speed={70}>
          <span className="text-[25px]">
            #Protein 프로틴 #BCAA 아미노산 #Booster 부스터 #Creatine 크레아틴
            #Gainer 게이너 #Vitamin 비타민 #Omega 3 오메가 3 #Beta-alanine
            베타알라닌
          </span>
        </Marquee>
        <Marquee
          className="border-y border-[#DADADA] py-[20px]"
          direction="right"
          speed={90}
        >
          <span className="text-[25px]">
            #Protein 프로틴 #BCAA 아미노산 #Booster 부스터 #Creatine 크레아틴
            #Gainer 게이너 #Vitamin 비타민 #Omega 3 오메가 3 #Beta-alanine
            베타알라닌
          </span>
        </Marquee>
      </div>

      <Link href="/survey" className="z-10">
        <button className="mb-[30px] h-[50px] w-[273px] rounded-full bg-primary px-[14px] py-[10px] text-[16px] text-white shadow-[0px_1px_14px_rgba(0,0,0,0.25)]">
          제품 추천받으러 가기
        </button>
      </Link>
    </div>
  )
}

export default Start
