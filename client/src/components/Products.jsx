import React from 'react'
import { Images } from '../assets'
import useFetchData from '../hooks/useFetchData'
import RatingStars from './RatingStars'

const Products = () => {
  const { data: products } = useFetchData('http://localhost:5000/products');

  return (
    <div className='my-16 flex flex-col items-center'>
      <h1 className='text-3xl'>VIEW OUR PRODUCTS</h1>
      <p className='mt-10 max-w-[939px] text-center'>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae a explicabo laudantium, distinctio harum eos molestias accusamus deleniti quasi dolor.
      </p>

      <div className='grid grid-cols-3 gap-7 mt-8'>
        {products?.map(v => {
          return (
            <div key={v.id} className='flex flex-col px-5 py-8 bg-[#FAF4F3] w-[372px]'>
              <div className='px-4 flex flex-col items-center'>
                <span className='text-heading font-[700]'>{v.name}</span>
                <span className='mt-5 text-paragraph text-justify'>{v.description}</span>
              </div>
              <hr className='mt-5 mb-2' />
              <div className='flex justify-between'>
                <div className='flex gap-2'>
                  <img src={Images.wallet} alt="ellipse" />
                  <span className='text-heading'>{v.price}$</span>
                </div>
                <RatingStars id={v.id} />
              </div>
              <button className='mt-8 self-center h-[42px] w-[138px] text-white bg-button hover:border hover:border-button hover:bg-transparent hover:text-button'>
                Show Detail
              </button>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Products