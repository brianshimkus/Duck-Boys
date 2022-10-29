import Head from 'next/head'
import Header from './Header'

export default function Layout({ title, keywords, description, children }) {
	return (
		<div>
			<Head>
				<title>{title}</title>
				<meta name='description' content={description} />
				<meta name='keywords' content={keywords} />
			</Head>
			<Header />
			<div className='bg-green-600 min-h-screen'>
				<div className='container mx-auto'>{children}</div>
			</div>
		</div>
	)
}

Layout.defaultProps = {
	title: `Duck Boys | Chicago's Favorite Softball Team`,
	description: `The official website of the Duck Boys, a men's 12 inch softball team out of Chicago, Illinois.`,
	keywords: 'softball, duck boys, ducks, quack, quackers, chicago, illinois',
}
