import { IoMdClose } from "react-icons/io";

import { Link } from 'react-router-dom'

const Nav1 = ({change}) => {
    
    
  return (
    <div className='w-full p-2 pl-7  flex flex-col gap-2 text-2xl text-white bg-black z-50 absolute top-0 left-0 h-[100vh]'>
        <span onClick={()=>change(false)} className='self-end cursor-pointer'><IoMdClose />
 </span>
        <Link to='/store' onClick={()=>change(false)}>Store</Link>
        <Link to='/mac' onClick={()=>change(false)}>Mac</Link>
        <Link to='/ipad' onClick={()=>change(false)}>iPad</Link>
        <Link to='/iphone' onClick={()=>change(false)}>iPhone</Link>
        <Link to='/watch' onClick={()=>change(false)}>Watch</Link>
        <Link to='/airpods' onClick={()=>change(false)}>AirPods</Link>
        <Link to='/tvHome'  onClick={()=>change(false)}>TV & Home</Link>
        <Link to='/entertainment' onClick={()=>change(false)}>Entertainment</Link>
        <Link to='/accessories' onClick={()=>change(false)}>Accessories</Link>
        <Link to='/support' onClick={()=>change(false)}>Support</Link>
    </div>
  )
}

export default Nav1