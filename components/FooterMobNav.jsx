import { BiHomeHeart } from 'react-icons/bi'
import { HiOutlineViewGrid } from 'react-icons/hi'
import { PiChats } from 'react-icons/pi'
import { CiGrid42 } from 'react-icons/ci'
import { MdChecklist } from 'react-icons/md'

const FooterMobNav = () => {
  return (
    <div className='mob_footer'>
        <CiGrid42/>
        <HiOutlineViewGrid/>
        <BiHomeHeart/>
        <PiChats/>
        <MdChecklist/>
    </div>
  )
}

export default FooterMobNav;