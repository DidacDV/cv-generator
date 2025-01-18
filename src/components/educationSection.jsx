import { useState } from "react";
import InputSection from "./InputSection";
import "../styles/buttons.css";
const EducationSection = ({ onEducationChange }) => {
    const [values, setValues] = useState({
        institution: "",
        degree: "",
        startDate: "",
        endDate: "",
        description: ""
    });

    const handleInputChange = (field, value) => {
        setValues((prevValues) => ({
            ...prevValues,
            [field]: value,
        }));
    };

    const addNewEducation = () => {
        const newEducation = { ...values };
        
        for (const value in newEducation) {
            if (value !== "description" && newEducation[value] === "") {
                alert("Please fill all required fields");
                return;
            }
        }

        setValues({
            institution: "",
            degree: "",
            startDate: "",
            endDate: "",
            description: ""
        });

        onEducationChange(newEducation);
    };

    return (
        <div>
            <InputSection 
                currentValue={values.institution}
                sectionName="Institution"
                placeHolder="Enter institution name"
                onchange={(value) => handleInputChange("institution", value)}
                recommended={true}
                type="text"
                isArea={false}
            />
            <InputSection 
                currentValue={values.degree}
                sectionName="Degree"
                placeHolder="Enter your degree"
                onchange={(value) => handleInputChange("degree", value)}
                recommended={true}
                type="text"
                isArea={false}
            />
            <InputSection 
                currentValue={values.startDate}
                sectionName="Start Date"
                placeHolder="Enter start date"
                onchange={(value) => handleInputChange("startDate", value)}
                recommended={true}
                type="date"
                isArea={false}
            />
            <InputSection 
                currentValue={values.endDate}
                sectionName="End Date"
                placeHolder="Enter end date"
                onchange={(value) => handleInputChange("endDate", value)}
                recommended={true}
                type="date"
                isArea={false}
            />
            <InputSection 
                currentValue={values.description}
                sectionName="Description"
                placeHolder="Enter description"
                onchange={(value) => handleInputChange("description", value)}
                recommended={false}
                type="text"
                isArea={true}
            />
            <button onClick={addNewEducation} className="addButton">
                Add Education
            </button>
        </div>
    );
};

export default EducationSection;