import { Search } from '../../Assets/Icons/Icon';

import './headerLeft.css';

const HeaderLeft = ({ title, icon }) => {
	return (
		<div className='header-left'>
			<h1 className='header-left__title'>{title}</h1>
			<div className='icons'>
				<Search />
				{icon}
			</div>
		</div>
	);
};
export default HeaderLeft;
