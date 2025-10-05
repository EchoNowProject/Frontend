import React from 'react';
import PricingCard from './PricingCards/PricingCard';
import Rocket5 from '@/icons/Rocket5';
import CheckCircle1 from '@/icons/CheckCircle1';

export default function Planes() {
  return (
    <div>
      {/* Title */}
      <div className="flex justify-center items-start mt-20">
        <h1 className="text-5xl font-bold text-shadow-2xl">Elija su plan!</h1>
      </div>
      <div className="flex justify-center items-start pt-20">
        <div className="flex space-x-25 rounded-lg p-6">
          <PricingCard
            pricingCard={{
              title: 'Básico',
              texto: (
                <>
                  <ul role="list" className="space-y-5 my-7">
                    <li className="flex items-center">
                      <CheckCircle1 color="#1A43D6" size={20} />

                      <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">
                        2 team members
                      </span>
                    </li>
                    <li className="flex">
                      <CheckCircle1 color="#1A43D6" size={20} />

                      <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">
                        20GB Cloud storage
                      </span>
                    </li>
                    <li className="flex">
                      <CheckCircle1 color="#1A43D6" size={20} />

                      <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">
                        Integration help
                      </span>
                    </li>
                    <li className="flex line-through decoration-gray-500">
                      <CheckCircle1 color="#6a7282" size={20} />

                      <span className="text-base font-normal leading-tight text-gray-500 ms-3">
                        Sketch Files
                      </span>
                    </li>
                    <li className="flex line-through decoration-gray-500">
                      <CheckCircle1 color="#6a7282" size={20} />

                      <span className="text-base font-normal leading-tight text-gray-500 ms-3">
                        API Access
                      </span>
                    </li>
                    <li className="flex line-through decoration-gray-500">
                      <CheckCircle1 color="#6a7282" size={20} />

                      <span className="text-base font-normal leading-tight text-gray-500 ms-3">
                        Complete documentation
                      </span>
                    </li>
                    <li className="flex line-through decoration-gray-500">
                      <CheckCircle1 color="#6a7282" size={20} />

                      <span className="text-base font-normal leading-tight text-gray-500 ms-3">
                        24×7 phone & email support
                      </span>
                    </li>
                  </ul>
                </>
              ),
              price: 5.99,
              fecha: 'Mes',
              buttonText: (
                <>
                  <p className="flex">
                    <Rocket5 color="#fff" size={20} className="mx-3" />
                    Elejir Plan
                  </p>
                </>
              ),
            }}
          />
        </div>
      </div>
    </div>
  );
}
