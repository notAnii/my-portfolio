import React from 'react'
import { PinContainer } from './ui/3d-pin'
import Image from 'next/image'
import { FaLocationArrow } from 'react-icons/fa6'
import { ProjectInfo } from '@/typings'
import { urlFor } from "@/sanity"
import { fetchProjects } from '@/utils/fetchProjects'

const RecentProjects = async () => {
  const projectInfo: ProjectInfo[] = await fetchProjects();

  return (
    <div className='py-20' id='projects'>
        <h1 className='heading'>
            A small selection of {' '}
            <span className='text-purple'>recent projects</span>
        </h1>
        <div className='flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-8 mt-10'>
            {projectInfo.map((project) => (
                <div key={project._id} className='sm:h-[41rem] h-[32rem] lg:min-h-[32.5rem] flex items-center justify-center sm:w-[570px] w-[80vw]'>
                    <PinContainer title={project.link} href={project.link}>
                        <div className='relative flex items-center justify-center sm:w-[570px] w-[80vw] overflow-hidden sm:h-[40vh] h-[30vh] mb-10'>
                            <div className='relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162D]'>
                                <Image
                                    src="/bg.png"
                                    alt="bg-png"
                                    width={400}
                                    height={400}
                                />
                            </div>
                            <Image 
                                src={urlFor(project.image).url()}
                                alt={project.title}
                                width={540}
                                height={540}
                                className="z-10 absolute bottom-0"
                            />
                        </div>
                        <h1 className='font-bold lg:text-2xl md:text-xl text-base line-clamp-1'>
                            {project.title}    
                        </h1>
                        <p className='lg:text-xl lg:font-normal font-light text-sm line-clamp-2'>
                            {project.description}
                        </p>

                        <div className='flex items-center justify-between mt-7 mb-3'>
                            <div className='flex items-center'>
                                {project.iconLists?.map((icon, index) => (
                                    <div key={index} className='border border-white/[0.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center'
                                        style={{
                                            transform: `translateX(-${5 * index * 2}px)`
                                        }}
                                    >
                                        <Image 
                                            src="/b1.svg"
                                            alt={String(index)}
                                            width={40}
                                            height={40}
                                            className='p-2'
                                        />
                                    </div>
                                ))}
                            </div>
                            <div className='flex justify-center items-center'>
                                <p className='flex lg:text-xl md:text-xs text-sm text-purple'>Check Repository</p>
                                <FaLocationArrow className='ms-3' color='#CBACF9'/>
                            </div>
                        </div>
                    </PinContainer>
                </div>    
            ))}  
        </div>
    </div>
  )
}

export default RecentProjects