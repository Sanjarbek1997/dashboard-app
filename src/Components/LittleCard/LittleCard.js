import "./littlecard.css"

const LittleCard = ({text,num,classDiv,classText,classNum}) => {
    return (
        <div  className={classDiv}>
            <p  className={classText}>
                {text}
            </p>
            <p  className={classNum}>
                {num}
            </p>
        </div>
    )
};

export default LittleCard