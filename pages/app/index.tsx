import type { NextPage } from 'next'
import Header from '../../components/Header'
import { useEffect, useState } from 'react'
import Cookie from 'js-cookie'
import { useRouter } from 'next/router'
// import { CheckRoute } from 'utils/router'
import LoadingScreen from 'components/LoadingScreen'

const Home: NextPage = () => {
	let router = useRouter()
	let cookie = Cookie.get(`authKey`);
	let [loading, setLoading] = useState(false)
	useEffect(() => {
		if (cookie == undefined) {
			router.push(`/auth/login`, undefined, {shallow: true})
		}
	}, [router, cookie])
	// router.events.on('routeChangeStart', () => setLoading(true));
	// router.events.on('routeChangeComplete', () => setLoading(false));
	// router.events.on('routeChangeError', () => setLoading(false));
	return (
		<>
			<LoadingScreen open={loading} />
			<Header pageDescription='this is the dashboard' pageTitle='Dashboard' pageName='Dashbaord' auth={cookie}>
				<h1>Hello World</h1>
			</Header>
		</>
	)
}

export default Home
