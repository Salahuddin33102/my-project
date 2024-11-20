import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Card from './components/Card';

function App() {
  const [search,setSearch] = useState("Pakistan");
  const [newsData,setNewsData] = useState(null);
  console.log('newsData: ', newsData);
  const API_KEY = "cd45e8962f484299ae7246c22fb6062b";
  const getData = async () =>{
    const response = await fetch(`https://newsapi.org/v2/everything?q=${search}&apiKey=${API_KEY}`,{
      method:"GET"
    });
    const jsonData = await response.json();
    
    setNewsData(jsonData.articles);

  }
  useEffect(()=>{
    getData()
  },[])

    const handleChange = (e) =>{
      console.log(e.target.value);
      setSearch(e.target.value)
      
    }
    
  
  return (
    <div>
      <Navbar getData={getData} value={search}   onchange={handleChange} setSearch={setSearch}/>
      {newsData?<Card data={newsData}/> : null}
      
    </div>
  )
}  

export default App;