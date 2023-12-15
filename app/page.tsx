import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { describe } from 'node:test'

export default function Home() {
  return (
    <main>
      <Button variant='destructive' className='px-10'>Hello</Button>
    </main>
  )
}
