import React, { useEffect, useState, useRef } from 'react';
import { AiOutlineMenu, AiOutlineCloseCircle } from 'react-icons/ai';
import { getRubriques } from '../services';
import { motion } from 'framer-motion';
import Link from 'next/link';
import moment from 'moment';

const useIntersection = (element, rootMargin) => {
	const [isVisible, setState] = useState(false);

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				setState(entry.isIntersecting);
			},
			{ rootMargin }
		);

		element.current && observer.observe(element.current);

		return () => observer.unobserve(element.current);
	}, []);

	return isVisible;
};

const Navbar = () => {
	const [rubriques, setRubriques] = useState([]);
	const [toggle, setToggle] = useState(false);

	const header = useRef();
	const fixedBar = useRef();
	const mobileBar = useRef();

	const inViewport = useIntersection(header, '0px');
	const isMobile = useIntersection(mobileBar, '0px');

	if (inViewport || isMobile) {
		fixedBar.current.style.display = 'none';
	} else if (!inViewport && !isMobile && fixedBar.current) {
		fixedBar.current.style.display = 'flex';
	}

	const getDate = () => {
		const dayInString = firstLetterUpperCase(moment().locale('fr').format('dddd'));
		const monthInString = firstLetterUpperCase(moment().locale('fr').format('MMMM'));
		return `${dayInString}, ${moment().date()} ${monthInString} ${moment().year()}`;
	}

	const firstLetterUpperCase = (string) => {
		return string.charAt(0).toUpperCase() + string.slice(1);
	};

	useEffect(() => {
		getRubriques().then((nouvelleRubriques) => setRubriques(nouvelleRubriques));
	}, []);

	return (
		<div className='app__navbar'>
			<div className='app__navbar-top' ref={header}>
				<div className="app__navbar-day base-text">{getDate()}</div>
				<Link href='/'>
					<div className="app__navbar-logo">
						<motion.img
							src="/logo-feuille.png"
							alt="papyrus"
							whileInView={{ scale: [0, 0, 0, 0, 0, 1, 1, 1], opacity: [0, 0, 0, 0, 0, 1, 1, 1] }}
							transition={{ duration: 0.8 }} />
						<motion.img
							src="/logo-papyrusmag.png"
							alt="papyrusmag"
							whileInView={{ y: [-50, 0, 10, 0, 5, 0, 2, 0], scale: [0, 1, 1, 1, 1, 1, 1, 1], opacity: [0, 1, 1, 1, 1, 1, 1, 1] }}
							transition={{ duration: 0.8 }} />
					</div>
				</Link>
				<div className="app__navbar-menus">
					<div className='menu'>
						<Link href='/'>À propos</Link>
					</div>
					<div className='menu'>
						<Link href='/'>Nous Contacter</Link>
					</div>
				</div>
			</div>
			<div className="app__navbar-nav">
				{rubriques.map((rubrique) => (
					<div key={rubrique.lien} className='menu'>
						<Link href={`/rubrique/${rubrique.lien}`}>
							{rubrique.nom}
						</Link>
					</div>
				))}
			</div>
			<div className="app__navbar-fixedNav" ref={fixedBar}>
				<Link href='/'>
					<img
						src="/logo-feuille.png"
						alt="papyrus" />
				</Link>
				{rubriques.map((rubrique) => (
					<div key={rubrique.lien} className='menu'>
						<Link href={`/rubrique/${rubrique.lien}`}>
							{rubrique.nom}
						</Link>
					</div>
				))}
			</div>
			<div className="app__navbar-mobileNav" ref={mobileBar}>
				<Link href='/'>
					<motion.img
						src="/logo-feuille.png"
						alt="papyrus"
						whileInView={{ scale: [0, 1], opacity: [1, 1] }}
						transition={{ duration: 0.2 }} />
				</Link>
				<AiOutlineMenu onClick={() => setToggle(true)} />
				{toggle && (
					<motion.div whileInView={{ x: [300, 0], opacity: [1, 1] }} transition={{ duration: 0.85, ease: 'easeInOut' }} className='sideMenu'>
						<AiOutlineCloseCircle onClick={() => setToggle(false)} />
						<div className='app__navbar-mobileMenus'>
							{rubriques.map((rubrique) => (
								<div key={rubrique.lien} className='menu'>
									<Link href={`/rubrique/${rubrique.lien}`}>
										{rubrique.nom}
									</Link>
								</div>
							))}
							<div className='menu separation'>
								<Link href='/'>À propos</Link>
							</div>
							<div className='menu'>
								<Link href='/'>Nous Contacter</Link>
							</div>
						</div>
					</motion.div>)
				}
			</div>
		</div>
	)
};

export default Navbar;
