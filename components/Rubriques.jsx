import React, { useEffect, useState } from 'react';
import Link from 'next/link';

import { getRubriques } from '../services';

const Rubriques = () => {
	const [ rubriques, setRubriques ] = useState([]);
	useEffect(() => {
		getRubriques().then((nouvelleRubriques) => setRubriques(nouvelleRubriques));
	}, []);

	return (
		<div className=''>
			<h3 className=''>Rubriques</h3>
			{rubriques.map((rubrique) => (
				<Link key={rubrique.lien} href={`/rubrique/${rubrique.lien}`}>
					<span className=''>{rubrique.nom}</span>
				</Link>
			))}
		</div>
	);
};

export default Rubriques;
