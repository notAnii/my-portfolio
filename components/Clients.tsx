import React from 'react'
import { InfiniteMovingCards } from './ui/InfiniteMovingCards'
import Image from 'next/image'
import { TestimonialInfo } from '@/typings'
import { urlFor } from "@/sanity"
import { fetchTestimonials } from '@/utils/fetchTestimonials'

const Clients = async () => {
  const testimonialsInfo: TestimonialInfo[] = await fetchTestimonials();
  return (
    <div className='py-10 md:py-20' id='testimonials'>
        <h1 className='heading'>
            Kind words from {' '}
            <span className='text-purple'>statisfied clients</span>
        </h1>
        <div className='flex flex-col items-center mt-5 lg:mt-10'>
          <InfiniteMovingCards
            items={testimonialsInfo.map(({quote, name, title, photo}) => ({quote, name, title, photo}))}
            direction='right'
            speed='slow'
          />
          <div className='flex flex-wrap items-center justify-center gap-4 md:gap-16 mt-5 lg:mt-10'>
            {testimonialsInfo.map((company) => (
              <div key={company._id} className='flex md:max-w-60 max-w-32 h-auto gap-2'>
                <Image
                  src={urlFor(company.companyLogo).url()}
                  alt={company.name}
                  width={100}
                  height={100}
                  className='md:w-24 w-20'
                />
                {/* <Image
                  src={nameImg}
                  alt={name}
                  width={100}
                  height={100}
                  className='md:w-10 w-5'
                /> */}
              </div>
            ))}
          </div>
        </div>
    </div>
  )
}

export default Clients