function Food({foodImage, foodName}) {
  return (
    <div className='flex flex-col max-w-xs'>
        <img className='rounded-full bg-green-300 w-1/3' src={foodImage} alt={foodName} />
        <p className='text-xl w-[80%] mt-[1rem]'>{foodName}</p>
    </div>
  )
}

export default Food