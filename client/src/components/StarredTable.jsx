import React, { useState } from 'react'
import { Images } from '../assets'
import useFetchData from '../hooks/useFetchData';
import Rating from 'react-rating';
import { calculatePageCount } from '../utils/calculatePageCount';

const StarredTable = () => {
  const { data: products } = useFetchData('http://localhost:5000/products/starredProducts');
  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const pageCount = calculatePageCount(products.length, itemsPerPage);

  const getPageData = (pageNumber) => {
    const startIndex = (pageNumber - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return products.slice(startIndex, endIndex);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const currentProducts = getPageData(currentPage);


  return (
    <div className='flex flex-col'>
      <div className='relative'>
        <img className='brightness-50 h-[359px] w-full' src={Images.heroImage} />
        <span className='absolute top-[97px] left-[50%] translate-x-[-50%] text-white z-[100] text-2xl uppercase max-w-[814px] text-[58px] leading-[70px] font-bold'>
          LISTING
        </span>
      </div>
      <div className='bg-white relative pb-10 mx-24'>
        <div style={{ boxShadow: '0px 4px 11px 7px #19284E0A' }} className='mt-[-57px] bg-white w-full py-12 px-20'>
          <h1 className='text-xl font-bold mb-10'>LIST OF PRODUCTS</h1>
          {
            products.length === 0 ? (
              <tr>
                <td className="py-4" colSpan="5">No starred products yet.</td>
              </tr>
            ) : (
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-[#F3F6F9]">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500">Name</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500">Email</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500">Product Name</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500">Rating</th>
                    <th className=" text-xs font-medium text-gray-500 text-center">Action</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {
                    currentProducts.map((product, index) => (
                      <tr key={index}>
                        <td className="px-6 py-4 whitespace-nowrap">{product?.fullName}</td>
                        <td className="px-6 py-4 whitespace-nowrap">{product?.email}</td>
                        <td className="px-6 py-4 whitespace-nowrap">{product?.products?.name}</td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <Rating readonly initialRating={product.stars} emptySymbol={<img src={Images.emptyStar} className="icon" />} fullSymbol={<img src={Images.fullStar} className="icon" />} />
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-center">
                          <button className="text-white bg-button hover:border hover:border-button hover:bg-transparent hover:text-button text-xs w-24 h-8  rounded">View Detail</button>
                        </td>
                      </tr>
                    ))
                  }
                </tbody>
              </table>
            )}
          {products.length !== 0 && <div className="flex justify-end mt-4 space-x-2">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="px-3 py-1 rounded text-black disabled:cursor-not-allowed"
            >
              Prev
            </button>
            {Array.from({ length: pageCount }, (_, index) => (
              <button
                key={index}
                onClick={() => handlePageChange(index + 1)}
                className={`px-3 py-1 rounded-[8px] ${currentPage === index + 1 ? 'bg-button text-white' : ' text-black'}`}
              >
                {index + 1}
              </button>
            ))}
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === pageCount}
              className="px-3 py-1 rounded text-black disabled:cursor-not-allowed"
            >
              Next
            </button>
          </div>}
        </div>
      </div>
    </div>
  )
}

export default StarredTable