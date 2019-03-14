import React from 'react';
import {Link} from 'react-router-dom';

function VideoIcon (props){
    const {id, description,}=props;
    
    return (
        <div className="card mb-3">
            <Link to={`/videos/${id}`} className='link'>
                <div className="row no-gutters" >
                    <div className="col-md-4"  >
                        <img src={`http://img.youtube.com/vi/${id}/0.jpg`} className="card-img" alt="video"/>
                    </div>
                    <div className="col-md-8" >
                    <div className="card-body" >
                        <h5 className="card-title" >{description.title}</h5>
                        <p className="card-text" >{description.description}</p>
                        
                    </div>
                    </div>
                </div>
            </Link>
        </div>

    )
}

export default VideoIcon;