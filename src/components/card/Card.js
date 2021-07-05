import React from 'react';
import classes from './Card.module.css';
export default function Card({ data }) {
	const {
		subreddit_name_prefixed,
		author,
		permalink,
		thumbnail,
		title,
		num_comments
	} = data;
	return (
		<div className={classes.card}>
			<p>
				<a href={`https://www.reddit.com${subreddit_name_prefixed}`}>
					{subreddit_name_prefixed}
				</a>
			</p>
			<p>
				<a href={`https://www.reddit.com${author}`}>u/{author}</a>
			</p>
			<a href={`https://www.reddit.com${permalink}`} rel="noopener">
				<img src={thumbnail} alt="" />
			</a>
			<h3>
				<a href={`https://www.reddit.com${permalink}`} rel="noopener">
					{title}
				</a>
			</h3>

			<p className={classes.comments}>Comments {num_comments}</p>
		</div>
	);
}
