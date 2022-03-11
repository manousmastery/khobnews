import React from 'react';
import { PostDetail, Categories, PostWidget } from '../../components';
import { getPosts, getPost } from '../../services';

const PostDetails = ({ article }) => {
	return (
		<div className='container mx-auto px-10 mb-8'>
			<div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
				<div className='col-span-1 lg:col-span-8'>
					<PostDetail article={article} />
				</div>
				<div className='col-span-1 lg:col-span-4'>
					<div className='relative lg:sticky top-8'>
						<PostWidget
							lien={article.lien}
							rubriques={article.rubriques.map((rubrique) => rubrique.lien)}
						/>
						<Categories />
					</div>
				</div>
			</div>
		</div>
	);
};

export default PostDetails;

export async function getStaticProps({ params }) {
	const data = await getPost(params.lien);
	return { props: { article: data } };
}

export async function getStaticPaths() {
	const posts = await getPosts();
	return {
		paths: posts.map(({ node: { lien } }) => ({ params: { lien } })),
		fallback: false
	};
}
