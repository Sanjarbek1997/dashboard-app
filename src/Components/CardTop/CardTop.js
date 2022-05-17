import './cardtop.css';

const CardTop = ({ title, day, link, daySpan }) => {
	return (
		<div className='cardtop'>
			<div>
				<p className={'cardtop__title'}>{title}</p>
				<p className={'cardtop__day'}>
					{day}
					<span>{daySpan}</span>
				</p>
			</div>
			<p className={'cardtop__link'}>
				<a href='#'>{link}</a>
			</p>
		</div>
	);
};
export default CardTop;
