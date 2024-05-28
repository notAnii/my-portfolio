import React from 'react'
import Image from 'next/image'

type Props = {}

const page = (props: Props) => {
  return (
    <div>
        <Image 
              src='/b4.svg'
              alt='test'
              width={300}
              height={300}
              className={'object-cover object-center w-full h-full'}
            />
    </div>
  )
}

export default page