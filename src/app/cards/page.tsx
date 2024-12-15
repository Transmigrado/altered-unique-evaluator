'use client'
import CardGrid from '@/components/core/CardGrid'
import { useAppDispatch } from '@/lib/hooks'
import { useEffect } from 'react'
import { fetch } from '@/lib/features/cards'


export default function Cards() {

  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetch())
  }, [])

  return (
    <>
      <CardGrid />
    </>
  )
}
