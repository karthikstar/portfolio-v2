'use client';

import Image from 'next/image' // allows us to customise images and optimise them
import { Inter } from 'next/font/google'
import {BsFillMoonStarsFill} from 'react-icons/bs'
import {AiFillTwitterCircle, AiFillLinkedin, AiFillYoutube} from 'react-icons/ai'
// Import images
import deved from '../../public/dev-pic-wave.png'
import design from '../../public/design.png'
import code from '../../public/code.png'
import consulting from '../../public/consulting.png'

import web1 from '../../public/work1.png'
import web2 from '../../public/work2.png'
import web3 from '../../public/work3.png'
import web4 from '../../public/work4.png'
import web5 from '../../public/work5-3.png'
import web6 from '../../public/work6.png'

import {useState} from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? 'dark' : ''}>
        <title>Elangovan Karthikeyan Portfolio</title>
        <link rel="icon" href ="/favicon.ico"/>
      <main className='bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900'>
        <section className='min-h-screen'>
          <nav className='py-10 mb-12 flex justify-between dark:text-white'>
            <h1 className='text-xl font-burton '>karthikstar</h1>
            <ul className='flex items-center'>
              <li>
                <BsFillMoonStarsFill onClick = {() => setDarkMode(!darkMode)} className='cursor-pointer text-2xl'/>
              </li>
              <li><a className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8" href="https://drive.google.com/file/d/1dE7WTHm_YhmBBvTVjL7QIyLnKTBpuXL0/view?usp=share_link" target="_blank">Resume</a></li>
            </ul>
          </nav>
          <div className='text-center p-10 py-10'>
            <h2 className='text-5xl py-2 text-teal-600 dark:text-teal-400 font-medium md:text-6xl'>Elangovan Karthikeyan</h2>
            <h3 className='text-2xl py-2 md:text-3xl dark:text-white'>Developer and Innovator.</h3>
            <p className='text-md py-5 leading-8 text-gray-800 md:text-xl max-w-lg mx-auto dark:text-gray-400'>Young driven individual who loves developing products.
              A sucker for new technologies and business ideas. Hit me up for a cup of coffee! </p>
          </div>
          <div className='text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400'>
            <AiFillTwitterCircle />
            <AiFillLinkedin />
            <AiFillYoutube />
          </div>
          <div>
            <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96">
              <Image src={deved} layout="fill" objectFit='cover'/>
            </div>
          </div>
        </section>
        <section className='mt-10'>
          <div>
            <h3 className='text-3xl py-1 dark:text-white'>Areas Of Interest</h3>
            <p className='text-md py-2 leading-8 text-gray-800 dark:text-gray-200'>
              Since the beginning of my journey as a developer and innovator, I've engaged in several
              <span className='text-teal-500'> internships, hackathons, school projects and personal projects</span> and 
              have collaborated with cool friends to build stuff that could potentially benefit the people around us.
            </p>
            <p className='text-md py-2 leading-8 text-gray-800 dark:text-gray-200'>
              Thus, I have had the opportunity to take on a diverse range of projects, such as in Software Development, Data Science and AI, Business Analytics and Consulting. 
            </p>
          </div>
          <div className='lg:flex gap-10'>
          <div className='text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white'>
              <Image src={code} width={100} height={100} className="mx-auto"/>
              <h3 className='text-lg font-medium pt-8 pb-2'>Software Development</h3>
              <p className='py-2'>
                Building full-stack applications for personal, school and work use. Dabbling with website and mobile applications.
              </p>
              <h4 className='py-4 text-teal-600'>Technologies I dabble with</h4>
              <p className='text-gray-800 py-1'>Frontend: VueJS, ReactJS, HTML, CSS, Javascript</p>
              <p className='text-gray-800 py-1'>Backend: Golang, NodeJS</p>
              <p className='text-gray-800 py-1'>SQL (MySQL, SQL-lite), noSQL (MongoDB)</p>
            </div>
            <div className='text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white'>
              <Image src={design} width={100} height={100} className="mx-auto"/>
              <h3 className='text-lg font-medium pt-8 pb-2'>Data Science and AI</h3>
              <p className='py-2'>
                Deriving meaningful insights for businesses via data exploration, and development of 
                machine learning models to aid business solutions. 
              </p>
              <h4 className='py-4 text-teal-600'>Frameworks and Tools I use</h4>
              <p className='text-gray-800 py-1'>Python, R</p>
              <p className='text-gray-800 py-1'>Tensorflow, PyTorch</p>
              <p className='text-gray-800 py-1'>sci-kit-learn</p>
              <p className='text-gray-800 py-1'>Pandas and Numpy</p>
            </div>
            <div className='text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white'>
              <Image src={consulting} width={100} height={100} className="mx-auto"/>
              <h3 className='text-lg font-medium pt-8 pb-2'>Consulting</h3>
              <p className='py-2'>
                Actively participating in case competitions and business projects to build new innovative solutions to solve business problems.
              </p>
              <h4 className='py-4 text-teal-600'>Industries I have worked on cases for</h4>
              <p className='text-gray-800 py-1'>Web 3.0</p>
              <p className='text-gray-800 py-1'>Payments</p>
              <p className='text-gray-800 py-1'>Healthcare</p>
              <p className='text-gray-800 py-1'>Hospitality</p>
            </div>
          </div>
        </section>
        <section>
          <div>
            <h3 className='text-3xl py-1 dark:text-white'>Portfolio</h3>
            <p className='text-md py-2 leading-8 text-gray-800 dark:text-gray-200'>
              Over the past few years, I have picked up practical knowledge through hands-on projects in my areas of interests through 
              <span className='text-teal-500'> internships, hackathons, school projects and personal projects</span>. Here are some snippets of my work for you to check out!
            </p>
          </div>
          <div className='flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap'>
            <div className='basis-1/3 flex-1'><Image src={web1} className="rounded-lg object-cover" width={'100%'} height={'100%'} layout="responsive"/></div>
            <div className='basis-1/3 flex-1'><Image src={web2} className="rounded-lg object-cover" width={'100%'} height={'100%'} layout="responsive"/></div>
            <div className='basis-1/3 flex-1'><Image src={web3} className="rounded-lg object-cover" width={'100%'} height={'100%'} layout="responsive"/></div>
            <div className='basis-1/3 flex-1'><Image src={web4} className="rounded-lg object-cover" width={'100%'} height={'100%'} layout="responsive"/></div>
            <div className='basis-1/3 flex-1'><Image src={web5} className="rounded-lg object-cover" width={'100%'} height={'100%'} layout="responsive"/></div>
            <div className='basis-1/3 flex-1'><Image src={web6} className="rounded-lg object-cover" width={'100%'} height={'100%'} layout="responsive"/></div>
          </div>
        </section>
      </main>
    </div>
  );
}
