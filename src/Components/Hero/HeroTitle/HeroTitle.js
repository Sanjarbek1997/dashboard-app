import { Filter, Sort } from "../../../Assets/Icons/Icon"

import "./herotitle.css"

const HeroTitle =()=>{
    return (
        <div className="hero-title">
            <h3 className="hero-title__title">
            All tickets
            </h3>
            <p className="hero-title__text">
                <Sort/>
                Sort
            </p>
            <p className="hero-title__text">
                <Filter/>
                Filter
            </p>
        </div>
    )
}

export default HeroTitle