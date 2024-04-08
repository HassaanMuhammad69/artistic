import dynamic from 'next/dynamic'
import Float from '@/components/float'
import About from '@/components/About'
import { Foot } from '@/components/component/foot'

const Scene = dynamic(() => import('@/components/Scene'), {
    ssr: false,
})

export default function Home() {
  return (
    <main className="relative h-screen" >
        <Scene/>
        <About/>
        <Float/>
        <Foot/>
    </main>
  )
}