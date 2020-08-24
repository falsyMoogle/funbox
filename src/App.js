import React, { useState } from 'react'

import CardList from './components/CardList'

function App() {
	const [products] = useState([
		{
			id: 1,
			title: 'Сказочное заморское яство',
			brand: 'Нямушка',
			taste: 'с фуа-гра',
			description: 'Печень утки разварная с артишоками.',
			amount: 1,
			size: '0.5',
			options: {
				portions: 10,
				gift: {
					count: 1,
					text: 'мышь в подарок',
					info: '',
				},
			},
		},
		{
			id: 2,
			title: 'Сказочное заморское яство',
			brand: 'Нямушка',
			taste: 'с рыбой',
			description: 'Головы щучьи с чесноком да свежайшая сёмгушка.',
			amount: 29,
			size: '2',
			options: {
				portions: 40,
				gift: {
					count: 2,
					text: 'мыши в подарок',
					info: '',
				},
			},
		},
		{
			id: 3,
			title: 'Сказочное заморское яство',
			brand: 'Нямушка',
			taste: 'с курой',
			description: 'Филе цыплят с трюфелями в бульоне.',
			amount: 0,
			size: '5',
			options: {
				portions: 100,
				gift: {
					count: 5,
					text: 'мышей в подарок',
					info: 'заказчик доволен',
				},
			},
		},
	])

	return (
		<div className='App'>
			<CardList products={products} />
		</div>
	)
}

export default App
