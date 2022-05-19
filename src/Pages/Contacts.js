import Sidebar from "../Components/Sidebar/Sidebar/Sidebar";
import Header from "../Components/Header/Header";
import { NotificationNoBadge } from "../Assets/Icons/Icon";



const Contacts = () => {
	return (
		<main className='main'>
			<Sidebar />
			<div className='main-right'>
				<Header title={'Contacts'} icon={<NotificationNoBadge/>} />
				
			</div>
		</main>
	);
};

export default Contacts;