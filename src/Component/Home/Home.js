import React, { useState } from 'react'
import Cart from '../Cart/Cart';
import Gym from '../Gym/Gym';
import Nav from '../Nav/Nav';
import Questions from '../Questions';

const Home = () => {

    const [cart, setCart] = useState([]);

    const addToList = (gym) => {

        const newCart = [...cart, gym];
        setCart(newCart);
    }


    return (
        <div >

            <div>

            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                <div className='col-span-1 lg:col-span-2'>
                    <div>
                        <Nav></Nav>
                    </div>
                    <div>
                        <Gym
                            addToList={addToList}

                        ></Gym>
                    </div>
                </div>


                <div className=''>
                    <Cart
                        cart={cart}
                    ></Cart>

                </div>
            </div>



            <Questions></Questions>


        </div>





    );
};

export default Home;
