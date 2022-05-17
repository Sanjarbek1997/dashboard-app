import "./lineone.css"

const LineOne =({text,num,border})=>
{
    return (
        <div className={ `line ${border}`}>
            <p className="line__text">
                {text}
            </p>
            <p className="line__num">
                {num}
            </p>
        </div>
    )
}

export default LineOne
