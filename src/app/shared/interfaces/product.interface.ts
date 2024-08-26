
export interface Product{
    category: string;
    description: string;
    id: number;
    image: string;
    price: number;
    calling:{rate:number, count:number};
    title: string;
}