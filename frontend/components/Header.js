import Link from 'next/link'

export default function Header() {
	return (
		<div className='bg-green-700 py-2'>
			<div className='container mx-auto'>
				<div className='flex'>
					<Link href='/'>
						<h1 className='text-yellow-400 text-2xl font-bold hover:text-yellow-200 transition ease-in-out duration-300'>
							Duck Boys
						</h1>
					</Link>
					<nav className='ml-8 space-x-8'>
						<Link href='/about'>
							<h2 className='text-green-300 text-2xl hover:text-green-100 transition ease-in-out duration-300'>
								About
							</h2>
						</Link>
					</nav>
				</div>
			</div>
		</div>
	)
}
