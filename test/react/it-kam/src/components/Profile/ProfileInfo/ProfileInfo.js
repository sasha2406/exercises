import React from 'react';
import userAva from '../../../user_ava.png';
import s from './ProfileInfo.module.css';

const Profile = () => {
	return (
		<div className={s.content}>
			<div>
				<img src={userAva} alt="Foto" />
			</div>
			<div className={s.descriptionBlock}>
				ava + description
			</div>
		</div>
	)
}

export default Profile;
