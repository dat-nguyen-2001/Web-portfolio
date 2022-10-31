import Head from 'next/head';
import EmailIcon from '@mui/icons-material/Email';
import Typewriter from 'typewriter-effect';
import { useState } from 'react';
export default function Home() {
  const looped = true
  const [state] = useState({
    title: "Hi,",
    titleTwo: "I'm a",
    titleThree: "Full-Stack Developer"
  })
  return (
    <div>
      <Head>
        <title>Dat Nguyen Van</title>
        <meta name="description" content="My web portfolio" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <main className='overflow-x-hidden h-screen'>
        <div className='sticky w-screen h-[60px] bg-gradient-to-t from-gray-700 to-gray-800 flex space-between items-center px-10 nav'>
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
        <div className='home h-[35%]'>
          <div className='introduction flex flex-col space-y-3 text-5xl font-[900] h-[120px] ml-[8vw] mt-[30vh] w-auto'>
            <h1>Hi, my name is Dat</h1>
            <h1 className='flex'>I'm a <span className='pl-6 text-blue-400'><Typewriter
              options={{
                autoStart: true,
                loop: true,
                delay: 40,
                strings: [
                  "Full-Stack Developer",
                  "Front-End Developer",
                  "Life-Long Learner"
                ]
              }}
            /></span>
            </h1>
            <div className='flex space-x-10 py-5'>
              <a href='https://www.linkedin.com/in/datnguyen210/' target="_blank" rel="noopener noreferrer">
                <img className='mediaIcon' src='https://img.icons8.com/doodle/40/000000/linkedin--v2.png' />
              </a>
              <a href='https://github.com/dat-nguyen-2001' target="_blank" rel="noopener noreferrer">
                <img className='mediaIcon' src='https://img.icons8.com/doodle/40/000000/github--v1.png'/>
              </a>
              <a href='https://stackoverflow.com/users/19545617/dat-nguyen' target="_blank" rel="noopener noreferrer">
                <img className='mediaIcon' src='https://img.icons8.com/external-tal-revivo-color-tal-revivo/40/000000/external-stack-overflow-is-a-question-and-answer-site-for-professional-logo-color-tal-revivo.png'/>
              </a>
            </div>
            <div className=' w-[10%] h-[70px] rounded-md cursor-pointer bg-blue-500 text-white text-3xl'>
              <p className='mx-auto w-[75%] py-3'>Resume</p>
            </div>
          </div>
        </div>
      </main>
      <hr className='opacity-30'></hr>
      <div className='px-28 mt-10'>
        <div className='about text-2xl flex flex-col space-y-4 mb-10'>
          <h1 className='text-4xl'>&lt;about&gt;</h1> 
          <div>
              class DatNguyenVan = 	&#123;
          </div>
          <div>
              name: &#123;
          </div>
          <div>
              firstName: &#34;Dat&#34;,
          </div>
          <div>
              lastName: &#34;Nguyen Van&#34;
          </div>
          <div>
              &#125;
          </div>
          <div>
              job: &#34;Software Engineer&#34;
          </div>
          <div>
              from: &#34;Hanoi, Vietnam&#34;
          </div>
          <div>
              &#125;
          </div>
          <div>
              &#125;
          </div>
          <div>
              &#125;
          </div>
          <div>
            &#125;
          </div>

              
          <h1 className='text-4xl'>&lt;/about&gt;</h1>
        </div>
        <hr className='opacity-30'></hr>
        <div className='skills'>
          <h1 className='text-4xl'>&lt;skills&gt;</h1>
          <h1 className='text-4xl'>&lt;/skills&gt;</h1>
        </div>
        <hr className='opacity-30'></hr>
        <div className='projects'>
          <h1 className='text-4xl'>&lt;projects&gt;</h1>
          <h1 className='text-4xl'>&lt;/projects&gt;</h1>
        </div>
        <hr className='opacity-30'></hr>
        <div className='contact'></div>
      </div>
    </div>
  )
}
