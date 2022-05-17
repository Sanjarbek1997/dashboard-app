import { NavLink } from 'react-router-dom';


import "./Item.css";

const Logo = ({ text, Icon }) => {
	return (
		<p className='Logo'>
			<Icon />
			{text}
		</p>
	);
};
const Item = ({ text, Icon,link }) => {
	return (
		<li className='sidebar__item'>
			<NavLink className="sidebar__link" to={link}>
				<Icon />
				{text}
			</NavLink>
		</li>
	);
};

export  {Item,Logo};
