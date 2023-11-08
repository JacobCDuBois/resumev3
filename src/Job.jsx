import React from "react";
import skill from "./skill";
import config from "./Config";
import Skill from "./skill";
function Job({description}){
    return <div>
        <div className={"row pb-5"}>
            <div className={"col-md-3"}>
                {description.period}
            </div>
            <div className={"col-md-9"}>
                <div className={"row"}>
                        {description.company} · {description.title}
                </div>
                <div className="row pb-2">
                    {description.description}
                </div>
                <div className="row ">
                    <div className={"justify-content-start flex-wrap skill_container"}>
                        {description.skills.map((skill, index) => (<Skill key={index} skill_type={skill}></Skill>))}
                    </div>

                </div>

            </div>

        </div>

    </div>
}
export default Job;