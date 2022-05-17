import logo from '../../Assets/Icons/header.png';

import './headerRight.css';

const HeaderRight = () => {
	return (
		<div className='header-right'>
			<h4 className='header-right__name'>Jones Ferdinand</h4>
			<img src={logo} alt='Logo' className='header-right__img' />
		</div>
	);
};

export default HeaderRight;
