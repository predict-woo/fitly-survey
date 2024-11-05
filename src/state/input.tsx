import { create } from 'zustand'
import { ReactNode } from 'react'

export type UserInput = {
  name: string
  experience: number
  age: number
  height: number
  weight: number
  style: string
  goal: string
  frequency: string
  duration: string
  time: string
  allergy: string[]
  supplementUsed: string
  supplementUsedType: string[]
  supplementImportance: string[]
  supplementForm: string[]
  price: number
}

type UserInputStore = {
  value: Partial<UserInput>
  setKey: (key: keyof UserInput, value: unknown) => void
}

export const userInputStore = create<UserInputStore>((set) => ({
  value: {},
  setKey: (key: keyof UserInput, value: unknown) =>
    set((state) => ({ value: { ...state.value, [key]: value } }))
}))

export type QuestionType = {
  number: number
  title: ReactNode
  subTitle: string
  input:
    | {
        type: 'text'
        placeholder: string
      }
    | {
        type: 'number'
        placeholder: string
        suffix?: string
      }
    | {
        type: 'select'
        options: string[]
      }
    | {
        type: 'slider'
        min: number
        max: number
        value: number
      }
    | {
        type: 'checkbox'
        options: string[]
      }
  key: keyof UserInput
  validation?: (value: any) => boolean
}

export const questions: QuestionType[] = [
  {
    number: 1,
    title: '이름을 입력해주세요',
    subTitle: '결과페이지에 작성될 이름이에요!',
    input: {
      type: 'text',
      placeholder: '홍길동'
    },
    key: 'name',
    validation: (value: string) => /^[가-힣]{2,5}$/.test(value)
  },
  {
    number: 2,
    title: (
      <span>
        운동하신 경력은
        <br />몇 년정도 되었나요?
      </span>
    ),
    subTitle: '숫자만 입력해주세요',
    input: {
      type: 'number',
      placeholder: 'N 년',
      suffix: '년'
    },
    key: 'experience',
    validation: (value: number) => value >= 0 && value < 50
  },
  {
    number: 3,
    title: '나이를 입력해주세요',
    subTitle: '숫자만 입력해주세요',
    input: {
      type: 'number',
      placeholder: '만 N살',
      suffix: '살'
    },
    key: 'age',
    validation: (value: number) => value > 10 && value < 90
  },
  {
    number: 4,
    title: '키를 입력해주세요',
    subTitle: '정수로 입력해주세요',
    input: {
      type: 'number',
      placeholder: '160 CM',
      suffix: 'CM'
    },
    key: 'height',
    validation: (value: number) => value > 100 && value < 250
  },
  {
    number: 5,
    title: '몸무게를 입력해주세요',
    subTitle: '정수로 입력해주세요',
    input: {
      type: 'number',
      placeholder: '60 KG',
      suffix: 'KG'
    },
    key: 'weight',
    validation: (value: number) => value > 10 && value < 250
  },
  {
    number: 6,
    title: (
      <span>
        주로 운동하시는
        <br />
        스타일은 무엇인가요?
      </span>
    ),
    subTitle: '하나만 선택해주세요',
    input: {
      type: 'select',
      options: ['보디빌딩', '파워리프팅', '파워빌딩']
    },
    key: 'style'
  },
  {
    number: 7,
    title: (
      <span>
        지금까지 사용해본 피트니스
        <br />
        보조제나 영양제가 있나요?
      </span>
    ),
    subTitle: '하나만 선택해주세요',
    input: {
      type: 'select',
      options: ['있음', '없음']
    },
    key: 'supplementUsed'
  },
  {
    number: 8,
    title: (
      <span>
        사용해본 경우,
        <br />
        어떤 제품을 사용하셨나요?
      </span>
    ),
    subTitle: '복수 선택 가능',
    input: {
      type: 'checkbox',
      options: [
        '프로틴 파우더',
        '부스터',
        '크레아틴',
        '아르기닌',
        '비타민/미네랄'
      ]
    },
    key: 'supplementUsedType'
  },
  {
    number: 9,
    title: (
      <span>
        현재 운동 목표는
        <br />
        무엇인가요?
      </span>
    ),
    subTitle: '하나만 선택해주세요',
    input: {
      type: 'select',
      options: ['증량 (벌크업)', '감량 (대회, 바디프로필 포함)', '유지']
    },
    key: 'goal'
  },
  {
    number: 10,
    title: (
      <span>
        평균 일주일 간
        <br />
        운동 횟수는 어느정도인가요?
      </span>
    ),
    subTitle: '하나만 선택해주세요',
    input: {
      type: 'select',
      options: ['0~2회', '3~5회', '6~7회']
    },
    key: 'frequency'
  },
  {
    number: 11,
    title: (
      <span>
        한 번 운동하면
        <br />
        평균적으로 얼마나 하시나요?
      </span>
    ),
    subTitle: '하나만 선택해주세요',
    input: {
      type: 'select',
      options: [
        '30분 미만',
        '30분~1시간',
        '1시간~1시간 30분',
        '1시간 30분 이상'
      ]
    },
    key: 'duration'
  },
  {
    number: 12,
    title: (
      <span>
        평균적으로 운동하시는
        <br />
        시간대는 언제인가요?
      </span>
    ),
    subTitle: '하나만 선택해주세요',
    input: {
      type: 'select',
      options: ['새벽', '아침', '오후', '저녁', '늦은 밤']
    },
    key: 'time'
  },
  {
    number: 14,
    title: (
      <span>
        피트니스 보조제에서
        <br />
        중요하게 생각하는 요소는 무엇인가요?
      </span>
    ),
    subTitle: '복수 선택 가능',
    input: {
      type: 'checkbox',
      options: ['맛', '효과', '가격', '브랜드', '성분의 안전성']
    },
    key: 'supplementImportance'
  },
  {
    number: 15,
    title: (
      <span>
        현재 겪고 있는
        <br />
        부작용이 있나요?
      </span>
    ),
    subTitle: '복수 선택 가능',
    input: {
      type: 'checkbox',
      options: [
        '없음',
        '유당 불내증',
        '글루텐 불내증',
        '특정 식품 알레르기 (예, 견과류, 해산물 등)',
        '카페인 민감성'
      ]
    },
    key: 'allergy'
  },
  {
    number: 15,
    title: (
      <span>
        선호하시는 영양제∙보조제의
        <br />
        제형이 있으신가요?
      </span>
    ),
    subTitle: '복수 선택 가능',
    input: {
      type: 'checkbox',
      options: ['알약 형태', '액상 형태', '파우더 형태']
    },
    key: 'supplementForm'
  },
  {
    number: 16,
    title: (
      <span>
        추천받고 싶은 영양제·보조제의
        <br />
        가격대는 어느정도가 좋을까요?
      </span>
    ),
    subTitle: '선택하신 가격대에 맞는 제품을 추천해드려요!',
    input: {
      type: 'slider',
      min: 1,
      max: 15,
      value: 7
    },
    key: 'price'
  }
]

export default questions
