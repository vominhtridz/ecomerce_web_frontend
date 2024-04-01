import { Star } from "../../../../images/centerIcons"
import { NoStar } from "../../../../images/centerIcons"
const FiveStar = Array.from({ length: 5 }, (_, i) => i + 1)

export const getFiveStar = FiveStar.map(index => {
  return <div key={index}>{Star}</div>
})
export const getFourStar = FiveStar.map(index => {
  if (index < 5) return <div key={index}>{Star}</div>
  return <div key={index}>{NoStar}</div>
})
export const getThreeStar = FiveStar.map(index => {
  if (index < 4) return <div key={index}>{Star}</div>
  return <div key={index}>{NoStar}</div>
})
export const getTwoStar = FiveStar.map(index => {
  if (index < 3) return <div key={index}>{Star}</div>
  return <div key={index}>{NoStar}</div>
})
export const getOneStar = FiveStar.map(index => {
  if (index < 2) return <div key={index}>{Star}</div>

  return <div key={index}>{NoStar}</div>
})
