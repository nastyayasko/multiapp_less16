import React from 'react';
import {connect} from 'react-redux';

import {getWeatherAndRate} from '../../redux/actions';
import Form from '../../components/Pets/Form';
import Settings from '../../components/Pets/Settings';
import PetsList from '../../components/Pets/PetsList';
import {getTemp} from '../../components/functions';

class AppPets extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name: '',
            owner: '',
            date: '',
            time: '',
            content: '',
            //arr:[],
            arr: [{
                name: 'Тимон',
                owner: 'Настя',
                date: '2017-12-06',
                time: '15:03',
                content: 'Песик',
                },
                {
                name: 'Белка',
                owner: 'Оля',
                date: '2017-12-06',
                time: '15:03',
                content: 'Котик',
                }
            ],
            search:'',
            order:'',
        };

        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }
    handleInput(e){
        const {name, value} = e.target;
        this.setState({[name]:value});
    }
    handleSubmit(e){
        e.preventDefault();
        const {name, owner,date,time,content,arr} = this.state;
        const copyArr = [...arr];
        copyArr.push({name,owner,date,time,content});
        this.setState({arr:copyArr, name:'',owner:'',date:'',time:'',content:''});
    }
    handleDelete(i){
        const {arr} = this.state;
        const copyArr = [...arr];
        copyArr.splice(i,1);
        this.setState({arr:copyArr});
    }
    componentDidMount(){
        this.props.getWeatherAndRate();
    }
    render(){
        const {arr,search,order} = this.state;
        const {state} = this;
        let copyArr = [...arr];
        const {weather, rate} = this.props;
        
        
        if (search){
            copyArr = copyArr.filter((pet)=>{
                return pet.name.toLowerCase().includes(search.trim().toLowerCase());
            });
        }
        if (order){
            switch(order){
                case 'az':
                copyArr.sort((a,b)=>{
                    return a.name.toLowerCase() > b.name.toLowerCase()? 1 : -1;
                });
                break;
                case 'za':
                copyArr.sort((a,b)=>{
                  return a.name.toLowerCase() < b.name.toLowerCase()? 1 : -1;
              });
                break;
            }  
          }
        if (weather.main){
        return (
            <div className="container pt-3">
                <div className="row clearfix">
                    <div className="mr-3 left">
                        <Form handleInput={this.handleInput} handleSubmit={this.handleSubmit} {...state}/>
                        <Settings handleInput={this.handleInput}/>
                        <PetsList copyArr={copyArr} handleDelete={this.handleDelete}/>
                    </div>
                    <div className="ml-3 right">
                        <div>
                            <p><b>Температура сейчас:</b></p>
                            <p>{getTemp(weather)}</p>
                        </div>
                        <div>
                            <p><b>Курс Доллара США</b></p>
                            <p>{rate.Cur_OfficialRate}</p>
                        </div>
                    </div>
                </div>
            </div>
        );} else {
            return null;
        }
        
    }
}

const mapStateToProps = (state) => {
  
  return {
    weather: state.weatherAndRate.weather,
    rate: state.weatherAndRate.rate,
  }
}

export default connect (mapStateToProps, {getWeatherAndRate}) (AppPets);