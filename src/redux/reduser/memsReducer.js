const initialState = {
    mems: [],
    id: '',
    mem: {},
}

export default function reduser(state = initialState, action){
    switch(action.type){
        case 'GET_MEMS_SUCCESS':
            return {
                ...state,
              mems: action.payload,
            };
        case 'CHOOSE_MEM':
            return {
                ...state,
                id: action.payload,
            }
        case 'POST_MEM_SUCCESS':
            console.log(action.payload);
            return {
                ...state,
                mem: action.payload,
            }
        default:
            return state;
    }
}