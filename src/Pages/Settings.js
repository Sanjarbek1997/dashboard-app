import Sidebar from "../Components/Sidebar/Sidebar/Sidebar";
import Header from "../Components/Header/Header";
import { NotificationNoBadge } from "../Assets/Icons/Icon";



const Settings = () => {
	return (
		<main className='main'>
			<Sidebar />
			<div className='main-right'>
				<Header title={'Settings'} icon={<NotificationNoBadge/>} />
				
			</div>
		</main>
	);
};

export default Settings;