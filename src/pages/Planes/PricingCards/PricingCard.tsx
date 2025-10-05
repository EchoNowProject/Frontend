import React from 'react';
import { PricingCardProps } from './PricingCard.types';

export default function PricingCard({ pricingCard }: { pricingCard: PricingCardProps }) {
  return (
    <div className="w-full max-w-sm p-4 border-2 border-violet-600 rounded-2xl shadow-lg sm:p-8 bg-gray-800">
      <h5 className="mb-4 text-2xl font-extrabold text-gray-500 text-center text-shadow-lg">
        {pricingCard.title}
      </h5>
      <div className="flex items-baseline text-gray-900 dark:text-white">
        <span className="text-3xl font-semibold">€</span>
        <span className="text-5xl font-extrabold tracking-tight">{pricingCard.price}</span>
        <span className="ms-1 text-xl font-normal text-gray-500 dark:text-gray-400">
          /{pricingCard.fecha}
        </span>
      </div>
      <div>{pricingCard.texto}</div>
      <button
        type="button"
        onClick={pricingCard.onclick}
        className="text-white bg-violet-600 hover:bg-violet-900 focus:ring-2 focus:outline-none focus:ring-violet-200 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center shadow-2xl"
      >
        {pricingCard.buttonText}
      </button>
    </div>
  );
}
