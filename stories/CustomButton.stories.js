import React from 'react';
import CustomButton from '../comps/CustomButton';
import Header from '../comps/Header';

export default {
    title:"Custom Button",
    component:CustomButton
};


export const MyCustomButton = () => <CustomButton />;
export const MyHeader = () => <Header />;

export const PageWithCustomButtons = () => <div>
    <Header 
        fontSize={20}
        color="#ABC"
        onMouseOver={ChangeOne}
    />

    <Header 
        fontSize={25}
        color="red"
        onMouseOver={ChangeTwo}
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


function ChangeOne() {
    document.querySelector(".header_box").style.color = "#135c80"
    document.querySelector(".header_box").style.fontSize = "25px";
}

function ChangeTwo() {
    document.querySelector(".header_box").style.color = "#f59f00"
    document.querySelector(".header_box").style.fontSize = "15px";
}

