import React, { useEffect, useState } from 'react';
import Link from 'next/link';

import { getCateogries } from '../services';

const Categories = () => {
	const [ rubriques, setRubriques ] = useState([]);
	useEffect(() => {
		getCateogries().then((nouvelleRubriques) => setRubriques(nouvelleRubriques));
	}, []);

	return (
		<div className='bg-white shadow-lg rounded-lg p-8 mb-8'>
			<h3 className='text-xl mb-8 font-semibold border-b pb-4'>Rubriques</h3>
			{rubriques.map((rubrique) => (
				<Link key={rubrique.lien} href={`./rubriques/${rubrique.lien}`}>
					<span className='cursor-pointer block pb-3 mb-3'>{rubrique.nom}</span>
				</Link>
			))}
		</div>
	);
};

export default Categories;
