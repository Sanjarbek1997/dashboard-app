import { Notification } from '../../Assets/Icons/Icon';
import Header from '../Header/Header';
import LittleCards from '../LittleCards/LittleCards';
import OneCard from '../OneCard/OneCard';
import Sheet from '../Sheet/Sheet';
import Sidebar from '../Sidebar/Sidebar/Sidebar';
import TwoCard from '../TwoCard/TwoCard';

import './overview.css';

const Overview = () => {
	return (
		<main className='main'>
			<Sidebar />
			<div className='main-right'>
				<Header title={'Overview'} icon={<Notification/>} />
				<LittleCards />
				<Sheet />
				<section className='chiefcard'>
				<OneCard/>
				<TwoCard/>
				</section>
			</div>
		</main>
	);
};
export default Overview;
