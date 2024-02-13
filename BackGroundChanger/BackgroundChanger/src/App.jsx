import { useState } from "react";


function App() {
    
  const [color,setColor] = useState("#002333");

  return (
    <>
         <div className="w-full h-screen duration-200" style={{backgroundColor:color}}>

             <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2"> 
               <div className="flex flex-wrap justify-center gap-3 shadow-xl bg-white px-3 py-2 rounded-3xl">
               <button onClick={()=> setColor("red") } className = "outline-none  px-4 py-1 rounded-3xl" style={{backgroundColor:'red',color:'white'}}> Red </button>
               <button onClick={()=> setColor("white") } className = "outline-none  px-4 py-1 rounded-3xl" style={{backgroundColor:'white',color:'black'}}> White </button>
               <button onClick={()=> setColor("green") } className = "outline-none  px-4 py-1 rounded-3xl" style={{backgroundColor:'Green',color:'white'}}> Green</button>
               <button onClick={()=> setColor("orange") } className = "outline-none  px-4 py-1 rounded-3xl" style={{backgroundColor:'Orange',color:'white'}}> Orange </button>
               <button onClick={()=> setColor("olive") } className = "outline-none  px-4 py-1 rounded-3xl" style={{backgroundColor:'Olive',color:'white'}}> Olive </button> 
                <button onClick={()=> setColor("black") } className = "outline outline-offset-2 outline-1  px-4 py-1 rounded-3xl" style={{backgroundColor:'Black',color:'white'}}> Black </button>
               </div>
             </div>

         </div>
    </>
  )
}

export default App
