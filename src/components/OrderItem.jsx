import React, { useContext } from 'react';

import AppContext from '@context/AppContext';

import '@styles/OrderItem.scss';

import close from '@icons/icon_close.png'

const OrderItem = (produ) => {
	const { product, indexValue } = produ;

	const { removeFromCart } = React.useContext(AppContext); 

	const handleRemove = (index) => {
		removeFromCart(index);
	};

	return (
		<div className="OrderItem">
			<figure>
				<img src={product.images[0]} alt={product.title} />
			</figure>
			<p>{product.title}</p>
			<p>${product.price}</p>
			<img src={close} alt="close" onClick={() => handleRemove(indexValue)} />
		</div>
	);
}

export default OrderItem;
