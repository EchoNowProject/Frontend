import React from 'react';
import { CardProps } from './Card.types';

export default function Card({ card }: { card: CardProps }) {
  return (
    <div>
      <div className={card.className + ' rounded-2xl p-5 overflow-hidden shadow-lg'}>
        {card.hasImage && (
          <img
            className="w-full"
            src={card.imageUrl}
            alt={card.imageUrl == null ? 'Image of Card' : ''}
          />
        )}

        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{card.title}</div>
          <p>{card.text ? card.text : ''}</p>
        </div>

        {card.items?.map((item, index) => (
          <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              {item}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
