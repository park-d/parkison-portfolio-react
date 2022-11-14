import React from 'react';

function Project(props) {
    return (
        <div className="col-sm-12 col-md-6 col-lg-5 project-cards">
            <div className="card">
                <img className="card-img-top project-img" src={props.image} alt={props.name} />
                <div className="card-body">
                    <h4 className="card-title d-flex justify-content-center">{props.name}</h4>
                    <div className='d-flex justify-content-center styled-anchors'>
                        <a className='styled-anchor' href={props.deployed} target="_blank" rel="noreferrer">View Application</a>
                        <a className='styled-anchor' href={props.github} target="_blank" rel="noreferrer"><i className="fa-brands fa-github fa-xl"></i></a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Project;
