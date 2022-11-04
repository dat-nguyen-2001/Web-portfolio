import Head from 'next/head';
import Typewriter from 'typewriter-effect';
import 'animate.css';
import { useEffect } from 'react';


export default function Home() {
  // Go to the top when reloading
  useEffect(() => {
    window.onunload = function () {
      window.scrollTo(0, 0);
    }
  }, []);


  const scrollToHome = function () {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }

  const scrollToAbout = function () {
    const about = document.getElementById('about');
    const rect = about.getBoundingClientRect();
    const bodyRect = document.body.getBoundingClientRect();
    const offset = rect.top - bodyRect.top

    window.scrollTo({
      top: (offset - 70),
      left: 0,
      behavior: 'smooth'
    });
  }

  const scrollToSkills = function () {
    const skills = document.getElementById('skills');
    const rect = skills.getBoundingClientRect();
    const bodyRect = document.body.getBoundingClientRect();
    const offset = rect.top - bodyRect.top

    window.scrollTo({
      top: (offset - 70),
      left: 0,
      behavior: 'smooth'
    });
  }

  const scrollToProjects = function () {
    const projects = document.getElementById('projects');
    const rect = projects.getBoundingClientRect();
    const bodyRect = document.body.getBoundingClientRect();
    const offset = rect.top - bodyRect.top

    window.scrollTo({
      top: (offset - 70),
      left: 0,
      behavior: 'smooth'
    });
  }
  return (
    <div>
      <Head>
        <title >Dat Nguyen Van</title>
        <meta name="description" content="My web portfolio" />
        <link rel="icon" href="/logo.png" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
        />
      </Head>
      <span className='email hidden sm:flex fixed bottom-2 sm:right-4 md:right-6 lg:right-16 items-center text-[.9rem]'>
        <p className='pb-10 tracking-wider hover:text-[#9bb464] cursor-pointer'>
          datnguyenftu210@gmail.com
        </p>
        <div className=' h-[100px] w-[1px] bg-white text-white'></div>
      </span>
      <main className='overflow-x-hidden h-screen'>
        <div className='z-50 fixed top-0 w-screen h-[60px] md:h-[70px] backdrop-blur-sm	border-b flex space-between items-center px-4 pr-4 sm:pr-8 first-line:md:pr-10 md:px-16 lg:px-24 nav'>
          <div className='flex space-x-2 nav-left'>
            <img src='logo.png' className='w-7 h-7 rounded' />
            <span className='focus-in-expand hidden md:inline'>Dat Nguyen Van</span>
          </div>
          <div className='text-sm space-x-8 md:space-x-12 nav-right hidden sm:flex md:text-base'>
            <p onClick={scrollToHome} className="cursor-pointer hover:text-[#9bb464]"><span className='text-[#9bb464]'>1. </span>Home</p>
            <p onClick={scrollToAbout} className="cursor-pointer hover:text-[#9bb464]"><span className='text-[#9bb464]'>2. </span>About</p>
            <p onClick={scrollToSkills} className="cursor-pointer hover:text-[#9bb464]"><span className='text-[#9bb464]'>3. </span>Skills</p>
            <p onClick={scrollToProjects} className="cursor-pointer hover:text-[#9bb464]"><span className='text-[#9bb464]'>4. </span>Projects</p>
          </div>
          <div className='flex flex-col space-y-1 sm:hidden pr-3'>
            <div className='w-[30px] h-1 bg-white rounded-md'></div>
            <div className='w-[30px] h-1 bg-white rounded-md'></div>
            <div className='w-[30px] h-1 bg-white rounded-md'></div>
          </div>
        </div>
        <div className='home flex w-screen space-between'>
          <div className='introduction flex flex-col space-y-3 text-[1.3rem] sm:text-[1.7rem]  md:text-[2.1rem] lg:text-[2.7rem] font-[700] md:font-[900] h-[120px] ml-[4vw] md:ml-[6vw] mt-[50%] sm:mt-[40%] md:mt-[25%] lg:mt-[15%] w-auto'>
            <h1>Hi, my name is Dat</h1>
            <h1 className='flex'>I&apos;m a <span className='pl-2 md:pl-6 text-[#9bb464]'>
              <Typewriter
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
            <div className='flex flex-col-reverse space-x-5 md:space-x-10 py-5'>
              <a href='https://www.linkedin.com/in/datnguyen210/' target="_blank" rel="noopener noreferrer">
                <img className='mediaIcon w-8 h-8 lg:w-10 lg:h-10' src='https://img.icons8.com/doodle/40/000000/linkedin--v2.png' />
              </a>
              <a href='https://github.com/dat-nguyen-2001' target="_blank" rel="noopener noreferrer">
                <img className='mediaIcon w-8 h-8 lg:w-10 lg:h-10' src='https://img.icons8.com/doodle/40/000000/github--v1.png' />
              </a>
              <a href='https://stackoverflow.com/users/19545617/dat-nguyen' target="_blank" rel="noopener noreferrer">
                <img className='mediaIcon w-8 h-8 lg:w-10 lg:h-10' src='https://img.icons8.com/external-tal-revivo-color-tal-revivo/40/000000/external-stack-overflow-is-a-question-and-answer-site-for-professional-logo-color-tal-revivo.png' />
              </a>
            </div>
            <div className='py-1 md:py-3 text-center wobble-hor-bottom w-[100px] md:w-[150px] h-[70px] rounded-md cursor-pointer border-[1px] border-[#9bb464] text-white text-[.95rem] sm:text-base md:text-xl lg:text-2xl hover:bg-gray-500'>
              <a href='https://drive.google.com/file/d/1RxAAHuMHoRmNDIRHUPWf_AgLQPDgjeBm/view' className=' text-[#9bb464] ' target="_blank" rel="noopener noreferrer">Resume</a>
            </div>
          </div>
          <div className='lg:max-w-[460px] xl:max-w-[560px] 2xl:max-w-[600px] pt-24 lg:pr-24 xl:pr-32 2xl:pr-44'>
            <img src='profile-removebg.png'/>
          </div>
        </div>
      </main>
      <hr className='mx-16 sm:mx-24 md:mx-32  lg:mx-40' id='about'></hr>
      <div className='px-5 xl:px-28 mt-10'>
        <div className='about lg:text-[2xl] xl:text-[1.3rem] flex flex-col space-y-4 mb-10'>
          <h1 className='text-xl lg:text-2xl xl:text-3xl'><span className='lineNumber'>1 </span>&lt;<span className='text-red-700'>about</span>&gt;</h1>
          <div className='text-[#f9db9b]'>
            <span className='lineNumber'>2 </span><span className='text-[#9d68b2]'>const </span>
            Dat
            <span> =</span>
            <span className='text-[#bd7b4c]'> &#123;</span>
          </div>
          <div className='flex'>
            <span className='lineNumber'>3 </span>
            <div className='pl-8'>
              <span className='text-red-500'>name </span>
              :
              <span className='text-[#9d68b2]'> &#123;</span>
            </div>
          </div>
          <div className='flex'>
            <span className='lineNumber'>4 </span>
            <div className='pl-16'>
              <span className='text-red-500'>firstName </span>
              :
              <span className='text-[#9bb464]'> &#34;Dat&#34;</span>,
            </div>
          </div>
          <div className='flex'>
            <span className='lineNumber'>5 </span>
            <div className='pl-16'>
              <span className='text-red-500'>lastName </span>
              :
              <span className='text-[#9bb464]'> &#34;Nguyen Van&#34;</span>,
            </div>
          </div>
          <div className='flex'>
            <span className='lineNumber'>6 </span>
            <div className='pl-8'>
              <span className='text-[#9d68b2]'> &#125;</span>,
            </div>
          </div>
          <div className='flex'>
            <span className='lineNumber'>7 </span>
            <div className='pl-8'>
              <span className='text-red-500'>from </span>
              :
              <span className='text-[#9bb464]'> &#34;Ha Noi, Viet Nam&#34;</span>,
            </div>
          </div>
          <div className='flex'>
            <span className='lineNumber'>8 </span>
            <div className='pl-8'>
              <span className='text-red-500'>job </span>
              :
              <span className='text-[#9d68b2]'> &#123;</span>
            </div>
          </div>
          <div className='flex'>
            <span className='lineNumber'>9 </span>
            <div className='pl-16'>
              <span className='text-red-500'>title </span>
              :
              <span className='text-[#9bb464]'> &#34;Software Engineer&#34;</span>,
            </div>
          </div>
          <div className='flex'>
            <span className='lineNumber'>10 </span>
            <div className='pl-14'>
              <span className='text-red-500'>details </span>
              :
              <span className='text-[#bd7b4c]'> [ </span>
              <span className='text-[#9bb464]'>&#34;Progressive Web Applications&#34;</span>,
              <span className='text-[#9bb464]'> &#34;Responsive Layouts&#34;</span>,
              <span className='text-[#9bb464]'> &#34;Fix Problems and Speed Up Your Website&#34;</span>
              <span className='text-[#bd7b4c]'> ] </span>
            </div>
          </div>
          <div className='flex'>
            <span className='lineNumber'>11 </span>
            <div className='pl-8'>
              <span className='text-[#9d68b2]'> &#125;</span>,
            </div>
          </div>
          <div className='flex'>
            <span className='lineNumber'>12 </span>
            <div className='pl-8'>
              <span className='text-red-500'>others </span>
              :
              <span className='text-[#9d68b2]'> &#123; </span>
            </div>
          </div>
          <div className='flex'>
            <span className='lineNumber'>13 </span>
            <div className='pl-16'>
              <span className='text-red-500'>languages </span>
              :
              <span className='text-[#5c9ab2]'> &#123;</span>
            </div>
          </div>
          <div className='flex'>
            <span className='lineNumber'>14 </span>
            <div className='pl-24'>
              <span className='text-red-500'>native </span>
              :
              <span className='text-[#9bb464]'> &#34;Vietnamese&#34;</span>,
            </div>
          </div>
          <div className='flex'>
            <span className='lineNumber'>15 </span>
            <div className='pl-24'>
              <span className='text-red-500'>proficient </span>
              :
              <span className='text-[#9bb464]'> &#34;English&#34;</span>,
            </div>
          </div>
          <div className='flex'>
            <span className='lineNumber'>16 </span>
            <div className='pl-24'>
              <span className='text-red-500'>intermediate </span>
              :
              <span className='text-[#9bb464]'> &#34;Japanese&#34;</span>
            </div>
          </div>
          <div className='flex'>
            <span className='lineNumber'>17 </span>
            <div className='pl-16'>
              <span className='text-[#5c9ab2]'>&#125;</span>
              ,
            </div>
          </div>
          <div className='flex'>
            <span className='lineNumber'>18 </span>
            <div className='pl-16'>
              <span className='text-red-500'>interests </span>
              :
              <span className='text-[#5c9ab2]'> [ </span>
              <span className='text-[#9bb464]'>&#34;Reading&#34;</span>,
              <span className='text-[#9bb464]'> &#34;Food&#34;</span>,
              <span className='text-[#9bb464]'> &#34;Music&#34;</span>
              <span className='text-[#5c9ab2]'> ] </span>
            </div>
          </div>
          <div className='flex'>
            <span className='lineNumber'>19 </span>
            <div className='pl-8'>
              <span className='text-[#9d68b2]'> &#125;</span>,
            </div>
          </div>
          <div className='flex'>
            <span className='lineNumber'>20 </span>
            <div>
              <span className='text-[#bd7b4c] pl-2'>&#125;</span>;
            </div>
          </div>
          <h1 className='text-xl lg:text-2xl xl:text-3xl'><span className='lineNumber'>21 </span> &lt;/<span className='text-red-700'>about</span>&gt;</h1>
        </div>

        <hr id='skills' className='mx-12'></hr>

        <div className='skills lg:text-[1.2rem] xl:text-[1.3rem] flex flex-col space-y-4 my-10'>
          <h1 className='text-xl lg:text-2xl xl:text-3xl'><span className='lineNumber'>22 </span>&lt;<span className='text-red-700'>skills</span>&gt;</h1>
          <div><span className='lineNumber'>23 </span><span className='text-[#f9db9b]'>Console</span>.<span className='text-[#1cbae8]'>log</span><span className='text-[#bd7b4c]'>( </span><span className='text-[#f9db9b]'>Dat</span>.<span className='text-red-500'>skills</span><span className='text-[#bd7b4c]'> )</span>;</div>
          <div className='flex'>
            <span className='lineNumber'>24 </span>
            <div className='pl-4 md:pl-8 text-[#bd7b4c]'>&#123;</div>
          </div>
          <div className='flex'>
            <span className='lineNumber'>25 </span>
            <div className='pl-8 md:pl-16'>
              <span className='text-red-500'>frontend</span> : <span className='text-[#9d68b2]'>[</span>
            </div>
          </div>
          <div className='flex'>
            <span className='lineNumber'>26 </span>
            <div className='flex pl-12 md:pl-24 flex-wrap'>
              <span className='text-[#9bb464]'>
                &#34;HTML / HTML5&#34;
              </span>
              <img className='w-auto h-7 ml-3 md:ml-4' src='https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white' />,
            </div>
          </div>
          <div className='flex'>
            <span className='lineNumber'>27 </span>
            <div className='flex pl-12 md:pl-24 flex-wrap'>
              <span className='text-[#9bb464]'>
                &#34;CSS / CSS3 / SCSS&#34;
              </span>
              <img className='w-auto h-7 ml-3 md:ml-4' src='https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white' />,
            </div>
          </div>
          <div className='flex'>
            <span className='lineNumber'>28 </span>
            <div className='flex pl-12 md:pl-24 flex-wrap'>
              <span className='text-[#9bb464]'>
                &#34;TailwindCSS / Bootstrap4&#34;
              </span>
              <img className='w-auto h-7 ml-3 md:ml-4' src='https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white' />
              <img className='w-auto h-7 ml-3 md:ml-4' src='https://img.shields.io/badge/bootstrap-%23563D7C.svg?style=for-the-badge&logo=bootstrap&logoColor=white' />,
            </div>
          </div>
          <div className='flex'>
            <span className='lineNumber'>29 </span>
            <div className='flex pl-12 md:pl-24 flex-wrap'>
              <span className='text-[#9bb464]'>
                &#34;JavaScript / ES6 / TypeScript&#34;
              </span>
              <img className='h-7 w-auto ml-3 md:ml-4' src='https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white' />,

            </div>
          </div>
          <div className='flex'>
            <span className='lineNumber'>30 </span>
            <div className='flex pl-12 md:pl-24 flex-wrap'>
              <span className='text-[#9bb464]'>
                &#34;jQuery / React.js / Next.js&#34;
              </span>
              <img className='h-7 w-auto ml-3 md:ml-4' src='https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB' />
              <img className='h-7 w-auto ml-3 md:ml-4' src='https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white' />
            </div>
          </div>
          <div className='flex'>
            <span className='lineNumber'>31 </span>
            <div className='pl-8 md:pl-16'>
              <span className='text-[#9d68b2]'>]</span>
              ,
            </div>
          </div>
          <div className='flex'>
            <span className='lineNumber'>32 </span>
            <div className='pl-8 md:pl-16'>
              <span className='text-red-500'>backend</span> : <span className='text-[#9d68b2]'>[</span>
            </div>
          </div>
          <div className='flex'>
            <span className='lineNumber'>33 </span>
            <div className='flex pl-12 md:pl-24 flex-wrap'>
              <span className='text-[#9bb464]'>
                &#34;Node.js / Express&#34;
              </span>
              <img className='h-7 w-auto ml-3 md:ml-4' src='https://img.shields.io/badge/Express.js-404D59?style=for-the-badge' />,
            </div>
          </div>
          <div className='flex'>
            <span className='lineNumber'>34 </span>
            <div className='flex pl-12 md:pl-24 flex-wrap'>
              <span className='text-[#9bb464]'>
                &#34;Nest.js&#34;,
              </span>
              <img className='h-7 w-auto ml-3 md:ml-4' src='https://img.shields.io/badge/nestjs-%23E0234E.svg?style=for-the-badge&logo=nestjs&logoColor=white' />

            </div>
          </div>
          <div className='flex'>
            <span className='lineNumber'>35 </span>
            <div className='pl-8 md:pl-16'>
              <span className='text-[#9d68b2]'>]</span>,
            </div>
          </div>
          <div className='flex'>
            <span className='lineNumber'>36 </span>
            <div className='pl-8 md:pl-16 '>
              <span className='text-red-500'>database</span> : <span className='text-[#9d68b2]'>[</span>
            </div>
          </div>
          <div className='flex'>
            <span className='lineNumber'>37 </span>
            <div className='flex pl-12 md:pl-24 flex-wrap'>
              <span className='text-[#9bb464]'>
                &#34;MySQL&#34;
              </span>
              <img className='h-7 w-auto ml-3 md:ml-4' src='https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white' />,

            </div>
          </div>
          <div className='flex'>
            <span className='lineNumber'>38 </span>
            <div className='flex pl-12 md:pl-24 flex-wrap'>
              <span className='text-[#9bb464]'>
                &#34;PostgreSQL&#34;
              </span>
              <img className='h-7 w-auto ml-3 md:ml-4' src='https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white' />,
            </div>
          </div>
          <div className='flex'>
            <span className='lineNumber'>39 </span>
            <div className='flex pl-12 md:pl-24 flex-wrap'>
              <span className='text-[#9bb464]'>
                &#34;MongoDB&#34;
              </span>
              <img className='h-7 w-auto ml-3 md:ml-4' src='https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white' />,
            </div>
          </div>
          <div className='flex'>
            <span className='lineNumber'>40 </span>
            <div className='flex pl-12 md:pl-24 flex-wrap'>
              <span className='text-[#9bb464]'>
                &#34;Redis&#34;
              </span>
              <img className='h-7 w-auto ml-3 md:ml-4' src='https://img.shields.io/badge/redis-%23DD0031.svg?style=for-the-badge&logo=redis&logoColor=white' />

            </div>
          </div>
          <div className='flex'>
            <span className='lineNumber'>41 </span>
            <div className='pl-8 md:pl-16'>
              <span className='text-[#9d68b2]'>]</span>,
            </div>
          </div>
          <div className='flex'>
            <span className='lineNumber'>42 </span>
            <div className='pl-8 md:pl-16'>
              <span className='text-red-500'>others</span> : <span className='text-[#9d68b2]'>[</span>
            </div>
          </div>
          <div className='flex'>
            <span className='lineNumber'>43 </span>
            <div className='flex pl-12 md:pl-24 flex-wrap'>
              <span className='text-[#9bb464]'>
                &#34;GIT&#34;
              </span>
              <img className='h-7 w-auto ml-3 md:ml-4' src='https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white,' />
            </div>
          </div>
          <div className='flex'>
            <span className='lineNumber'>44 </span>
            <div className='flex pl-12 md:pl-24 flex-wrap'>
              <span className='text-[#9bb464]'>
                &#34;Firebase&#34;
              </span>
              <img className='h-7 w-auto ml-3 md:ml-4' src='https://img.shields.io/badge/firebase-%23039BE5.svg?style=for-the-badge&logo=firebase' />,

            </div>
          </div>
          <div className='flex'>
            <span className='lineNumber'>45 </span>
            <div className='flex pl-12 md:pl-24 flex-wrap'>
              <span className='text-[#9bb464]'>
                &#34;Socket.io&#34;
              </span>
              <img className='h-7 w-auto ml-3 md:ml-4' src='https://img.shields.io/badge/Socket.io-black?style=for-the-badge&logo=socket.io&badgeColor=010101' />,

            </div>
          </div>
          <div className='flex'>
            <span className='lineNumber'>46 </span>
            <div className='flex pl-12 md:pl-24 flex-wrap'>
              <span className='text-[#9bb464]'>
                &#34;Postman&#34;
              </span>
              <img className='h-7 w-auto ml-3 md:ml-4' src='https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white' />

            </div>
          </div>
          <div className='flex'>
            <span className='lineNumber'>47 </span>
            <div className='pl-8 md:pl-16'>
              <span className='text-[#9d68b2]'>]</span>
            </div>
          </div>
          <div className='flex'>
            <span className='lineNumber'>48 </span>
            <div className='pl-4 md:pl-8'><span className='text-[#bd7b4c]'>&#125;</span>;</div>
          </div>
          <h1 className='text-xl lg:text-2xl xl:text-3xl'><span className='lineNumber'>49 </span>&lt;/<span className='text-red-700'>skills</span>&gt;</h1>
        </div>

        <hr id='projects' className='mx-12'></hr>

        <div className='projects lg:text-[1.2rem] xl:text-[1.3rem] flex flex-col space-y-4 my-10'>
          <h1 className='text-xl lg:text-2xl xl:text-3xl'><span className='lineNumber'>50 </span>&lt;<span className='text-red-700'>projects</span>&gt;</h1>
          <div><span className='lineNumber'>51 </span><span className='text-[#f9db9b]'>Console</span>.<span className='text-[#1cbae8]'>log</span><span className='text-[#bd7b4c]'>( </span><span className='text-[#f9db9b]'>Dat</span>.<span className='text-red-500'>projects</span><span className='text-[#bd7b4c]'> )</span>;</div>
          <div className='flex'>
            <span className='lineNumber'>52 </span>
            <div className='pl-4 md:pl-8'><span className='text-[#bd7b4c]'>[</span></div>
          </div>

          {/* //First project */}
          <div className='flex'>
            <span className='lineNumber'>53 </span>
            <div className='pl-8 md:pl-16'>
              <span className='text-[#9d68b2]'> &#123;</span>
            </div>
          </div>
          <div className='flex'>
            <span className='lineNumber'>54 </span>
            <div className='pl-12 md:pl-24'>
              <span className='text-red-500'>id </span>
              :
              <span className='text-[#bd7b4c]'> 1 </span>,
            </div>
          </div>
          <div className='flex'>
            <span className='lineNumber'>55 </span>
            <div className='pl-12 md:pl-24'>
              <span className='text-red-500'>preview </span>
              :
            </div>
          </div>
          <div className='min-w-[50vw] h-auto pl-8 md:pl-32 sm:pr-12 md:pr-24'>
            <img loading='lazy' className='rounded-sm' src='https://user-images.githubusercontent.com/94024020/197675949-07688fe5-1eb9-4f86-a30e-0c52265ba98f.png' />,
          </div>
          <div className='flex'>
            <span className='lineNumber'>56 </span>
            <div className='pl-12 md:pl-24'>
              <span className='text-red-500'>name </span>
              :
              <span className='text-[#9bb464]'> &#34;Mujirushi&#34;</span>,
            </div>
          </div>
          <div className='flex'>
            <span className='lineNumber'>57 </span>
            <div className='pl-12 md:pl-24'>
              <span className='text-red-500'>description </span>
              :
              <span className='text-[#9bb464]'> &#34;Mujirushi is an ecommerce site that allows customers to find and buy Muji&apos;s products&#34;</span>,
            </div>
          </div>
          <div className='flex'>
            <span className='lineNumber'>58 </span>
            <div className='pl-12 md:pl-24'>
              <span className='text-red-500'>completedIn </span>
              :
              <span className='text-[#9bb464]'> &#34;2 months&#34;</span>,
            </div>
          </div>
          <div className='flex'>
            <span className='lineNumber'>59 </span>
            <div className='flex pl-12 md:pl-24 flex-wrap'>
              <span className='text-red-500'>techStack </span>
              :
              <img className='h-7 w-auto ml-3 md:ml-4' src='https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white' />
              <img className='h-7 w-auto ml-3 md:ml-4' src='https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white' />
              <img className='h-7 w-auto ml-3 md:ml-4' src='https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white' />
            </div>
          </div>
          <div className='flex'>
            <span className='lineNumber'>60 </span>
            <div className='pl-12 md:pl-24'>
              <span className='text-red-500'>code </span>
              :
              <span className='text-[#3b49df]'> <a href='https://github.com/dat-nguyen-2001/Mujirushi' target="_blank" rel="noopener noreferrer"><u>https://github.com/dat-nguyen-2001/Mujirushi</u></a></span>,
            </div>
          </div>
          <div className='flex'>
            <span className='lineNumber'>61 </span>
            <div className='pl-12 md:pl-24'>
              <span className='text-red-500'>site </span>
              :
              <span className='text-[#3b49df]'> <a href='https://mujirushi.netlify.app/' target="_blank" rel="noopener noreferrer"><u>mujirushi.netlify.app</u></a></span>
            </div>
          </div>
          <div className='flex'>
            <span className='lineNumber'>62 </span>
            <div className='pl-8 md:pl-16'>
              <span className='text-[#9d68b2]'> &#125;</span>,
            </div>
          </div>
          <div><span className='lineNumber'>63 </span></div>

          {/* //Second project */}
          <div className='flex'>
            <span className='lineNumber'>64 </span>
            <div className='pl-8 md:pl-16'>
              <span className='text-[#9d68b2]'> &#123;</span>
            </div>
          </div>
          <div className='flex'>
            <span className='lineNumber'>65 </span>
            <div className='pl-12 md:pl-24'>
              <span className='text-red-500'>id </span>
              :
              <span className='text-[#bd7b4c]'> 66 </span>,
            </div>
          </div>
          <div className='flex'>
            <span className='lineNumber'>67 </span>
            <div className='pl-12 md:pl-24'>
              <span className='text-red-500'>preview </span>
              :
            </div>
          </div>
          <div className='min-w-[50vw] h-auto pl-8 md:pl-32 sm:pr-16 md:pr-24'>
            <img loading='lazy' className='rounded-sm' src='https://user-images.githubusercontent.com/94024020/197683670-702d442d-dd1d-4d8d-8da8-aa7b0b72f935.png' />,
          </div>
          <div className='flex'>
            <span className='lineNumber'>68 </span>
            <div className='pl-12 md:pl-24'>
              <span className='text-red-500'>name </span>
              :
              <span className='text-[#9bb464]'> &#34;Nexflit&#34;</span>,
            </div>
          </div>
          <div className='flex'>
            <span className='lineNumber'>69 </span>
            <div className='pl-12 md:pl-24'>
              <span className='text-red-500'>description </span>
              :
              <span className='text-[#9bb464]'> &#34;A movies web app that allows user to watch favorite movies (actually trailers) using APIs of a third party&#34;</span>,
            </div>
          </div>
          <div className='flex'>
            <span className='lineNumber'>70 </span>
            <div className='pl-12 md:pl-24'>
              <span className='text-red-500'>completedIn </span>
              :
              <span className='text-[#9bb464]'> &#34;5 weeks&#34;</span>,
            </div>
          </div>
          <div className='flex'>
            <span className='lineNumber'>71 </span>
            <div className='flex pl-12 md:pl-24 flex-wrap'>
              <span className='text-red-500'>techStack </span>
              :
              <img className='h-7 w-auto ml-3 md:ml-4' src='https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white' />
              <img className='h-7 w-auto ml-3 md:ml-4' src='https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white' />
              <img className='h-7 w-auto ml-3 md:ml-4' src='https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white' />
              <img className='h-7 w-auto ml-3 md:ml-4' src='https://img.shields.io/badge/firebase-%23039BE5.svg?style=for-the-badge&logo=firebase' />
              <img className='h-7 w-auto ml-3 md:ml-4' src='https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white' />
              <img className='h-7 w-auto ml-3 md:ml-4' src='https://img.shields.io/badge/json%20web%20tokens-323330?style=for-the-badge&logo=json-web-tokens&logoColor=pink' />
            </div>
          </div>
          <div className='flex'>
            <span className='lineNumber'>72 </span>
            <div className='pl-12 md:pl-24'>
              <span className='text-red-500'>code </span>
              :
              <span className='text-[#3b49df]'> <a href='https://github.com/dat-nguyen-2001/NEXFLIT' target="_blank" rel="noopener noreferrer"><u>https://github.com/dat-nguyen-2001/NEXFLIT</u></a></span>,
            </div>
          </div>
          <div className='flex'>
            <span className='lineNumber'>73 </span>
            <div className='pl-12 md:pl-24'>
              <span className='text-red-500'>site </span>
              :
              <span className='text-[#3b49df]'> <a href='https://nexflit.netlify.app/' target="_blank" rel="noopener noreferrer"><u>nexflit.netlify.app</u></a></span>
            </div>
          </div>
          <div className='flex'>
            <span className='lineNumber'>74 </span>
            <div className='pl-8 md:pl-16'>
              <span className='text-[#9d68b2]'> &#125;</span>,
            </div>
          </div>
          <div><span className='lineNumber'>75 </span></div>

          {/* //Third project */}
          <div className='flex'>
            <span className='lineNumber'>76 </span>
            <div className='pl-8 md:pl-16'>
              <span className='text-[#9d68b2]'> &#123;</span>
            </div>
          </div>
          <div className='flex'>
            <span className='lineNumber'>77 </span>
            <div className='pl-12 md:pl-24'>
              <span className='text-red-500'>id </span>
              :
              <span className='text-[#bd7b4c]'> 3 </span>,
            </div>
          </div>
          <div className='flex'>
            <span className='lineNumber'>78 </span>
            <div className='pl-12 md:pl-24'>
              <span className='text-red-500'>preview </span>
              :
            </div>
          </div>
          <div className='w-full sm:min-w-[50vw] h-auto pl-8 md:pl-32 sm:pr-16 md:pr-24'>
            <img loading='lazy' className='rounded-sm' src='https://user-images.githubusercontent.com/94024020/197679626-24a4f4f2-cb92-4e74-8144-bfe9feeca1dc.png' />,
          </div>
          <div className='flex'>
            <span className='lineNumber'>79 </span>
            <div className='pl-12 md:pl-24'>
              <span className='text-red-500'>name </span>
              :
              <span className='text-[#9bb464]'> &#34;Dev.to&#34;</span>,
            </div>
          </div>
          <div className='flex'>
            <span className='lineNumber'>80 </span>
            <div className='pl-12 md:pl-24'>
              <span className='text-red-500'>description </span>
              :
              <span className='text-[#9bb464]'> &#34;A social web app like Dev.to. Here you can create articles, like or comment on articles, or save articles for later read.&#34;</span>,
            </div>
          </div>
          <div className='flex'>
            <span className='lineNumber'>81 </span>
            <div className='pl-12 md:pl-24'>
              <span className='text-red-500'>completedIn </span>
              :
              <span className='text-[#9bb464]'> &#34;3.5 weeks&#34;</span>,
            </div>
          </div>
          <div className='flex'>
            <span className='lineNumber'>82 </span>
            <div className='flex pl-12 md:pl-24 flex-wrap'>
              <span className='text-red-500'>techStack </span>
              :
              <img className='h-7 w-auto ml-3 md:ml-4' src='https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB' />
              <img className='h-7 w-auto ml-3 md:ml-4' src='https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white' />
              <img className='h-7 w-auto ml-3 md:ml-4' src='https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white' />
              <img className='h-7 w-auto ml-3 md:ml-4' src='https://img.shields.io/badge/nestjs-%23E0234E.svg?style=for-the-badge&logo=nestjs&logoColor=white' />
              <img className='h-7 w-auto ml-3 md:ml-4' src='https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white' />
              <img className='h-7 w-auto ml-3 md:ml-4' src='https://img.shields.io/badge/json%20web%20tokens-323330?style=for-the-badge&logo=json-web-tokens&logoColor=pink' />
              <img className='h-7 w-auto ml-3 md:ml-4' src='https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white' />
            </div>
          </div>
          <div className='flex'>
            <span className='lineNumber'>83 </span>
            <div className='pl-12 md:pl-24'>
              <span className='text-red-500'>code </span>
              :
              <span className='text-[#3b49df]'> <a href='https://github.com/dat-nguyen-2001/Dev.to' target="_blank" rel="noopener noreferrer"><u>https://github.com/dat-nguyen-2001/Dev.to</u></a></span>,
            </div>
          </div>
          <div className='flex'>
            <span className='lineNumber'>84 </span>
            <div className='pl-12 md:pl-24'>
              <span className='text-red-500'>site </span>
              :
              <span className='text-[#3b49df]'><a href='https://devtooo.netlify.app/' target="_blank" rel="noopener noreferrer"> <u>devtooo.netlify.app</u></a></span>
            </div>
          </div>
          <div className='flex'>
            <span className='lineNumber'>85 </span>
            <div className='pl-8 md:pl-16'>
              <span className='text-[#9d68b2]'> &#125;</span>,
            </div>
          </div>
          <div className='flex'>
            <span className='lineNumber'>86 </span>
            <div className='pl-4 md:pl-8'><span className='text-[#bd7b4c]'>]</span></div>
          </div>
          <h1 className='text-xl lg:text-2xl xl:text-3xl'><span className='lineNumber'>87 </span>&lt;/<span className='text-red-700'>projects</span>&gt;</h1>
        </div>

        <div className='text-center mt-20 mb-3 text-[.8rem] sm:text-base'>Designed & built by Dat Nguyen Van.</div>
      </div>
    </div>
  )
}
