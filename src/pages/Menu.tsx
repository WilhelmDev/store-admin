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
        Inventario
      </div>
      <Link to={'/new-dish'} className='bg-blue-800 hover:bg-blue-700 inline-block mb-5 p-2 text-white uppercase font-bold'>
        Nuevo Platillo
      </Link>

      <section className=' d-flex md:grid md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-2 auto-rows-auto'>
      {dishes && dishes.map((dish => (
        <Dish  key={dish.id} dish={dish} />
      )))}
      </section>
    </>
  )
}

export default Menu