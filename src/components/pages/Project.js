import React from 'react';

function Project(props) {
    return (
        <div class="col-sm-12 col-md-6 col-lg-5 project-cards">
                <div class="card">
                    <img className = "project-img" src="https://via.placeholder.com/400"  alt="..." />
                    <div class="card-body">
                        <div className="card-body">
                            <h4 className="card-title">{props.name}</h4>
                            <a href={props.github}><i class="fa-brands fa-github fa-xl"></i></a>
                            <a href={props.deployed}>View Application</a>
                        </div>
                    </div>
                </div>
            </div>
    );
}

export default Project;
