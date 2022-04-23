import Image from "next/image"
import Link from "next/link"
import divisor from '../public/divisord.png'

interface ListaPresentesProps {
    titulo: string
    subtitulo: string
    opcao1: string
    opcao2: string
    chavePix: string | number
}

export default function ListaPresentes(props: ListaPresentesProps) {
    return (
        <section className={`w-screen h-auto flex-col justify-center items-center mt-14`}>
            <div className={`flex-col justify-between items-center w-full h-auto`}>
                <h1 className={`w-screen flex justify-center items-center text-5xl  text-center h-32`}>
                    {props.titulo}
                </h1>
                <div className={`w-screen flex justify-center items-center`}>
                    <div className='h-28 w-40 -m-8'>
                        <Image src={divisor} alt='divisor de texto' />
                    </div>
                </div>
                <h2 className={`w-screen flex justify-center items-center text-center text-3xl h-fit p-8`}>
                    {props.subtitulo}
                </h2>
                <p className={`w-screen flex justify-center items-center text-center text-3xl h-fit  p-8`}>
                    {props.opcao1}
                </p>
                <Link href='https://finalfeliz.de/palomaeverton02/' passHref>
                    <span className={`w-screen flex justify-center items-center text-center text-3xl h-fit  p-8 underline text-casamento-600`}>Lista de Presentes</span>
                </Link>
                <p className={`w-screen flex justify-center items-center text-center text-3xl h-fit  p-8`}>
                    {props.opcao2}
                </p>
                <span className={`w-screen flex justify-center items-center text-center text-3xl h-fit  p-8`}>
                    {props.chavePix}
                </span>
            </div>
        </section>
    )
}