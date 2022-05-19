import Sidebar from "../Components/Sidebar/Sidebar/Sidebar";
import Header from "../Components/Header/Header";
import { NotificationNoBadge } from "../Assets/Icons/Icon";



const Subscriptions = () => {
	return (
		<main className='main'>
			<Sidebar />
			<div className='main-right'>
				<Header title={'Subscriptions'} icon={<NotificationNoBadge/>} />
				
			</div>
		</main>
	);
};

export default Subscriptions;