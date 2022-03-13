import React, { useEffect, useState } from 'react';
import { getRubriques } from '../services';
import Link from 'next/link';
import { HiOutlineMenu } from 'react-icons/hi';
import { AiOutlineClose } from 'react-icons/ai';
import { IoMdArrowDropdown } from 'react-icons/io';

const Header = () => {
	const [ rubriques, setRubriques ] = useState([]);
	const [ menuOpen, setMenuOpen ] = useState(false);
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
		<header className='header'>
			<div className='header__content'>
				<h2 className='header__content__logo'>Khobnews</h2>
				<nav className={`header__content__nav ${menuOpen ? 'isMenu' : ''}`}>
					<ul>
						<li>
							<div className='header__content__nav__menu'>
								<Link href='./'>Page 1</Link>
							</div>
						</li>
						<li>
							<div className='header__content__nav__dropdownMenu'>
								<Link href='./'>Page 2</Link>
								<IoMdArrowDropdown />
							</div>
						</li>
						<li>
							<div className='header__content__nav__menu'>
								<Link href='./'>Page 3</Link>
							</div>
						</li>
					</ul>
				</nav>
				<div className='header__content__toggle'>
					{menuOpen ? (
						<AiOutlineClose onClick={menuToggleHandler} />
					) : (
						<HiOutlineMenu onClick={menuToggleHandler} />
					)}
				</div>
			</div>
		</header>
		// <div className=''>
		// 	<div className=''>
		// 		<div className=''>
		// 			<Link href='/'>
		// 				<span className=''>Khobnews</span>
		// 			</Link>
		// 		</div>
		// 		<div className=''>
		// 			{rubriques.map((rubrique) => (
		// 				<Link key={rubrique.lien} href={`/rubrique/${rubrique.lien}`}>
		// 					<span className=''>{rubrique.nom}</span>
		// 				</Link>
		// 			))}
		// 		</div>
		// 	</div>
		// </div>
	);
};

export default Header;
