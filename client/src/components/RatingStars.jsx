import React, { useState } from 'react';
import toast from 'react-hot-toast';
import Rating from 'react-rating';
import { Images } from '../assets';
import usePostData from '../hooks/usePostData';
import UserDetailsModal from './modals/userDetailsModal';

const RatingStars = ({ id }) => {
  const [stars, setStars] = useState(0)
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { error: postError, postData } = usePostData('http://localhost:5000/products/starred');

  const handleStarClick = (noOfStars) => {
    setStars(noOfStars)
    setIsModalOpen(true);
  };

  const handleSubmitModal = async ({ name, email }) => {
    try {
      await postData({
        productId: id,
        stars,
        name,
        email,
      });
      toast.success('Product starred successfully')
      console.log('data added');
      setIsModalOpen(false);
    } catch (error) {
      console.error(postError);
    }
  };

  return (
    <div>
      <Rating
        initialRating={stars}
        onClick={(noOfStars) => { setStars(noOfStars); handleStarClick(noOfStars) }}
        emptySymbol={<img src={Images.emptyStar} className="icon" />}
        fullSymbol={<img src={Images.fullStar} className="icon" />}
      />
      <UserDetailsModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onSubmit={handleSubmitModal} />
    </div>
  )
}

export default RatingStars