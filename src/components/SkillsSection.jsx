import { FaStar } from 'react-icons/fa';
import {useState} from 'react';
import '../styles/SkillsSection.css';
import '../styles/buttons.css'
const SkillsSection = ({skills, onRatingChange, onAddSkill, onRemoveSkill}) => {
    const [newSkill, setNewSkill] = useState("");

    const handleAddSkill = () => {
        if (skills.map((skill) => skill.name).includes(newSkill)) {
            alert("Skill already exists");
            return;
        }
        if (newSkill.trim()) {
            onAddSkill(newSkill);
            setNewSkill("");
        }
    };

    return (
        <div className="SkillsSection">
            <div className="addSkill">
                <input
                    type="text"
                    className='inputSkill'
                    value={newSkill}
                    onChange={(e) => setNewSkill(e.target.value)}
                    placeholder="Enter a skill"
                />
                <button className='addButton' onClick={handleAddSkill}>Add Skill</button>
            </div>
            <ul className = "skillList">
                {skills.map((skill,index) => {
                    return (
                        <li key = {index} className='skillItem' >
                            <span>{skill.name}</span>
                            <div className='stars'>
                                {[1,2,3,4,5].map((star) => (
                                    <FaStar
                                        key = {star}
                                        size = {20}
                                        color = {star <= skill.rating ? "#ffc107" : "#e4e5e9"} //active or not
                                        onClick = {() => onRatingChange(index, star)}
                                        style = {{cursor: "pointer"}}
                                    />
                                ))}
                            </div>
                            <button className = "deleteButton"
                                    onClick={() => onRemoveSkill(index)}>Delete</button>
                        </li>
                    )
                })}
            </ul>

        </div>
    )
}
export default SkillsSection;