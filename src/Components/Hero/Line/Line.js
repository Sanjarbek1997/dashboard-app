import { Nuqtalar } from '../../../Assets/Icons/Icon';

import './line.css';

const Line = ({
	img,
	titleOne,
	textOne,
	titleTwo,
	textTwo,
	titleThree,
	textThree,
	badge,
}) => {
	return (
		<div className='line'>
			<div className='line-one w-50'>
				<img className='line-one__img' src={img} alt='' />
				<div className='line-one__text'>
					<h4 className='line-title'>{titleOne}</h4>
					<p className='line-text'>{textOne}</p>
				</div>
			</div>
			<div className='line-two w-20'>
				<h4 className='line-title'>{titleTwo}</h4>
				<p className='line-text'>{textTwo}</p>
			</div>
			<div className='line-three w-15'>
				<h4 className='line-title'>{titleThree}</h4>
				<p className='line-text'>{textThree}</p>
			</div>
			<div className='line-four w-15'>
				{badge}
				<Nuqtalar />
			</div>
		</div>
	);
};

export default Line;
