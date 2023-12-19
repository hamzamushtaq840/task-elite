import React, { useState } from 'react'

const UserDetailsModal = ({ isOpen, onClose, onSubmit }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    onSubmit({ name, email });
  };

  if (!isOpen) return null;

  return (
    <div className='fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center'>
      <div className='w-[30vw] bg-white p-8 rounded-lg'>
        <h2 className='text-2xl mb-4'>Rate this product</h2>
        <form onSubmit={handleSubmit}>
          <div className='mb-4'>
            <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='name'>
              Name:
            </label>
            <input
              className='border rounded-md p-2 w-full'
              type='text'
              id='name'
              value={name}
              required
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className='mb-4'>
            <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='email'>
              Email:
            </label>
            <input
              className='border rounded-md p-2 w-full'
              type='email'
              id='email'
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className='flex justify-center gap-2 mt-8'>
            <button
              type='button'
              onClick={onClose}
              className='bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400'
            >
              Cancel
            </button>
            <button
              type='submit'
              className='bg-button text-white px-4 py-2 rounded hover:bg-[#b83849]'
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserDetailsModal