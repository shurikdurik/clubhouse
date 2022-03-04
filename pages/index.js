import Head from 'next/head'
import { WelcomeStep } from './components/steps'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Clubhouse</title>
      </Head>
      <WelcomeStep />
    </div>
  )
}
