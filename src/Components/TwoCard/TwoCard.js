import { Plus } from '../../Assets/Icons/Icon';
import Badge from '../Badge/Badge';
import CardTop from '../CardTop/CardTop';
import LineTwo from '../LineTwo/LineTwo';

import './twocard.css';

const TwoCard = () => {
	return (
		<section className='twocard'>
			<CardTop
				title={'Tasks'}
				day={'Today'}
				link={'View all'}
			/>
			<LineTwo border={"line__border"} textGrey={"textgrey"} text={"Create new task"}  badge={<Badge text={<Plus/>} color={"grey"}/>} />
			<LineTwo  text={"Finish ticket update"}  badge={<Badge text={"Urgent"} color={"yellow"}/>} />
			<LineTwo  text={"Create new ticket example"}  badge={<Badge text={"New"} color={"green"}/>} />
			<LineTwo  text={"Update ticket report"} checked={true}  badge={<Badge text={"Default"} color={"grey"}/>} />
		</section>
	);
};

export default TwoCard;
