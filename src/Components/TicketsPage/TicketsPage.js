import Sidebar from "../Sidebar/Sidebar/Sidebar";
import Header from "../Header/Header";

import "../Overview/overview.css"
import { NotificationNoBadge } from "../../Assets/Icons/Icon";
import Hero from "../Hero/Hero";


const TicketsPage = () => {
	return (
		<main className='main'>
			<Sidebar />
			<div className='main-right'>
				<Header title={'Tickets'} icon={<NotificationNoBadge/>} />
				<Hero/>
			</div>
		</main>
	);
};

export default TicketsPage;
