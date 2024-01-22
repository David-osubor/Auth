import { Link } from "react-router-dom";
import christian from '../assets/christina.jpg'

function Signin() {
  return (
    <div className='relative h-screen w-full bg-zinc-900/90'>

             <img src={christian} alt="/"  className='absolute mix-blend-overlay w-full h-full object-cover'/>
     <div className='flex justify-center  items-center h-full'>
        <form className='max-w-[1450px] mx-auto p-8 bg-white'>
     <h1 className='text-4xl text-center font-bold py-4'>BRAND</h1>
     {/* <div>
        <label>Firstname</label>
        <input type="text" value="" />
     </div> */}
     <div className='flex flex-col mb-4 '>
        <label>Email</label>
        <input type='email' className='border relative bg-gray-200 p-1'  />
     </div>
     <div className='flex flex-col mb-4'>
        <label>Password</label>
        <input type="password"  className='border relative bg-gray-200 p-1 focus:border:bg-indigo-500'/>
     </div>
     {/* <div>
        <label>Firstname</label>
        <input type="text" value="" />
     </div> */}
     <button className='w-full py-2 mt-8 bg-indigo-600 relative hover:bg-indigo-500 text-white '>Sign In</button>
    
     <p className=' relative text-center text-xs mt-8'>Not a member?
     <Link to='/signup' className='cursor-pointer text-blue-500'>Sign up</Link></p>
     </form>
    </div>
    </div>
  )
}

export default Signin