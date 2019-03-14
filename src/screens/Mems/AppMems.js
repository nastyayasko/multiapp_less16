import React from 'react';
import {connect} from 'react-redux';

import {getMems} from '../../redux/actions';
import Mems from '../../components/Mems/Mems';
import MyMem from '../../components/Mems/MyMem';

class AppMems extends React.Component {
    state = {
        count:'',
    }
    handleInput = (e)=>{
        const {value} = e.target;
        this.setState({count:value});
    }
    handleSubmit = (e)=>{
        e.preventDefault();
        const {count} = this.state;
        this.props.getMems(count);
        this.setState({count:''});
    }

    render(){
        const {count} = this.state;
        
        return (
            <div className="container">
                <p className= "mem">Генератор мемов</p>
                 <form onSubmit={this.handleSubmit} className='mb-3 mt-3'>
                    <div className="form-row">
                        <button type="submit" className="btn btn-danger">Получить</button>
                        <div className="col">
                            <input type="number" className="form-control" name='Количество мемов' value={count} onChange={this.handleInput}/>
                        </div>
                        мемов
                    </div>
                </form>
                <Mems/>
                <MyMem />
            </div>
        )
    }
}



export default connect (null, {getMems})(AppMems);