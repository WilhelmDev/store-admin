export interface Dishes {
        id: string,
        active: boolean,
        existency: number,
        name: string,
        description: string,
        category: string,
        image: string,
        price: number,
        code: string
}

export interface DishProps {
        dish:Dishes
}