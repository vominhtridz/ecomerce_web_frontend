import { FC } from "react"

import LicenseUi from "./LicenseUi"
import NavLinkUI from "./NavLinkUi"
import LinkInformation from "./LinkInformation"
const Footer: FC = () => {
  return (
    <footer
      className=' bg-black w-full max-lg:flex-col py-6 
    flex-row  max-lg:justify-center justify-between
     pb-10 flex  text-slate-400 max-md:p-1   px-6 overflow-hidden '
    >
      <section className='left '>
        <NavLinkUI />
        <LicenseUi />
        <div className='p-2 my-6 mx-2 border-2 text-[11px] border-solid border-slate-100 w-full'>
          <p className=''>
            *These statements have not been evaluated by the Food and Drug Administration.
          </p>
          <p className=''>
            These products are not intended to diagnose, treat, cure or prevent any
            disease.
          </p>
        </div>
        <span className='text-xl'>Copyright © 2021 All Rights Reserved</span>
      </section>
      {/* right */}
      <LinkInformation />
    </footer>
  )
}
export default Footer
