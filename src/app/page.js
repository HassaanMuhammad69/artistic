import dynamic from 'next/dynamic'
import Float from '@/components/float'

const Scene = dynamic(() => import('@/components/Scene'), {
    ssr: false,
})

export default function Home() {
  return (
    <main className="relative h-screen" >
        <Scene/>
        <Float/>
    </main>
  )
}