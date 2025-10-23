export interface User {
    id: number;
    username: string;
    email: string;
    password: string
    display_name: string;
    biography: string;
    avatar_img: null;
    verified: boolean;
    status: Relationship;
    plan: Relationship;
    created_at: string;
    updated_at: string;
    two_factor_secret: null;
    two_factor_recovery_codes: null;
    two_factor_confirmed_at: null;
}

interface Relationship {
    id: number;
    name: string;
}