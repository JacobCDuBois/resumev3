import React from "react";

function Skill({skill_type, color}){
    var bg_color = () =>{
        switch (color%4){
            case 1:
                return "bg_darkb"
            case 2:
                return "bg_midm"
            case 3:
                return "bg_orange"
            default:
                return "bg_darkp"

        }
    }


    return <div className={"skill_div p-1 " + bg_color()}>
        <div className="p-1">{skill_type}</div>
    </div>
};
export default Skill;