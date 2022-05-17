import { Item, Logo as Logotip } from '../Item/Item';
import {
	Logo,
	OverviewIcon,
	Tickets,
	Ideas,
	Contacts,
	Agents,
	Articles,
	Settings,
	Subscription,
} from '../../../Assets/Icons/Icon';
import './sidebar.css';

const Sidebar = () => {
	return (
		<nav className='sidebar'>
			<Logotip Icon={Logo} text='Dashboard Kit' />
			<ul className='sidebar__list'>
					<Item Icon={OverviewIcon} text='Overview' link={"/"} />
				
					<Item Icon={Tickets} text='Tickets' link={"/ticketspage"} />
				
				<Item Icon={Ideas} text='Ideas' link={"/"} />
				<Item Icon={Contacts} text='Contacts' link={"/"} />
				<Item Icon={Agents} text='Agents' link={"/"} />
				<Item Icon={Articles} text='Articles'  link={"/"}/>
				<span className='chiziq'></span>
				<Item Icon={Settings} text='Settings'  link={"/"}/>
				<Item Icon={Subscription} text='Subscription'  link={"/"}/>
			</ul>
		</nav>
	);
};
export default Sidebar;
