import React from 'react'

function Card({data}) {
  console.log(data);

  return (
    <div className='flex flex-wrap w-[100%] gap-5 justify-center '>
      {data.map((curItem,index)=>{
        if(!curItem.urlToImage){
          null
        }else{
          return(
            <div key={index} className='flex flex-wrap w-[22%] '>
              <img src={curItem.urlToImage} alt="" className='h-[180px] w-full' />
              
            <div className=' p-2 border'>
            <a className='text-[16px] font-semibold' rn>{curItem.title}</a>
            <p className='pt-5 pb-2'>{curItem.description}</p>
            <button className='bg-blue-400 text-white px-2 py-1' onClick={()=> window.open(curItem.url)}>Read more</button>
            </div>
              </div>
  
          )
        }
    
      })}
    </div>
  )
}

export default Card;