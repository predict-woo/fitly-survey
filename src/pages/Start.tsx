import { Link } from 'wouter'
import Marquee from 'react-fast-marquee'
import Title from 'components/Title'

function Start() {
  return (
    <div className="flex size-full flex-col items-center justify-between pt-[50px] font-sans font-normal">
      <Title />
      <div className="fixed bottom-[75px] left-0 z-0 w-full text-[20px] text-[#636363]">
        <Marquee className="border-t border-[#DADADA] py-[12px]">
          <span>
            #Protein 프로틴 #BCAA 아미노산 #Booster 부스터 #Creatine 크레아틴
            #Gainer 게이너 #Vitamin 비타민 #Omega 3 오메가 3 #Beta-alanine
            베타알라닌
          </span>
        </Marquee>
        <Marquee
          className="border-t border-[#DADADA] py-[12px]"
          direction="right"
          speed={60}
        >
          <span>
            #Protein 프로틴 #BCAA 아미노산 #Booster 부스터 #Creatine 크레아틴
            #Gainer 게이너 #Vitamin 비타민 #Omega 3 오메가 3 #Beta-alanine
            베타알라닌
          </span>
        </Marquee>
        <Marquee className="border-t border-[#DADADA] py-[12px]" speed={70}>
          <span>
            #Protein 프로틴 #BCAA 아미노산 #Booster 부스터 #Creatine 크레아틴
            #Gainer 게이너 #Vitamin 비타민 #Omega 3 오메가 3 #Beta-alanine
            베타알라닌
          </span>
        </Marquee>
        <Marquee
          className="border-y border-[#DADADA] py-[12px]"
          direction="right"
          speed={90}
        >
          <span>
            #Protein 프로틴 #BCAA 아미노산 #Booster 부스터 #Creatine 크레아틴
            #Gainer 게이너 #Vitamin 비타민 #Omega 3 오메가 3 #Beta-alanine
            베타알라닌
          </span>
        </Marquee>
      </div>

      <div className="fixed bottom-[57px] flex w-full justify-center">
        <Link href="/survey" className="z-10">
          <button className="h-[50px] w-[273px] rounded-full bg-primary px-[14px] py-[10px] text-[16px] text-white shadow-[0px_1px_14px_rgba(0,0,0,0.25)]">
            제품 추천받으러 가기
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Start
