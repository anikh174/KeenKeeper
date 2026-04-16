import React from 'react';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
    return (
        <div className='bg-[#244D3F]'>
            <div className='p-10 container mx-auto'>
                <div className='space-y-4 text-white text-center'>
                    <h1 className='text-5xl font-extrabold'>KeenKeeper</h1>

                    <p>Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>
                    <p>Social Links</p>
                    <div className='flex gap-3 justify-center'>
                        <p><FaInstagram /></p>
                        <p><FaFacebook /></p>
                        <p><FaXTwitter /></p>
                    </div>
                </div>

                <div className='flex md:flex-row flex-col justify-between text-white items-center mt-8 gap-3'>
                    <p>© 2026 KeenKeeper. All rights reserved.</p>
                    <div className='flex gap-3'>
                        <p>Privacy Policy</p>
                        <p>Terms of Service</p>
                        <p>Cookies</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;