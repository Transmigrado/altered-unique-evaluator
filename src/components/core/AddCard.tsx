import { useAppDispatch } from "@/lib/hooks"
import { addCard } from "@/lib/features/cards"
import { Formik, Field as FieldFormik } from 'formik';
import { clsx } from 'clsx'

export default function AddCard() {

    const dispatch = useAppDispatch()

    return (
      <div className="bg-white shadow sm:rounded-lg">
        <div className="px-4 py-5 sm:p-6">
          <h3 className="text-base font-semibold text-gray-900">Ingresa tu carta</h3>
          <div className="mt-2 max-w-xl text-sm text-gray-500">
            <p>agrega el Id o url de tu carta unica</p>
          </div>

          <Formik
       initialValues={{ code: '' }}
       validate={values => {
      
         const errors = {};
         
         return errors;
       }}
       onSubmit={(values, { setSubmitting }) => {
         

         dispatch(addCard({
            code: values.code
         }))
         
       }}
     >
       {({
         handleSubmit,
   
       }) => (

         <form className="mt-5 sm:flex sm:items-center" onSubmit={handleSubmit}>
            <div className="w-full sm:max-w-xs">

            <FieldFormik
            required
            autoFocus
           name="code"
                type="text"
            className={clsx(
              'block w-full rounded-lg border border-transparent shadow ring-1 ring-black/10',
              'px-[calc(theme(spacing.2)-1px)] py-[calc(theme(spacing[1.5])-1px)] text-base/6 sm:text-sm/6',
              'data-[focus]:outline data-[focus]:outline-2 data-[focus]:-outline-offset-1 data-[focus]:outline-black',
            )}
          />

             
            </div>
            <button
              type="submit"
              className="mt-3 inline-flex w-full items-center justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 sm:ml-3 sm:mt-0 sm:w-auto"
            >
              Agregar
            </button>
          </form>
       )}
     </Formik>
    
    
        </div>
      </div>
    )
  }