import "../styles/preview.css"
import "../styles/buttons.css"
import PersonIcon from "../assets/personIcon";
import PhoneIcon from "../assets/phoneIcon";
import MailIcon from "../assets/mailIcon";

const Preview = ({fullName, phoneNumber, contact, briefIntroduction, workExperiences, deleteExperience, educations, deleteEducation, skills}) => {
    return (
        <div className="previewContainer">
            <h1 className="sectionTitle" id="firstTitle">Personal Information</h1>
            <div className = "personalInfoContainer">
                <span className = "personalInfoSpan">
                    <PersonIcon/>
                    {fullName}
                </span>
                <span className = "personalInfoSpan">
                    <PhoneIcon/>
                    {phoneNumber}
                </span>
                <span className = "personalInfoSpan">
                    <MailIcon/>
                    {contact}
                </span>
            </div>
            <p className = "briefIntroduction">
                    {briefIntroduction}
                </p>
            <h1 className="sectionTitle">Work Experience</h1>
            <div className = "workExperienceContainer">
                <ul>
                    {workExperiences.map((experience, index) => {
                        return (
                            <li key= {index}
                                className="experienceSubSection">
                                <h2 className="companyName">{experience.companyName}</h2>
                                <div className="postionInfo">
                                    <h3>{experience.position}</h3>
                                    <span>{experience.startDate} - {experience.endDate}</span>
                                </div>
                                <p className="experience">{experience.description}</p>
                                <button className = "deleteButton" onClick = {() => deleteExperience(index)}>Delete</button>
                            </li>
                        )
                    })}
                </ul>
            </div>
            <h1 className="sectionTitle">Education</h1>
            <div className = "educationContainer">
                <ul>
                    {educations.map((education, index) => {
                        return (
                        <li key = {index} className = "educationSubSection">
                            <h2 className = "companyName">{education.institution}</h2>
                            <div className = "postionInfo">
                                <h3>{education.degree}</h3>
                                <span>{education.startDate} - {education.endDate}</span>
                            </div>
                            <p className = "experience">{education.description}</p>
                            <button className = "deleteButton" onClick = {() => deleteEducation(index)}>Delete</button>
                        </li>
                        )
                    })}
                </ul>
            </div>
            <h1 className = "sectionTitle">Skills</h1>
            <ul className = "skillsContainer">
                    {skills.map((skill,index) => {
                        return (
                            <li key = {index} className="skillItem">
                                <span className="skillName">{skill.name}</span> - {skill.rating} / 5
                            </li>
                        )
                    })}
            </ul>
        </div>
    )
}

export default Preview;