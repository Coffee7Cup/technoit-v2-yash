import React from 'react';
import features from '../assets/features.jpg';
import icon1 from '../assets/icon-1.svg';
import icon2 from '../assets/icon-2.svg';
import icon3 from '../assets/icon-3.svg';
import icon4 from '../assets/icon-4.svg';
// import icon5 from '../assets/icon-5-crdownload.svg';
import icon5 from '../assets/icon-4.svg';
import icon6 from '../assets/icon-6.svg';

const WhyUs = () => {
  return(
    <main id="main" className="single-page">
        <section>
          <div className="container p-[5em]" id="featured">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Left Section */}
              <div className="space-y-6">
                {[
                  { title: "Experience", icon: icon1 },
                  { title: "Products", icon: icon2 },
                  { title: "Approach", icon: icon3 },
                ].map(({ title, icon }) => (
                  <div
                    key={title}
                    className="list-wrap flex items-center gap-4 bg-white shadow-md p-4 rounded"
                  >
                    <div className="description">
                      <h4 className="text-2xl font-bold">{title}</h4>
                      <p className="text-gray-600">
                        Ronsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                      </p>
                    </div>
                    <div className="icon">
                      <img
                        src={icon}
                        alt={title}
                        className="w-[10em] hover:scale-110 transition-all duration-300"
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Center Section */}
              <div className="p-4 flex justify-center items-center">
                <div className="list-center-wrap">
                  <img
                    src={features}
                    alt="Features"
                    className="w-full rounded-lg shadow-lg hover:scale-105 transition-all duration-300"
                  />
                </div>
              </div>

              {/* Right Section */}
              <div className="space-y-6">
                {[
                  { title: "Pricing", icon: icon4 },
                  { title: "Delivery", icon: icon5 },
                  { title: "Support", icon: icon6 },
                ].map(({ title, icon }) => (
                  <div
                    key={title}
                    className="list-wrap flex items-center gap-4 bg-white shadow-md p-4 rounded"
                  >
                    <div className="icon">
                      <img
                        src={icon}
                        alt={title}
                        className="w-[10em] hover:scale-110 transition-all duration-300"
                      />
                    </div>
                    <div className="description">
                      <h4 className="text-2xl font-bold">{title}</h4>
                      <p className="text-gray-600">
                        Ronsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
  )
}

function AboutPage() {

  return (
    <>
      <div className="breadcrumbs">
        {/* Breadcrumbs Section */}
        <div className="page-header flex items-center ">
          <div className="container flex items-center justify-center h-[30em] pt-[5em] bg-blue-200">
            <div className="flex justify-center">
              <div className="text-center max-w-lg ">
                <h2 className="text-6xl font-bold text-blue-700">About Us</h2>
                <p className="text-gray-600 mt-2">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit
                </p>
              </div>
            </div>
          </div>
        </div>
        <nav className="bg-blue-800 px-10 py-[1em] font-bold text-2xl">
          <div className="container">
            <ol className="flex space-x-2 text-white">
              <li>
                <a href="/" className="hover:text-blue-200 transition-all duration-300">
                  Home
                </a>
              </li>
              <li>/</li>
              <li className="text-gray-400 hover:text-blue-200 transition-all duration-300">About</li>
            </ol>
          </div>
        </nav>

        {/* Main Content */}
        <WhyUs/>
      </div>
    </>
  );
}

export {WhyUs}

export default AboutPage;
