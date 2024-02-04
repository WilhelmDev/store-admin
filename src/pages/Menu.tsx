import { Firestore, collection, onSnapshot, query } from 'firebase/firestore'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import useFirebase from '../hooks/useFirebase'
import { Dishes } from '../interfaces/dishes'
import { Dish } from '../components/Dish'
import { Button, Card, CardBody, CardHeader } from '@material-tailwind/react'
import { PlusCircleIcon } from '@heroicons/react/16/solid'
import ModalProduct from '../components/product/modal'
import Skeleton from '../components/product/Skeleton'
const Menu = () => {

  const [dishes, setDishes] = useState<Dishes[]>([])
  const [loading, setLoading] = useState(false)

  const { db } = useFirebase()
  
  const getdata = () => {
    setLoading(true)
    const q = query(collection(db as Firestore, 'products'))
    onSnapshot(q, (snap => {
      const data = snap.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data()
        } as Dishes
      })
      setDishes(data)
      setLoading(false)
    }))
  }

  useEffect(() => {
    getdata()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Card className='p-2' shadow={false}>
      <CardHeader floated={false} shadow={false}>
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
      </CardHeader>

      <CardBody>
        <section className=' d-flex md:grid md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-2 auto-rows-auto'>
        {dishes.length > 0
        ? dishes.map((dish => (
          <Dish  key={dish.id} dish={dish} />
        )))
        : loading && 
          <>
            <Skeleton />
            <Skeleton />
            <Skeleton />
          </>
        }
        </section>
      <ModalProduct />
      </CardBody>
    </Card>
  )
}

export default Menu