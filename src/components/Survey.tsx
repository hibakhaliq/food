import React from "react";
import Image from "next/image";
const Survey = () => {
    return (
      <div className="container pt-40">
        <div className="grid lg:grid-cols-[50%,1fr] gap-20">
          <div>
            <Image
              className="w-[100%] h-auto lg:w-auto lg:h-[90vh]"
              src="/survey.png"
              width={1000}
              height={600}
              alt="survey image"
            />
          </div>
  
          <div className="self-center">
            <h2 className="text-4xl md:text-6xl font-bold">Survey</h2>
            <h2 className="text-4xl md:text-6xl font-bold pt-3">
              About our <span className="text-accent">Food</span>
            </h2>
  
            <p className="text-gray-700 pt-16">
              
We value your feedback! Please take a moment to complete our food survey, designed to help us improve your dining experience. Your insights on taste, presentation, and service are crucial in ensuring we meet your expectations and continue to serve you delicious meals. Thank you for helping us make our food even better!
            </p>
  
            <p className="text-gray-700 pt-8">
              
            </p>
          </div>
        </div>
      </div>
    );
  };
  
  export default Survey;
