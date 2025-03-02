// import React from 'react'
// import Logo from '../../assets/images/my-board-logo.png'
// import { Link } from 'react-router-dom'

// const RightSection = () => {
//   return (
    
//       <div className='py-20 px-20'>
//         <div className='flex items-center justify-center'>
//             <img src={Logo} alt='logo'/>
//             <p className='px-3 text-[#175CD3] text-[25px]'>My Board</p>
//         </div>

//         <div>
//         <h2 className='flex items-center justify-center pt-5 text-3xl w-200 h-34'>Resest your password</h2>
//         </div>
    


//    <div className='mt-10'>
//     <label >Password</label>
//     <input className='border bottom-3 rounded w-full mt-3' placeholder='**********' type='email'/>
//     </div>

//     <div className='pt-2'>
//     <label>Confirm password</label>
//     <input className='border bottom-3 rounded w-full mt-3' placeholder='**********' type='password'/>
//     </div>

//     <div className='flex items-center  justify-center mt-2 mb-2 pt-10'>
//         <button className="buttoun w-full text-[#FCFCFD]">Send reset instructions</button> 
//     </div>

//     <p className='flex items-center justify-center text-[#98A2B3]'>Go back to<span className='text-[#175CD3] m-2'><Link to='/login'>Login</Link></span></p>
// </div>
//   )
// }

// export default RightSection


import React, { useState } from 'react';
import Logo from '../../assets/images/my-board-logo.png';
import { Link } from 'react-router-dom';
import Icon from '../../assets/images/Icon.svg'

const RightSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  return (
    <div className='py-20 px-20'>
      <div className='flex items-center justify-center'>
        <img src={Logo} alt='logo'/>
        <p className='px-3 text-[#175CD3] text-[25px]'>My Board</p>
      </div>

      <div>
        <h2 className='flex items-center justify-center pt-5 text-3xl w-200 h-34'>Reset your password</h2>
      </div>

      <div className='mt-10'>
        <label>Password</label>
        <input className='border bottom-3 rounded w-full mt-3' placeholder='**********' type='password'/>
      </div>

      <div className='pt-2'>
        <label>Confirm password</label>
        <input className='border bottom-3 rounded w-full mt-3' placeholder='**********' type='password'/>
      </div>

      <div className='flex items-center justify-center mt-2 mb-2 pt-10'>
        <button className="buttoun w-full text-[#FCFCFD] h-[50px]" onClick={openModal}>Send Reset Instructions</button>
      </div>

      <p className='flex items-center justify-center text-[#98A2B3]'>Go back to<span className='text-[#175CD3] m-2'><Link to='/login'>Login</Link></span></p>

      {isModalOpen && (
        <>
          <div className="fixed inset-0 bg-black opacity-65 z-40"></div>
          <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-8 w-[544px] h-[320px]">
              <h2 className="text-xl mb-8 text-center text-[#175CD3] font-medium font-lato">Successful Password Reset!</h2>
                <div className='flex items-center justify-center mb-8'><img src={Icon} alt=''/></div>
              <p className='text-center text-[#667085]'>You will get an email confirmation at sani.jdogo@gmail.com</p>
              <Link to='/login'><div className='flex items-center justify-center'>
                <button className="mt-6 buttoun w-full">
                    Return to Login
                    </button>
                    </div>
                    </Link>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default RightSection;
