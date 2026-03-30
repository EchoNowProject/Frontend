import React from 'react';
import { PricingCardProps } from './PricingCard.types';

export const PricingCard = ({ pricingCard }: { pricingCard: PricingCardProps }) => {
  return (
    <div className=" p-4 border-4 border-violet-600 rounded-2xl shadow-lg sm:p-8 bg-gray-800">
      <h5 className="mb-4 text-2xl font-extrabold text-gray-500 text-center text-shadow-lg">
        {pricingCard.title}
      </h5>
      <div className="flex items-baseline text-gray-900 dark:text-white mt-8">
        {pricingCard.price != null ? (
          <div>
            <span className="text-3xl font-semibold">€</span>
            <span className="text-5xl font-extrabold tracking-tight">{pricingCard.price}</span>
            <span className="ms-1 text-xl font-normal text-gray-500 dark:text-gray-400">
              /{pricingCard.fecha}
            </span>
          </div>
        ) : (
          <div>
            <span className="text-5xl font-extrabold tracking-tight">Gratis</span>
          </div>
        )}
      </div>
      <div className="mt-15">{pricingCard.texto}</div>
      <button
        type="button"
        className="text-white bg-violet-600 hover:bg-violet-900 focus:ring-2 focus:outline-none font-medium"
        onClick={pricingCard.onclick}
      >
        {pricingCard.buttonText}
      </button>
    </div>
  );
};
