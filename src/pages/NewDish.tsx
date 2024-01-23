import { useFormik } from "formik"
import { categories } from "../variables"
import * as Yup from 'yup';
import useFirebase from "../hooks/useFirebase";
import { Firestore, addDoc, collection } from "firebase/firestore";
import { useNavigate } from "react-router";
import { useFileUpload } from 'react-firebase-file-upload'
import { FirebaseStorage } from "firebase/storage";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export const NewDish = () => {
  const [sendingForm, setSendingForm] = useState(false)

  const { db, storage } = useFirebase()
  const navigate = useNavigate()

  const formik = useFormik({
    initialValues: {
      name: '',
      price: '',
      category: '',
      image: '',
      description: '',
      active: true,
      code: uuidv4(),
      
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
      dish.code = uuidv4()
      console.log(dish)
      setSendingForm(true)
      try {
        await addDoc(collection(db as Firestore, "products"), dish)
      setSendingForm(false)
        //? Redirect after save data
        navigate('/home')
      } catch (error) {
      setSendingForm(false)
        console.log(error)
      }
    }
  })

  const _input = useFileUpload(storage as FirebaseStorage, {
    accept: 'image/png, image/jpeg, image/jpg, image/webp',
    multiple: false,
    path: `productos`,
  })

  const {
    onChange,
    multiple,
    accept,
    files,
    onUpload,
    downloadURL,
    loading
  } = _input

  useEffect( () => {
    if (files.length > 0) {
      const uploadFiles = async () => {
        await onUpload()
      }
      uploadFiles()
    }
  }, [files])

  useEffect( () => {
    if (downloadURL.length > 0) {
      formik.values.image = downloadURL[0]
      // Todo: Add unique id for each file
    }
  }, [downloadURL])

  return (
    <>
      <div className="text-3xl font-light">Agregar platillo</div>
      <main className="flex justify-center mt-10 flex-col md:flex-row">
        <section className=" md:w-1/2">
          <div className="mb-4 justify-center ">
            {downloadURL &&
              downloadURL.map((url, index) => (
                <img key={index} src={url} alt='uploaded' />
              ))}
          </div>
        </section>
        <section className=" md:w-1/2">
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
              onChange={onChange} multiple={multiple} accept={accept}/>
              {loading && (
                <div className="bg-yellow-100 border-l-4 border-yellow-400 text-yellow-500 p-3 rounded" role="alert">
                  <p className="font-bold">Subiendo imagen, por favor espere...</p>
              </div>
              )}
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
            <input type="submit" value={loading ? 'Subiendo imagen...' : sendingForm ? 'Cargando platillo...' : 'Añadir platillo'} disabled={loading || sendingForm}
            className="bg-gray-800 hover:bg-gray-900 w-full rounded-md mt-5 p-2 text-white uppercase font-bold 
            hover:cursor-pointer disabled:bg-gray-700 disabled:hover:cursor-wait"/>
          </form>
        </section>
      </main>
    </>
  )
}
