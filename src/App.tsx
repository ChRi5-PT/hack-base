import { useState } from 'react'

import { Button } from '@/components/ui/button'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main className="mx-auto flex min-h-screen max-w-xl flex-col items-center justify-center gap-6 p-8">
      <h1 className="text-4xl font-bold tracking-tight" data-testid="title">
        Hack the Andes
      </h1>
      <p className="text-muted-foreground">
        Base lista: Vite + React + Tailwind + shadcn + Supabase.
      </p>
      <Button onClick={() => setCount((c) => c + 1)} data-testid="counter">
        Clicks: {count}
      </Button>
    </main>
  )
}

export default App
