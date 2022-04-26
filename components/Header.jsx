import React, { useEffect, useState } from 'react';
import { getRubriques } from '../services';
import Link from 'next/link';
import { HiOutlineMenu } from 'react-icons/hi';
import { AiOutlineClose } from 'react-icons/ai';
import { IoMdArrowDropdown } from 'react-icons/io';

const Header = () => {
	const [ rubriques, setRubriques ] = useState([]);
	const [ menuOpen, setMenuOpen ] = useState(false);
	const [ dropdown, setDropdown ] = useState(false);
	const [ size, setSize ] = useState({ width: undefined, height: undefined });

	useEffect(() => {
		const handleResize = () => {
			setSize({ width: window.innerWidth, height: window.innerHeight });
		};

		window.addEventListener('resize', handleResize);
	}, []);

	useEffect(
		() => {
			if (size.width > 768 && menuOpen) setMenuOpen(false);
		},
		[ size.width, menuOpen ]
	);
	const menuToggleHandler = () => {
		setMenuOpen((open) => !open);
	};

	useEffect(() => {
		getRubriques().then((nouvelleRubriques) => setRubriques(nouvelleRubriques));
	}, []);

	return (
		<div className='header'>
			<div className='header--top'>
				<Link href='/'>
					<img src='/logo.png' alt='logo' className='header--logo' />
				</Link>
			</div>
			<div className='header--nav'>
				{rubriques.map((rubrique) => (
					<Link key={rubrique.lien} href={`/rubrique/${rubrique.lien}`}>
						<span className='header--nav--button'>{rubrique.nom}</span>
					</Link>
				))}
			</div>
		</div>
	);
};

export default Header;
