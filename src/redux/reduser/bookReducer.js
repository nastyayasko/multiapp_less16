const initialState = {
    books:[],
    favoriteBooks:[],
    currentId: 1,
}


export default function reducers(state = initialState, action){

    switch(action.type){
        case 'CREATE_BOOK':
            return {
                ...state, 
                books:[...state.books, {...action.payload, id:state.currentId}],
                currentId: state.currentId + 1
            };
            
        case 'UPDATE_BOOK':
            return {
                ...state, 
                favoriteBooks:[...state.favoriteBooks, action.payload],
                
            };
         
        case 'DELETE_BOOK':
            {
               let newBooks = state.books.filter(book=>
                    book.id !== action.payload
                );
                return {
                    ...state,
                    books:[...newBooks],
                }
            }

        case 'DELETE_FAV_BOOK':
            {
               let newFav = state.favoriteBooks.filter(id=>
                    id !== action.payload
                );
                return {
                    ...state,
                    favoriteBooks:[...newFav],
                }
            } 
        case 'LIKE_BOOK':
            {
                let newBooks = state.books.map(book=>{
                    if (book.id === action.payload){
                        book.likes++;
                    } 
                    return book;
                    
                })
                return {
                    ...state,
                    books:[...newBooks],
                } 
            }
               
           
            case 'DISLIKE_BOOK':
            {
                let newBooks = state.books.map(book=>{
                    if (book.id === action.payload){
                        book.disLikes++;
                    }
                    return book;
                })
                return {
                    ...state,
                    books:[...newBooks],
                } 
            }
        default:
            return state;
    }
}