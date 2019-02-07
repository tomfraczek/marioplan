import React from 'react'

const ProjectDetails = (props) => {
    const id = props.match.params.id;
    return(
        <div className="container sectiob project-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">Project Title - {id}</span>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At blanditiis cupiditate deleniti eligendi error fugiat id illo, ipsam minima, nam odio omnis quidem, quo ratione repellendus sit totam? Eaque, veritatis?</p>
                </div>
                <div className="card-action grey lighten-4 grey-text">
                    <div>Postet by the NetNinja</div>
                    <div>2nd September, 2am</div>
                </div>
            </div>
        </div>
    )
}

export default ProjectDetails