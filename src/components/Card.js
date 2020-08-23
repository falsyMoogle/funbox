import React from 'react'

const Card = () => {
	return (
		<div className='Card'>
			<div className='Card__background'>
				<div className='Card__content'>
					<div className='Card__content__desc'>
						<p className='Card__content__desc-title'>
							Сказочное заморское яство
						</p>
						<p className='Card__content__desc-brand'>Нямушка</p>
						<p className='Card__content__desc-taste'>с фуа-гра</p>
						<p className='Card__content__desc-options'>
							10 порций <br /> мышь в подарок
						</p>
					</div>
					<div className='Card__content__image'>
						<img src={require('../assets/img/Cat.png')} alt='Cat' />
					</div>
				</div>
			</div>
			<p className='Card__description'>Чего сидишь? Порадуй котэ, купи.</p>
		</div>
	)
}

export default Card
