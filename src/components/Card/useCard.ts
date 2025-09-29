import { CardProps } from "./Card.types";

export const useCard = () => {

    const cards: CardProps[] = [];

    const createCards = () => {
        cards.push({
            title: "Card Title",
            description: "This is a description of the card.",
        });
    };

    return {
        cards,
        createCards,
    };
}