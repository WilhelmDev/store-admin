import { NavLink, Outlet, useLocation} from 'react-router-dom'
import { BuildingStorefrontIcon, Cog6ToothIcon, DocumentIcon, UserIcon } from '@heroicons/react/24/solid'
import { PresentationChartBarIcon } from '@heroicons/react/24/solid'
import { Card, List, ListItem, ListItemPrefix, Typography } from '@material-tailwind/react'
export const Sidebar = () => {

  const location = useLocation()
  return (
    <div className='md:flex'>
      <div className=" md:w-1/5 xl:w-1/5 min-h-screen">
        <Card className=" h-screen w-full p-4 shadow-xl shadow-blue-gray-900/5">
      <div className="mb-2 p-4">
        <Typography variant="h5" color="blue-gray" className='text-center'>
          Administra tu negocio
        </Typography>
      </div>
      <List>
        <NavLink to={'/home'} className={({ isActive}) => [
        isActive && 'text-yellow-400'
        ].join(" ")}>
          <ListItem disabled={location.pathname === '/home'} className={ location.pathname === '/home' ? '!text-yellow-400 border border-yellow-400 !opacity-100' : ''} >
            <ListItemPrefix>
              <BuildingStorefrontIcon className="h-5 w-5" />
            </ListItemPrefix>
            Inventario
          </ListItem>
        </NavLink>
        <NavLink to={'/orders'}>
          <ListItem disabled={location.pathname === '/orders'} className={ location.pathname === '/orders' ? '!text-yellow-400 !opacity-100 border border-yellow-400' : ''}>
            <ListItemPrefix>
              <DocumentIcon className="h-5 w-5" />
            </ListItemPrefix>
            Facturas
          </ListItem>
        </NavLink>
        <ListItem>
          <ListItemPrefix>
            <UserIcon className="h-5 w-5" />
          </ListItemPrefix>
          Trabajadores
        </ListItem>
        <NavLink to={'/'} className={({ isActive}) => [
        isActive && "text-yellow-400"
        ].join(" ")}>
          <ListItem disabled={location.pathname === '/'}>
            <ListItemPrefix>
              <PresentationChartBarIcon className="h-5 w-5" />
            </ListItemPrefix>
            Reportes
          </ListItem>
        </NavLink>
        <ListItem>
          <ListItemPrefix>
            <Cog6ToothIcon className="h-5 w-5" />
          </ListItemPrefix>
          Ajustes
        </ListItem>
      </List>
    </Card>
      </div>
      <div  className=" md:w-4/5 xl:w-4/5 p-6">
        <Outlet />
      </div>
    </div>
  )
}
