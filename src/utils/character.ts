import { UserInput } from 'state/input'

export type Character = {
  name: string
  role: string
  image?: string
  characteristics: string
  specialExercises: string[]
}

const characters: Character[] = [
  {
    name: '스퀴트 (Squatty)',
    role: '하체 운동 마스터',
    characteristics:
      '작은 고양이 캐릭터로, 주로 스쿼트를 즐긴다. 단단한 허벅지와 귀여운 꼬리가 특징이며, 큰 눈으로 항상 열정을 불태우는 듯한 표정을 짓는다. 작지만 강한 이미지를 가지고 있다.',
    specialExercises: ['스쿼트', '런지']
  },
  {
    name: '벤지 (Benji)',
    role: '벤치프레스 챔피언',
    characteristics:
      '작은 곰 캐릭터로, 벤치프레스에서 누구보다 힘을 자랑한다. 언제나 미소를 띠고 있으며, 귀여운 덤벨을 들고 다닌다. 조금 둥글둥글한 체형이지만 힘이 강하다.',
    specialExercises: ['벤치프레스', '체스트 프레스']
  },
  {
    name: '데디 (Deady)',
    role: '데드리프트 전문가',
    characteristics:
      '근육이 단단한 작은 판다 캐릭터. 데드리프트를 통해 튼튼한 허리와 팔을 자랑한다. 귀여운 외모와 달리 무거운 바벨을 쉽게 들어 올린다. 항상 허리 보호대를 착용하고 있다.',
    specialExercises: ['데드리프트', '풀업']
  },
  {
    name: '큐티 프레스 (Cutie Press)',
    role: '어깨와 팔 운동 마스터',
    characteristics:
      '귀여운 다람쥐 캐릭터로, 어깨 운동을 가장 좋아한다. 작은 덤벨을 양손에 들고 다양한 프레스 운동을 즐기며, 동그란 눈과 풍성한 꼬리가 매력적이다. 귀엽지만 어깨가 발달한 모습이 특징이다.',
    specialExercises: ['숄더 프레스', '덤벨 래터럴 레이즈']
  },
  {
    name: '풀리 (Pulley)',
    role: '케이블 머신 마니아',
    characteristics:
      '작은 원숭이 캐릭터로, 케이블 머신을 이용한 풀다운과 로우 동작을 즐긴다. 긴 팔을 사용해 다양한 케이블 동작을 소화하며, 귀여운 표정과 빠른 움직임이 매력 포인트다.',
    specialExercises: ['케이블 풀다운', '시티드 로우']
  },
  {
    name: '리프티 (Lifty)',
    role: '전신 운동 전문가',
    characteristics:
      '작은 호랑이 캐릭터로, 전신을 활용한 복합 운동을 즐긴다. 힘찬 으르렁거림을 자주 표현하며, 다양한 기구를 사용하는데 익숙하다. 작고 귀여운 외모와 반대로 강한 모습을 자랑한다.',
    specialExercises: ['클린 앤 저크', '스내치']
  },
  {
    name: '슬램피 (Slampy)',
    role: '운동 전문가',
    characteristics:
      '튼튼한 바위 모양의 작은 거북이 캐릭터로, 메디신 볼을 이용한 강렬한 슬램 운동을 자랑한다. 무겁고 둥글둥글한 외모에 비해 빠른 반응과 강한 힘을 발휘하며, 던지고 치는 운동에 집중하는 모습이 인상적이다. 언제나 무거운 메디신 볼을 등에 짊어지고 다닌다.',
    specialExercises: ['메디신 볼 슬램', '월 볼']
  },
  {
    name: '플랭키 (Planky)',
    role: '코어 운동 전문가',
    characteristics:
      '부드러운 몸을 가진 작은 거북이 캐릭터로, 균형감과 집중력을 자랑한다. 늘 플랭크 자세를 유지하는 듯한 강한 코어 근육을 가졌으며, 느긋하면서도 단단한 모습을 보여준다.',
    specialExercises: ['플랭크', '롤아웃']
  },
  {
    name: '크로니 (Chrony)',
    role: '복근 운동 마스터',
    characteristics:
      '작고 귀여운 다람쥐 캐릭터로, 복근 운동의 달인이다. 항상 작은 매트 위에서 복근 운동을 하고 있으며, 빠르게 일어났다 눕기를 반복하는 모습이 활기차다. 미소를 잃지 않으며 모든 복근 동작을 완벽하게 소화하는 유연성을 자랑한다.',
    specialExercises: ['크런치', '레그 레이즈']
  }
]

type CharacterAttributes = {
  character: Character
  styles: string[]
  goals: string[]
  preferredFrequency: string[]
}

const characterAttributes: CharacterAttributes[] = [
  {
    character: characters[0],
    styles: ['파워리프팅', '파워빌딩'],
    goals: ['증량 (벌크업)', '유지'],
    preferredFrequency: ['3~5회', '6~7회']
  },
  {
    character: characters[1],
    styles: ['파워리프팅', '파워빌딩'],
    goals: ['증량 (벌크업)'],
    preferredFrequency: ['3~5회', '6~7회']
  },
  {
    character: characters[2],
    styles: ['파워리프팅'],
    goals: ['증량 (벌크업)'],
    preferredFrequency: ['3~5회', '6~7회']
  },
  {
    character: characters[3],
    styles: ['보디빌딩'],
    goals: ['감량 (대회, 바디프로필 포함)', '유지'],
    preferredFrequency: ['3~5회', '6~7회']
  },
  {
    character: characters[4],
    styles: ['보디빌딩'],
    goals: ['감량 (대회, 바디프로필 포함)', '유지'],
    preferredFrequency: ['3~5회', '6~7회']
  },
  {
    character: characters[5],
    styles: ['파워빌딩'],
    goals: ['증량 (벌크업)'],
    preferredFrequency: ['3~5회', '6~7회']
  },
  {
    character: characters[6],
    styles: ['보디빌딩', '파워빌딩'],
    goals: ['유지'],
    preferredFrequency: ['0~2회', '3~5회']
  },
  {
    character: characters[7],
    styles: ['보디빌딩'],
    goals: ['감량 (대회, 바디프로필 포함)'],
    preferredFrequency: ['0~2회', '3~5회']
  },
  {
    character: characters[8],
    styles: ['보디빌딩'],
    goals: ['감량 (대회, 바디프로필 포함)'],
    preferredFrequency: ['0~2회', '3~5회']
  }
]

function getCharacter(userInput: Partial<UserInput>): Character {
  // Initialize character scores
  const characterScores: { [key: string]: number } = {}

  characterAttributes.forEach((charAttr) => {
    let score = 0

    // Style matching
    if (userInput.style && charAttr.styles.includes(userInput.style)) {
      score += 2
      console.log('style matching')
    }

    // Goal matching
    if (userInput.goal && charAttr.goals.includes(userInput.goal)) {
      score += 2
    }

    // Frequency matching
    if (
      userInput.frequency &&
      charAttr.preferredFrequency.includes(userInput.frequency)
    ) {
      score += 1
    }

    // Experience matching
    if (userInput.experience !== undefined) {
      if (userInput.experience >= 3) {
        score += 1
      }
    }

    // Other possible matchings can be added here

    // Store the score
    characterScores[charAttr.character.name] = score
  })

  console.log(characterScores)

  // Now, find the character with the highest score

  let maxScore = -1
  let selectedCharacter: Character = characters[0] // Default character

  for (const charAttr of characterAttributes) {
    const score = characterScores[charAttr.character.name]

    if (score > maxScore) {
      maxScore = score
      selectedCharacter = charAttr.character
    }
  }

  // Return the selected character

  return selectedCharacter
}

export { getCharacter }
