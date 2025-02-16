import React from 'react'
import { useDashboard } from '@/context/DashboardContext';


const Checkout = ({
   setNextComponent,
 }: {
    setNextComponent: (component: 'input'| 'checkout' | 'sendPasscode' | null) => void
 }) => {
   const transactionDetails = [
      { label: "Bank", value: "Yoris" },
      { label: "Account", value: "8328198272617" },
      { label: "Name", value: "Kingsley Ayeni" },
      { label: "Amount", value: "₦100,00.00" },
      { label: "Transaction fee", value: "₦50" },
    ];

    const {setReplaceWithContacts} = useDashboard()

 return(
   <div className='flex flex-col justify-center gap-6 items-center'>
  <div className="border border-[#C3AD60] rounded-lg p-6 w-full max-w-md  bg-[#0D0A06]">
   <p className="text-white text-xl font-bold text-center mb-4">
     ₦100,00.00
   </p>
   
   <ul className="space-y-2">
     {transactionDetails.map((item, index) => (
       <li key={index} className="flex justify-between  pb-2">
         <span className="text-gray-400">{item.label}</span>
         <span className="text-white">{item.value}</span>
       </li>
     ))}
   </ul>
 </div>

 {/* Action Buttons */}
 <div className="flex gap-4 ">
   <button className="px-6 py-2 border border-white rounded-md"
   onClick={() => {
      setNextComponent('input')
      setReplaceWithContacts(true)
   } }
   >
     Cancel
   </button>
   <button className="px-6 py-2 bg-[#C3AD60] text-black rounded-md"
   onClick={() => setNextComponent('sendPasscode')}
   >
     Pay
   </button>
 </div>
   </div>
 )
 
  
}

export default Checkout