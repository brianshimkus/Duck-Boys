import Layout from '../components/Layout'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
	return (
		<Layout>
			<div>
				<Component {...pageProps} />
			</div>
		</Layout>
	)
}

export default MyApp
