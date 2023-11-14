import { useFormik } from "formik"
import { categories } from "../variables"
import * as Yup from 'yup';
import useFirebase from "../hooks/useFirebase";
import { useEffect } from "react";
import { Firestore, addDoc, collection } from "firebase/firestore";

export const NewDish = () => {

  const { db } = useFirebase()

  const formik = useFormik({
    initialValues: {
      name: '',
      price: '',
      category: '',
      image: '',
      description: ''
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(3, 'El nombre debe tener al menos 3 caracteres')
        .required('El nombre del platillo es obligatorio'),
      price: Yup.number()
        .min(1, 'El precio debe tener al menos un dígito')
        .required('El precio es obligatorio'),
      category: Yup.string()
        .required('La categoria es obligatoria'),
      description: Yup.string()
        .min(10, 'La descripcion debe tener al menos 10 carácteres')
        .required('La descripcion del platillo es obligatoria'),

    }),
    onSubmit: async dish => {
      try {
        const doc = await addDoc(collection(db as Firestore, "products"), dish)
        console.log(doc)
      } catch (error) {
        console.log(error)
      }
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
              value={formik.values.name} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
              { formik.touched.name && formik.errors.name && (
                <div className="bg-red-100 border-l-4 border-red-400 text-red-700 p-3 rounded mb-2" role="alert">
                  <p className="font-bold">Hubo un error:</p>
                  <p>{formik.errors.name}</p>
                </div>
              )}
            </div>
            <div className="mb-4">
              <label htmlFor="price" className="text-sm font-bold text-gray-700 mb-2 block">Precio</label>
              <input type="number" className=" appearance-none text-gray-700 border rounded w-full py-2 px-3 shadow leading-tight
              focus:outline-none focus:shadow-none " id="price" placeholder="Precio del platillo" min={0}
              value={formik.values.price} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
              { formik.touched.price && formik.errors.price && (
                <div className="bg-red-100 border-l-4 border-red-400 text-red-700 p-3 rounded" role="alert">
                  <p className="font-bold">Hubo un error:</p>
                  <p>{formik.errors.price}</p>
                </div>
              )}
            </div>
            <div className="mb-4">
              <label htmlFor="category" className="text-sm font-bold text-gray-700 mb-2 block">Categorias</label>
              <select name="category" id="category" className="appearance-none text-gray-700 border rounded w-full py-2 px-3 shadow leading-tight
              focus:outline-none focus:shadow-none" value={formik.values.category} onChange={formik.handleChange} onBlur={formik.handleBlur}>
                <option value="">--Seleccione--</option>
                {categories.map((cat) => (
                  <option key={cat.value} value={cat.value}>{cat.name}</option>
                  ))
                }
              </select>
              { formik.touched.category && formik.errors.category && (
                <div className="bg-red-100 border-l-4 border-red-400 text-red-700 p-3 rounded" role="alert">
                  <p className="font-bold">Hubo un error:</p>
                  <p>{formik.errors.category}</p>
                </div>
              )}
            </div>
            <div className="mb-4">
              <label htmlFor="image" className="text-sm font-bold text-gray-700 mb-2 block">Imagen</label>
              <input type="file" className=" appearance-none text-gray-700 border rounded w-full py-2 px-3 shadow leading-tight
              focus:outline-none focus:shadow-none " id="image" placeholder="imagen del platillo"
              value={formik.values.image} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
            </div>
            <div className="mb-4">
              <label htmlFor="description" className="text-sm font-bold text-gray-700 mb-2 block">Descripción</label>
              <textarea className=" appearance-none text-gray-700 border rounded w-full py-2 px-3 shadow leading-tight h-20
              focus:outline-none focus:shadow-none " id="description" placeholder="Descripcion del platillo"
              value={formik.values.description} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
              { formik.touched.description && formik.errors.description && (
                <div className="bg-red-100 border-l-4 border-red-400 text-red-700 p-3 rounded" role="alert">
                  <p className="font-bold">Hubo un error:</p>
                  <p>{formik.errors.description}</p>
                </div>
              )}
            </div>
            <input type="submit" value="Agregar Platillo" 
            className="bg-gray-800 hover:bg-gray-900 w-full rounded-md mt-5 p-2 text-white uppercase font-bold hover:cursor-pointer"/>
          </form>
        </div>
      </div>
    </>
  )
}
