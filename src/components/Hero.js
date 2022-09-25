import { BsPlayCircle } from 'react-icons/bs';

function Hero() {
  return (
    <>
    <div className="heroImage flex justify-center pl-3 pr-3 relative">

<img className='rounded-lg mt-5' src="./Photo/baymax.jpg" loading='lazy' alt="Error" />


<div className='absolute'>
  <h2 className='text-4xl font-bold pr-96 pt-10'>baymax 2.0!</h2>

  <button className='btn btn-primary bg-red-600 p-2 flex items-center rounded-xl mt-4 '><BsPlayCircle className='mr-2'/> Watch Now </button>
</div>

    </div>
    
    
    </>
  )
}

export default Hero