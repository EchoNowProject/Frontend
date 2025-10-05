export interface PricingCardProps {
    title: string;
    price: number;
    fecha: string;
    texto: React.ReactNode;
    className?: string;
    buttonText: React.ReactNode;
    onclick?: () => void
}