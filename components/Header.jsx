import React, { useEffect, useState } from 'react';
import { getRubriques } from '../services';
import Link from 'next/link';
import { Navbar } from '.';

const Header = () => {
	const [ rubriques, setRubriques ] = useState([]);
	useEffect(() => {
		getRubriques().then((nouvelleRubriques) => setRubriques(nouvelleRubriques));
	}, []);

	return (
		<div className=''>
			<div className=''>
				<div className=''>
					<Link href='/'>
						<span className=''>Khobnews</span>
					</Link>
				</div>
				<div>
					<Navbar />
				</div>
				<div className=''>
					{rubriques.map((rubrique) => (
						<Link key={rubrique.lien} href={`/rubrique/${rubrique.lien}`}>
							<span className=''>{rubrique.nom}</span>
						</Link>
					))}
				</div>
			</div>
		</div>
	);
};

export default Header;
