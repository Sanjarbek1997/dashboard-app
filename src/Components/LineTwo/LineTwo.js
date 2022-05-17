import "../LineOne/lineone.css"

const LineTwo =({border,checked,text,badge,textGrey})=>{
    return (
        <div className={ `line ${border}`}>
            <input type="radio" defaultChecked={checked} />
            <p className={`line__text ${textGrey}`}>
                {text}
            </p>
           {badge}
        </div>
    )
}

export default LineTwo