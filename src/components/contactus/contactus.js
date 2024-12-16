import React from "react";

// Ensure the image path is correct

const Contact = () => {
  return (
    <div id="contact" className="w-full py-12 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row gap-8">
        {/* Left Section */}
        <div className="flex-1 flex flex-col gap-6">
          <h2 className="text-3xl font-bold text-blue-600">
            Easy to Contact Us
          </h2>
          <p className="text-gray-600">
            We are always ready to help by providing the best services for you.
            We believe a good place to live can make your life better.
          </p>

          <div className="flex flex-col gap-6">
            {/* Row 1 */}
            <div className="flex flex-wrap gap-6">
              {/* Call */}
              <div className="flex flex-col items-center p-4 border border-gray-200 rounded-lg w-64 shadow-md transition-transform hover:scale-105">
                <div className="flex items-center gap-4">
                  <div className="p-2 bg-blue-200 rounded-full">
      
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Call</h3>
                    <p className="text-gray-500">9873961111</p>
                  </div>
                </div>
                <a
                  href="tel:+919873961111"
                  className="mt-4 bg-blue-600 text-white py-2 px-4 rounded-md w-full text-center"
                >
                  Call Us
                </a>
              </div>

              {/* Text */}
              <div className="flex flex-col items-center p-4 border border-gray-200 rounded-lg w-64 shadow-md transition-transform hover:scale-105">
                <div className="flex items-center gap-4">
                  <div className="p-2 bg-blue-200 rounded-full">
           
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Text</h3>
                    <p className="text-gray-500">9873961111</p>
                  </div>
                </div>
                <a
                  href="sms:+919873961111"
                  className="mt-4 bg-blue-600 text-white py-2 px-4 rounded-md w-full text-center"
                >
                  Text Us
                </a>
              </div>
            </div>

            {/* Row 2 */}
            <div className="flex flex-wrap gap-6">
              {/* Whatsapp */}
              <div className="flex flex-col items-center p-4 border border-gray-200 rounded-lg w-64 shadow-md transition-transform hover:scale-105">
                <div className="flex items-center gap-4">
                  <div className="p-2 bg-green-200 rounded-full">
                 
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">WhatsApp</h3>
                    <p className="text-gray-500">9873961111</p>
                  </div>
                </div>
                <a
                  href="https://wa.me/9873961111"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 bg-green-600 text-white py-2 px-4 rounded-md w-full text-center"
                >
                  WhatsApp Us
                </a>
              </div>

              {/* Mail */}
              <div className="flex flex-col items-center p-4 border border-gray-200 rounded-lg w-64 shadow-md transition-transform hover:scale-105">
                <div className="flex items-center gap-4">
                  <div className="p-2 bg-yellow-200 rounded-full">
                 
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Mail</h3>
                    <p className="text-gray-500">sales@propertyorbits.com</p>
                  </div>
                </div>
                <a
                  href="mailto:sales@propertyorbits.com"
                  className="mt-4 bg-yellow-500 text-white py-2 px-4 rounded-md w-full text-center"
                >
                  Mail Us
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex-1 flex justify-center items-center">
          <div className="w-80 h-80 md:w-96 md:h-96 rounded-lg overflow-hidden border-8 border-blue-400">
            {/* <img
              src={contactImage}
              alt="Contact"
              className="w-full h-full object-cover"
            /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
