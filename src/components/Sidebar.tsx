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
          isActive && 'text-yellow-600'
          ].join(" ")}>
            <ListItem disabled={location.pathname === '/home'} className={ location.pathname === '/home' ? '!text-yellow-600 border border-yellow-600 !opacity-100' : ''} >
              <ListItemPrefix>
                <BuildingStorefrontIcon className="h-5 w-5" />
              </ListItemPrefix>
              Inventario
            </ListItem>
          </NavLink>
          <NavLink to={'/bills'}>
            <ListItem disabled={location.pathname === '/bills'} className={ location.pathname === '/bills' ? '!text-yellow-600 !opacity-100 border border-yellow-600' : ''}>
              <ListItemPrefix>
                <DocumentIcon className="h-5 w-5" />
              </ListItemPrefix>
              Facturas
            </ListItem>
          </NavLink>
          <NavLink to={'/workpeople'}>
            <ListItem disabled={location.pathname === '/workpeople'} className={ location.pathname === '/workpeople' ? '!text-yellow-600 !opacity-100 border border-yellow-600' : ''}>
              <ListItemPrefix>
                <UserIcon className="h-5 w-5" />
              </ListItemPrefix>
              Trabajadores
            </ListItem>
          </NavLink>
          <NavLink to={'/'} className={({ isActive}) => [
          isActive && "text-yellow-600"
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
      <div className="md:w-4/5 xl:w-4/5">
        <Outlet />
      </div>
    </div>
  )
}
