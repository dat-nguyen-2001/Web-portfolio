import Head from 'next/head';
import EmailIcon from '@mui/icons-material/Email';
import Typewriter from 'typewriter-effect';
import 'animate.css';
import { useEffect } from 'react';


export default function Home() {
  useEffect(() => {
    window.onunload = function () {
      window.scrollTo(0, 0);
    }
  }, []);

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
      <main className='overflow-x-hidden h-screen'>
        <div className='z-50 fixed top-0 w-screen h-[60px] backdrop-blur-sm	border-b flex space-between items-center px-24 nav'>
          <div className='flex space-x-2 nav-left'>
            <img src='logo.png' className='w-6 h-6' />
            <span className='focus-in-expand'>Dat Nguyen Van</span>
            <span className='pl-20 flex items-center space-x-2'>
              <EmailIcon />
              <p>
                datnguyenftu210@gmail.com
              </p>
            </span>
          </div>
          <div className='flex space-x-12 nav-right'>
            <p>1.Home</p>
            <p>2.About</p>
            <p>3.Skills</p>
            <p>Projects</p>
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
                <img className='mediaIcon' src='https://img.icons8.com/doodle/40/000000/github--v1.png' />
              </a>
              <a href='https://stackoverflow.com/users/19545617/dat-nguyen' target="_blank" rel="noopener noreferrer">
                <img className='mediaIcon' src='https://img.icons8.com/external-tal-revivo-color-tal-revivo/40/000000/external-stack-overflow-is-a-question-and-answer-site-for-professional-logo-color-tal-revivo.png' />
              </a>
            </div>
            <div className='wobble-hor-bottom w-[10%] h-[70px] rounded-md cursor-pointer bg-blue-500 text-white text-3xl'>
              <p className='mx-auto w-[75%] py-3'>Resume</p>
            </div>
          </div>
        </div>
      </main>
      <hr className='mx-28'></hr>
      <div className='px-28 mt-10'>
        <div className='about text-[1.3rem] flex flex-col space-y-4 mb-10'>
          <h1 className='text-3xl'><span className='lineNumber'>1 </span>&lt;<span className='text-red-700'>about</span>&gt;</h1>
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
            <div className='pl-16'>
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
          <h1 className='text-3xl'><span className='lineNumber'>21 </span> &lt;/<span className='text-red-700'>about</span>&gt;</h1>
        </div>

        <hr></hr>

        <div className='skills text-[1.3rem] flex flex-col space-y-4 my-10'>
          <h1 className='text-3xl'><span className='lineNumber'>22 </span>&lt;<span className='text-red-700'>skills</span>&gt;</h1>
          <div><span className='lineNumber'>23 </span><span className='text-[#f9db9b]'>Console</span>.<span className='text-[#1cbae8]'>log</span><span className='text-[#bd7b4c]'>( </span><span className='text-[#f9db9b]'>Dat</span>.<span className='text-red-500'>skills</span><span className='text-[#bd7b4c]'> )</span>;</div>
          <div className='flex'>
            <span className='lineNumber'>24 </span>
            <div className='pl-8 text-[#bd7b4c]'>&#123;</div>
          </div>
          <div className='flex'>
            <span className='lineNumber'>25 </span>
            <div className='pl-16'>
              <span className='text-red-500'>frontend</span> : <span className='text-[#9d68b2]'>[</span>
            </div>
          </div>
          <div className='flex'>
            <span className='lineNumber'>26 </span>
            <div className='flex pl-24'>
              <span className='text-[#9bb464]'>
                &#34;HTML / HTML5&#34;
              </span>
              <img className='ml-4' src='https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white' />,
            </div>
          </div>
          <div className='flex'>
            <span className='lineNumber'>27 </span>
            <div className='flex pl-24'>
              <span className='text-[#9bb464]'>
                &#34;CSS / CSS3 / SCSS&#34;
              </span>
              <img className='ml-4' src='https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white' />,
            </div>
          </div>
          <div className='flex'>
            <span className='lineNumber'>28 </span>
            <div className='flex pl-24'>
              <span className='text-[#9bb464]'>
                &#34;TailwindCSS / Bootstrap4&#34;
              </span>
              <img className='ml-4' src='https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white' />
              <img className='ml-4' src='https://img.shields.io/badge/bootstrap-%23563D7C.svg?style=for-the-badge&logo=bootstrap&logoColor=white' />,
            </div>
          </div>
          <div className='flex'>
            <span className='lineNumber'>29 </span>
            <div className='flex pl-24'>
              <span className='text-[#9bb464]'>
                &#34;JavaScript / ES6 / TypeScript&#34;
              </span>
              <img className='ml-4' src='https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white' />,

            </div>
          </div>
          <div className='flex'>
            <span className='lineNumber'>30 </span>
            <div className='flex pl-24'>
              <span className='text-[#9bb464]'>
                &#34;jQuery / React.js / Next.js&#34;
              </span>
              <img className='ml-4' src='https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB' />
              <img className='ml-4' src='https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white' />
            </div>
          </div>
          <div className='flex'>
            <span className='lineNumber'>31 </span>
            <div className='pl-16'>
              <span className='text-[#9d68b2]'>]</span>
              ,
            </div>
          </div>
          <div className='flex'>
            <span className='lineNumber'>32 </span>
            <div className='pl-16'>
              <span className='text-red-500'>backend</span> : <span className='text-[#9d68b2]'>[</span>
            </div>
          </div>
          <div className='flex'>
            <span className='lineNumber'>33 </span>
            <div className='flex pl-24'>
              <span className='text-[#9bb464]'>
                &#34;Node.js / Express&#34;
              </span>
              <img className='ml-4' src='https://img.shields.io/badge/Express.js-404D59?style=for-the-badge' />,
            </div>
          </div>
          <div className='flex'>
            <span className='lineNumber'>34 </span>
            <div className='flex pl-24'>
              <span className='text-[#9bb464]'>
                &#34;Nest.js&#34;,
              </span>
              <img className='ml-4' src='https://img.shields.io/badge/nestjs-%23E0234E.svg?style=for-the-badge&logo=nestjs&logoColor=white' />

            </div>
          </div>
          <div className='flex'>
            <span className='lineNumber'>35 </span>
            <div className='pl-16'>
              <span className='text-[#9d68b2]'>]</span>,
            </div>
          </div>
          <div className='flex'>
            <span className='lineNumber'>36 </span>
            <div className='pl-16'>
              <span className='text-red-500'>database</span> : <span className='text-[#9d68b2]'>[</span>
            </div>
          </div>
          <div className='flex'>
            <span className='lineNumber'>37 </span>
            <div className='flex pl-24'>
              <span className='text-[#9bb464]'>
                &#34;MySQL&#34;
              </span>
              <img className='ml-4' src='https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white' />,

            </div>
          </div>
          <div className='flex'>
            <span className='lineNumber'>38 </span>
            <div className='flex pl-24'>
              <span className='text-[#9bb464]'>
                &#34;PostgreSQL&#34;
              </span>
              <img className='ml-4' src='https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white' />,

            </div>
          </div>
          <div className='flex'>
            <span className='lineNumber'>39 </span>
            <div className='flex pl-24'>
              <span className='text-[#9bb464]'>
                &#34;MongoDB&#34;
              </span>
              <img className='ml-4' src='https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white' />,

            </div>
          </div>
          <div className='flex'>
            <span className='lineNumber'>40 </span>
            <div className='flex pl-24'>
              <span className='text-[#9bb464]'>
                &#34;Redis&#34;
              </span>
              <img className='ml-4' src='https://img.shields.io/badge/redis-%23DD0031.svg?style=for-the-badge&logo=redis&logoColor=white' />

            </div>
          </div>
          <div className='flex'>
            <span className='lineNumber'>41 </span>
            <div className='pl-16'>
              <span className='text-[#9d68b2]'>]</span>,
            </div>
          </div>
          <div className='flex'>
            <span className='lineNumber'>42 </span>
            <div className='pl-16'>
              <span className='text-red-500'>others</span> : <span className='text-[#9d68b2]'>[</span>
            </div>
          </div>
          <div className='flex'>
            <span className='lineNumber'>43 </span>
            <div className='flex pl-24'>
              <span className='text-[#9bb464]'>
                &#34;GIT&#34;
              </span>
              <img className='ml-4' src='https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white,' />
            </div>
          </div>
          <div className='flex'>
            <span className='lineNumber'>44 </span>
            <div className='flex pl-24'>
              <span className='text-[#9bb464]'>
                &#34;Firebase&#34;
              </span>
              <img className='ml-4' src='https://img.shields.io/badge/firebase-%23039BE5.svg?style=for-the-badge&logo=firebase' />,

            </div>
          </div>
          <div className='flex'>
            <span className='lineNumber'>45 </span>
            <div className='flex pl-24'>
              <span className='text-[#9bb464]'>
                &#34;Socket.io&#34;
              </span>
              <img className='ml-4' src='https://img.shields.io/badge/Socket.io-black?style=for-the-badge&logo=socket.io&badgeColor=010101' />,

            </div>
          </div>
          <div className='flex'>
            <span className='lineNumber'>46 </span>
            <div className='flex pl-24'>
              <span className='text-[#9bb464]'>
                &#34;Postman&#34;
              </span>
              <img className='ml-4' src='https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white' />

            </div>
          </div>
          <div className='flex'>
            <span className='lineNumber'>47 </span>
            <div className='pl-16'>
              <span className='text-[#9d68b2]'>]</span>
            </div>
          </div>
          <div className='flex'>
            <span className='lineNumber'>48 </span>
            <div className='pl-8'><span className='text-[#bd7b4c]'>&#125;</span>;</div>
          </div>
          <h1 className='text-3xl'><span className='lineNumber'>49 </span>&lt;/<span className='text-red-700'>skills</span>&gt;</h1>
        </div>

        <hr></hr>

        <div className='projects text-[1.3rem] flex flex-col space-y-4 my-10'>
          <h1 className='text-3xl'><span className='lineNumber'>50 </span>&lt;<span className='text-red-700'>projects</span>&gt;</h1>
          <div><span className='lineNumber'>51 </span><span className='text-[#f9db9b]'>Console</span>.<span className='text-[#1cbae8]'>log</span><span className='text-[#bd7b4c]'>( </span><span className='text-[#f9db9b]'>Dat</span>.<span className='text-red-500'>projects</span><span className='text-[#bd7b4c]'> )</span>;</div>
          <div className='flex'>
            <span className='lineNumber'>52 </span>
            <div className='pl-8'><span className='text-[#bd7b4c]'>[</span></div>
          </div>

          {/* //First project */}
          <div className='flex'>
            <span className='lineNumber'>53 </span>
            <div className='pl-16'>
              <span className='text-[#9d68b2]'> &#123;</span>
            </div>
          </div>
          <div className='flex'>
            <span className='lineNumber'>54 </span>
            <div className='pl-24'>
              <span className='text-red-500'>id </span>
              :
              <span className='text-[#bd7b4c]'> 1 </span>,
            </div>
          </div>
          <div className='flex'>
            <span className='lineNumber'>55 </span>
            <div className='pl-24'>
              <span className='text-red-500'>preview </span>
              :
            </div>
          </div>
          <div className='w-[50vw] h-auto pl-32'>
            <img className='' src='https://user-images.githubusercontent.com/94024020/197675949-07688fe5-1eb9-4f86-a30e-0c52265ba98f.png' />,
          </div>
          <div className='flex'>
            <span className='lineNumber'>56 </span>
            <div className='pl-24'>
              <span className='text-red-500'>name </span>
              :
              <span className='text-[#9bb464]'> &#34;Mujirushi&#34;</span>,
            </div>
          </div>
          <div className='flex'>
            <span className='lineNumber'>57 </span>
            <div className='pl-24'>
              <span className='text-red-500'>description </span>
              :
              <span className='text-[#9bb464]'> &#34;Mujirushi is an ecommerce site that allows customers to find and buy Muji's products&#34;</span>,
            </div>
          </div>
          <div className='flex'>
            <span className='lineNumber'>58 </span>
            <div className='pl-24'>
              <span className='text-red-500'>completedIn </span>
              :
              <span className='text-[#9bb464]'> &#34;1.5 months&#34;</span>,
            </div>
          </div>
          <div className='flex'>
            <span className='lineNumber'>59 </span>
            <div className='flex pl-24'>
              <span className='text-red-500'>techStack </span>
              :
              <img className='ml-4' src='https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white' />
              <img className='ml-4' src='https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white' />
              <img className='ml-4' src='https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white' />
            </div>
          </div>
          <div className='flex'>
            <span className='lineNumber'>60 </span>
            <div className='pl-24'>
              <span className='text-red-500'>code </span>
              :
              <span className='text-[#9bb464]'> <a href='https://github.com/dat-nguyen-2001/Mujirushi' target="_blank" rel="noopener noreferrer">https://github.com/dat-nguyen-2001/Mujirushi</a></span>,
            </div>
          </div>
          <div className='flex'>
            <span className='lineNumber'>61 </span>
            <div className='pl-24'>
              <span className='text-red-500'>site </span>
              :
              <span className='text-[#9bb464]'> <a href='https://mujirushi.netlify.app/' target="_blank" rel="noopener noreferrer">mujirushi.netlify.app</a></span>
            </div>
          </div>
          <div className='flex'>
            <span className='lineNumber'>62 </span>
            <div className='pl-16'>
              <span className='text-[#9d68b2]'> &#125;</span>,
            </div>
          </div>
          <div><span className='lineNumber'>63 </span></div>

          {/* //Second project */}
          <div className='flex'>
            <span className='lineNumber'>64 </span>
            <div className='pl-16'>
              <span className='text-[#9d68b2]'> &#123;</span>
            </div>
          </div>
          <div className='flex'>
            <span className='lineNumber'>65 </span>
            <div className='pl-24'>
              <span className='text-red-500'>id </span>
              :
              <span className='text-[#bd7b4c]'> 66 </span>,
            </div>
          </div>
          <div className='flex'>
            <span className='lineNumber'>67 </span>
            <div className='pl-24'>
              <span className='text-red-500'>preview </span>
              :
            </div>
          </div>
          <div className='w-[50vw] h-auto pl-32'>
            <img src='https://user-images.githubusercontent.com/94024020/197683670-702d442d-dd1d-4d8d-8da8-aa7b0b72f935.png' />,
          </div>
          <div className='flex'>
            <span className='lineNumber'>68 </span>
            <div className='pl-24'>
              <span className='text-red-500'>name </span>
              :
              <span className='text-[#9bb464]'> &#34;Nexflit&#34;</span>,
            </div>
          </div>
          <div className='flex'>
            <span className='lineNumber'>69 </span>
            <div className='pl-24'>
              <span className='text-red-500'>description </span>
              :
              <span className='text-[#9bb464]'> &#34;A movies web app that allows user to watch favorite movies (actually trailers) using APIs of a third party&#34;</span>,
            </div>
          </div>
          <div className='flex'>
            <span className='lineNumber'>70 </span>
            <div className='pl-24'>
              <span className='text-red-500'>completedIn </span>
              :
              <span className='text-[#9bb464]'> &#34;5 weeks&#34;</span>,
            </div>
          </div>
          <div className='flex'>
            <span className='lineNumber'>71 </span>
            <div className='flex pl-24'>
              <span className='text-red-500'>techStack </span>
              :
              <img className='ml-4' src='https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white' />
              <img className='ml-4' src='https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white' />
              <img className='ml-4' src='https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white' />
              <img className='ml-4' src='https://img.shields.io/badge/firebase-%23039BE5.svg?style=for-the-badge&logo=firebase' />
              <img className='ml-4' src='https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white' />
              <img className='ml-4' src='https://img.shields.io/badge/json%20web%20tokens-323330?style=for-the-badge&logo=json-web-tokens&logoColor=pink' />
            </div>
          </div>
          <div className='flex'>
            <span className='lineNumber'>72 </span>
            <div className='pl-24'>
              <span className='text-red-500'>code </span>
              :
              <span className='text-[#9bb464]'> <a href='https://github.com/dat-nguyen-2001/NEXFLIT' target="_blank" rel="noopener noreferrer">https://github.com/dat-nguyen-2001/NEXFLIT</a></span>,
            </div>
          </div>
          <div className='flex'>
            <span className='lineNumber'>73 </span>
            <div className='pl-24'>
              <span className='text-red-500'>site </span>
              :
              <span className='text-[#9bb464]'> <a href='https://nexflit.netlify.app/' target="_blank" rel="noopener noreferrer">nexflit.netlify.app</a></span>
            </div>
          </div>
          <div className='flex'>
            <span className='lineNumber'>74 </span>
            <div className='pl-16'>
              <span className='text-[#9d68b2]'> &#125;</span>,
            </div>
          </div>
          <div><span className='lineNumber'>75 </span></div>

          {/* //Third project */}
          <div className='flex'>
            <span className='lineNumber'>76 </span>
            <div className='pl-16'>
              <span className='text-[#9d68b2]'> &#123;</span>
            </div>
          </div>
          <div className='flex'>
            <span className='lineNumber'>77 </span>
            <div className='pl-24'>
              <span className='text-red-500'>id </span>
              :
              <span className='text-[#bd7b4c]'> 3 </span>,
            </div>
          </div>
          <div className='flex'>
            <span className='lineNumber'>78 </span>
            <div className='pl-24'>
              <span className='text-red-500'>preview </span>
              :
            </div>
          </div>
          <div className='w-[50vw] h-auto pl-32'>
            <img src='https://user-images.githubusercontent.com/94024020/197679626-24a4f4f2-cb92-4e74-8144-bfe9feeca1dc.png' />,
          </div>
          <div className='flex'>
            <span className='lineNumber'>79 </span>
            <div className='pl-24'>
              <span className='text-red-500'>name </span>
              :
              <span className='text-[#9bb464]'> &#34;Dev.to&#34;</span>,
            </div>
          </div>
          <div className='flex'>
            <span className='lineNumber'>80 </span>
            <div className='pl-24'>
              <span className='text-red-500'>description </span>
              :
              <span className='text-[#9bb464]'> &#34;A social web app like Dev.to. Here you can create articles, like or comment on articles, or save articles for later read.&#34;</span>,
            </div>
          </div>
          <div className='flex'>
            <span className='lineNumber'>81 </span>
            <div className='pl-24'>
              <span className='text-red-500'>completedIn </span>
              :
              <span className='text-[#9bb464]'> &#34;3.5 weeks&#34;</span>,
            </div>
          </div>
          <div className='flex'>
            <span className='lineNumber'>82 </span>
            <div className='flex pl-24'>
              <span className='text-red-500'>techStack </span>
              :
              <img className='ml-4' src='https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB' />
              <img className='ml-4' src='https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white' />
              <img className='ml-4' src='https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white' />
              <img className='ml-4' src='https://img.shields.io/badge/nestjs-%23E0234E.svg?style=for-the-badge&logo=nestjs&logoColor=white' />
              <img className='ml-4' src='https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white' />
              <img className='ml-4' src='https://img.shields.io/badge/json%20web%20tokens-323330?style=for-the-badge&logo=json-web-tokens&logoColor=pink' />
              <img className='ml-4' src='https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white' />
            </div>
          </div>
          <div className='flex'>
            <span className='lineNumber'>83 </span>
            <div className='pl-24'>
              <span className='text-red-500'>code </span>
              :
              <span className='text-[#9bb464]'> <a href='https://github.com/dat-nguyen-2001/Dev.to' target="_blank" rel="noopener noreferrer">https://github.com/dat-nguyen-2001/Dev.to</a></span>,
            </div>
          </div>
          <div className='flex'>
            <span className='lineNumber'>84 </span>
            <div className='pl-24'>
              <span className='text-red-500'>site </span>
              :
              <span className='text-[#9bb464]'> <a href='https://devtooo.netlify.app/' target="_blank" rel="noopener noreferrer">devtooo.netlify.app</a></span>
            </div>
          </div>
          <div className='flex'>
            <span className='lineNumber'>85 </span>
            <div className='pl-16'>
              <span className='text-[#9d68b2]'> &#125;</span>,
            </div>
          </div>
          <div className='flex'>
            <span className='lineNumber'>86 </span>
            <div className='pl-8'><span className='text-[#bd7b4c]'>]</span></div>
          </div>
          <h1 className='text-3xl'><span className='lineNumber'>87 </span>&lt;/<span className='text-red-700'>projects</span>&gt;</h1>
        </div>

        <hr></hr>
      </div>
    </div>
  )
}
