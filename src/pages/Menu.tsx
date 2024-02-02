import { Firestore, collection, onSnapshot, query } from 'firebase/firestore'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import useFirebase from '../hooks/useFirebase'
import { Dishes } from '../interfaces/dishes'
import { Dish } from '../components/Dish'
import { Button } from '@material-tailwind/react'
import { PlusCircleIcon } from '@heroicons/react/16/solid'
import ModalProduct from '../components/product/modal'
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
    <main className='p-2'>
      <div className="mb-4 text-lg">
        Inventario
      </div>
      <div>
        <Link to={'/new-dish'} className=' inline-block mb-5 '>
          <Button className="flex items-center gap-3 text-yellow-600" color='white'>
            <PlusCircleIcon className="h-5 w-5"/>
            Añadir Producto
          </Button>
        </Link>
      </div>

      <section className=' d-flex md:grid md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-2 auto-rows-auto'>
      {dishes && dishes.map((dish => (
        <Dish  key={dish.id} dish={dish} />
      )))}
      </section>
      <ModalProduct />
    </main>
  )
}

export default Menu