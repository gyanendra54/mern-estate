import {useSelector} from 'react-redux'

export default function Profile() {
  const {currentUser}=useSelector((state)=>state.user)
  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl font-semibold text-center'>Profile</h1>
      <form className='flex flex-col gap-4' >
        <img src={currentUser.avatar} alt="profile" 
        className='rounded-full h-24 w-24 object-cover cursor-pointer self-center m-2'/>
        <input type="text" placeholder='username'
        id='username' className='border p-3 rounded-lg' />
        <input type="text" placeholder='email'
        id='email' className='border p-3 rounded-lg' />
        <input type="password" placeholder='username'
        id='password' className='border p-3 rounded-lg' />
        <button className='bg-slate-700 text-white rounded-lg p-3 uppercase hover:opacity-95'>update</button>
        <button className='bg-green-700 text-white rounded-lg p-3 uppercase hover:opacity-95'>create listing</button>
      </form>
      <div className='flex justify-between mt-5'>
        <span className='text-red-700 cursor-pointer'>Delete account</span>
        <span className='text-red-700 cursor-pointer'>Sign out</span>
      </div>
    </div>
  )
}
