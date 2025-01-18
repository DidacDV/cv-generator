import {useState} from 'react';
import {FocusTrap} from 'focus-trap-react';
import './styles/content.css'
import PersonalInfoSection from './components/PersonalInfoSection';
import WorkExperienceSection from './components/WorkExperienceSection';
import EducationSection from './components/educationSection';
import Preview from './components/Preview';
import ToggleSection from './components/ToggleSection';

const Content = () => {
    const [fullName, setFullName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [contact, setContact] = useState("");
    const [introduction, setIntroduction] = useState("");
    const [workExperiences, setWorkExperiences] = useState([]); //array containing each work experience -> objects
    const [educations, setEducations] = useState([]); //array containing each education -> objects

    const handleEducationChange = (education) => {
        const newEducations = [...educations];
        newEducations.push(education);
        setEducations(newEducations);
    }

    const handleExperienceChange = (experience) => {
        const newExperiences = [...workExperiences];
        newExperiences.push(experience);
        console.log(newExperiences);
        setWorkExperiences(newExperiences);
    }

    const handleRemoveEducation = (index) => {
        if (index !== null) {
            const newEducations = [...educations];
            newEducations.splice(index, 1); //remove the selected one
            setEducations(newEducations); //always update with new object, not modifying the previous
        }
    }

    const handleRemoveExperience = (index) => {
        if (index !== null) {
            const newExperiences = [...workExperiences];
            newExperiences.splice(index, 1); //remove the selected one
            setWorkExperiences(newExperiences); //always update with new object, not modifying the previous
        }
    }


    return (
        <main className="mainContent">
            <div className = "generator">
                <h1>Generator</h1>
                <ToggleSection title={"Personal Information"}>
                    <PersonalInfoSection    onNameChange = {setFullName} 
                                            onContactChange={setContact}
                                            onPhoneChange={setPhoneNumber}
                                            onIntroductionChange={setIntroduction}/>
                </ToggleSection>
                <ToggleSection title={"Work Experience"}>
                    <WorkExperienceSection onExperienceChange={handleExperienceChange}/>
                </ToggleSection>
                <ToggleSection title = {"Education"}>
                    <EducationSection onEducationChange={handleEducationChange} ></EducationSection>
                </ToggleSection>
            </div>
            <div className = "preview">
                <h1>Previewer</h1>
                <Preview    fullName={fullName} 
                            phoneNumber={phoneNumber}
                            contact={contact}
                            briefIntroduction={introduction}
                            workExperiences = {workExperiences}
                            deleteExperience={handleRemoveExperience}
                            educations={educations}
                            deleteEducation={handleRemoveExperience}
                            />
            </div>
        </main>
    )
}

export default Content;