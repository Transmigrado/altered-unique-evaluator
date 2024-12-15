'use client'

import DashboardLayout from "@/components/core/DashboardLayout"

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {


  return (
    <DashboardLayout title="Mis cartas">
      {children}
    </DashboardLayout>
  )
}
