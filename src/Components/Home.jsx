import React from 'react';
import { FaSearch, FaMapMarkerAlt } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";


const Home = () => {
  return (

    <div className="container w-[95%] h-auto ml-10">




      {/* Hero-Section */}
      <div
        className="connecting rounded-2xl border-0 h-[50rem] w-full relative bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(40,58,69,0.6), rgba(62,74,111,0.6), rgba(7,29,42,0.6)), url('/Images/backgroundImage.jpg')`,
        }}
      >

        <div className='TextContainer pt-60 ml-30'>
          <div className="insideText text-sm font-bold text-white">Recruiting of the future</div>
          <div className="insideText font-bold text-6xl text-white mt-5">Connecting Businesses</div>
          <div className="insideText font-bold text-6xl text-lime-300 ml-46 mt-4">with Talent</div>
          <div className="insideText text-3xl mt-5 ml-18 text-white">Empowering Careers with Opportunities</div>

          <div className="buttons mt-6 flex gap-4 ml-40">
            <div className="bg-red-600 text-white px-6 py-3 rounded-2xl font-bold cursor-pointer opacity-[0.77] hover:bg-red-400 transition duration-300">
              I’m an Employer
            </div>
            <div className="bg-red-600 text-white px-6 py-3 rounded-2xl font-bold cursor-pointer opacity-[0.77] hover:bg-red-400 transition duration-300">
              I’m a Job Seeker
            </div>
          </div>
        </div>



        {/* SearchBox */}
        <div className="SearchJobs h-50 w-[40%] bg-red-300 opacity-[0.77] ml-210 rounded-4xl mt-10 p-10">
          <div className="text-white font-bold text-2xl ml-36 mb-6">Start your job search</div>

          <div className="flex gap-4">
            <div className="flex items-center bg-white rounded-xl px-4 py-2 w-2/3">
              <FaSearch className="text-gray-400 mr-2" />
              <input
                type="text"
                placeholder="Job title, skills or company"
                className="w-full outline-none text-gray-700 bg-transparent"
              />
            </div>

            <div className="flex items-center bg-white rounded-xl px-4 py-2 w-1/3">
              <FaMapMarkerAlt className="text-gray-400 mr-2" />
              <input
                type="text"
                placeholder="Location"
                className="w-full outline-none text-gray-700 bg-transparent"
              />
            </div>

            <div className="bg-red-600 text-white font-bold px-6 py-2 rounded-2xl cursor-pointer hover:bg-red-400 transition duration-300 flex items-center justify-center">
              Search
            </div>
          </div>
        </div>

      </div>






      {/* TechTalent */}

      <div className="TechTalent w-full rounded-xl h-32 mt-8 flex items-center justify-between p-6 [box-shadow:0px_0px_4px_12px_rgba(0,0,0,0.25)] bg-white">

        <img
          src="/Images/new-hire 1.png"
          alt="New Hire"
          className="h-24 w-24 object-contain ml-20"

        />

        <div className="flex flex-col justify-center ml-12">
          <span className="font-bold text-xl text-gray-800 mb-2">Looking to hire Tech Talent?</span>
          <span className="text-sm font-bold text-gray-800">Find a solution to fit your needs.</span>
        </div>


        <div className="ml-auto mr-60 bg-rose-600 text-white font-bold px-6 py-2 rounded-2xl cursor-pointer hover:bg-rose-800 transition duration-300">
          Get Started
        </div>
      </div>



      {/* Achievements */}
      <div className="achievements w-full h-42 mt-8 flex gap-4">



        <div className='h-full w-[25%] rounded-xl shadow-xl flex flex-col items-center justify-center [background:linear-gradient(124.6deg,#021535_2.9%,#E6FAFF_95.09%)]'>
          <span className="text-5xl font-bold text-black">1000+</span>
          <span className="text-white text-3xl mt-1">Candidate Placed</span>
        </div>

        <div className='h-full w-[25%] rounded-xl shadow-xl flex flex-col items-center justify-center [background:linear-gradient(124.6deg,#021535_2.9%,#E6FAFF_95.09%)]'>
          <span className="text-5xl font-bold text-black">50+</span>
          <span className="text-white text-3xl mt-1">Corporate Clients</span>
        </div>

        <div className='h-full w-[25%] rounded-xl shadow-xl flex flex-col items-center justify-center [background:linear-gradient(124.6deg,#021535_2.9%,#E6FAFF_95.09%)]'>
          <span className="text-5xl font-bold text-black">10+</span>
          <span className="text-white text-3xl mt-1">Industries Served</span>
        </div>

        <div className='h-full w-[25%] rounded-xl shadow-xl flex flex-col items-center justify-center [background:linear-gradient(124.6deg,#021535_2.9%,#E6FAFF_95.09%)]'>
          <span className="text-5xl font-bold text-black">100%</span>
          <span className="text-white text-3xl mt-1">Pan-India Network</span>
        </div>



      </div>




      {/* About-Section */}
      <div className="About  w-full mt-8 rounded-2xl  p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">


          {/* Left: Image */}
          <div>
            <img
              src="\Images\aboutRecruitlogy.png"
              alt="About Recruitlogy"
              className="w-full h-full object-cover  "
            />
          </div>

          {/* Right: Content */}
          <div className="flex flex-col justify-center space-y-4 ml-44">
            <h2 className="text-3xl font-bold">
              About <span className="text-red-600">Recruitlogy</span>
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Recruitlogy Staffing Solution is your trusted partner for
              recruitment, staffing, payroll and workforce management. Founded
              with the mission to simplify hiring and empower careers, we’ve
              grown from our roots in Nagpur to serve clients across India.
            </p>
            <div className="flex gap-4">
              <button className="flex items-center gap-2 bg-red-600 text-white px-5 py-2 rounded-2xl shadow hover:bg-red-700 transition cursor-pointer">
                Learn More <FaArrowRight />
              </button>
              <button className="bg-blue-600 text-white px-5 py-2 rounded-2xl shadow hover:bg-green-500 transition cursor-pointer">
                Connect with us
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Vision-Mission-Values */}
      <div className="Vision w-full h-120 flex justify-between mt-8">

        {/* Vision Card */}
        <div className="cards border-0 rounded-2xl shadow-lg h-full w-[32%] flex flex-col items-center justify-start p-6">
          <div className="h-32 flex items-center justify-center mb-3">
            <img
              src="\Images\vison 1.png"
              alt="Vision"
              className="h-28 w-28 object-contain"
            />
          </div>
          <h3 className="font-bold text-4xl mb-4">Vision</h3>
          <p className="text-center text-gray-500 text-xl font-bold leading-snug">
            To be the most Trusted staffing partner in India,
            connecting talent with opportunity nationwide.
          </p>
        </div>

        {/* Mission Card */}
        <div className="cards border-0 rounded-2xl shadow-lg h-full w-[32%] flex flex-col items-center justify-start p-6">
          <div className="h-32 flex items-center justify-center mb-3">
            <img
              src="\Images\mission.png"
              alt="Mission"
              className="h-28 w-28 object-contain"
            />
          </div>
          <h3 className="font-bold text-4xl mb-4">Mission</h3>
          <p className="text-center text-gray-500 text-xl font-bold leading-snug">
            Deliver quality manpower solutions that empower
            organisations to scale and candidates to thrive.
          </p>
        </div>

        {/* Values Card */}
        <div className="cards border-0 rounded-2xl shadow-lg h-full w-[32%] flex flex-col items-center justify-start p-6">
          <div className="h-32 flex items-center justify-center mb-3">
            <img
              src="\Images\values.png"
              alt="Values"
              className="h-28 w-28 object-contain"
            />
          </div>
          <h3 className="font-bold text-4xl mb-4">Values</h3>
          <p className="text-center text-gray-500 text-xl font-bold leading-snug">
            Integrity, Client-First approach, Speed with Quality,
            and Long-Term Partnerships.
          </p>
        </div>

      </div>

      <div className="mt-8 w-full h-auto text-4xl text-center font-bold">Industries We Serve</div>

      <div className="Industries mt-8 w-full h-150">

        {/* Upper Cards */}
        <div className="upperCards w-full h-[30%] flex justify-between">

          <div
            className="card h-full w-[30%] rounded-xl flex items-center p-4 transform transition-all duration-500 hover:scale-105 group cursor-pointer"
            style={{
              background:
                "linear-gradient(90deg, rgba(212, 213, 216, 0.75) 0%, #81879A 100%)",
            }}
          >
            <img
              src="\Images\saas.png"
              alt="SaaS"
              className="h-[85%] object-contain mr-4"
            />
            <div className="flex flex-col">
              <span className="font-bold text-xl group-hover:text-white transition-colors duration-500">
                IT & Software Services
              </span>
              <span className="text-base group-hover:text-white transition-colors duration-500">
                Technology and Software Development
              </span>
            </div>
          </div>

          <div
            className="card h-full w-[30%] rounded-xl flex items-center p-4 transform transition-all duration-500 hover:scale-105 group cursor-pointer"
            style={{
              background:
                "linear-gradient(90deg, rgba(212, 213, 216, 0.75) 0%, #81879A 100%)",
            }}
          >
            <img
              src="\Images\BPO.png"
              alt="BPO"
              className="h-[85%] object-contain mr-4"
            />
            <div className="flex flex-col">
              <span className="font-bold text-xl group-hover:text-white transition-colors duration-500">
                BPO/KPO
              </span>
              <span className="text-base group-hover:text-white transition-colors duration-500">
                Business Process Outsourcing
              </span>
            </div>
          </div>

          <div
            className="card h-full w-[30%] rounded-xl flex items-center p-4 transform transition-all duration-500 hover:scale-105 group cursor-pointer"
            style={{
              background:
                "linear-gradient(90deg, rgba(212, 213, 216, 0.75) 0%, #81879A 100%)",
            }}
          >
            <img
              src="\Images\education.png"
              alt="Education"
              className="h-[85%] object-contain mr-4"
            />
            <div className="flex flex-col">
              <span className="font-bold text-xl group-hover:text-white transition-colors duration-500">
                Education & EdTech Services
              </span>
              <span className="text-base group-hover:text-white transition-colors duration-500">
                Educational Technology and Services
              </span>
            </div>
          </div>
        </div>

        {/* Middle Cards */}
        <div className="middleCards w-full h-[30%] mt-4 flex justify-center">

          <div
            className="card h-full w-[30%] rounded-xl mr-16 flex items-center p-4 transform transition-all duration-500 hover:scale-105 group cursor-pointer"
            style={{
              background:
                "linear-gradient(90deg, rgba(212, 213, 216, 0.75) 0%, #81879A 100%)",
            }}
          >
            <img
              src="\Images\BFSI.png"
              alt="BFSI"
              className="h-[85%] object-contain mr-4"
            />
            <div className="flex flex-col">
              <span className="font-bold text-xl group-hover:text-white transition-colors duration-500">
                BFSI
              </span>
              <span className="text-base group-hover:text-white transition-colors duration-500">
                Banking, Financial Services and Insurance
              </span>
            </div>
          </div>

          <div
            className="card h-full w-[30%] rounded-xl flex items-center p-4 transform transition-all duration-500 hover:scale-105 group cursor-pointer"
            style={{
              background:
                "linear-gradient(90deg, rgba(212, 213, 216, 0.75) 0%, #81879A 100%)",
            }}
          >
            <img
              src="\Images\healthcare.png"
              alt="healthcare"
              className="h-[85%] object-contain mr-4"
            />
            <div className="flex flex-col">
              <span className="font-bold text-xl group-hover:text-white transition-colors duration-500">
                Healthcare
              </span>
              <span className="text-base group-hover:text-white transition-colors duration-500">
                Medical & Pharmaceutical
              </span>
            </div>
          </div>
        </div>

        {/* Lower Cards */}
        <div className="lowerCards mt-4 w-full h-[30%] flex justify-between">

          <div
            className="card h-full w-[30%] rounded-xl flex items-center p-4 transform transition-all duration-500 hover:scale-105 group cursor-pointer"
            style={{
              background:
                "linear-gradient(90deg, rgba(212, 213, 216, 0.75) 0%, #81879A 100%)",
            }}
          >
            <img
              src="\Images\manufacturing.png"
              alt="manufacturing"
              className="h-[85%] object-contain mr-4"
            />
            <div className="flex flex-col">
              <span className="font-bold text-xl group-hover:text-white transition-colors duration-500">
                Manufacturing
              </span>
              <span className="text-base group-hover:text-white transition-colors duration-500">
                Industrial & Production Sectors
              </span>
            </div>
          </div>

          <div
            className="card h-full w-[30%] rounded-xl flex items-center p-4 transform transition-all duration-500 hover:scale-105 group cursor-pointer"
            style={{
              background:
                "linear-gradient(90deg, rgba(212, 213, 216, 0.75) 0%, #81879A 100%)",
            }}
          >
            <img
              src="\Images\ecommerce.png"
              alt="ecommerce"
              className="h-[85%] object-contain mr-4"
            />
            <div className="flex flex-col">
              <span className="font-bold text-xl group-hover:text-white transition-colors duration-500">
                Retail & Ecommerce
              </span>
              <span className="text-base group-hover:text-white transition-colors duration-500">
                Retail & Online Commerce
              </span>
            </div>
          </div>

          <div
            className="card h-full w-[30%] rounded-xl flex items-center p-4 transform transition-all duration-500 hover:scale-105 group cursor-pointer"
            style={{
              background:
                "linear-gradient(90deg, rgba(212, 213, 216, 0.75) 0%, #81879A 100%)",
            }}
          >
            <img
              src="\Images\startup.png"
              alt="startup"
              className="h-[85%] object-contain mr-4"
            />
            <div className="flex flex-col">
              <span className="font-bold text-xl group-hover:text-white transition-colors duration-500">
                Serving Startups
              </span>
              <span className="text-base group-hover:text-white transition-colors duration-500">
                Technology & Software Development
              </span>
            </div>
          </div>
        </div>
      </div>


      <div className="mt-8 w-full h-auto text-4xl text-center font-bold">Why Choose Us ?</div>

      <div className="WhyChooseUs mt-8 w-full h-120 flex justify-between">

        {/* Pan-India Talent Network */}
        <div
          className="card h-full w-[24%] rounded-2xl relative bg-cover bg-center group overflow-hidden"
          style={{
            backgroundImage: "url('/Images/pan-India.jpg')",
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-gray-500/75 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

          {/* Bottom Red Label */}
          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 font-bold bg-red-600 text-white text-center w-4/5 py-3 rounded-xl text-xl z-10">
            <span>Pan-India Talent<br />Network</span>
          </div>

          {/* Hover Text */}
          <div className="absolute inset-0 flex items-center justify-center text-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 px-4 z-10">
            <p className="text-white text-xl font-semibold">
              We provide professional talent solutions. <br />
              Our expertise built powerful and effective team.
            </p>
          </div>
        </div>

        {/* Customised Solutions */}
        <div
          className="card h-full w-[24%] rounded-2xl relative bg-cover bg-center group overflow-hidden"
          style={{
            backgroundImage: "url('/Images/customised-solution.jpg')",
          }}
        >
          <div className="absolute inset-0 bg-gray-500/75 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 font-bold bg-red-600 text-white text-center w-4/5 py-3 rounded-xl text-xl z-10">
            <span>Customised Solutions</span>
          </div>

          <div className="absolute inset-0 flex items-center justify-center text-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 px-4 z-10">
            <p className="text-white text-xl font-semibold">
              We understand that each business is unique, <br />and we provide tailor-made solutions that perfectly fit your needs.
            </p>
          </div>
        </div>

        {/* 100% Compliance */}
        <div
          className="card h-full w-[24%] rounded-2xl relative bg-cover bg-center group overflow-hidden"
          style={{
            backgroundImage: "url('/Images/100_.jpg')",
          }}
        >
          <div className="absolute inset-0 bg-gray-500/75 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 font-bold bg-red-600 text-white text-center w-4/5 py-3 rounded-xl text-xl z-10">
            <span>100% Compliance</span>
          </div>

          <div className="absolute inset-0 flex items-center justify-center text-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 px-4 z-10">
            <p className="text-white text-xl font-semibold">
              We guarantee 100% compliance with all relevant regulations,<br /> ensuring your projects are always audit-ready.
            </p>
          </div>
        </div>

        {/* Long-Term Partnerships */}
        <div
          className="card h-full w-[24%] rounded-2xl relative bg-cover bg-center group overflow-hidden"
          style={{
            backgroundImage: "url('/Images/long-term.jpg')",
          }}
        >
          <div className="absolute inset-0 bg-gray-500/75 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 font-bold bg-red-600 text-white text-center w-4/5 py-3 rounded-xl text-xl z-10">
            <span>Long-Term Partnerships</span>
          </div>

          <div className="absolute inset-0 flex items-center justify-center text-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 px-4 z-10">
            <p className="text-white text-xl font-semibold">
              We forge long-term partnerships built on shared success,<br /> evolving together to turn your future challenges into our collective achievements.
            </p>
          </div>
        </div>

      </div>


      <div className="mt-8 w-full h-auto text-4xl text-center font-bold">Contact Information</div>


      {/*Contact Information */}


      <div className="ContactBox w-full h-100 flex">


        <div className="leftSection h-full w-[30%] flex flex-col space-y-10 p-6 mt-4">

          {/* Phone */}
          <div className="flex items-center space-x-6">
            <div className="h-20 w-20 rounded-2xl flex items-center justify-center"
              style={{ background: "linear-gradient(124.6deg, #000000 2.9%, #D8E0E2 95.09%)" }}>
              <FaPhoneAlt className="text-white text-3xl" />
            </div>
            <div className="flex flex-col">
              <span className="font-semibold text-2xl">Phone</span>
              <span className="text-gray-500 text-xl">+91 7498440676</span>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-center space-x-6">
            <div className="h-20 w-20 rounded-2xl flex items-center justify-center"
              style={{ background: "linear-gradient(124.6deg, #000000 2.9%, #D8E0E2 95.09%)" }}>
              <FaEnvelope className="text-white text-3xl" />
            </div>
            <div className="flex flex-col">
              <span className="font-semibold text-2xl">Email</span>
              <span className="text-gray-500 text-xl">contact@recruitlogy.com</span>
            </div>
          </div>

          {/* Office */}
          <div className="flex items-center space-x-6">
            <div className="h-20 w-20 rounded-2xl flex items-center justify-center"
              style={{ background: "linear-gradient(124.6deg, #000000 2.9%, #D8E0E2 95.09%)" }}>
              <FaMapMarkerAlt className="text-white text-3xl" />
            </div>
            <div className="flex flex-col">
              <span className="font-semibold text-2xl">Office</span>
              <span className="text-gray-500 text-xl">Nagpur, Maharashtra</span>
              <span className="text-gray-500 text-xl">Pan-India Operations</span>
            </div>
          </div>

        </div>

        <div className="rightSection h-[100%] w-[70%] flex flex-col p-6">

          <div className="bg-white rounded-2xl p-8 w-full h-full flex flex-col"
            style={{ boxShadow: "-4px 4px 4px 2px #00000052" }}>
            <h2 className="font-semibold text-2xl mb-8">Office Hours</h2>

            <div className="flex justify-between mb-6">
              <span className="text-gray-500 text-xl">Monday - Friday</span>
              <span className="text-black text-xl">10:00 AM - 7:00 PM</span>
            </div>

            <div className="flex justify-between mb-6">
              <span className="text-gray-500 text-xl">Saturday</span>
              <span className="text-black text-xl">10:00 AM - 2:00 PM</span>
            </div>

            <div className="flex justify-between">
              <span className="text-gray-500 text-xl">Sunday</span>
              <span className="text-black text-xl">Closed</span>
            </div>
          </div>
        </div>


      </div>





    </div>
  );
};

export default Home;
