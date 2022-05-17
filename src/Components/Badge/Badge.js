import './badge.css';

const Badge = ({ color, text }) => {
	return <p className={`badge ${color}`}>{text}</p>;
};
export default Badge;
