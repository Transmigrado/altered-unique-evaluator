import SignIn from '@/components/auth/SignIn'
import { GradientBackground } from '@/components/gradient'
import { Link } from '@/components/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Login',
  description: 'Sign in to your account to continue.',
}

export default function Login() {
  return (
    <main className="overflow-hidden bg-gray-50">
      <GradientBackground />
      <div className="isolate flex min-h-dvh items-center justify-center p-6 lg:p-8">
        <div className="w-full max-w-md rounded-xl bg-white shadow-md ring-1 ring-black/5">
          <SignIn />
          <div className="m-1.5 rounded-lg bg-gray-50 py-4 text-center text-sm/5 ring-1 ring-black/5">
            ¿No tienes cuenta?{' '}
            <Link href="#" className="font-medium hover:text-gray-600">
              Crear cuenta
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
