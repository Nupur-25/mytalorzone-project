import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'}/>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
        <p>Welcome to Mytalorzone, where fashion meets individuality! Our clothing brand celebrates unique styles, offering trendy and comfortable apparel for every occasion. With a focus on quality, sustainability, and modern aesthetics, we aim to redefine fashion by helping you express your true self effortlessly.</p>
        <p>At Mytalorzone, we believe fashion should be inclusive and empowering. Our mission is to provide stylish, affordable, and eco-friendly clothing that resonates with diverse personalities. From casual wear to statement pieces, every garment is crafted with care, ensuring you look and feel your best every day.</p>
        <b className='text-gray-800'>Our Mission</b>
        <p>At Mytalorzone, we are committed to making fashion a source of confidence and self-expression. By blending contemporary designs with sustainability, we create versatile, high-quality clothing that suits every style. Our goal is to inspire individuals to embrace their uniqueness through fashion that is both accessible and impactful.</p>
        </div>
      </div>
      <div className='text-xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'}/>

      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance:</b>
          <p className='text-gray-600'>We ensure exceptional quality in every piece, combining premium materials with meticulous craftsmanship for lasting comfort and style.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience:</b>
          <p className='text-gray-600'>Experience hassle-free shopping with user-friendly navigation, fast delivery, and easy returns for your convenience.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service:</b>
          <p className='text-gray-600'>We prioritize your satisfaction with prompt support, personalized assistance, and a seamless shopping experience every step of the way.</p>
        </div>

      </div>
      
    </div>
  )
}

export default About
