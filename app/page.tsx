import Image from 'next/image'
import HomePage from '../pages/HomePage'; // Import HomePage component

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <HomePage />
    </main>
  )
}