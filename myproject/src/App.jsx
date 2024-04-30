import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [product, setProduct] = useState(0)
  const [search, setsearch] = useState(" ")



 useEffect(() => {
   fetch("https://fakestoreapi.com/products")
   .then(res=>res.json)
   .then(data=>setProduct(data))

 }, [])
   function sortAZ(parametr) {
    product.toSorted((a,b)=>(a[parametr] > b[parametr] ? 1 :  b[parametr] > a[parametr] ? -1 : 0 ))
    
   }
   function  sortZA(parametr) {
    product.toSorted((a,b)=>(a[parametr] < b[parametr] ? 1 :  b[parametr] < a[parametr] ? -1 : 0 ))
    
    
   }
  
  return (
   <>
     <button onClick={()=>sortAZ("title")}>A-Z</button>
     <button onClick={()=>sorZA("title")}>Z-A</button>
     <br />
     <input type="text" placeholder='serach ele ....'  value={search} onChange={(e)=>setsearch(e.target.value)}/>



     {product
     .filter(x=>x.title.toLower().includes(search.toLocaleLowerCase())
     .map((x)=> <div className='my'>
      <h2>{x.title}</h2>
      

     </div>))}
   </>
  )
}

export default App
