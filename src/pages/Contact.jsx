import React from "react";
import contactImg from "../assets/images/contact_img.png";

const Contact = () => {
  return (
    <div className="container mx-auto py-12 px-4 md:px-14 lg:px-24  ">
      <h1 className="text-center text-xl font-bold mb-8">Contact Us</h1>
      <div className="sm:flex items-center justify-center gap-x-10">
        <div>
          <img className="h-110" src={contactImg} alt="contactImg" />
        </div>
        <div className="mb-20">
          <h3 className="font-semibold text-lg">Our Store</h3>
          <address className="mt-4 text-gray-600">
            No.70,williams Road, Trichy
          </address>
          <div className="mt-6 text-gray-600">
            <p>Tel : 7896547891</p>
            <p>Email : admin@gmail.com</p>
          </div>
          <div className="mt-6">
            <h3 className="font-semibold text-lg">Careers at Forever</h3>
            <p className="text-gray-600">
              Learn more about our teams and job openings
            </p>

            <button className=" mt-4 border px-2 py-2 bg-red-500 hover:bg-red-800 text-white">
              Explore Jobs
            </button>
            <p className=" mt-4 text-gray-600">
              Subscribe now & get 20% 0ff
            </p>

          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Contact;
