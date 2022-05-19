import Sidebar from "../Components/Sidebar/Sidebar/Sidebar";
import Header from "../Components/Header/Header";
import { NotificationNoBadge } from "../Assets/Icons/Icon";



const Agents = () => {
	return (
		<main className='main'>
			<Sidebar />
			<div className='main-right'>
				<Header title={'Agents'} icon={<NotificationNoBadge/>} />
				
			</div>
		</main>
	);
};

export default Agents;