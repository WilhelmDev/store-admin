import { Firestore, collection, onSnapshot, query } from 'firebase/firestore'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import useFirebase from '../hooks/useFirebase'
import { Dishes } from '../interfaces/dishes'
import { Dish } from '../components/Dish'
const Menu = () => {

  const [dishes, setDishes] = useState<Dishes[]>([])

  const { db } = useFirebase()

  useEffect(() => {
    const getdata = () => {
      const q = query(collection(db as Firestore, 'products'))
      onSnapshot(q, (snap => {
        const data = snap.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data()
          } as Dishes
        })
        setDishes(data)
        console.log(data)
      }))
    }
    getdata()

  }, [])

  return (
    <>
      <div className="mb-4 text-lg">
        Menu
      </div>
      <Link to={'/new-dish'} className='bg-blue-800 hover:bg-blue-700 inline-block mb-5 p-2 text-white uppercase font-bold'>
        Nuevo Platillo
      </Link>

      {dishes && dishes.map((dish => (
        <Dish  key={dish.id} dish={dish} />
      )))}
    </>
  )
}

export default Menu