function Drink({drinkImage, drinkName}) {
  return (
    <div className='flex flex-col max-w-xs'>
        <img className='rounded-full bg-green-300 w-1/3' src={drinkImage} alt={drinkName} />
        <p className='text-xl w-[80%] mt-[1rem]'>{drinkName}</p>
    </div>
  )
}

export default Drink