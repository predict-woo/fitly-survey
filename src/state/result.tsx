import { Character } from 'utils/character'
import { Supplement } from 'utils/supplements'
import { create } from 'zustand'

type ResultStore = {
  character: Character
  supplements: Supplement[]
  setSupplements: (supplements: Supplement[]) => void
  setCharacter: (character: Character) => void
}

export const resultStore = create<ResultStore>((set) => ({
  supplements: [],
  character: {
    name: '',
    role: '',
    characteristics: '',
    specialExercises: []
  },
  setSupplements: (supplements: Supplement[]) => set({ supplements }),
  setCharacter: (character: Character) => set({ character })
}))
