import { combineReducers } from 'redux';
import { redditReducer } from './reddit/redditReducer';

export const rootReducer = combineReducers({
	items: redditReducer
});
