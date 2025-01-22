//input component for each section of the application
import '../styles/inputSection.css';

const InputSection = ({sectionName, placeHolder, onchange, recommended, type, isArea, currentValue}) => {
    function changeValue(event){
        onchange(event.target.value);
    }

    return (
        <div className="inputSection">
            <label>
                <span> {sectionName} </span>
                {recommended ? <span className="recommendedSpan">Recommended</span> : null}
            </label>
            {!isArea ? <input placeholder={placeHolder} maxLength={29} type={type} onChange={changeValue} value={currentValue}></input>
                    : <textarea placeholder={placeHolder} maxLength={200} type={type} onChange={changeValue} value={currentValue}></textarea>}
        </div>
    )


}


export default InputSection;