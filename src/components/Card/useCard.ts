import { useState } from "react";
import { CardProps } from "./Card.types";

export const useCard = () => {


    //Para poner varias cards de ejemplo
    const [cards] = useState<CardProps[]>([
        {
            title: "Card Title 1",
            description: "Descripción de la card 1.",
        },
        {
            title: "Card Title 2",
            description: "Descripción de la card 2.",
        },
        {
            title: "Card Title 3",
            description: "Descripción de la card 3.",
        },
    ]);

    return {
        cards,
    };
}