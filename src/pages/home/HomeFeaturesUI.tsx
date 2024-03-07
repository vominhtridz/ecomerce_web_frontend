import { useMyContext } from "../../context/context"
import { HomegeatureType } from "../../typescript/HomeType"
export function HomeFeaturesUI() {
  const { language } = useMyContext()
  return language.center.homeFeatures.map(
    (Homegeature: HomegeatureType, index: number) => {
      return (
        <nav
          key={index}
          className='justify-between  text-left flex items-center '
        >
          <span className='text-[20px] font-semibold whitespace-nowrap'>
            {Homegeature.title.yours}
            <br />
            <strong className='uppercase text-2xl font-bold text-orange-600'>
              {Homegeature.title.percent}
              <br />
              {Homegeature.title.percent_db}
            </strong>
            <br />
            {Homegeature.title.who}
            <br />
            {Homegeature.title.end}
            <br />
            <strong className='text-black  font-bold'>
              {Homegeature.title.work}
            </strong>
          </span>
          <img
            src={Homegeature.img}
            style={{ maxWidth: undefined }}
            className=''
            alt='Homegeature'
          />
        </nav>
      )
    },
  )
}
