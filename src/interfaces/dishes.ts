export interface Dishes {
        id: string,
        existency: boolean,
        name: string,
        description: string,
        category: string,
        image: string,
        price: number
}

export interface DishProps {
        dish:Dishes
}