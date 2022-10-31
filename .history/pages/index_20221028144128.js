import Head from 'next/head';
import EmailIcon from '@mui/icons-material/Email';
import Typed from 'typed.js';
import { useEffect } from 'react';
export default function Home() {
  useEffect(() => {
    const typed = new Typed(".auto-type", {
      strings: ["Full-stack Developer", "Front-end Developer", "Life long learner"],
      typeSpeed: 150,
      backSpeed: 150,
      loop: true
    })
  }, [])
  return (
    <div>
      <Head>
        <title>Dat Nguyen Van</title>
        <meta name="description" content="My web portfolio" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <main className='overflow-hidden'>
        <div className='sticky w-screen h-[60px] bg-gradient-to-t from-gray-200 to-white flex space-between items-center px-10 nav'>
          <div className='flex space-x-2 nav-left'>
            <img src='logo.png' className='w-6 h-6' />
            <span>Dat Nguyen Van</span>
            <span className='pl-20 flex items-center space-x-2'>
              <EmailIcon />
              <p>
                datnguyenftu210@gmail.com
              </p>
            </span>
          </div>
          <div className='flex space-x-12 nav-right'>
            <p>Home</p>
            <p>About</p>
            <p>Skills</p>
            <p>Projects</p>
            <p>Contact</p>
          </div>
        </div>
        <div>
          <h1>Hi, my name is Dat. <h1>I'm a <span className='auto-type'></span></h1></h1>
        </div>
        <script src="https://cdn.jsdelivr.net/npm/typed.js@2.0.12">
        </script>
      </main>
    </div>
  )
}
