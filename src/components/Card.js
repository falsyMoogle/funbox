import React from 'react'

import '../styles/components/Card.scss'

const Card = () => {
	return (
		<div className='Card'>
			<div className='Card__background'>
				<div className='Card__content'>
					<div className='Card__content-image'></div>
				</div>
			</div>
			<span className='Card__description'>Description</span>
		</div>
	)
}

export default Card
