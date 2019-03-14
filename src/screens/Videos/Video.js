import React from 'react';
import {Link} from 'react-router-dom';

class Video extends React.Component{
    
    render(){
        const id = this.props.match.params.id;
        
        return (
            <div className="container">
                <Link to='/videos' className='btn btn-danger mb-3 mt-3'>
                    Вернуться к Поиску видео
                </Link>
                <div className='player'>
                    <iframe width="560" height="315" src={`https://www.youtube.com/embed/${id}`} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen>
                    </iframe> 
                </div>
            </div>

        );
        
    }
}



export default Video;