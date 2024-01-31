import { Button, Dialog, DialogBody, DialogFooter, DialogHeader, Input, Option, Select, Switch, Textarea, Typography } from '@material-tailwind/react'
import useStore from '../../hooks/useStore'
import { StoreContextProps } from '../../interfaces/store'
import { Dishes } from '../../interfaces/dishes'
import { categories } from '../../variables'
import { TrashIcon } from '@heroicons/react/24/solid'

export default function ModalProduct() {
  
  const { dialogProduct, dialogTrigger, selectedProduct, deleteProduct, loading } = useStore() as StoreContextProps
  const { image, name, category, price, existency, description, active, code } = selectedProduct as Dishes
  return (
    <Dialog open={dialogProduct} handler={dialogTrigger} size='lg'>
        <DialogHeader className='flex justify-between'>
          <Typography variant='h3'>
            Editar producto
          </Typography>
          <Button className='flex items-center gap-3 transition hover:bg-red-500 hover:text-white focus:ring-1' variant='outlined' color='red'
          onClick={() => deleteProduct(code)} loading={loading}>
            Eliminar
            <TrashIcon className='h-5 w-5'/>
          </Button>
        </DialogHeader>
        <DialogBody>
          <main className='flex flex-col md:flex-row'>
            <section className='w-full md:w-1/2'>
              <img src={image} alt={`image ${name}`} className="rounded aspect-square cursor-pointer md:w-11/12 hover:scale-[.99] duration-100"/>
            </section>
            <section className='w-full md:w-1/2 flex flex-col gap-6'>
              <Input crossOrigin={undefined} label='Nombre' value={name} />
              <Input crossOrigin={undefined} label='Precio' value={price} type='number' />
              <Select variant="outlined" label="Categoria" value={category}>
                { categories.map((cat) => (
                  <Option key={cat.value}>{cat.name}</Option>
                ))}
              </Select>
              <Textarea value={description} label='Descrición' />
              <div className='flex justify-around gap-10' >
                <Switch crossOrigin={undefined} label='Activo' color='yellow' checked={active}/>
                <Input crossOrigin={undefined} value={existency} label='Cantidad en inventario' readOnly/>
              </div>
            </section>
          </main>
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={() => dialogTrigger()}
            className="mr-1"
          >
            <span>Cancel</span>
          </Button>
          <Button variant="gradient" color="green" onClick={() => dialogTrigger()}>
            <span>Confirm</span>
          </Button>
        </DialogFooter>
      </Dialog>
  )
}
