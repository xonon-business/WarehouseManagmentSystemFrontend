import Head from 'next/head'
import SideBar from './SideBar'

interface Props {
    auth: any
    pageTitle: string
    pageName: string
    pageDescription: string
    children: any
}

export default function Header(props: Props) {
    return (
        <>
            <SideBar pageName={props.pageName} auth={props.auth} Child={props.children} />
            <Head>
                <title>WMS - {props.pageTitle}</title>
                <meta name="description" content={props.pageDescription} />
                <link rel="icon" href="/favicon.ico" />
            </Head>
        </>
    )
}