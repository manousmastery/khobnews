import React, { useEffect, useState } from 'react';
import { getCateogries } from '../services';
import Link from 'next/link';

const Header = () => {
	const [ rubriques, setRubriques ] = useState([]);
	useEffect(() => {
		getCateogries().then((nouvelleRubriques) => setRubriques(nouvelleRubriques));
	}, []);

	return (
		<div className=''>
			<div className=''>
				<div className=''>
					<Link href='/'>
						<span className='header-title'>Khobnews</span>
					</Link>
				</div>
				<div className=''>
					{rubriques.map((rubrique) => (
						<Link key={rubrique.lien} href={`/categories`} as={`/rubrique/${rubrique.lien}`}>
							<span className=''>{rubrique.nom}</span>
						</Link>
					))}
				</div>
			</div>
		</div>
	);
};

export default Header;
