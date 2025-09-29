export interface CardProps {
    title: string;
    description?: string;
    imageUrl?: string;
    linkUrl?: string;
    altText?: string;
    className?: string;
    onClick?: () => void;
}