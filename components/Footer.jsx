import React from 'react';
import { AiFillInstagram, AiOutlineTwitter} from 'react-icons/ai';
import Link from 'next/link';


const Footer = () => {
  return (
    
    <div className="footer-container">
      <Link href="/"><p className='hitucursor'>2022 S&H STORE</p></Link>
      <p>
        <AiFillInstagram />
        <AiOutlineTwitter />
      </p>
    </div>
  )
}

export default Footer