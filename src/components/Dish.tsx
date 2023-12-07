import { DishProps } from "../interfaces/dishes"

export const Dish = ({ dish }:DishProps) => {
  return (
    <div className="w-full px-3 mb-4"
    >{dish.name}</div>
  )
}
