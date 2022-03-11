import React, { useEffect, useState } from 'react';
import { getCateogries } from '../services';
import Link from 'next/link';

const Header = () => {
	const [ rubriques, setRubriques ] = useState([]);
	useEffect(() => {
		getCateogries().then((nouvelleRubriques) => setRubriques(nouvelleRubriques));
	}, []);

	return (
		// <div className='container mx-auto px-10 mb-8'>
		//   <div className='border-b w-full inline-block border-blue-400 py-8'>
		//     <div className='md:float-left block'>
		//       <Link href='/'>
		//         <span className='cursor-pointer font-bold text-4xl text-white'>
		//           Khobnews
		//         </span>
		//       </Link>
		//     </div>
		//     <div className='hidden md:float-left md:contents'>
		//       {rubriques.map((rubrique) => (
		//         <Link
		//           key={rubrique.lien}
		//           href={`/rubriques`}
		//           as={`/rubriques/${rubrique.lien}`}
		//         >
		//           <span className='md:float-right mt-2 align-middle text-white ml-4 font-semibold cursor-pointer'>
		//             {rubrique.nom}
		//           </span>
		//         </Link>
		//       ))}
		//     </div>
		//   </div>
		// </div>
		<div className='header'>
			<div className='header-container'>
				<div className='header-title-container'>
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
