
import InputSection from "./InputSection";

const PersonalInfoSection = ({onNameChange, onPhoneChange, onContactChange, onIntroductionChange}) => {

    return (
        <div>
            <InputSection sectionName={"Full Name"} onchange = {onNameChange} recommended={true} placeHolder={"Name LastName"}></InputSection>
            <InputSection sectionName={"Phone Number"} onchange = {onPhoneChange} recommended={false} type={"number"} placeHolder={"+34 123 45 67 89"}></InputSection>
            <InputSection sectionName={"Contact"} onchange = {onContactChange} recommended={true} type={"email"} placeHolder={"someone@gmail.com"}></InputSection>
            <InputSection sectionName={"Brief Introduction"} onchange = {onIntroductionChange} recommended = {true} type = {"text"} isArea={true}></InputSection>
        </div>
    )
}


export default PersonalInfoSection;