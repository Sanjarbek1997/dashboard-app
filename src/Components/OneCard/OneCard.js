import CardTop from "../CardTop/CardTop";
import LineOne from "../LineOne/LineOne";

import "./onecard.css"

const OneCard = () => {
	return (
		<section className='twocard'>
			<CardTop
				title={'Unresolved tickets'}
				day={'Group: '}
				daySpan={'Support'}
				link={'View details'}
			/>
            <LineOne text={"Waiting on Feature Request"} border={"line__border"} num={"4238"} />
            <LineOne text={"Awaiting Customer Response"} num={"1005"} />
            <LineOne text={"Awaiting Developer Fix"} num={"914"} />
            <LineOne text={"Pending"} num={"281"} />
		</section>
	);
};

export default OneCard;
