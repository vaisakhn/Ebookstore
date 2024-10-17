import React ,{useState}from "react";
import Card from "./Card";
import axios from "axios";
import bgbook from './bg1.png'
const Main=()=>{
    const [search,setSearch]=useState("");
    const [bookData,setData]=useState([]);
    const searchBook=(evt)=>{
        if(evt.key==="Enter")
        {
            axios.get('https://www.googleapis.com/books/v1/volumes?q='+search+'&key=')
            .then(res=>setData(res.data.items))
            .catch(err=>console.log(err))
        }
    }
    return(
        <>
           

         <div style={{width:'100%',height:'50vh',paddingTop:'2rem',backgroundImage:`url(${bgbook})`,backgroundSize:'contain'}}>
         <h1 style={{color:'white'}} class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">A book is a gift you can open again and again</h1>
         
    <div style={{display:'flex',flexDirection:'row',maxWidth:'28rem',minWidth:'fit-content'}} class="container mx-auto ">
        
        <input  value={search} onChange={e=>setSearch(e.target.value)}
                        onKeyDown={searchBook} type="text" id="default-search" class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter your book name..." required />
        <button onClick={()=>{ axios.get('https://www.googleapis.com/books/v1/volumes?q='+search+'&key=')
            .then(res=>setData(res.data.items))
            .catch(err=>console.log(err))}} style={{width:'5rem'}} type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">serach</button>
    </div>
    </div>

<div class='flex'><button onClick={()=> {
            axios.get('https://www.googleapis.com/books/v1/volumes?q='+search+'=free-ebooks&key=')
            .then(res=>setData(res.data.items))
            .catch(err=>console.log(err))
        }} type="button" class="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-slate-400 rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Free Books</button>
<button onClick={()=> {
            axios.get('https://www.googleapis.com/books/v1/volumes?q='+search+'=paid-ebooks&key=')
            .then(res=>setData(res.data.items))
            .catch(err=>console.log(err))
        }} type="button" class="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-slate-400 rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Paid Books</button>
</div>


            <div   class="flex flex-wrap space-x-9 space-y-11 bg-slate-100">
              {
                    <Card book={bookData}/>
              }  
            </div>
        </>
    )
}
export default Main;
