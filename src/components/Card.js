import React, {Fragment } from 'react';

const Card = ({name, email, id, username}) => {
	// const {name, email, id} = props;

	return(
		<Fragment>
			<div className="tc bg-light-green dib br2 pa3 ma2 grow bw2 shadow-5">
				<img alt="robots" src={`https://robohash.org/${id}?200x200`}/>
				<div>
					<h2>{name}</h2>
					<p>{email}</p>
					<h3>{username}</h3>
				</div>
			</div>
		</Fragment>
	);
}

export default Card;