import React from 'react'
import Image from 'next/image'
import { useDashboard } from '../context/DashboardContext'

const WithdrawalNotification = () => {
   const {setActiveComponent} = useDashboard()
  return (
    <div className='flex flex-col justify-center items-center gap-6 mx-auto p-3'>
      <Image 
      src='/assets/withdrawal-notification.png'
      alt='icon'
      width={120}
      height={120}
      />

      <h1 className='font-normal text-2xl md:text-3xl'>Withdrawal Successful</h1>
      <div>
         <button className='bg-gold text-sm px-6 py-3 outline-none font-semibold text-black text-center rounded-xl'
         onClick={() => setActiveComponent('firstView')}
         >
            Done
         </button>
      </div>

    </div>
  )
}

export default WithdrawalNotification