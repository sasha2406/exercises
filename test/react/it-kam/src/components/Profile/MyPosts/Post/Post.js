import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
	return (
			<div className={s.item}>
				<img src="https://i1.ytimg.com/vi/7iTkEcigr78/maxresdefault.jpg" alt=""/>
				{props.message}
				<div>
					<span>Like</span>
				</div>
			</div>
	)
}

export default Post;
