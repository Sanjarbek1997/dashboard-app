import './trends.css';

const Trends = () => {
	return (
		<div className='trend'>
			<p className='trend__title'>Today’s trends</p>
			<div className='trend__text'>
				<p className='trend__hour'>as of 25 May 2019, 09:41 PM</p>
				<p className='trend__day'><span>___</span>Today</p>
				<p className='trend__day'><span>___</span>Yesterday</p>
			</div>
		</div>
	);
};

export default Trends;
