import { useEffect, useState } from "react";
import MoviCard from "./MoviCard"
import Spinner from 'react-spinkit';





function MoviList({title,filter}) {

    const [movies,setmovies] = useState([]);
    const [loding,setloding] = useState(false);

    const getMovi = async () => {
        setloding(true)

        const res = await fetch(`https://yts.mx/api/v2/list_movies.json?${filter}`).then(res => res.json());
        
       setTimeout(()=>{

        
        setmovies(res.data.movies)
        setloding(false)
       },1000)
    }
    useEffect(()=>{
    
        getMovi()
    },[]);

  return (
    <>
    <div className="flex">
        <h4 className="ml-80 mt-5 font-bold">{title}🔥</h4>
    </div>
   {loding && 

<div className="ml-80 mt-2">
<Spinner name="line-scale" color="steelblue"/>
</div>
   
   }
   

 
 <div className="flex flex-wrap justify-center space-x-5 w-7/12 ml-60">

 {
    movies?.map( move =>(

        <MoviCard move={move} {...move} key={move?.id}/>
    ))
 }
 <MoviCard/>
    
    
    
 </div>

    </>
  )
}

export default MoviList