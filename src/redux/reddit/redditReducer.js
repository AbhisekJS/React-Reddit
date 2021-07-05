import {  LOADING } from './redditTypes';
import { SEARCH_ITEMS } from './redditTypes';

const initialState = {
	items: [],
	loading: false,
	error: null
};

export const redditReducer = (state = initialState, action) => {
	switch (action.type) {
		case LOADING:
			return {
				...state,
				loading: true
			};
		
		case SEARCH_ITEMS:
			return {
				...state,
				items: action.payload,
				loading: false,
				error: ''
			};
		default:
			return state;
	}
};
