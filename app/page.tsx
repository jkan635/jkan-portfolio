"use client";
import React, { useEffect, useState } from 'react';
import { resume } from '../helpers/api';
import { Disclosure, Transition } from '@headlessui/react';
import Pill from '../components/Pill';
import { getFormatedDateString } from '@/helpers/dateHelper';

export default function Home() {

  const [transition, setTransition] = useState(false);

  useEffect(() => {
      const timer = setTimeout(() => {
          setTransition(true)
      }, 2000);
      return () => clearTimeout(timer);
    }, []);

    return (
      <div className="w-full h-full bg-gradient-to-b md:bg-gradient-to-r from-slate-900 to-slate-950 min-h-screen flex justify-center">
          <div className="max-w-7xl relative flex flex-col lg:flex-row mx-8 py-32 lg:py-0 gap-8 justify-between">
              
              <div className="lg:sticky lg:top-0 lg:max-h-screen lg:py-32 flex flex-col justify-between h-128 lg:h-auto gap-6 lg:gap-8">
                  <div className="flex flex-col gap-2">
                      <h1 className="w-fit overflow-hidden whitespace-nowrap text-md md:text-lg text-sky-400 animate-typing border-r-4">Hello! My name is...</h1>
                      <Transition
                          show={transition}
                          className="flex flex-col gap-1 md:gap-2"
                          enter="transition duration-100 ease-out"
                          enterFrom="transform scale-95 opacity-0"
                          enterTo="transform scale-100 opacity-100"
                          leave="transition duration-75 ease-out"
                          leaveFrom="transform scale-100 opacity-100"
                          leaveTo="transform scale-95 opacity-0"
                      >
                          <div className="text-2xl md:text-4xl text-slate-200 delay-1000 opacity-100">Jonathan Kan</div>
                          <div className="text-lg md:text-xl text-slate-300">Fullstack and Mobile Developer</div>
                          <div className="text-sm lg:text-base text-slate-400">
                              Welcome to my, very much in progress, website! Current it only has my work experiences, think of it as a interactive resume. 
                              It is built with React, Next.js and Tailwind CSS, deployed using Vercel.
                              As you read this I am improving and iterating it.
                              <br /><br />
                              I have had the privilege of venturing into many different industries and environments, from a provincial and federal government to large firm tech consulting, and finally to a fast-paced small startup. 
                              Each step of the way I have taken many roles, as a backend developer, frontend developer, and mobile developer for both iOS and Android, proving that I am a fast learner and an asset to any team I join.
                              <br /><br />
                              Thank you for taking the time to visit my website, please feel free to contact me with any opportunities!
                              Let&apos;s build some cool stuff!
                          </div>
                      </Transition>
                  </div>

                  <Transition
                          show={transition}
                          enter="transition duration-100 ease-out"
                          enterFrom="transform scale-95 opacity-0"
                          enterTo="transform scale-100 opacity-100"
                          leave="transition duration-75 ease-out"
                          leaveFrom="transform scale-100 opacity-100"
                          leaveTo="transform scale-95 opacity-0"
                  >
                      <div className="flex flex-row gap-4 md:gap-6">
                          <a className="fill-slate-500 hover:fill-slate-300 w-6 h-6 md:w-8 md:h-8" href="mailto:jonathan.k.kan@gmail.com">
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                  <path d="M12 12.713l-11.985-9.713h23.97l-11.985 9.713zm0 2.574l-12-9.725v15.438h24v-15.438l-12 9.725z"/>
                              </svg>
                          </a>

                          <a className="fill-slate-500 hover:fill-slate-300 w-6 h-6 md:w-8 md:h-8" href="https://www.linkedin.com/in/jonathan-k-kan/">
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                              </svg>
                          </a>

                          <a className="fill-slate-500 hover:fill-slate-300 w-6 h-6 md:w-8 md:h-8" href="https://github.com/jkan635">
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                              </svg>
                          </a>
                          
                      </div>
                  </Transition>
              </div>

              <div className="flex flex-col gap-4 lg:py-24 flex-none lg:w-2/5">
                  <div className="flex flex-col gap-4 rounded bg-slate-900 p-4">
                      <div className="flex flex-row justify-between items-center gap-4">
                        <div className="flex-none text-base md:text-xl text-sky-400">Experience</div>
                        <div className="h-0.5 w-full bg-sky-900 rounded"></div>
                      </div>
                      {resume.experiences.map((experience, index) => 
                          <Disclosure key={`${experience.title}_${index}`} defaultOpen={index == 0}>
                              {({ open }) => (
                                  <>
                                      <Disclosure.Button className="flex flex-col w-full rounded bg-slate-800 px-4 py-2 hover:bg-slate-700">
                                          <div className='w-full flex flex-row items-center justify-between'>
                                              <div className='text-left text-sm md:text-lg text-slate-300'>{experience.title}</div>
                                              <div className='flex-none text-right text-2xs md:text-sm text-slate-500'>{getFormatedDateString(experience.startDate)} - {getFormatedDateString(experience.endDate)}</div>
                                          </div>
                                          <div className='w-full flex flex-row items-center justify-between'>
                                              <div className='text-left text-sm md:text-base text-slate-500'>{experience.name} | {experience.location}</div>
                                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={`w-4 h-4 md:w-6 md:h-6 fill-slate-500 transition ease-in-out duration-300 ${open ? '' : 'rotate-180'}`}>
                                                  <path fillRule="evenodd" d="M11.47 7.72a.75.75 0 011.06 0l7.5 7.5a.75.75 0 11-1.06 1.06L12 9.31l-6.97 6.97a.75.75 0 01-1.06-1.06l7.5-7.5z" clipRule="evenodd" />
                                              </svg>
                                          </div>
                                      </Disclosure.Button>
                                      <Transition
                                              show={open}
                                              enter="transition duration-100 ease-out"
                                              enterFrom="transform scale-95 opacity-0"
                                              enterTo="transform scale-100 opacity-100"
                                              leave="transition duration-75 ease-out"
                                              leaveFrom="transform scale-100 opacity-100"
                                              leaveTo="transform scale-95 opacity-0"
                                          >
                                          <Disclosure.Panel className="px-4 py-2">
                                              <div className='flex flex-col gap-2'>
                                                  {experience.points.map((point, index) => 
                                                      <div className="text-sm text-slate-400" key={`${experience.title}_point_${index}`}>
                                                          {point}
                                                      </div>
                                                  )}
                                                  {experience.skills.length > 0 && <div className='mt-2 flex flex-wrap gap-2'>
                                                      {experience.skills.map((skill, index) => 
                                                          <Pill text={skill} key={`${experience.title}skill_${index}`} />
                                                      )}

                                                  </div>}
                                              </div>   
                                          </Disclosure.Panel>
                                      </Transition>
                                  </>
                              )}
                          </Disclosure> 
                      )}
                  </div>

                  <div className="flex flex-col gap-4 rounded bg-slate-900 p-4">
                    <div className="flex flex-row justify-between items-center gap-4">
                        <div className="flex-none text-base md:text-xl text-sky-400">Education</div>
                        <div className="h-0.5 w-full bg-sky-900 rounded"></div>
                      </div>
                      <div className="flex flex-col w-full rounded bg-slate-800 px-4 py-2 ">
                          <div className='w-full flex flex-row items-center justify-between'>
                              <div className='text-left text-sm md:text-lg text-slate-300'>{resume.education.degree}</div>
                              <div className='flex-none text-right text-2xs md:text-sm text-slate-500'>{getFormatedDateString(resume.education.startDate)} - {getFormatedDateString(resume.education.endDate)}</div>
                          </div>
                          <div className='text-left text-sm md:text-base text-slate-500'>{resume.education.name}</div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  );
}
