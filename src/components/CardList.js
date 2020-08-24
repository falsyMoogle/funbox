import React from 'react'

import Card from './Card'

const CardList = ({ products }) => {
	return (
		<div className='page-container flex-column'>
			<span className='title'>Ты сегодня покормил кота?</span>
			<div className='flex-center'>
				{products.map(product => (
					<Card key={product.id} product={product} />
				))}
			</div>
		</div>
	)
}

export default CardList
