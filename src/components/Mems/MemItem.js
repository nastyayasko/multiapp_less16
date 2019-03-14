import React from 'react';
import {connect} from 'react-redux';
import {chooseMem} from '../../redux/actions';

class MemItem extends React.Component{
    handleClick = (id) => {
        this.props.chooseMem(id);
    }
    render(){
        const {mem,id,className} = this.props;
        
        return (
            <img src={mem} className= {className} alt='mem' height='200px' onClick={() => this.handleClick(id)}/>
        )
    }
    
    
}

export default connect (null, {chooseMem})(MemItem);