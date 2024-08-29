"use client"
import React, { useState } from 'react';

const FaqPage = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="">
      <div className="container px-6 py-10 mx-auto">
      <h1 className="flex items-center justify-center text-4xl font-bold text-black capitalize dark:text-white">
            FAQ
          </h1>
          <span className="mt-2 flex items-center justify-center mx-auto font-bold text-xl text-gray-500">
            Answer to your questions.
          </span>

        <hr className="my-6 border-gray-200 dark:border-gray-700" />

        <div>
          <div>
            <button
              className="flex items-center focus:outline-none"
              onClick={() => handleToggle(1)}
            >
              <svg
                className={`flex-shrink-0 w-6 h-6 text-[#219ebc] transform ${openIndex === 1 ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 12H4" />
              </svg>
              <h1 className="mx-4 text-xl text-black dark:text-white">How can I pay for my appointment?</h1>
            </button>

            {openIndex === 1 && (
              <div className="flex mt-8 md:mx-10">
                <span className="border border-[#219ebc]"></span>
                <p className="max-w-3xl px-4 text-black dark:text-gray-300">
                  We accept multiple payment methods, including all major credit and debit cards, cash, and online payment platforms such as Zelle and Venmo. Payment is expected at the time of service completion.
                </p>
              </div>
            )}
          </div>

          <hr className="my-8 border-gray-200 dark:border-gray-700" />

          <div>
            <button
              className="flex items-center focus:outline-none"
              onClick={() => handleToggle(2)}
            >
              <svg
                className={`flex-shrink-0 w-6 h-6 text-[#219ebc] transform ${openIndex === 2 ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 12H4" />
              </svg>
              <h1 className="mx-4 text-xl text-black dark:text-white">Do you need water or electricity?</h1>
            </button>

            {openIndex === 2 && (
              <div className="flex mt-8 md:mx-10">
                <span className="border border-[#219ebc]"></span>
                <p className="max-w-3xl px-4 text-black dark:text-gray-300">
                Our detailing units are fully equipped with water tanks and generators, so we do not require access to your water or electricity. We bring everything we need to provide top-notch service, no matter the location.
                </p>
              </div>
            )}
          </div>

          <hr className="my-8 border-gray-200 dark:border-gray-700" />

          <div>
            <button
              className="flex items-center focus:outline-none"
              onClick={() => handleToggle(3)}
            >
              <svg
                className={`flex-shrink-0 w-6 h-6 text-[#219ebc] transform ${openIndex === 3 ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 12H4" />
              </svg>
              <h1 className="mx-4 text-xl text-black dark:text-white">How long will you take to complete a detail?</h1>
            </button>

            {openIndex === 3 && (
              <div className="flex mt-8 md:mx-10">
                <span className="border border-[#219ebc]"></span>
                <p className="max-w-3xl px-4 text-black dark:text-gray-300">
                The duration of our service depends on the type of detailing package you choose and the condition of your vehicle. Generally, a standard detailing service takes between 1 to 3 hours. However, more comprehensive services can take up to 4 hours.
                </p>
              </div>
            )}
          </div>

          <hr className="my-8 border-gray-200 dark:border-gray-700" />

          <div>
            <button
              className="flex items-center focus:outline-none"
              onClick={() => handleToggle(4)}
            >
              <svg
                className={`flex-shrink-0 w-6 h-6 text-[#219ebc] transform ${openIndex === 4 ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 12H4" />
              </svg>
              <h1 className="mx-4 text-xl text-black dark:text-white">Can you come to my house or work?</h1>
            </button>

            {openIndex === 4 && (
              <div className="flex mt-8 md:mx-10">
                <span className="border border-[#219ebc]"></span>
                <p className="max-w-3xl px-4 text-black dark:text-gray-300">
                Yes, we offer mobile detailing services, meaning we can come to your location, whether it's your home, office, or anywhere else that is convenient for you. Our team is fully equipped with everything needed to perform the service on-site.
                </p>
              </div>
            )}
          </div>

          <hr className="my-8 border-gray-200 dark:border-gray-700" />

          <div>
            <button
              className="flex items-center focus:outline-none"
              onClick={() => handleToggle(5)}
            >
              <svg
                className={`flex-shrink-0 w-6 h-6 text-[#219ebc] transform ${openIndex === 5 ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 12H4" />
              </svg>
              <h1 className="mx-4 text-xl text-black dark:text-white">Do I need to make a deposit?</h1>
            </button>

            {openIndex === 5 && (
              <div className="flex mt-8 md:mx-10">
                <span className="border border-[#219ebc]"></span>
                <p className="max-w-3xl px-4 text-black dark:text-gray-300">
                Yes, a deposit is required to secure your booking. This ensures that your preferred time slot is reserved exclusively for you. The deposit amount will be applied toward the total cost of your service. Full payment is due upon completion of the detailing service.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqPage;
