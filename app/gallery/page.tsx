import React from 'react';
import Image from 'next/image';

const GalleryPage = () => {
  return (
    <>
      <section className="">
        <div className="container px-6 py-10 mx-auto">
          <h1 className="flex items-center justify-center text-4xl font-bold text-black capitalize dark:text-white">Gallery</h1>

          <div className="grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-2">
            <div className="lg:flex">
              <img
                className="object-cover w-full h-56 rounded-lg lg:w-64"
                src="https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                alt=""
              />
              <div className="flex flex-col justify-between py-6 lg:mx-6">
                <a href="#" className="text-xl font-semibold text-black hover:underline dark:text-white ">
                  Gold Package
                </a>
                <span className="text-sm text-gray-500 dark:text-gray-300">On: 20 October 2019</span>
              </div>
            </div>

            <div className="lg:flex">
              <img
                className="object-cover w-full h-56 rounded-lg lg:w-64"
                src="https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                alt=""
              />
              <div className="flex flex-col justify-between py-6 lg:mx-6">
                <a href="#" className="text-xl font-semibold text-black hover:underline dark:text-white ">
                  Diamond Package
                </a>
                <span className="text-sm text-gray-500 dark:text-gray-300">On: 20 October 2019</span>
              </div>
            </div>

            <div className="lg:flex">
              <img
                className="object-cover w-full h-56 rounded-lg lg:w-64"
                src="https://images.unsplash.com/photo-1544654803-b69140b285a1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                alt=""
              />
              <div className="flex flex-col justify-between py-6 lg:mx-6">
                <a href="#" className="text-xl font-semibold text-black hover:underline dark:text-white ">
                  Bronze Package
                </a>
                <span className="text-sm text-gray-500 dark:text-gray-300">On: 25 November 2020</span>
              </div>
            </div>

            <div className="lg:flex">
              <img
                className="object-cover w-full h-56 rounded-lg lg:w-64"
                src="https://images.unsplash.com/photo-1530099486328-e021101a494a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1547&q=80"
                alt=""
              />
              <div className="flex flex-col justify-between py-6 lg:mx-6">
                <a href="#" className="text-xl font-semibold text-black hover:underline dark:text-white ">
                  Gold Package
                </a>
                <span className="text-sm text-gray-500 dark:text-gray-300">On: 30 September 2020</span>
              </div>
            </div>

            <div className="lg:flex">
              <img
                className="object-cover w-full h-56 rounded-lg lg:w-64"
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1484&q=80"
                alt=""
              />
              <div className="flex flex-col justify-between py-6 lg:mx-6">
                <a href="#" className="text-xl font-semibold text-black hover:underline dark:text-white ">
                  Headlight Restoration Package
                </a>
                <span className="text-sm text-gray-500 dark:text-gray-300">On: 13 October 2019</span>
              </div>
            </div>

            <div className="lg:flex">
              <img
                className="object-cover w-full h-56 rounded-lg lg:w-64"
                src="https://images.unsplash.com/photo-1624996379697-f01d168b1a52?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                alt=""
              />
              <div className="flex flex-col justify-between py-6 lg:mx-6">
                <a href="#" className="text-xl font-semibold text-black hover:underline dark:text-white ">
                  Engine Package
                </a>
                <span className="text-sm text-gray-500 dark:text-gray-300">On: 20 October 2019</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default GalleryPage;
