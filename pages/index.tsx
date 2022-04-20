import type { NextPage } from 'next'
import { useEffect, useState } from 'react'
import BoasVindas from '../components/BoasVindas'
import Capa from '../components/Capa'
import ContagemRegressiva from '../components/ContagemRegressiva'
import { Footer } from '../components/Footer'
import HeadComponent from '../components/HeadComponet'
import MenuFixo from '../components/MenuFixo'
import MenuNavegacao from '../components/MenuNavegacao'
import useMenuShow from '../hooks/useMenuShow'

const Home: NextPage = () => {

  
  
  const [transparente, setTransparente] = useState(true)
  const { menuShow, setMenuShow } = useMenuShow()
  const [positionPage, setPositionPage] = useState(0)

  

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 30) {
        setTransparente(false)
        setPositionPage(window.scrollY)
      } else {
        setTransparente(true)
      }
    })
  }, [])

  function scrollToPosition() {
    window.scrollTo({
      top: positionPage,
      behavior: 'smooth'
    })
  }

  useEffect(()=>{
    scrollToPosition()
  },[menuShow])

  return (
    <>
      <HeadComponent title='Página Inicial'/>
      <main className='relative h-auto w-screen flex-col bg-casamento-900 overflow-y-auto'>
        {menuShow && <MenuNavegacao/>}
        <MenuFixo letrasIniciais='P & E' transparente={menuShow === true ? false : transparente} menu={menuShow} onClick={() => {setMenuShow(menuShow === false ? true : false), scrollToPosition()}} />
          <div className={`${menuShow && 'hidden'}`}>
            <Capa />
            <div className='flex justify-center items-center w-full h-96'>
              <ContagemRegressiva />
            </div>
            <div className='flex justify-center items-center mt-10 h-auto overflow-y-auto'>
              <BoasVindas
                texto='Este site foi feito com muito carinho para que vocês possam viver esse dia alegre junto conosco e participar de pertinho de cada passo nosso até o grande dia! Veja um pouco de nossa história, como tudo começou. Aproveite nossa galeria de fotos. E assista nosso depoimento aos familiares e amigos. Esperamos que se sintam conectados conosco. Bem-vindos ao nosso Casamento!'
              />
            </div>
          </div>
            <Footer />
      </main>
    </>
  )
}

export default Home
