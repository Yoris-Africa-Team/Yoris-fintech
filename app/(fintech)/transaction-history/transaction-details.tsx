import React from 'react'

const TransactionDetails = () => {
  return (
    <div className='w-full mx-auto h-[400px] flex flex-col justify-center  p-6 border border-gold rounded-xl bg-[#100F0D] text-white'>
      <div className='flex flex-col items-center mx-auto gap-2'>
         <h1 className='text-sm font-medium text-center'>Click on any transaction to view details</h1>
         <p className='text-xs font-light text-center'>8:27 pm</p>
      </div>
    </div>
  )
}

export default TransactionDetails