import React from 'react';
import CustomButton from '../comps/CustomButton';
import Header from '../comps/Header';

export default {
    title:"Custom Button",
    component:CustomButton
};


export const MyCustomButton = () => <CustomButton />;

export const PageWithCustomButtons = () => <div>
    <Header 
        fontSize={20}
        color="#ABC"
        onMouseOver={OkClick}
    />

    <Header 
        fontSize={25}
        color="red"
        onMouseOver={OkClick}
    />


    <CustomButton 
        color="#999"
        text="Cancel" 
        onClick={CancelClick}
        />
    <CustomButton
        color="#3F5"
        text="OK" 
        onClick={OkClick}
        />
    <CustomButton 
        color="#F3F"
        text="Submit" />
    <CustomButton 
        text="Menu" />
</div>

function CancelClick(){
    alert("cancel");
}

function OkClick(){
    alert("OK");
}


// function Header() {
//     document.getElementsByName(Header).style.color = "#135c80"
//     document.getElementsByName(Header).style.fontSize = "25px";
// }


