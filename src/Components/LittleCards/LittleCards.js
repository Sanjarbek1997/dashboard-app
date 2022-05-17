import LittleCard from '../LittleCard/LittleCard';

import './littlecards.css';

const LittleCards = () => {
	return <div className='little-cards'>
        <LittleCard classDiv={"little-card"} classText={"little-card__text"} classNum={"little-card__num"} text={"Unresolved"} num={"60"}/>
        <LittleCard classDiv={"little-card"} classText={"little-card__text"} classNum={"little-card__num"} text={"Overdue"} num={"16"}/>
        <LittleCard classDiv={"little-card"} classText={"little-card__text"} classNum={"little-card__num"} text={"Open"} num={"43"}/>
        <LittleCard classDiv={"little-card"} classText={"little-card__text"} classNum={"little-card__num"} text={"On hold"} num={"64"}/>
    </div>;
};


export default LittleCards
