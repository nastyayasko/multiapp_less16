const initialState = {
    weather: {},
    rate: {},
}

export default function reduser(state = initialState, action){
    switch(action.type){
        case 'GET_WEATHER_AND_RATE_SUCCESS':
            
            return {
                ...state,
                weather: action.payload[0].data,
                rate: action.payload[1].data,
            };
        
        default:
            return state;
    }
}