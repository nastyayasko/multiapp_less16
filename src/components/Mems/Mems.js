import React from 'react';
import {connect} from 'react-redux';
import qs from 'query-string';

import MemItem from './MemItem';
import {postMem} from '../../redux/actions';

class Mems extends React.Component{
    state = {
        text0:'',
        text1:'',
    }
    handleInput = (e)=>{
        const {name,value} = e.target;
        this.setState({[name]:value});
    }
    handleSubmit = (e)=>{
        e.preventDefault();
        const {text0,text1} = this.state;
        const {id} = this.props;
        const newMem = {
            template_id: id, 
            username: 'g_user_107257642549096835361', 
            password: '1234', 
            text0: text0, 
            text1: text1,
        }
        const requestDate = qs.stringify(newMem);
        this.props.postMem(requestDate);
        this.setState({text0:'',text1:''});
    }

    render(){
        const {mems,id} = this.props;
        const {text0, text1} = this.state;
        if (mems.length === 0) return null;
        return (
            <div>
                {
                    mems.map(mem => {
                        return (
                            <MemItem className={`${mem.id === id ? 'active' : ''}`}key={mem.id} id={mem.id} mem={mem.url}/>
                        )
                    })
                }
                <form onSubmit={this.handleSubmit} className='mb-3 mt-3'>
                    <div className="form-row">
                        <div className="col">
                            <input type="text" className="form-control" name='text0' value={text0} onChange={this.handleInput}/>
                        </div>
                        <div className="col">
                            <input type="text" className="form-control" name='text1' value={text1} onChange={this.handleInput}/>
                        </div>
                        <button type="submit" className="btn btn-danger">Сгенерировать</button>
                    </div>
                </form>
            </div>
        )    
       
        
    }
    
}
const mapStateToProps = state => {
    return {
        mems: state.mems.mems,
        id: state.mems.id,
    }
}

export default connect (mapStateToProps, {postMem})(Mems);
