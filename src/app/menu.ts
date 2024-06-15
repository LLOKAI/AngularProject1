export interface Location {
    locationId: number;
    name: string;
    address: string;
    city: string;
    state: string;
    zipCode: string;
}

export interface MenuItem {
    id: number;
    name: string;
    category: string;
    price: number;
    description: string;
}

export interface Menu { 
    Breakfast: MenuItem[];
    Lunch: MenuItem[];
    Dinner: MenuItem[];
}