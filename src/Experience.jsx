import React from 'react';
import config from "./Config";
import Job from "./Job";
function Experience() {

    return (
        <div className="d-flex col-md-6 text-left flex-column pane right_pane pb-5">
            <div className={"pb-5"}>
                    {config.bio.split("\n").map((paragraph, index) => (
                        <p key={index}>{paragraph}</p>
                    ))}
            </div>
            {config.jobs.map((job, index) => (<Job key={index} description={job}></Job>))}
            <div>

                <a href="/resume.pdf" target="_blank">
                    <span className={"tag"}>View Full Resume &#8594;</span>
                </a>
                {/*<a href='src/resume.pdf' target='_blank' rel='noopener noreferrer'>*/}
                {/*    test*/}
                {/*</a>*/}




            </div>
            <div>
                {config.website_desc}
            </div>
        </div>
    );
}

export default Experience;