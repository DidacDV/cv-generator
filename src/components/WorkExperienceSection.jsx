import InputSection from "./InputSection";
import { useState } from "react";
const WorkExperienceSection = ({ onExperienceChange }) => {
    const [values, setValues] = useState({
        companyName: "",
        position: "",
        startDate: "",
        endDate: "",
        description: ""
    });


    const handleInputChange = (field, value) => {
        setValues((prevValues) => ({    //changer function, prevValues is the previous state
            ...prevValues,            //spread operator to copy the previous state
            [field]: value,          //change the value of the field to the new one set.
        }));
    };

    const addNewExperience = () => {
        const newExperience = {
            ...values   //create new experience object from the current values inputted by user
        };
        for (const value in newExperience) {
            if (newExperience[value] == "") {
                alert("Please fill all the values");
                return;
            }
        }
        setValues({   //reset the values to empty after adding the new experience   
            companyName: "",
            position: "",
            startDate: "",
            endDate: "",
            description: ""
        });
        onExperienceChange(newExperience); //pass the new experience object to the parent component
        
    }   //TODO next section is not a good implementation, this should be with a form so it can be validated correctly
    return (
        <div>   
            <InputSection currentValue={values.companyName} sectionName="Company Name" placeHolder="Enter company name" onchange={(value) => handleInputChange("companyName", value)} recommended={true} type="text" isArea={false}/>
            <InputSection currentValue={values.position} sectionName="Position" placeHolder="Enter your position" onchange={(value) => handleInputChange("position", value)} recommended={true} type="text" isArea={false}/>
            <InputSection currentValue={values.startDate} sectionName="Start Date" placeHolder="Enter start date" onchange={(value) => handleInputChange("startDate", value)} recommended={true} type="date" isArea={false}/>
            <InputSection currentValue={values.endDate} sectionName="End Date" placeHolder="Enter end date" onchange={(value) => handleInputChange("endDate", value)} recommended={true} type="date" isArea={false}/>
            <InputSection currentValue={values.description} sectionName="Description" placeHolder="Enter description" onchange={(value) => handleInputChange("description", value)} recommended={false} type="text" isArea={true}/>
            <button onClick={addNewExperience} className = "addExperienceButton">Add Experience</button>
        </div>
    );
}

export default WorkExperienceSection;