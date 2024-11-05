import { UserInput } from 'state/input'

export type SupplementCategory =
  | '크레아틴'
  | 'WPI'
  | '웨이프로틴'
  | '아르기닌'
  | '부스터'
  | '탄수화물 보충제/게이너'
  | '글루타민'
  | '오메가3'
  | '수용성, 종합비타민'
  | '판크레아틴'
  | '베타알라닌'

export type Supplement = {
  category: SupplementCategory
  name: string
  brand: string
  characteristics: string[]
  price: number
  link: string
  image: string
  description: string
}

const cuttingSupplements: SupplementCategory[] = [
  '부스터',
  '아르기닌',
  '글루타민',
  '웨이프로틴',
  '수용성, 종합비타민',
  '오메가3'
]

const bulkingSupplements: SupplementCategory[] = [
  '웨이프로틴',
  '크레아틴',
  '오메가3',
  '수용성, 종합비타민',
  '글루타민',
  '부스터',
  '오메가3',
  '웨이프로틴'
]

const maintenanceSupplements: SupplementCategory[] = [
  '웨이프로틴',
  '크레아틴',
  '오메가3',
  '수용성, 종합비타민',
  '글루타민',
  '부스터',
  '오메가3'
]

export const getSupplements = (
  supplements: Supplement[],
  userInput: UserInput
): Supplement[] => {
  // supplementUsed Point System

  // [
  //   '프로틴 파우더',
  //   '부스터',
  //   '크레아틴',
  //   '아르기닌',
  //   '비타민/미네랄'
  // ]

  const supplementUsedPoints: number[] = supplements.map((supplement) => {
    switch (supplement.category) {
      case '웨이프로틴':
        return userInput.supplementUsedType.includes('프로틴 파우더') ? 1 : 0
      case '부스터':
        return userInput.supplementUsedType.includes('부스터') ? 1 : 0
      case '크레아틴':
        return userInput.supplementUsedType.includes('크레아틴') ? 1 : 0
      case '아르기닌':
        return userInput.supplementUsedType.includes('아르기닌') ? 1 : 0
      case '수용성, 종합비타민':
        return userInput.supplementUsedType.includes('비타민/미네랄') ? 1 : 0
    }
    return 0
  })

  // Goal Point System

  // ['증량 (벌크업)', '감량 (대회, 바디프로필 포함)', '유지']
  const goalPoints: number[] = supplements.map((supplement) => {
    switch (userInput.goal) {
      case '감량 (대회, 바디프로필 포함)':
        return cuttingSupplements.includes(supplement.category) ? 1 : 0
      case '증량 (벌크업)':
        return bulkingSupplements.includes(supplement.category) ? 1 : 0
      case '유지':
        return maintenanceSupplements.includes(supplement.category) ? 1 : 0
    }
    return 0
  })

  // Frequency Point System

  // [('0~2회', '3~5회', '6~7회')]
  const frequencyPoints = supplements.map((supplement) => {
    if (userInput.frequency === '0~2회') {
      if (['유지', '증량 (벌크업)'].includes(userInput.goal)) {
        return ['부스터'].includes(supplement.category) ? 1 : 0
      }
      if (['감량 (대회, 바디프로필 포함)'].includes(userInput.goal)) {
        return ['웨이프로틴'].includes(supplement.category) ? 1 : 0
      }
    } else {
      return ['글루타민', '아르기닌'].includes(supplement.category) ? 1 : 0
    }
    return 0
  })

  // Duration Point System

  // [('30분 미만', '30분~1시간', '1시간~1시간 30분', '1시간 30분 이상')]

  // 30분 미만 : 펌프 무카페인 !베타알라닌
  // 30분~1시간 : 펌프 무카페인 약한 카페인 !베타알라닌

  // 1시간 ~ 1시간 30분 : 지구력 고카페인
  // 1시간 30분 이상 : 지구력 고카페인

  const durationPoints: number[] = supplements.map((supplement) => {
    switch (userInput.duration) {
      case '30분 미만':
        return ['펌프', '무카페인', '베타알라닌']
          .map((characteristic) =>
            supplement.characteristics.includes(characteristic)
          )
          .reduce((acc, curr) => acc + (curr ? 1 : 0), 0)
      case '30분~1시간':
        return ['펌프', '무카페인', '약한 카페인', '베타알라닌']
          .map((characteristic) =>
            supplement.characteristics.includes(characteristic)
          )
          .reduce((acc, curr) => acc + (curr ? 1 : 0), 0)
      case '1시간~1시간 30분':
        return ['지구력', '고카페인']
          .map((characteristic) =>
            supplement.characteristics.includes(characteristic)
          )
          .reduce((acc, curr) => acc + (curr ? 1 : 0), 0)
      case '1시간 30분 이상':
        return ['지구력', '고카페인']
          .map((characteristic) =>
            supplement.characteristics.includes(characteristic)
          )
          .reduce((acc, curr) => acc + (curr ? 1 : 0), 0)
    }
    return 0
  })

  // Time Point System

  // 새벽 (공복) : 지구력 약한 카페인 !카보린
  // 아침 : 카페인 안정 고카페인 !판크레아틴 (소화효소)
  // !비타민
  // 오후 : 약한 카페인 !글루타민 !판크레아틴
  // 저녁 : 펌핑 무카페인 아르기닌
  // 늦은 밤 : 펌핑 무카페인 아르기닌
  const timePoints: number[] = supplements.map((supplement) => {
    switch (userInput.time) {
      case '새벽':
        return ['지구력', '약한 카페인', '카보린']
          .map((characteristic) =>
            supplement.characteristics.includes(characteristic)
          )
          .reduce((acc, curr) => acc + (curr ? 1 : 0), 0)
      case '아침':
        return ['카페인 안정', '고카페인', '판크레아틴', '비타민']
          .map((characteristic) =>
            supplement.characteristics.includes(characteristic)
          )
          .reduce((acc, curr) => acc + (curr ? 1 : 0), 0)
      case '오후':
        return ['약한 카페인', '글루타민', '판크레아틴']
          .map((characteristic) =>
            supplement.characteristics.includes(characteristic)
          )
          .reduce((acc, curr) => acc + (curr ? 1 : 0), 0)
      case '저녁':
        return ['펌핑', '무카페인', '아르기닌']
          .map((characteristic) =>
            supplement.characteristics.includes(characteristic)
          )
          .reduce((acc, curr) => acc + (curr ? 1 : 0), 0)
      case '늦은 밤':
        return ['펌핑', '무카페인', '아르기닌']
          .map((characteristic) =>
            supplement.characteristics.includes(characteristic)
          )
          .reduce((acc, curr) => acc + (curr ? 1 : 0), 0)
    }
    return 0
  })

  // SupplementImportance Point System
  // 맛 -> 맛
  // 효과, 브랜드, 성분의 안전성 -> 품질
  // 가격 -> 가성비

  const supplementImportancePoints: number[] = supplements.map((supplement) =>
    userInput.supplementImportance
      .map((importance): number => {
        if (
          ['맛'].includes(importance) &&
          supplement.characteristics.includes('맛')
        ) {
          return 1
        }
        if (
          ['효과', '브랜드', '성분의 안전성'].includes(importance) &&
          supplement.characteristics.includes('품질')
        ) {
          return 1
        }
        if (
          ['가격'].includes(importance) &&
          supplement.characteristics.includes('가성비')
        ) {
          return 1
        }
        return 0
      })
      .reduce((acc, curr) => acc + curr, 0)
  )

  const allergyPoints: number[] = supplements.map((supplement) =>
    userInput.allergy
      .map((allergy): number => {
        switch (allergy) {
          case '카페인 민감성':
            return supplement.characteristics.includes('무카페인') ? 1 : 0
          case '글루텐 불내증':
            if (supplement.characteristics.includes('글루텐 프리')) {
              return 1
            } else if (supplement.characteristics.includes('글루텐')) {
              return -1
            }
            return 0
          default:
            return 0
        }
      })
      .reduce((acc, curr) => acc + curr, 0)
  )

  const formPoints: number[] = supplements.map((supplement) =>
    userInput.supplementForm
      .map((form): number => {
        switch (form) {
          case '알약 형태':
            return supplement.characteristics.includes('알약') ? 1 : 0
          case '액상 형태':
            return supplement.characteristics.includes('액상') ? 1 : 0
          case '파우더 형태':
            return supplement.characteristics.includes('파우더') ? 1 : 0
          default:
            return 0
        }
      })
      .reduce((acc, curr) => acc + curr, 0)
  )

  const pricePoints: number[] = supplements.map((supplement) => {
    return Math.abs(supplement.price - userInput.price) / 30000
  })

  console.log('supplementUsedPoints', supplementUsedPoints)
  console.log('goalPoints', goalPoints)
  console.log('frequencyPoints', frequencyPoints)
  console.log('durationPoints', durationPoints)
  console.log('timePoints', timePoints)
  console.log('supplementImportancePoints', supplementImportancePoints)
  console.log('allergyPoints', allergyPoints)
  console.log('formPoints', formPoints)
  console.log('pricePoints', pricePoints)

  const totalPoints = supplements.map((supplement, index) => {
    return (
      supplementUsedPoints[index] * 1 +
      goalPoints[index] * 0.1 +
      frequencyPoints[index] * 0.1 +
      durationPoints[index] * 0.1 +
      timePoints[index] * 0.1 +
      supplementImportancePoints[index] * 0.1 +
      allergyPoints[index] * 10 +
      formPoints[index] * 1 +
      pricePoints[index] * 0.1
    )
  })

  // sort supplements by totalPoints
  const sortedSupplements: Supplement[] = supplements
    .map((supplement, index) => {
      return {
        ...supplement,
        totalPoints: totalPoints[index]
      }
    })
    .sort((a, b) => b.totalPoints - a.totalPoints)

  return sortedSupplements
}
