import type { NextPage } from 'next'
import { useEffect, useState } from 'react'
import BoasVindas from '../components/BoasVindas'
import Capa from '../components/Capa'
import ContagemRegressiva from '../components/ContagemRegressiva'
import { Footer } from '../components/Footer'
import MenuFixo from '../components/MenuFixo'
import useMenuShow from '../hooks/useMenuShow'

const Home: NextPage = () => {

  const [transparente, setTransparente] = useState(true)
  const {menuShow, setMenuShow} = useMenuShow()

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 30) {
        setTransparente(false)
      } else {
        setTransparente(true)
      }
    })
  }, [])

  console.log(menuShow)

  return (
    <>
      <main className='h-auto w-screen flex-col bg-casamento-900'>
        <MenuFixo letrasIniciais='P & E' transparente={transparente} menu={menuShow} onClick={()=> setMenuShow(menuShow === true ? false : true)} />
        <Capa />
        <div className='flex justify-center items-center w-full h-96'>
          <ContagemRegressiva />
        </div>
        <div className='flex justify-center items-center mt-10 h-[36rem]'>
          <BoasVindas
            texto='Este site foi feito com muito carinho para que vocês possam viver esse dia alegre junto conosco e participar de pertinho de cada passo nosso até o grande dia! Veja um pouco de nossa história, como tudo começou. Aproveite nossa galeria de fotos. E assista nosso depoimento aos familiares e amigos. Esperamos que se sintam conectados conosco. Bem-vindos ao nosso Casamento!'
          />
        </div>
      </main>
      <Footer />
    </>
  )
}

export default Home
