import React, { useEffect, useState } from 'react';
import Link from 'next/link';

import { getCateogries } from '../services';

const Categories = () => {
	const [ rubriques, setRubriques ] = useState([]);
	useEffect(() => {
		getCateogries().then((nouvelleRubriques) => setRubriques(nouvelleRubriques));
	}, []);

	return (
		<div className=''>
			<h3 className=''>Rubriques</h3>
			{rubriques.map((rubrique) => (
				<Link key={rubrique.lien} href={`./rubriques/${rubrique.lien}`}>
					<span className=''>{rubrique.nom}</span>
				</Link>
			))}
		</div>
	);
};

export default Categories;
