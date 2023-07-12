import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
     {/* Intégrer une image
              <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className="dark:invert"
              width={100}
              height={24}
              priority
            /> */}
      <h1 className="text-6xl font-bold text-center">
       Bienvenue sur Troc Zone ! 
      </h1>
    </main>
  )
}
