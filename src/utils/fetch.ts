import { Supplement, SupplementCategory } from './supplements'

export const fetchSupplements = async (): Promise<Supplement[]> => {
  console.log('fetching supplements')
  const dataUrl =
    'https://docs.google.com/spreadsheets/d/e/2PACX-1vTPukIj42aM3jypjz9HrDuGW5k9oKzhNkd2JwfjiPWpuRfU6meIQmPw7XQbPS3CGSsQTKmMTwIQe5GP/pub?gid=54405751&single=true&output=tsv'
  const response = await fetch(dataUrl)
  const data = await response.text()
  const supplements = data
    .split('\n')
    .slice(1)
    .map((row) => {
      const [
        category,
        name,
        brand,
        characteristics,
        price,
        link,
        image,
        description
      ] = row.split('\t')
      return {
        category: category as SupplementCategory,
        name,
        brand,
        characteristics: characteristics.split(' '),
        price: parseInt(price),
        link,
        image,
        description
      }
    })
  return supplements
}
