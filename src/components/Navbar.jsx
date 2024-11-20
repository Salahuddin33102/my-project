import React from 'react';

function Navbar({onchange,value,setSearch,getData}) {
  const userInput =(e)=>{
    setSearch(e.target.value)
    console.log('click me');
    
  }
  return (
    <div>
   
     <nav className="container mx-auto flex items-center justify-between p-4">
  {/* Logo */}
  <img src="/image/Link ⏵ image.png" alt="" className="h-10" />

  {/* Navigation Links */}


  {/* Search Bar */}
  <input 
      type="text" 
      placeholder="Search news" 
      onChange={onchange}
      value={value}
      className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
    <button
    className='border p-2 bg-blue-700 text-white'
    onClick={getData}
    >Search
    </button>

</nav>
<div className='flex justify-evenly '>
  <button  className='text-white px-3 py-2 rounded-md bg-red-400' onClick={userInput} value={"Sports"}>Sports</button>
  <button  className='text-white px-3 py-2 rounded-md bg-red-400' onClick={userInput} value={"Politices"}>Politices</button>
  <button  className='text-white px-3 py-2 rounded-md bg-red-400' onClick={userInput} value={"Entertainment"}>Entertainment</button>
  <button  className='text-white px-3 py-2 rounded-md bg-red-400' onClick={userInput} value={"Health"}>Health</button>
</div>

    </div>
  ) 
}

export default Navbar;