import HeaderLeft from '../HeaderLeft/HeaderLeft';
import HeaderRight from '../HeaderRight/HeaderRight';

import "./header.css"

const Header = ({ title,icon }) => {
	return (
		<header className='menu'>
			<HeaderLeft title={title}icon={icon} />
			<HeaderRight />
		</header>
	);
};

export default Header;
