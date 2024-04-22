'use client'
import {ReactNode} from "react";
import {useForm} from 'react-hook-form';

export default function Home(): ReactNode {
  const {register, formState: {isSubmitting}, handleSubmit} = useForm();

  const Submit = (data: unknown): void => {
      console.log(data);
  } 
  return (
       <form onSubmit={handleSubmit(Submit)} className='space-y-4 flex flex-col items-center justify-center h-screen'>
            <label htmlFor='name' className='block text-sm font-medium text-white'>
                Name
            </label>
            <input
                {...register('name')}
                id='name'
                type='text'
                className='mt-1 rounded-md bg-gray-600 p-2 outline-none '
            />

            <label htmlFor='lastName' className='block text-sm font-medium text-white'>
                Email
            </label>
            <input
                {...register('email')}
                id='email'
                type='email'
                className='mt-1 rounded-md bg-gray-600 p-2 outline-none '
            />

            <label htmlFor='contact' className='block text-sm font-medium text-white'>
                Contact
            </label>
            <input
                {...register('contact')}
                id='contact'
                type='number'
                className='mt-1 rounded-md bg-gray-600 p-2 outline-none '/>

            <label htmlFor='message' className='block text-sm font-medium text-white'>
                Message
            </label>
            <input
                {...register('message')}
                id='message'
                type='text'
                className='mt-1 rounded-md bg-gray-600 p-2 outline-none '
            />

            <button
                disabled={isSubmitting}
                type='submit'
                className='rounded-md  p-2 text-white button transition-colors duration-300 hover:bg-gray-800 focus:bg-white focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2'
            >
                Submit
            </button>
        </form>
  
    
  );
  
}
