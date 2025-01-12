import React from 'react';
import icon from "..\\assets\\image.png";

function Footer() {
  return (
    <footer className="bg-gray-800 text-white p-10">
      <div className="container mx-auto py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Footer Left Section */}
          <div className="space-y-6">
            <div className="footer-logo">
              <a href="index.html" className="flex items-center">
                <img src={icon} alt="logo" className="w-[20em]" />
              </a>
            </div>
            <div className="footer-text">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <div className="footer-social-icon space-x-4">
              <span>Follow us:</span>
              <span className="text-blue-500 hover:text-blue-700">Twitter</span>
              <span className="text-blue-700 hover:text-blue-900">Facebook</span>
              <span className="text-pink-500 hover:text-pink-700">Instagram</span>
              <span className="text-blue-600 hover:text-blue-800">LinkedIn</span>
            </div>
          </div>

          {/* Footer Services Section */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg">Services</h3>
            <ul className="space-y-2">
              <li><a href="services.html" className="hover:text-gray-400">Web Design</a></li>
              <li><a href="services.html" className="hover:text-gray-400">App Development</a></li>
              <li><a href="services.html" className="hover:text-gray-400">Cloud Services</a></li>
              <li><a href="services.html" className="hover:text-gray-400">Domain and Hosting</a></li>
              <li><a href="services.html" className="hover:text-gray-400">SEO Optimization</a></li>
              <li><a href="services.html" className="hover:text-gray-400">Digital Marketing</a></li>
            </ul>
          </div>

          {/* Footer Information Section */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg">Information</h3>
            <ul className="space-y-2">
              <li><a href="about.html" className="hover:text-gray-400">About</a></li>
              <li><a href="packages.html" className="hover:text-gray-400">Pricing</a></li>
              <li><a href="team.html" className="hover:text-gray-400">Team</a></li>
              <li><a href="portfolio.html" className="hover:text-gray-400">Portfolio</a></li>
              <li><a href="faq.html" className="hover:text-gray-400">FAQs</a></li>
              <li><a href="blogs.html" className="hover:text-gray-400">Blogs</a></li>
              <li><a href="privacy-policy.html" className="hover:text-gray-400">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Footer Contact and Newsletter Section */}
          <div className="space-y-6">
            <div>
              <h3 className="font-bold text-lg">Contacts</h3>
              <div className="text-gray-300">
                <p>101 West Town, PBO 12345, United States</p>
                <p>+1 1234 56 789</p>
                <p>contact@example.com</p>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-lg">Newsletter</h3>
              <p className="text-gray-300 mb-4">Don't miss to subscribe to our new feeds, kindly fill the form below.</p>
              <form action="#" className="flex">
                <input type="email" placeholder="Email Address" className="px-4 py-2 rounded-l-md w-full bg-gray-700 text-white" />
                <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-r-md text-white">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="pt-6 text-center text-gray-400">
          <p>Technoit © 2023 - Designed by <a href="#" className="text-blue-400 hover:text-blue-500">Mittal</a></p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
