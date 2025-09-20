import { useState } from "react"
import Swal from 'sweetalert2'


const Button = ({val:[one,two,abs]}) => {
  const handleAlert = ()=>{
   Swal.fire({
  title: "Oops! Feature Coming Soon ",
  width: '90%',
  padding: "3em",
  color: "#1E3A8A",
  background: "linear-gradient(135deg, #F472B6 0%, #6366F1 100%) url('/gear.gif') no-repeat top center / cover",
  backdrop: `
    rgba(0,0,0,0.8)
    left top
    no-repeat
    
  `,
});

  }

    
  return (
    <>
    <section className={`flex gap-4 ${abs || ''} top-50`} >
          <button onClick={handleAlert} className="cursor-pointer p-1 px-3 rounded-4xl text-white bg-blue-600 text-[13px] md:text-[15px]">{one}</button>
          {
            two && <button onClick={handleAlert} className="cursor-pointer border-blue-600 border-1 rounded-4xl p-1 px-3 text-[13px] text-blue-600 hover:bg-blue-600 hover:text-white md:text-[15px] ">{two}</button>

          }
        </section>
    </>
  )
}

export default Button