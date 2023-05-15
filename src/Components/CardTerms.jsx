function CardTerms() {
  return (
    <section className='flex justify-between !bg-white w-[87.3rem] ml-[-6rem] px-[6rem] py-[2.5rem] items-center mb-[1.5rem]'>
        <div className="flex items-center gap-x-6">
        <h2 className='font-bold text-2xl'>Got a gift card?</h2>
        <h3 className='text-md text-slate-900'>Earns 2★Stars per $1</h3>
        <button className='rounded-3xl py-3 px-4 border-[1.3px] border-black'>Add or Reload</button>
        <button className='rounded-3xl py-3 px-4 text-white bg-black'>Check balance</button>
        </div>
        <div>
        <a className='text-green-900 hover:border-b-green-900 hover:border-b-2 font-bold' href="#">Card Terms & Conditions</a>
        </div>
    </section>
  )
}

export default CardTerms