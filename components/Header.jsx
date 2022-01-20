import React, { useContext } from 'react';
import Link from 'next/link';

const categories = [
	{ nom: 'Editorial', lien: 'editorial' },
	{ nom: 'Politique', lien: 'politique' }
];

const Header = () => {
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
		//       {categories.map((categorie) => (
		//         <Link
		//           key={categorie.lien}
		//           href={`/categories`}
		//           as={`/rubriques/${categorie.lien}`}
		//         >
		//           <span className='md:float-right mt-2 align-middle text-white ml-4 font-semibold cursor-pointer'>
		//             {categorie.nom}
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
					{categories.map((categorie) => (
						<Link
							key={categorie.lien}
							href={`/categories`}
							as={`/rubriques/${categorie.lien}`}
						>
							<span className=''>{categorie.nom}</span>
						</Link>
					))}
				</div>
			</div>
		</div>
	);
};

export default Header;
