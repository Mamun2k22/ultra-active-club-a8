import React from 'react';
import { useState } from 'react';



import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




const Cart = (props) => {

   const notify = () => toast("Completed.");

   const [brackTime, setBrackTime] = useState(0);

   const { cart } = props;
   let total = 0;

   for (const gym of cart) {
      total = total + gym.time;
   }

   const brackHandel = (e) => {
      const val = e.currentTarget.value;
      setBrackTime(val)
   }

   return (

      <div>

         <div className='flex items-center  gap-3 mt-10 ml-10 '>
            <img className='w-20 rounded-full' src="http://www.jhankarmahbub.com/images/jhankar.jpg" alt="" srcset="" />

            <h2 className='font-bold text-3xl'>Mamun <p className='text-sm'> Bangladesh </p></h2>
         </div>





         <div className='mt-10'>
            <h1 className='ml-20 font-bold text-2xl mb-4'>Add A Break</h1>

            <div className='flex gap-5 ml-20 mr-28 p-7  rounded-3xl  bg-orange-500 justify-between'>

               <button onClick={brackHandel} value="10" className="btn btn-accent rounded-full w-2 h-1">10</button>
               <button onClick={brackHandel} value="20" className="btn btn-accent rounded-full w-2 h-1">20</button>
               <button onClick={brackHandel} value="30" className="btn btn-accent rounded-full w-2 h-1">30</button>
               <button onClick={brackHandel} value="40" className="btn btn-accent rounded-full w-2 h-1">40</button>


            </div>
         </div>





         <div className=''>
            <h1 className='ml-20 font-bold text-2xl mt-6 mb-1'>Courses Details</h1>
            <div className='flex gap-5 justify-between mt-10  ml-20 mr-40 p-5 rounded-3xl  bg-orange-500'>
               <h1 className='text-white'>Course Time</h1>
               <div className='flex gap-1'>
                  <h1 className='text-white'>{total} </h1>
                  <p className='text-white'>min</p>
               </div>
            </div>
         </div>



         <div className='mt-10 flex gap-5 justify-between  ml-20 mr-40 p-5 rounded-3xl bg-orange-500'>
            <h1 className='text-white'>Break Time</h1>
            <div className='flex gap-1'>
               <h1 className='text-white'>{brackTime} </h1>
               <p className='text-white'>min</p>
            </div>
         </div>



         <div className='ml-32 mt-10'>
            <button onClick={notify} className="btn btn-active btn-primary">Course Completed</button>
            <ToastContainer
               position="top-center"
               autoClose={5000}
               hideProgressBar={false}
               newestOnTop={false}
               closeOnClick
               rtl={false}
               pauseOnFocusLoss
               draggable
               pauseOnHover
            />


         </div>


      </div>

   );
};

export default Cart;