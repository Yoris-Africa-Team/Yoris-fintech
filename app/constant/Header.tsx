import Image from 'next/image'

export default function Header() {
    return (
      <header className="max-w-[1300px] mx-auto fixed top-0 left-0 right-0 bg-black bg-opacity-70 z-50 flex justify-between items-center px-8 py-4 mb-8">
        <div>
          <Image src="/logo.png" alt="Yoris Logo" width={100} height={60} />
        </div>
        <nav className="flex gap-x-7">
          <a href="#" className="text-[#C3AD60] font-bold">Puddle</a>
          <a href="#" className="text-[#C3AD60] font-bold">App store</a>
          <a href="#" className="text-[#C3AD60] font-bold">Logistics</a>
          <a href="#" className="text-[white] font-bold">Fintech</a>
        </nav>
        <div/>
    </header>
    )
}
