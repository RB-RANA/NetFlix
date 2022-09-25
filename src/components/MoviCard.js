

function MoviCard({medium_cover_image,title_long,year,rating}) {
  return (

    <div className="flex justify-center ">

<div className="w-36 mt-7 bg-slate-500 p-2 rounded-xl hover:-translate-y-4 duration-300 cursor-pointer">
    <img className="rounded-xl" src={medium_cover_image} loading="lazy"/>
    <h2 className='truncate' title={title_long} >{title_long}</h2>

    <div className='flex space-x-3 items-center mt-2'>
    <div className="border border-orange-400 rounded-lg flex items-center w-fit px-1 space-x-1">
 <span className="text-[12px] text-orange-400 ">
   {rating}
 </span>
 
    </div>
    <span className="text-white text-sm">
    {year}
 </span>
    </div>

</div>

    </div>
  )
}

export default MoviCard