import React from "react";
import { WhyUs } from "./AboutPage";
import Counter from "./utils/Counter";
import service1 from "../assets/service-cloud.svg";
import service2 from "../assets/service-design.svg";
import service3 from "../assets/service-hosting.svg";
import service4 from "../assets/service-secure.svg";
import service5 from "../assets/service-seo.svg";
import service6 from "../assets/service-social.svg";
import happyClient from "../assets/happy-clients.svg";
import hourSupport from "../assets/hours-support.svg";
import projectComp from "../assets/complete-projects.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";

import client1 from "../assets/client-1.png";
import client2 from "../assets/client-2.png";
import client3 from "../assets/client-3.png";
import client4 from "../assets/client-4.png";
import client5 from "../assets/client-5.png";
import client6 from "../assets/client-6.png";
import client7 from "../assets/client-7.png";
import client8 from "../assets/client-8.png";
import bg from "../assets/hero-bg.png";

const ClientCarousel = () => {
  const clients = [
    client1,
    client2,
    client3,
    client4,
    client5,
    client6,
    client7,
    client8,
  ];

  return (
    <div className="text-center max-h-[10em] relative z-1">
      <div className="mx-auto">
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          spaceBetween={20}
          slidesPerView={4}
          loop={true}
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 5 },
          }}
        >
          {clients.map((client, idx) => (
            <SwiperSlide key={idx}>
              <img
                src={client}
                className="img-fluid mx-auto grayscale h-[8em]"
                alt={`Client ${idx + 1}`}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <div
        className="w-screen h-screen fixed top-0 left-0 -z-10"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
      <section id="hero" className="hero sticked-header-offset bg-transparent">
        <div className="mx-auto p-6 h-screen items-center justify-center">
          <div className="flex items-center justify-center h-[35em]">
            <div className="w-[50%]"></div>
            <div className="text-white p-8 rounded-lg mt-[10em]">
              <h2 className="text-6xl font-bold">
                Delivering Superior Services
                <br />{" "}
                <span className="text-7xl font-bold text-blue-600">
                  IT Solutions
                </span>
                <span className="text-blue-500">.</span>
              </h2>
              <p className="mt-4">
                You can easily change any design to your own. It is also highly
                customizable and SEO-friendly.
              </p>
              <div className="social mt-6 flex space-x-4">
                <a href="#" className="text-xl">
                  <i className="bi bi-twitter"></i>
                </a>
                <a href="#" className="text-xl">
                  <i className="bi bi-facebook"></i>
                </a>
                <a href="#" className="text-xl">
                  <i className="bi bi-linkedin"></i>
                </a>
                <a href="#" className="text-xl">
                  <i className="bi bi-instagram"></i>
                </a>
              </div>
              <div className="flex space-x-4 mt-6">
                <a
                  href="#contact"
                  className="px-6 py-2 bg-blue-500 text-white rounded-2xl hover:bg-blue-600"
                >
                  Get Quotes
                </a>
                <a
                  href="#services"
                  className="px-6 py-2 bg-blue-500 text-white rounded-2xl hover:bg-clue-600"
                >
                  Get Started
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-transparent px-[4em]">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "Cloud Server", icon: service1 },
              { title: "Application Design", icon: service2 },
              { title: "Web Hosting", icon: service3 },
              { title: "Data Security", icon: service4 },
              { title: "SEO Optimization", icon: service5 },
              { title: "Social Media", icon: service6 },
            ].map((service, idx) => (
              <div
                key={idx}
                className="p-6 bg-white shadow-md rounded-lg text-center hover:scale-110 transition-all duration-300"
              >
                <div className="icon mb-4">
                  <img
                    src={service.icon}
                    alt={`${service.title} Icon`}
                    className="w-[5em] mx-auto"
                  />
                </div>
                <h4 className="font-semibold text-lg">{service.title}</h4>
                <p className="text-gray-600 mt-2">
                  Ronsectetur adipiscing elit, sed do eiusmod tempor incididunt
                  ut labore et dolore magna aliqua.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <div className="flex flex-col justify-center items-center">
        <span className="text-blue-600 font-bold text-5xl">Why Choose Us</span>
        <br />
        <span className="text-lg">Lorem ipsum dolor sit amet</span>
      </div>
      <WhyUs />

      {/* Counter Section */}
      <div className="mx-auto flex justify-center items-center gap-[5em] bg-transparent p-[5em]">
        {[
          {
            icon: happyClient,
            number: 232,
            hText: "Happy Clients",
            pText: "Lorem ipsum dolor sit.",
          },
          {
            icon: hourSupport,
            number: 521,
            hText: "Completed Projects",
            pText: "Lorem, ipsum dolor.",
          },
          {
            icon: projectComp,
            number: 453,
            hText: "Hours Of Support",
            pText: "Lorem, ipsum dolor.",
          },
        ].map((item, index) => (
          <div key={index}>
            <div className="flex flex-col justify-center items-center gap-[1em]">
              <img
                src={item.icon}
                alt="icon"
                className="h-[5em] hover:scale-[120%] transition-all duration-300"
              />
              <div>
                <Counter end={item.number} />
              </div>
              <div className="text-xl text-blue-600 font-bold">
                {item.hText}
              </div>
              <div className="text-lg">{item.pText}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Carousel */}
      <div>
        <ClientCarousel />
      </div>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-transparent p-[5em]">
        <div className="container mx-auto">
          <h2 className="text-5xl font-bold text-center mb-8 text-blue-600">
            Contact Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-100 p-6 rounded-lg">
              <h6 className="font-semibold">Address:</h6>
              <p>11 West Town</p>
              <p>PBo 12345, United States</p>
              <h6 className="font-semibold mt-6">Phone:</h6>
              <p>+1 1234 56 789</p>
              <p>+1 1234 56 780</p>
              <h6 className="font-semibold mt-6">Email:</h6>
              <p>info@example.com</p>
              <p>email@example.com</p>
            </div>
            <div>
              <form className="space-y-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Name*"
                  className="w-full p-3 border rounded-lg bg-slate-300"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email*"
                  className="w-full p-3 border rounded-lg bg-slate-300"
                  required
                />
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  className="w-full p-3 border rounded-lg bg-slate-300"
                  required
                />
                <textarea
                  name="message"
                  placeholder="Write Your Message*"
                  rows="5"
                  className="w-full p-3 border rounded-lg bg-slate-300"
                  required
                ></textarea>
                <button
                  type="submit"
                  className="p-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
