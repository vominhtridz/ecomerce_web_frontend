const Days = Array.from({ length: 31 }, (_, i) => i + 1)
const Years = Array.from({ length: 100 }, (_, i) => new Date().getFullYear() - i)
const Month = Array.from({ length: 12 }, (_, i) => i + 1)
export const getDay = Days.map((day, index) => {
  return (
    <option key={index} value={day}>
      {day}
    </option>
  )
})

export const getYear = Years.map((year, index) => (
  <option key={index} value={year}>
    {year}
  </option>
))

export const getMonth = Month.map((month, index) => (
  <option key={index} value={month}>
    {month}
  </option>
))
