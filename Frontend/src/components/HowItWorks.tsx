import React from 'react';

const steps = [
  { id: 1, title: 'Find your Match' },
  { id: 2, title: 'Apply for Adoption' },
  { id: 3, title: 'Meet & Greet' },
  { id: 4, title: 'Bring them Home!' },
  { id: 5, title: 'Complete the Adoption' },
];

const HowItWorks: React.FC = () => {
  return (
    <div className="px-4 py-6">
      <h2 className="text-purple-900 font-bold text-xl mb-4">How it works?</h2>
      <div className="flex flex-wrap justify-center">
        {steps.map((step, index) => (
          <React.Fragment key={step.id}>
            <div className="relative m-2">
              <div className="bg-orange-100 border-2 border-orange-200 rounded-full p-4 w-32 h-32 flex flex-col items-center justify-center text-center">
                <p className="text-purple-900 font-medium text-sm">{step.title}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-6 w-8 h-4">
                  <div className="w-full h-full border-t-2 border-dashed border-orange-300"></div>
                </div>
              )}
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default HowItWorks;