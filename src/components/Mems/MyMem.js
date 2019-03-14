import React from 'react';
import {connect} from 'react-redux';


class MyMem extends React.Component{
    
    render(){
        const {mem} = this.props;
        if (mem.url) {
            return (
                <img src={mem.url} alt='mem' height='400px' />
            )
        } else {
            return null;
        }
        
    }
    
    
}
const mapStateToProps = state => {
    return {
        mem: state.mems.mem,
    }
}
export default connect (mapStateToProps)(MyMem);