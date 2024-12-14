'use client'
import { Button } from '@/components/button'

import { Link } from '@/components/link'
import { Mark } from '@/components/logo'
import { Field, Label } from '@headlessui/react'
import { clsx } from 'clsx'
import type { Metadata } from 'next'
import { Formik, Field as FieldFormik } from 'formik';
import { useAppDispatch } from '@/lib/hooks'
import { createAccount } from '@/lib/features/connect'

export const metadata: Metadata = {
  title: 'Login',
  description: 'Sign in to your account to continue.',
}

export default function Signup() {


  const dispatch = useAppDispatch();

  return (
    <Formik
       initialValues={{ name: '', email: '', password: '' }}
       validate={values => {
       
         const errors = {};
         /*
         if (!values.email) {
           errors.email = 'Required';
         } else if (
           !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
         ) {
           errors.email = 'Invalid email address';
         }*/
         return errors;
       }}
       onSubmit={(values, { setSubmitting }) => {
        console.log('values', values)
          const { name, email, password} = values
          dispatch(createAccount({
            name,
            email,
            password
          }))
       }}
     >
       {({
         values,
         errors,
         touched,
         handleChange,
         handleBlur,
         handleSubmit,
         isSubmitting,
   
       }) => (
        <form action="#" method="POST" className="p-7 sm:p-11" onSubmit={handleSubmit}>
         
        <div className="flex items-start">
          <Link href="/" title="Home">
            <Mark className="h-9 fill-black" />
          </Link>
        </div>
        <h1 className="mt-8 text-base/6 font-medium">¡Bienvenido!</h1>
        <p className="mt-1 text-sm/5 text-gray-600">
          ingresa con tu cuenta para comenzar.
        </p>
        <Field className="mt-8 space-y-3">
          <Label className="text-sm/5 font-medium">Nombre</Label>
          <FieldFormik
            required
            autoFocus
            type="name"
            name="name"
            className={clsx(
              'block w-full rounded-lg border border-transparent shadow ring-1 ring-black/10',
              'px-[calc(theme(spacing.2)-1px)] py-[calc(theme(spacing[1.5])-1px)] text-base/6 sm:text-sm/6',
              'data-[focus]:outline data-[focus]:outline-2 data-[focus]:-outline-offset-1 data-[focus]:outline-black',
            )}
          />
        </Field>
        <Field className="mt-8 space-y-3">
          <Label className="text-sm/5 font-medium">Correo</Label>
          <FieldFormik
            required
            autoFocus
            type="email"
            name="email"
            className={clsx(
              'block w-full rounded-lg border border-transparent shadow ring-1 ring-black/10',
              'px-[calc(theme(spacing.2)-1px)] py-[calc(theme(spacing[1.5])-1px)] text-base/6 sm:text-sm/6',
              'data-[focus]:outline data-[focus]:outline-2 data-[focus]:-outline-offset-1 data-[focus]:outline-black',
            )}
          />
        </Field>
        <Field className="mt-8 space-y-3">
          <Label className="text-sm/5 font-medium">Contraseña</Label>
          <FieldFormik
            required
            type="password"
            name="password"
            className={clsx(
              'block w-full rounded-lg border border-transparent shadow ring-1 ring-black/10',
              'px-[calc(theme(spacing.2)-1px)] py-[calc(theme(spacing[1.5])-1px)] text-base/6 sm:text-sm/6',
              'data-[focus]:outline data-[focus]:outline-2 data-[focus]:-outline-offset-1 data-[focus]:outline-black',
            )}
          />
        </Field>

        <div className="mt-8">
          <Button type="submit" className="w-full">
            Crear cuenta
          </Button>
        </div>
      </form>
       )}
     </Formik>
    
  )
}
