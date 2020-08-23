import React from 'react'

import Card from './components/Card'

function App() {
	return (
		<div className='App'>
			<div className='page-container flex-column'>
				<span className='title'>Ты сегодня покормил кота?</span>
				<div className='flex-center'>
					<Card />
					<Card />
					<Card />
				</div>
			</div>
		</div>
	)
}

export default App
