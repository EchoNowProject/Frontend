export interface CardProps {
    title: string;
    text: React.ReactNode;
    hasImage: boolean;
    imageUrl?: string;
    linkUrl?: string;
    altText?: string;
    className?: string;
    items?: string[]; // Puede variar el tipo según lo que necesites
    onClick?: () => void;
}