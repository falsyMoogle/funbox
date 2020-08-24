import React, { useState } from 'react'

import CardList from './components/CardList'

function App() {
	const [products] = useState([
		{
			id: 1,
			title: 'Сказочное заморское яство',
			brand: 'Нямушка',
			taste: 'с фуа-гра',
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
