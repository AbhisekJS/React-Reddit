import {  SEARCH_ITEMS, LOADING } from './redditTypes';

export function getItems(data) {
	return {
		type: SEARCH_ITEMS,
		payload: data
	};
}
export function loadStatus() {
	return {
		type: LOADING
	};
}



export const searchItems = (value='Cat') => async (dispatch) => {
	dispatch(loadStatus());
	try {
		const res = await fetch(`
		https://www.reddit.com/r/${value}/new.json?sort=new`
		);
		const searchData = await res.json();		
		dispatch(getItems(searchData.data.children));
	} catch (err) {
		console.log(err.message);
	}
};
