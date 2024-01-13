import { useFormik } from 'formik'
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

  const setToken = (token:string) => {
    localStorage.setItem('token', token )
  }

  return (
    <>
      <main className=' min-h-screen flex items-center justify-center'>
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
      </main>
    </>
  )
}

export default App
