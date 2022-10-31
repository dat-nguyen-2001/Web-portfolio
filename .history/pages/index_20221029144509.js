import Head from 'next/head';
import EmailIcon from '@mui/icons-material/Email';
import Typewriter from 'typewriter-effect';

export default function Home() {
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
                <img className='mediaIcon' src='https://img.icons8.com/doodle/40/000000/github--v1.png' />
              </a>
              <a href='https://stackoverflow.com/users/19545617/dat-nguyen' target="_blank" rel="noopener noreferrer">
                <img className='mediaIcon' src='https://img.icons8.com/external-tal-revivo-color-tal-revivo/40/000000/external-stack-overflow-is-a-question-and-answer-site-for-professional-logo-color-tal-revivo.png' />
              </a>
            </div>
            <div className=' w-[10%] h-[70px] rounded-md cursor-pointer bg-blue-500 text-white text-3xl'>
              <p className='mx-auto w-[75%] py-3'>Resume</p>
            </div>
          </div>
        </div>
      </main>
      <hr className='opacity-30 mx-28'></hr>
      <div className='px-28 mt-10'>
        <div className='about text-2xl flex flex-col space-y-4 mb-10'>
          <h1 className='text-4xl text-red-700'>&lt;about&gt;</h1>
          <div className='text-[#b3b47d]'>
            <span className='text-[#9d68b2]'>const </span>
            Dat
            <span> =</span>
            <span className='text-[#bd7b4c]'> &#123;</span>
          </div>
          <div className='pl-8'>
            <span className='text-red-500'>name </span>
            :
            <span className='text-[#5c9ab2]'> &#123;</span>

          </div>
          <div className='pl-16'>
            <span className='text-red-500'>firstName </span>
            :
            <span className='text-[#9bb464]'> &#34;Dat&#34;</span>,
          </div>
          <div className='pl-16'>
            <span className='text-red-500'>lastName </span>
            :
            <span className='text-[#9bb464]'> &#34;Nguyen Van&#34;</span>,
          </div>
          <div className='pl-8'>
            <span className='text-[#5c9ab2]'> &#125;</span>,
          </div>
          <div className='pl-8'>
            <span className='text-red-500'>from </span>
            :
            <span className='text-[#9bb464]'> &#34;Ha Noi, Viet Nam&#34;</span>,
          </div>
          <div className='pl-8'>
            <span className='text-red-500'>job </span>
            :
            <span className='text-[#5c9ab2]'> &#123;</span>
          </div>
          <div className='pl-16'>
          <span className='text-red-500'>title </span>
            :
            <span className='text-[#9bb464]'> &#34;Software Engineer&#34;</span>,
          </div>
          <div className='pl-16'>
          <span className='text-red-500'>detail </span>
            :
            <span className='text-[#bd7b4c]'> [ </span>
            <span className='text-[#9bb464]'>&#34;Progressive Web Applications&#34;</span>,
            <span className='text-[#9bb464]'> &#34;Responsive Layouts&#34;</span>,
            <span className='text-[#9bb464]'> &#34;Fix Problems and Speed Up Your Website&#34;</span>
            <span className='text-[#bd7b4c]'> ] </span>
          </div>
          <div className='pl-8'>
            <span className='text-[#5c9ab2]'> &#125;</span>,
          </div>
          <div className='pl-8'>
            <span className='text-red-500'>others</span>
            : 
            <span className='text-[#5c9ab2]'> &#123; </span>
          </div>
          <div className='pl-16'>
            languages: &#123;
          </div>
          <div className='pl-24'>
            native: &#34;Vietnamese&#34;,
          </div>
          <div className='pl-24'>
            proficient: &#34;English&#34;,
          </div>
          <div className='pl-24'>
            intermediate: &#34;Japanese&#34;
          </div>
          <div className='pl-16'>
            &#125;,
          </div>
          <div className='pl-16'>
            interests: [ &#34;Reading&#34;, &#34;Food&#34;, &#34;Music&#34; ]
          </div>
          <div className='pl-8'>
            &#125;,
          </div>
          <div>
            &#125;;
          </div>
          <h1 className='text-4xl'>&lt;/about&gt;</h1>
        </div>

        <hr className='opacity-30'></hr>

        <div className='skills text-2xl flex flex-col space-y-4 my-10'>
          <h1 className='text-4xl'>&lt;skills&gt;</h1>
          <div>Console.log(Dat.skills);</div>
          <div className='pl-8'>&#123;</div>
          <div className='pl-16'>
            frontend: [
          </div>
          <div className='flex pl-24'>
            &#34;HTML / HTML5&#34;
            <img className='ml-4' src='https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white' />,
          </div>
          <div className='flex pl-24'>
            &#34;CSS / CSS3 / SCSS&#34;
            <img className='ml-4' src='https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white' />,
          </div>
          <div className='flex pl-24'>
            &#34;TailwindCSS / Bootstrap4&#34;
            <img className='ml-4' src='https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white' />
            <img className='ml-4' src='https://img.shields.io/badge/bootstrap-%23563D7C.svg?style=for-the-badge&logo=bootstrap&logoColor=white' />,

          </div>
          <div className='flex pl-24'>
            &#34;JavaScript / ES6 / TypeScript&#34;
            <img className='ml-4' src='https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white' />,

          </div>
          <div className='flex pl-24'>
            &#34;jQuery / React.js / Next.js&#34;
            <img className='ml-4' src='https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB' />
            <img className='ml-4' src='https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white' />
          </div>
          <div className='pl-16'>
            ],
          </div>
          <div className='pl-16'>
            backend: [
          </div>
          <div className='flex pl-24'>
            &#34;Node.js / Express&#34;
            <img className='ml-4' src='https://img.shields.io/badge/Express.js-404D59?style=for-the-badge' />,

          </div>
          <div className='flex pl-24'>
            &#34;Nest.js&#34;,
            <img className='ml-4' src='https://img.shields.io/badge/nestjs-%23E0234E.svg?style=for-the-badge&logo=nestjs&logoColor=white' />

          </div>
          <div className='pl-16'>
            ],
          </div>
          <div className='pl-16'>
            database: [
          </div>
          <div className='flex pl-24'>
            &#34;MySQL&#34;
            <img className='ml-4' src='https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white' />,

          </div>
          <div className='flex pl-24'>
            &#34;PostgreSQL&#34;
            <img className='ml-4' src='https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white' />,

          </div>
          <div className='flex pl-24'>
            &#34;MongoDB&#34;
            <img className='ml-4' src='https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white' />,

          </div>
          <div className='flex pl-24'>
            &#34;Redis&#34;
            <img className='ml-4' src='https://img.shields.io/badge/redis-%23DD0031.svg?style=for-the-badge&logo=redis&logoColor=white' />

          </div>
          <div className='pl-16'>
            ],
          </div>
          <div className='pl-16'>
            others: [
          </div>
          <div className='flex pl-24'>
            &#34;GIT&#34;
            <img className='ml-4' src='https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white,
'/>

          </div>
          <div className='flex pl-24'>
            &#34;Firebase&#34;
            <img className='ml-4' src='https://img.shields.io/badge/firebase-%23039BE5.svg?style=for-the-badge&logo=firebase' />,

          </div>
          <div className='flex pl-24'>
            &#34;Socket.io&#34;
            <img className='ml-4' src='https://img.shields.io/badge/Socket.io-black?style=for-the-badge&logo=socket.io&badgeColor=010101' />,

          </div>
          <div className='flex pl-24'>
            &#34;Postman&#34;
            <img className='ml-4' src='https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white' />

          </div>
          <div className='pl-16'>
            ]
          </div>

          <div className='pl-8'>&#125;;</div>
          <h1 className='text-4xl'>&lt;/skills&gt;</h1>
        </div>

        <hr className='opacity-30'></hr>

        <div className='projects text-2xl flex flex-col space-y-4 my-10'>
          <h1 className='text-4xl'>&lt;projects&gt;</h1>
          <div>Console.log(Dat.projects);</div>
          <div className='pl-8'>[</div>

          {/* //First project */}
          <div className='pl-16'>
            &#123;
          </div>
          <div className='pl-24'>
            id: 1,
          </div>
          <div className='pl-24'>
            preview:
          </div>
          <div className='w-[50vw] h-auto pl-32'>
            <img src='https://user-images.githubusercontent.com/94024020/197675949-07688fe5-1eb9-4f86-a30e-0c52265ba98f.png' />,
          </div>
          <div className='pl-24'>
            name: "Mujirushi",
          </div>
          <div className='pl-24'>
            description: "Mujirushi is an ecommerce site that allows customers to find and buy Muji's products",
          </div>
          <div className='pl-24'>
            completedIn: "1.5 months",
          </div>
          <div className='flex pl-24'>
            techStack:
            <img className='ml-4' src='https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white' />
            <img className='ml-4' src='https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white' />
            <img className='ml-4' src='https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white' />
          </div>
          <div className='pl-24'>
            code: <a href='https://github.com/dat-nguyen-2001/Mujirushi' target="_blank" rel="noopener noreferrer">https://github.com/dat-nguyen-2001/Mujirushi</a>,
          </div>
          <div className='pl-24'>
            site: <a href='https://mujirushi.netlify.app/' target="_blank" rel="noopener noreferrer">mujirushi.netlify.app</a>
          </div>
          <div className='pl-16'>
            &#125;,
          </div>
          <div></div>

          {/* //Second project */}
          <div className='pl-16'>
            &#123;
          </div>
          <div className='pl-24'>
            id: 2,
          </div>
          <div className='pl-24'>
            preview:
          </div>
          <div className='w-[50vw] h-auto pl-32'>
            <img src='https://user-images.githubusercontent.com/94024020/197683670-702d442d-dd1d-4d8d-8da8-aa7b0b72f935.png' />,
          </div>
          <div className='pl-24'>
            name: "Nexflit",
          </div>
          <div className='pl-24'>
            description: "A movies web app that allows user to watch favorite movies (actually trailers) using APIs of a third party",
          </div>
          <div className='pl-24'>
            completedIn: "5 weeks",
          </div>
          <div className='flex pl-24'>
            techStack:
            <img className='ml-4' src='https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white' />
            <img className='ml-4' src='https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white' />
            <img className='ml-4' src='https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white' />
            <img className='ml-4' src='https://img.shields.io/badge/firebase-%23039BE5.svg?style=for-the-badge&logo=firebase' />
            <img className='ml-4' src='https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white' />
            <img className='ml-4' src='https://img.shields.io/badge/json%20web%20tokens-323330?style=for-the-badge&logo=json-web-tokens&logoColor=pink' />
          </div>
          <div className='pl-24'>
            code: <a href='https://github.com/dat-nguyen-2001/NEXFLIT' target="_blank" rel="noopener noreferrer">https://github.com/dat-nguyen-2001/NEXFLIT</a>,
          </div>
          <div className='pl-24'>
            site: <a href='https://nexflit.netlify.app/' target="_blank" rel="noopener noreferrer">nexflit.netlify.app</a>
          </div>
          <div className='pl-16'>
            &#125;,
          </div>
          <div></div>
          {/* //Third project */}
          <div className='pl-16'>
            &#123;
          </div>
          <div className='pl-24'>
            id: 3,
          </div>
          <div className='pl-24'>
            preview:
          </div>
          <div className='w-[50vw] h-auto pl-32'>
            <img src='https://user-images.githubusercontent.com/94024020/197679626-24a4f4f2-cb92-4e74-8144-bfe9feeca1dc.png' />,
          </div>
          <div className='pl-24'>
            name: "Dev.to",
          </div>
          <div className='pl-24'>
            description: "A social web app like Dev.to. Here you can create articles, like or comment on articles, or save articles for later read.",
          </div>
          <div className='pl-24'>
            completedIn: "3.5 weeks",
          </div>
          <div className='flex pl-24'>
            techStack:
            <img className='ml-4' src='https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB' />
            <img className='ml-4' src='https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white' />
            <img className='ml-4' src='https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white' />
            <img className='ml-4' src='https://img.shields.io/badge/nestjs-%23E0234E.svg?style=for-the-badge&logo=nestjs&logoColor=white' />
            <img className='ml-4' src='https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white' />
            <img className='ml-4' src='https://img.shields.io/badge/json%20web%20tokens-323330?style=for-the-badge&logo=json-web-tokens&logoColor=pink' />
            <img className='ml-4' src='https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white' />
          </div>
          <div className='pl-24'>
            code: <a href='https://github.com/dat-nguyen-2001/Dev.to' target="_blank" rel="noopener noreferrer">https://github.com/dat-nguyen-2001/Dev.to</a>,
          </div>
          <div className='pl-24'>
            site: <a href='https://devtooo.netlify.app/' target="_blank" rel="noopener noreferrer">devtooo.netlify.app</a>
          </div>
          <div className='pl-16'>
            &#125;,
          </div>
          <div className='pl-8'>
            ]
          </div>
          <h1 className='text-4xl'>&lt;/projects&gt;</h1>
        </div>

        <hr className='opacity-30'></hr>

        <div className='contact text-2xl flex flex-col space-y-4 mb-10'></div>
      </div>
    </div>
  )
}
