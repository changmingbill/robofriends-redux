import React from 'react';
import Card from './Card';

const CardList = ({robots}) => {
	// if (true){
	// 	throw new Error('Ooooh my gosh');
	// }
	return(
			<div>
				{
					robots.map((user,i) => 
		 			<Card key={robots[i].id} 
			 			id={robots[i].id} 
			 			name={robots[i].name} 
			 			email={robots[i].email} 
			 			username={robots[i].username}
		 			/>
		 		)}
	 		</div>
	);
}

export default CardList;