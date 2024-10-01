import React from "react";

const ConsultancySteps = () => {
  return (
    <div className="flex justify-center items-center gap-4 p-10 bg-gray-100">
      {/* Step 1 */}
      <div className="flex items-center">
        <div className="relative">
          <div className="w-36 h-36 border-2 border-yellow-400 rounded-full flex flex-col justify-center items-center p-4">
            <h3 className="text-4xl font-bold">1</h3>
            <p className="text-center text-sm">
              Many thanks for your interest in Chelsea Education Consultancy. If
              you have any questions about our education services, please
              contact us.
            </p>
          </div>
          {/* Triangle */}
          <div className="absolute right-0 top-1/2 transform -translate-y-1/2">
            <div className="w-10 h-10 bg-white border-t border-r border-yellow-400 rotate-45"></div>
          </div>
        </div>
      </div>

      {/* Step 2 */}
      <div className="flex items-center">
        <div className="relative">
          <div className="w-36 h-36 border-2 border-yellow-400 rounded-full flex flex-col justify-center items-center p-4">
            <h3 className="text-4xl font-bold">2</h3>
            <p className="text-center text-sm">
              Book a call with our team to discuss your education needs and
              learn more about our services.
            </p>
          </div>
          {/* Triangle */}
          <div className="absolute right-0 top-1/2 transform -translate-y-1/2">
            <div className="w-10 h-10 bg-white border-t border-r border-yellow-400 rotate-45"></div>
          </div>
        </div>
      </div>

      {/* Step 3 */}
      <div className="flex items-center">
        <div className="w-36 h-36 border-2 border-yellow-400 rounded-full flex flex-col justify-center items-center p-4">
          <h3 className="text-4xl font-bold">3</h3>
          <p className="text-center text-sm">
            Schools and Universities application window for September 2022 is
            now open. Please contact our team about the application process.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ConsultancySteps;
