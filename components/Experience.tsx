import React from 'react'
import { Button } from './ui/MovingBorders'
import Image from 'next/image'
import { ExperienceInfo } from '@/typings'
import { urlFor } from "@/sanity"
import { fetchExperience } from '@/utils/fetchExperience'

const Experience = async () => {
  const experienceInfo: ExperienceInfo[] = await fetchExperience();
  
  return (
    <div className='py-20' id='testimonials'>
        <h1 className='heading'>
            My {' '}
            <span className='text-purple'>work experience</span>
        </h1>
        <div className='w-full mt-12 grid grid-cols-1 lg:grid-cols-4 gap-10'>
            {experienceInfo.map((card) => (
                <Button
                    key={card._id}
                    borderRadius='1.75rem'
                    duration={Math.floor(Math.random() * 10000) + 10000}
                    className='flex-1 text-white border-neutral-200 dark:border-slate-800'>
                    <div className='flex flex-col lg:flex-row lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2'>
                        <Image
                            src={urlFor(card.thumbnail).url()}
                            alt={card.title}
                            width={300}
                            height={300}
                            className='w-16 md:w-20 lg:w-32'
                        />
                        <div className='lg:ms-5'>
                            <h1 className='text-start text-xl md:text-2xl font-bold'>
                                {card.title}
                            </h1>
                            <p className='text-start text-white-100 font-semibold'>
                                {card.company ? `${card.company} | ${card.duration}` : card.duration}
                            </p>
                            <p className='text-start text-white-100 mt-3 font-semibold'>
                                {card.description}
                            </p>
                        </div>
                    </div>
                </Button>
            ))}
        </div>
    </div>
  )
}

export default Experience