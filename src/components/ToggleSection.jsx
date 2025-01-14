import { useEffect, useState } from 'react';
import "../styles/toggleSection.css";

const ToggleSection = ({title, children}) => {
    const [toggled, setToggled] = useState(false);
    const [visible, setVisible] = useState(false);

    const handleToggleChange = () => {
        if (!toggled) {
            setVisible(true);
            setToggled(true);
        }
        else {
            setToggled(false);
            setTimeout(() => setVisible(false), 300);
        }
    }

    return (
        <div>
            <div className= "titleContainer">
                <h1 onClick={handleToggleChange} className='generatorSectionTitle' >
                    {title}
                </h1>     
                <p className={toggled ? "toggled" : "nonToggled"}>&#10224;</p>
            </div>
            <div className={toggled ? "toggledSection" : "nonToggledSection"}>
                {visible && children}
            </div>
        </div>
    )
}

export default ToggleSection