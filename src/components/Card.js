import React, { useState, useEffect } from 'react'

const Card = ({ product }) => {
	const { title, brand, taste, description, amount, size, options } = product
	const { count, text, info } = options.gift
	const [selected, setSelected] = useState(false)
	const [disabled, setDisabled] = useState(amount)

	const selectHandler = () => {
		if (!disabled) setSelected(!selected)
	}

	useEffect(() => {
		const checkProductAmount = () => {
			amount < 1 ? setDisabled(true) : setDisabled(false)
		}
		checkProductAmount()
		return () => {
			checkProductAmount()
		}
	}, [amount])

	return (
		<div
			className={`Card ${selected ? 'selected' : ''} ${
				disabled ? 'disabled' : ''
			}`}
			onClick={selectHandler}
		>
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
			<div className='Card__info'>
				{!selected && !disabled ? (
					<>
						Чего сидишь? Порадуй котэ, <span onClick={selectHandler}>купи</span>
						.
					</>
				) : null}
				{selected ? description : null}
				{disabled ? (
					<div className='soldout'>Печалька, {taste} закончился.</div>
				) : null}
			</div>
		</div>
	)
}

export default Card
