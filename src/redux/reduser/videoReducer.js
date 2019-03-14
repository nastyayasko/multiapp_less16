const initialState = {
    videos: [],
}

export default function reduser(state = initialState, action){
    switch(action.type){
        case 'GET_VIDEO_SUCCESS':
            
            return {
                ...state,
               videos: action.payload,
            };
        
        default:
            return state;
    }
}