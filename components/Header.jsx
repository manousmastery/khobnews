import React, { useEffect, useState, useRef } from 'react';
import { getRubriques } from '../services';
import Link from 'next/link';

const useIntersection = (element, rootMargin) => {
	const [ isVisible, setState ] = useState(false);

	useEffect(() => {
		const observer = new IntersectionObserver(
			([ entry ]) => {
				setState(entry.isIntersecting);
			},
			{ rootMargin }
		);

		element.current && observer.observe(element.current);

		return () => observer.unobserve(element.current);
	}, []);

	return isVisible;
};

const Header = () => {
	const header = useRef();
	const fixedBar = useRef();

	const [ rubriques, setRubriques ] = useState([]);

	const inViewport = useIntersection(header, '0px');

	if (inViewport) {
		fixedBar.current.style.opacity = 0;
	} else if (!inViewport && fixedBar.current) {
		fixedBar.current.style.opacity = 0.9;
	}

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
			<div className='header--nav' ref={header}>
				{rubriques.map((rubrique) => (
					<Link key={rubrique.lien} href={`/rubrique/${rubrique.lien}`}>
						<span className='header--nav--button'>{rubrique.nom}</span>
					</Link>
				))}
				{rubriques.map((rubrique) => (
					<Link key={rubrique.lien} href={`/rubrique/${rubrique.lien}`}>
						<span className='header--nav--button'>{rubrique.nom}</span>
					</Link>
				))}
			</div>
			<div className='fixedBar' ref={fixedBar}>
				<div className='fixedBar--content'>
					<div className='miniLogo'>
						<Link href='/'>
							<img src='/logo-feuille.png' alt='logo' className='header--logo' />
							{/* <img src='/logo-papyrusmag.png' alt='logo' className='header--logo' /> */}
						</Link>
					</div>
					<div className='rubriques'>
						{rubriques.map((rubrique) => (
							<Link key={rubrique.lien} href={`/rubrique/${rubrique.lien}`}>
								<span className='header--nav--button'>{rubrique.nom}</span>
							</Link>
						))}
						{rubriques.map((rubrique) => (
							<Link key={rubrique.lien} href={`/rubrique/${rubrique.lien}`}>
								<span className='header--nav--button'>{rubrique.nom}</span>
							</Link>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Header;
