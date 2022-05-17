import HeroTitle from './HeroTitle/HeroTitle';
import TableFooter from './TableFooter/TableFooter';
import TableHead from './TableHead/TableHead';
import Line from './Line/Line';
import Badge from '../Badge/Badge';

import Chris from '../../Assets/Icons/Chris.png';
import Christian from '../../Assets/Icons/Christian.png';
import Tom from '../../Assets/Icons/Tom.png';
import Henry from '../../Assets/Icons/Henry.png';
import Matt from '../../Assets/Icons/Matt.png';
import Robert from '../../Assets/Icons/Robert.png';
import Sam from '../../Assets/Icons/Sam.png';
import Steve from '../../Assets/Icons/Steve.png';

import './hero.css';

const Hero = () => {
	return (
		<section className='hero'>
			<HeroTitle />
			<TableHead />
			<Line
				img={Tom}
				titleOne={'Contact Email not Linked'}
				textOne={'Updated 1 day ago'}
				titleTwo={'Tom Cruise'}
				textTwo={'on 24.05.2019'}
				titleThree={'May 26, 2019'}
				textThree={'6:30 PM'}
				badge={<Badge text={'High'} color={'red'} />}
			/>
			<Line
				img={Matt}
				titleOne={'Adding Images to Featured Posts'}
				textOne={'Updated 1 day ago'}
				titleTwo={'Matt Damon'}
				textTwo={'on 24.05.2019'}
				titleThree={'May 26, 2019'}
				textThree={'8:00 AM'}
				badge={<Badge text={'low'} color={'yellow'} />}
			/>
			<Line
				img={Robert}
				titleOne={'When will I be charged this month?'}
				textOne={'Updated 1 day ago'}
				titleTwo={'Robert Downey'}
				textTwo={'on 24.05.2019'}
				titleThree={'May 26, 2019'}
				textThree={'7:30 PM'}
				badge={<Badge text={'High'} color={'red'} />}
			/>
			<Line
				img={Christian}
				titleOne={'Payment not going through'}
				textOne={'Updated 2 days ago'}
				titleTwo={'Christian Bale'}
				textTwo={'on 24.05.2019'}
				titleThree={'May 25, 2019'}
				textThree={'5:00 PM'}
				badge={<Badge text={'Normal'} color={'green'} />}
			/>
			<Line
				img={Henry}
				titleOne={'Unable to add replies'}
				textOne={'Updated 2 days ago'}
				titleTwo={'Henry Cavil'}
				textTwo={'on 24.05.2019'}
				titleThree={'May 25, 2019'}
				textThree={'4:00 PM'}
				badge={<Badge text={'High'} color={'red'} />}
			/>
			<Line
				img={Chris}
				titleOne={'Downtime since last week'}
				textOne={'Updated 3 days ago'}
				titleTwo={'Chris Evans'}
				textTwo={'on 23.05.2019'}
				titleThree={'May 25, 2019'}
				textThree={'2:00 PM'}
				badge={<Badge text={'Normal'} color={'green'} />}
			/>
			<Line
				img={Sam}
				titleOne={'Referral Bonus'}
				textOne={'Updated 4 day ago'}
				titleTwo={'Sam Smith'}
				textTwo={'on 22.05.2019'}
				titleThree={'May 25, 2019'}
				textThree={'11:30 AM'}
				badge={<Badge text={'low'} color={'yellow'} />}
			/>
			<Line
				img={Steve}
				titleOne={'How do I change my password?'}
				textOne={'Updated 6 days ago'}
				titleTwo={'Steve Rogers'}
				textTwo={'on 21.05.2019'}
				titleThree={'May 24, 2019'}
				textThree={'1:00 PM'}
                badge={<Badge text={'Normal'} color={'green'} />}

			/>
			<TableFooter />
		</section>
	);
};

export default Hero;
