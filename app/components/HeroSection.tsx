import React from 'react'

type Props = {}

const HeroSection = (props: Props) => {
    return (
        <div className=' flex justify-center items-center h-full mt-[4.4rem]'>
            <div className='p-8 pt-24  '>
                <div className='text-center'>
                    <h1 className='text-4xl space-x-1 tracking-wider font-bold'>
                        Simplify Your Work, Streamline Your <span className="text-pink-300">Day</span>.
                    </h1>
                    <p className='pt-4'>
                        <span className="text-pink-300 tracking-wide">TaskFlow</span> is a simple and efficient tool to manage your tasks.
                    </p>
                    <div className='flex gap-8 pt-6 justify-center'>
                        <button className="px-6 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
                            free trail
                        </button>
                        <button className="px-6 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-pink-500 rounded-lg hover:bg-pink-400 focus:outline-none focus:ring focus:ring-pink-300 focus:ring-opacity-80">
                            buy now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroSection