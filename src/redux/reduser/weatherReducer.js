const initialState = {
    oneDay: {},
    otherDays: {},
}

export default function reduser(state = initialState, action){
    switch(action.type){
        case 'GET_WEATHER_SUCCESS':
            
            return {
                ...state,
                oneDay: action.payload[0],
                otherDays: action.payload[1],
            };
        
        default:
            return state;
    }
}