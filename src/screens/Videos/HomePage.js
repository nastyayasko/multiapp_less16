import React from 'react';
import {connect} from 'react-redux';

import {getVideo} from '../../redux/actions';


import VideoIcon from '../../components/VideoIcon';

class HomePage extends React.Component{
    state = {
        search:'',
    }
    handleInput = (e)=>{
        const {value} = e.target;
        this.setState({search:value});
    }
    handleSubmit = (e)=>{
        e.preventDefault();
        const {search} = this.state;
        this.props.getVideo(search);
        this.setState({search:''});
        
    }
   

    render(){
        const {search} = this.state;
        const {videos} = this.props;
       
        return (
            
                <div className='container'>
                    <form onSubmit={this.handleSubmit} className='mb-3 mt-3'>
                    <div className="form-row">
                            <div className="col">
                            <input type="text" className="form-control" name='search' value={search} onChange={this.handleInput}/>
                            </div>
                        <button type="submit" className="btn btn-danger">Поиск</button>
                    </div>
                    </form>
                    {
                        videos.map((item,i)=>{
                            let id = item.id.videoId;
                            return (
                                <VideoIcon key={i} id={id} description={item.snippet}/>
                            );
                        })
                    }
                </div>
            )
    }
}

const mapStateToProps = state => {
    return {
        videos: state.videos.videos,
    }
}

export default connect (mapStateToProps, {getVideo})(HomePage);