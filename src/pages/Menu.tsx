import { Link } from 'react-router-dom'
const Menu = () => {
  return (
    <>
      <div className="mb-4 text-lg">
        Menu
      </div>
      <Link to={'/new-dish'} className='bg-blue-800 hover:bg-blue-700 inline-block mb-5 p-2 text-white uppercase font-bold'>
        Nuevo Platillo
      </Link>
    </>
  )
}

export default Menu