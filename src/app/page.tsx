'use client'

import { useQuery } from '@tanstack/react-query'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Hero } from '@/pageComponents/home/Hero'
import { Section2 } from '@/pageComponents/home/Section2'

// Demo API function
const fetchExample = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts/1')
  if (!response.ok) {
    throw new Error('Network response was not ok')
  }
  return response.json()
}

export default function Home() {
  const { data, isLoading, error } = useQuery({
    queryKey: ['example'],
    queryFn: fetchExample,
  })

  return (
    <div className="min-h-screen ">
      <Hero />
      <Section2 />
    </div>
  )
}