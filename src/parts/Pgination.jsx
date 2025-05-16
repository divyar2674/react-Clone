import React from 'react'


function Pgination({front,back,p}) {
  return (
    <div className='bg-gray-400  p-4 mt-8 flex justify-center absoulute'>
        <div className='px-8  hover hover:cursor-pointer ' onClick={back}><i class="fa-solid fa-arrow-left"></i></div>
        <div className='font-bold text-xl'>{p}</div>
      <div className='px-8 hover hover:cursor-pointer' onClick={front}><i class="fa-solid fa-arrow-right"></i></div>
    </div>
  )
}

export default Pgination
