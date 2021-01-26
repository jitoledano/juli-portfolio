import React from 'react';
import image from '../tempBg.png';

const Home = () => {
    return (
        <main>
            <img src={image} alt='cute dog' className="absolute object-cover w-full h-full"/>
            <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8 text-center">
                <h1 className="text-6xl text-white font-bold cursive leading-none leading-snug md:text-9xl">Hey! Hey! Hey! I am Juli</h1>
            </section>
        </main>
    )
}

export default Home
