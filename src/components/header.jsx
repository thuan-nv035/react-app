import React from 'react';

const Header = () => {
    return (
        <>
            <div className = 'container mx-auto text-center'>
                <div className=''>
                    <h1 className = 'font-bold text-8xl text-black mt-4'>+onic</h1>
                </div>
                <div className = "mt-1">
                    <span className = "uppercase ">Adoing that extra uttle something</span>
                </div>
                <div className = "mt-3 ">
                    <ul className = 'flex justify-center'>
                        <li className = "uppercase p-2 font-bold">cgi</li>
                        <li className = "uppercase p-2 font-bold">service</li>
                        <li className = "uppercase p-2 font-bold">studio</li>
                    </ul>
                </div>
                <div className = 'mt-4'>
                    <div className = "w-full h-80">
                        <img className = "object-cover w-full h-80" src="https://i.pinimg.com/564x/48/51/41/4851418af0d07ed679c4f94e462daaa8.jpg" alt="" />
                    </div>
                    
                </div>
                <div className = 'mt-8'>
                    <span className='uppercase font-bold text-black text-2xl'>
                        for life like the images, we lend them our soul
                    </span>
                    <br />
                    <span className = 'font-bold text-black text-2xl'>
                        Learn more about our service, client & process
                    </span>
                </div>
            </div>
        </>
    )
}
export default Header;