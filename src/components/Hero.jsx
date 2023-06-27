import React from "react";

import { logo } from "../assets";

const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
      <nav className='flex justify-between items-center w-full mb-10 pt-3'>
        <img src={logo} alt='sumz_logo' className='w-28 object-contain' />

        <button
          type='button'
          onClick={() =>
            window.open("https://github.com/ananyap18/Briefify", "_blank")
          }
          className='black_btn'
        >
          GitHub
        </button>
      </nav>

      <h1 className='head_text'>
      Unlock clarity with <br className='max-md:hidden' />
        <span className='blue_gradient '>Briefify</span>
      </h1>
      <h2 className='desc'>
      Unlock the essence of lengthy articles with Briefify, an open-source solution for concise summarization
      </h2>
    </header>
  );
};

export default Hero;