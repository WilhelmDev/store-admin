import { useFormik } from "formik"
import { categories } from "../variables"

export const NewDish = () => {

  const formik = useFormik({
    initialValues: {
      name: '',
      price: '',
      category: '',
      image: '',
      description: ''
    },
    onSubmit: data => {
      console.log(data);
    }
  })

  return (
    <>
      <div className="text-3xl font-light">Agregar platillo</div>

      <div className="flex justify-center mt-10">
        <div className=" w-full max-w-2xl">
          <form onSubmit={formik.handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="text-sm font-bold text-gray-700 mb-2 block">Nombre</label>
              <input type="text" className=" appearance-none text-gray-700 border rounded w-full py-2 px-3 shadow leading-tight
              focus:outline-none focus:shadow-none " id="name" placeholder="Nombre del platillo"
              value={formik.values.name} onChange={formik.handleChange}/>
            </div>
            <div className="mb-4">
              <label htmlFor="price" className="text-sm font-bold text-gray-700 mb-2 block">Precio</label>
              <input type="number" className=" appearance-none text-gray-700 border rounded w-full py-2 px-3 shadow leading-tight
              focus:outline-none focus:shadow-none " id="price" placeholder="Precio del platillo" min={0}
              value={formik.values.price} onChange={formik.handleChange}/>
            </div>
            <div className="mb-4">
              <label htmlFor="category" className="text-sm font-bold text-gray-700 mb-2 block">Categorias</label>
              <select name="category" id="category" className="appearance-none text-gray-700 border rounded w-full py-2 px-3 shadow leading-tight
              focus:outline-none focus:shadow-none" value={formik.values.category} onChange={formik.handleChange}>
                <option value="">--Seleccione--</option>
                {categories.map((cat) => (
                  <option key={cat.value} value={cat.value}>{cat.name}</option>
                  ))
                }
              </select>
            </div>
            <div className="mb-4">
              <label htmlFor="image" className="text-sm font-bold text-gray-700 mb-2 block">Imagen</label>
              <input type="file" className=" appearance-none text-gray-700 border rounded w-full py-2 px-3 shadow leading-tight
              focus:outline-none focus:shadow-none " id="image" placeholder="imagen del platillo"
              value={formik.values.image} onChange={formik.handleChange}/>
            </div>
            <div className="mb-4">
              <label htmlFor="description" className="text-sm font-bold text-gray-700 mb-2 block">Descripción</label>
              <textarea className=" appearance-none text-gray-700 border rounded w-full py-2 px-3 shadow leading-tight h-20
              focus:outline-none focus:shadow-none " id="description" placeholder="Descripcion del platillo"
              value={formik.values.description} onChange={formik.handleChange}/>
            </div>
            <input type="submit" value="Agregar Platillo" 
            className="bg-gray-800 hover:bg-gray-900 w-full rounded-md mt-5 p-2 text-white uppercase font-bold hover:cursor-pointer"/>
          </form>
        </div>
      </div>
    </>
  )
}
