import LittleCard from '../LittleCard/LittleCard';
import './rightcards.css';

const RightCards = () => {
	return (
		<div className='right-cards'>
			<LittleCard
				classDiv={'right-card'}
				classText={'right-card__text'}
				classNum={'right-card__num'}
				text={'Resolved'}
				num={'449'}
			/>
			<LittleCard
				classDiv={'right-card'}
				classText={'right-card__text'}
				classNum={'right-card__num'}
				text={'Received'}
				num={'426'}
			/>
			<LittleCard
				classDiv={'right-card'}
				classText={'right-card__text'}
				classNum={'right-card__num'}
				text={'Average first response time'}
				num={'33m'}
			/>
			<LittleCard
				classDiv={'right-card'}
				classText={'right-card__text'}
				classNum={'right-card__num'}
				text={'Average response time'}
				num={'3h 8m'}
			/>
			<LittleCard
				classDiv={'right-card'}
				classText={'right-card__text'}
				classNum={'right-card__num'}
				text={'Average response time'}
				num={'94%'}
			/>
		</div>
	);
};

export default RightCards;
