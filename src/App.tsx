import { BuildingStorefrontIcon, Cog6ToothIcon, InboxIcon, PowerIcon, UserCircleIcon } from '@heroicons/react/24/solid'
import { ShoppingBagIcon } from '@heroicons/react/24/solid'
import { PresentationChartBarIcon } from '@heroicons/react/24/solid'
import { Card, Chip, List, ListItem, ListItemPrefix, ListItemSuffix, Typography } from '@material-tailwind/react'
import { useFormik } from 'formik'
import { NavLink } from 'react-router-dom'
import * as Yup from 'yup'
function App() {

  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .required('El email es obligatorio')
        .email('El formato es incorrecto'),
      password: Yup.string()
        .min(3, 'La contraseña es demasiada corta')
        .required('La contraseña es obligatoria'),
    }),
    onSubmit: async (credentials) => {
      // const data = await LoginUser(credentials)
      // if (!data.ok) {
      //   toast.info(data.msg)
      //   return
      // }
      // toast.success('Bienvenido')
      console.log(credentials)
    }
  })

  // const setToken = (token:string) => {
  //   localStorage.setItem('token', token )
  // }

  return (
    <>
    <Card className="h-[calc(100vh-2rem)] w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5">
      <div className="mb-2 p-4">
        <Typography variant="h5" color="blue-gray">
          Administra tu negocio
        </Typography>
      </div>
      <List>
        <ListItem>
          <ListItemPrefix>
            <PresentationChartBarIcon className="h-5 w-5" />
          </ListItemPrefix>
          Dashboard
        </ListItem>
        <NavLink to={'/orders'} className={({ isActive}) => [
        !isActive ? "text-yellow-400" : "text-gray-400"
        ].join(" ")}>
          <ListItem>
            <ListItemPrefix>
              <BuildingStorefrontIcon className="h-5 w-5" />
            </ListItemPrefix>
            Inventario
          </ListItem>
        </NavLink>
        <ListItem>
          <ListItemPrefix>
            <InboxIcon className="h-5 w-5" />
          </ListItemPrefix>
          Inbox
          <ListItemSuffix>
            <Chip value="14" size="sm" variant="ghost" color="blue-gray" className="rounded-full" />
          </ListItemSuffix>
        </ListItem>
        <ListItem>
          <ListItemPrefix>
            <UserCircleIcon className="h-5 w-5" />
          </ListItemPrefix>
          Profile
        </ListItem>
        <ListItem>
          <ListItemPrefix>
            <Cog6ToothIcon className="h-5 w-5" />
          </ListItemPrefix>
          Settings
        </ListItem>
        <ListItem>
          <ListItemPrefix>
            <PowerIcon className="h-5 w-5" />
          </ListItemPrefix>
          Log Out
        </ListItem>
      </List>
    </Card>
      {/* <main className=' min-h-screen flex items-center justify-center'>
        <div className='lg:w-1/3 bg-purple-800 px-8 py-6 rounded-xl flex flex-col gap-2'>
          <h1 className=' font-bold text-3xl text-white text-center'>
            Inicie sesión
          </h1>
          <form action="" className='my-3 shadow rounded-md w-full flex flex-col gap-4' onSubmit={formik.handleSubmit}>
            <div>
              <label htmlFor="email" className='text-white block text-xl font-bold'>Email</label>
              <input type="text" name="email" id="email" placeholder='Ingrese su email' className='w-full mt-2 p-2 rounded-md shadow'
              onChange={formik.handleChange} value={formik.values.email} onBlur={formik.handleBlur}/>
              { formik.touched.email && formik.errors.email && (
                  <div className="bg-red-200 border-l-4 border-red-400 text-red-700 p-3 rounded-md" role="alert">
                    <p className="font-bold">Hubo un error:</p>
                    <p>{formik.errors.email}</p>
                  </div>
                )}
            </div>
            <div>
              <label htmlFor="password" className='text-white block text-xl font-bold'>Password</label>
              <input type="password" name="password" id="password" placeholder='Ingrese su contraseña' className='w-full mt-2 p-2 rounded-md shadow'
              onChange={formik.handleChange} value={formik.values.password} onBlur={formik.handleBlur}/>
              { formik.touched.password && formik.errors.password && (
                  <div className="bg-red-200 border-l-4 border-red-400 text-red-700 p-3 rounded-md" role="alert">
                    <p className="font-bold">Hubo un error:</p>
                    <p>{formik.errors.password}</p>
                  </div>
                )}
            </div>
            <input type="submit" value="Ingresar"
            className='mt-4 bg-yellow-400 rounded-xl px-3 py-2 text-purple-800 font-bold text-lg md:w-2/3 md:mx-auto hover:cursor-pointer'/>
          </form>
        </div>
      </main> */}
    </>
  )
}

export default App
