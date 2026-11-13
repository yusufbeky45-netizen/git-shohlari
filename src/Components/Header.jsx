import React from 'react'
import Pr from '../assets/Pr.png'

const Header = () => {
  return (
    <div>

      <header className='flex items-center justify-between'>
        <div className=''>
          <img src={Pr} />
          <ul className='flex gap-[25px]'>
            <li>Feature</li>
            <li>Download</li>
            <li>Pricing</li>

          </ul>
          <div className='flex gap-[15px] items-center'>
            <p>Login</p>
            <button>Sign in</button>
          </div>
        </div>

      </header>

    </div>
  )
}

export default Header