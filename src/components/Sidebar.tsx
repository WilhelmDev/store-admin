import { NavLink, Outlet} from 'react-router-dom'
export const Sidebar = () => {
  return (
    <div className='md:flex'>
      <div className=" md:w-1/5 xl:w-1/5 bg-gray-800 min-h-screen">
        <div className="p-6 ">
          <p className="uppercase text-white tracking-wide text-center font-bold">
            Sidebar restaurant
          </p>
          <p className="mt-3 text-yellow-600">
            Administra tu restaurant con las siguientes opciones:
          </p>
          <nav className='mt-10'>
            <NavLink to={'/home'} className={({ isActive}) => [
            isActive ? "text-yellow-400" : "text-gray-400",
            "p-1 block hover:bg-yellow-500 hover:text-gray-900",
            ].join(" ")}>
              Menu
            </NavLink>
            <NavLink to={'/orders'} className={({ isActive}) => [
            isActive ? "text-yellow-400" : "text-gray-400",
            "p-1 block hover:bg-yellow-500 hover:text-gray-900",
            ].join(" ")}>
              Ordenes
            </NavLink>
          </nav>
        </div>
      </div>
      <div  className=" md:w-4/5 xl:w-4/5 p-6">
        <Outlet />
      </div>
    </div>
  )
}
