import React, { Fragment, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Card from './components/card/Card';
import { searchItems } from './redux';

export default function App() {
	const [searchTerm, setSearchTerm] = useState('');
	const dispatch = useDispatch();
	const items = useSelector((state) => state.items.items);
	const loading = useSelector((state) => state.items.loading);
	// API URLS
	console.log(items);

	function handleSubmit(e) {
		e.preventDefault();
		if (searchTerm === '') {
			alert("Fields Can't be blank");
		}
		dispatch(searchItems(searchTerm));
	}

	console.log(items);
	useEffect(() => {
		dispatch(searchItems());
		// eslint-disable-next-line
	}, []);

	const onTextChange = (e) => {
		const { value } = e.target;
		setSearchTerm(value);
	};

	return (
		<div>
			<header>
				<form onSubmit={handleSubmit}>
					<input
						type="text"
						className="search"
						placeholder="e.g. Cat"
						value={searchTerm}
						onChange={onTextChange}
					/>
				</form>
			</header>
			<main>
				{loading ? (
					<h1>Loading</h1>
				) : (
					items.map((item) => {
						const { data } = item;
						return (
							<Fragment key={data.id}>
								<Card data={data} />
							</Fragment>
						);
					})
				)}
			</main>
		</div>
	);
}
