import { Link } from 'react-router-dom'
import christian from '../assets/christina.jpg'
import { useState } from 'react'
import { useContext } from 'react'
import { AuthContext } from '../context/Context'

function SignUp() {
  const [User,setUser] = useContext(AuthContext)

   const [formData, setFormData] = useState(
   {username: '',
   email: '',
   password: '',


   })

   function handleChange(event) {
      const {name,value,type} = event.target
      setFormData(prevFormData => {
         return {
            ...prevFormData,
            [name]:value
         }
      })
   }
  function handleSubmit(event) {
     event.preventDefault()
     setUser({
      
      username: formData.username,
      email: formData.email,
      password: formData.password
   
   })
   axios.post(`/api/register`, setUser).then(res => {

   })
  }

   return (
    <div className='relative h-screen w-full bg-zinc-900/90'>
             <img src={christian} alt="/"  className='absolute mix-blend-overlay w-full h-full object-cover'/>
     <div className='flex justify-center  items-center h-full'>
        
        <form className='max-w-[1450px] mx-auto p-8 bg-white' onSubmit={handleSubmit}>
     <h1 className='text-4xl text-center font-bold py-4'>BRAND</h1>
     
     <div className='flex flex-col mb-4 '>
        <label>Username</label>
        <input 
        type='text' 
        className='border relative bg-gray-200 p-1' 
        onChange={handleChange}
        name='username'
        value={formData.username}
        />
     </div> 
   
     <div className='flex flex-col  mb-4 '>
        <label>Email</label>
        <input type='email' className='bord relative bg-gray-200 p-1' 
        onChange={handleChange}
        name='email'
        value={formData.email}
        
        />
     </div>
   
     <div className='flex flex-col mb-4'>
        <label>Password</label>
        <input type="password"  className='border relative bg-gray-200 p-1 focus:border:bg-indigo-500'
         onChange={handleChange}
         name='password'
         value={formData.password}
        />
     </div>
     
     <button className='w-full py-2 mt-8 bg-indigo-600 relative hover:bg-indigo-500 text-white '>Sign Up</button>
     
     <p className='text-center relative text-xs mt-8 '>Already have an account? 
     <Link to='/' className='text-blue-500'>Sign in</Link></p>
     </form>
    </div>
    </div>
  )
}

export default SignUp