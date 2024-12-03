import SectionHeading from '@/components/Helper/SectionHeading'
import React from 'react'
import ReviewsSlider from './ReviewsSlider'

const Reviews = () => {
  return (
    <div className='pt-16 pb-16 bg-[#faf2f6]'>
     <div className='w-[80%] mx-auto '>
        <SectionHeading heading='Our Clients Reviews' />
        <div className='mt-14'>
            {/* Reviews Slider */}
            <ReviewsSlider />
        </div>
    </div>    
    </div>
  )
}

export default Reviews