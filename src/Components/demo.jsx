
import React from 'react';


    const Demo=({show,item,onClose})=>{
        if(!show)
        {
            return null;
        }
        let thumbnail=item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;

    return (
        <div className="bg-gray-800 flex items-center justify-center h-screen w-full fixed top-0">
            <div className="2xl:container 2xl:mx-auto md:py-12 lg:px-20 md:px-6 py-9 px-4 relative box-border overflow-auto h-5/6">
               
                <div  id="viewerBox" className="lg:p-10 md:p-6 p-4 bg-white">
                    <div className="flex justify-end">
                    <button type="button" onClick={onClose} class="bg-white rounded-md p-2  text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
              <span class="sr-only">Close menu</span>
              
              <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
                    </div>
                    <div className="mt-3 md:mt-4 lg:mt-0 flex flex-col lg:flex-row items-stretch justify-center lg:space-x-8">
                        <div naturalSlideWidth={100} isIntrinsicHeight={true} totalSlides={3} className="lg:w-1/2 flex justify-between items-strech bg-gray-50 px-2 py-20 md:py-6 md:px-6 lg:py-24">
                            <div className="flex items-center">
                                <div aria-label="slide back" className="focus:outline-none focus:ring-2 focus:ring-gray-800 hover:bg-gray-100" role="button">
                                    <svg className="w-10 h-10 lg:w-16 lg:h-16" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M40 16L24 32L40 48" stroke="#1F2937" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                            </div>
                            <div className="slider">
                                <div className="slide-ana lg:relative">
                                    <div>
                                        <div index={0}>
                                            <div className="flex">
                                                <img src={thumbnail} alt="" className="w-full h-full" />
                                            </div>
                                        </div>
                                       
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center">
                                <div role="button" aria-label="next slide" className="cursor-pointer ml-2">
                                    <svg className="w-10 h-10 lg:w-16 lg:h-16" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M24 16L40 32L24 48" stroke="#1F2937" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-1/2 flex flex-col justify-center mt-7 md:mt-8 lg:mt-0 pb-8 lg:pb-0">
                            <h1 className="text-3xl lg:text-4xl font-semibold text-gray-800">{item.volumeInfo.title}</h1>
                            <p className="text-base leading-normal text-gray-600 mt-2">{item.volumeInfo.description}</p>
                            
                            <div className="flex items-center flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 lg:space-x-8 mt-8 md:mt-16">
                                <button className="w-full md:w-3/5 border border-gray-800 text-base font-medium leading-none text-white uppercase py-6 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 bg-gray-800 text-white">Add to Cart</button>
                                <button className="w-full md:w-2/5 border border-gray-800 text-base font-medium leading-none text-gray-800 uppercase py-6 bg-transparent focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 hover:bg-gray-800 hover:text-white">View Details</button>
                            </div>
                            <div className="mt-6">
                                <button className="text-xl underline text-gray-800 capitalize hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800">add to wishlist</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
}

export default Demo;