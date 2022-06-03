import { NextRouter } from "next/router";


export async function CheckRoute(router: NextRouter, setloading: Function, ) {    
	router.events.on('routeChangeStart', () => setloading(true)); 
	router.events.on('routeChangeComplete', () => setloading(false)); 
	router.events.on('routeChangeError', () =>  setloading(false));
}
