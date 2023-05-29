import Image from 'next/image'
import Link from 'next/link'
import { Form } from './components/form/form'
import { InicialPage } from './components/inicial-page/inicial-page'

export default function Home() {
  return (
    <main className="flex bg-slate-50 font-sans">
      {/*left*/}
        <Form></Form>
      {/*right*/}
        <InicialPage></InicialPage>
    </main>
  )
}
