import React from 'react'

const Card = ({ product }) => {
	const { title, brand, taste, size, options } = product
	const { count, text, info } = options.gift

	return (
		<div className='Card'>
			<div className='Card__background'>
				<div className='Card__content'>
					<div className='Card__content__desc'>
						<p className='Card__content__desc-title'>{title}</p>
						<p className='Card__content__desc-brand'>{brand}</p>
						<p className='Card__content__desc-taste'>{taste}</p>
						<p className='Card__content__desc-options'>
							{options && (
								<>
									<span>{options.portions}</span> порций <br />
									<span>{count > 1 && count}</span> {text} <br />
									{info && info}
								</>
							)}
						</p>
					</div>
					<div className='Card__content__size'>
						<span>{size}</span> <span>кг</span>
					</div>
					<div className='Card__content__image'>
						<img src={require('../assets/img/Cat.png')} alt='Cat' />
					</div>
				</div>
			</div>
			<p className='Card__info'>
				Чего сидишь? Порадуй котэ, <span>купи</span>.
			</p>
		</div>
	)
}

export default Card
