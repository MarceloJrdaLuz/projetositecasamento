import Head from "next/head";

interface HeadComponentProps{
    title: string
}

export default function HeadComponent(props: HeadComponentProps){
    return(
        <Head>
            <title>{props.title}</title>
        </Head>
    )
}