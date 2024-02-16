import React from 'react'

export default function Footer() {
    return (
        <footer className=' m-auto max-w-[800px] mb-4'>
            <div className='bg-slate-500 h-[0.5px] mx-4'></div>


            <div className=' md:my-3 flex  flex-row justify-center m-auto md:max-w-[770px]   '>
                <div className=' grid sm:grid-rows-1 sm:mt-8 sm:mx-4 sm2:grid-cols-2 gap-4  '>
                    <div className=' md:my-2  mb-5 text-[17px]'>
                        <p>Hello! 👋 I’m Shekhar Sahu, a professional software engineer, based in India. I work on Big Blog in my free time to create the best resource I’ve never had when I started out as a developer.</p>
                    </div>
                    <div className='  mb-5  flex flex-col justify-start items-start sm2:ml-[150px]'>
                        <h2 className='text-[20px] text-white font-bold mb-2'>BIG BLOG</h2>
                        <div className='grid sm2:grid-cols-2 sm:grid-cols-1 sm2:items-start sm2:gap-12 sm:gap-2  '>
                            <div className='flex flex-row sm2:flex-col gap-3'>
                            <h2 className='text-[17px] mb-[-5px] '>Home</h2>
                                <h2 className='text-[17px] mb-[-5px] '>Snippets</h2>
                                <h2 className='text-[17px] mb-[-5px]'>Collections</h2>

                            </div>
                            <div className='flex flex-row sm2:flex-col  gap-3 sm2:justify-start'>
                            <h2 className='text-[17px] mb-[-5px] '>About</h2>
                                <h2 className='text-[17px] mb-[-5px]'>FAQ</h2>
                               

                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-slate-500 h-[0.5px] mx-4 mt-8'></div>
        </footer>
    )
}
