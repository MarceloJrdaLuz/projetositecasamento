import type { NextPage } from 'next'
import Head from 'next/head'
import BoasVindas from '../components/BoasVindas'
import Capa from '../components/Capa'
import ContagemRegressiva from '../components/ContagemRegressiva'
import MenuFixo from '../components/MenuFixo'

const Home: NextPage = () => {
  return (
    <>
      <main className='h-screen w-screen flex-col bg-casamento-00'>
        <MenuFixo />
        <Capa />
        <div className='flex justify-center items-center w-full h-2/4'>
          <ContagemRegressiva />
        </div>
        <div className='flex justify-center items-center mt-10'>
          <BoasVindas />
        </div>
      </main>
    </>
  )
}

export default Home
