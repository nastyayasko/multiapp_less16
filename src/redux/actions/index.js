import axios from 'axios';

// Action ДЕЙСТВИЕ

// const action = { type:'CREATE_BOOK', payload: 'полезная информация' };
// payload - новая информация

//Actions Creators

export const createBook =    (book)   => ({type:'CREATE_BOOK', payload: book});
export const updateBook =    (bookID) => ({type:'UPDATE_BOOK', payload: bookID});
export const deleteBook =    (bookID) => ({type:'DELETE_BOOK', payload: bookID});
export const deleteFavBook = (bookID) => ({type:'DELETE_FAV_BOOK', payload: bookID});
export const likeBook =      (bookID) => ({type:'LIKE_BOOK', payload: bookID});
export const disLikeBook =   (bookID) => ({type:'DISLIKE_BOOK', payload: bookID});

export const getWeather = () => {
    return (dispatch) => {
        const axios1 = axios('https://api.openweathermap.org/data/2.5/weather?q=Minsk&appid=a94d0a5ac08570add4b47b8da933f247');
        const axios2 = axios('https://api.openweathermap.org/data/2.5/forecast?q=Minsk&appid=a94d0a5ac08570add4b47b8da933f247');
        const requests = [axios1, axios2];
                
        Promise.all(requests)
             .then(response=> {
                dispatch(getWeatherSuccess(response));
                
            });
    }
}


export const getVideo = (search) => {
    return (dispatch) => {
        axios("https://www.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyBrmaj7j0yIJGWcGPYH3THz_Rh8BYAtlQs&q=" + search.trim().split(' ').join('_') +"&type=video")
            .then(response=> {
                dispatch(getVideoSuccess(response.data.items));
            });
    }
}


export const getWeatherAndRate = () => {
    return (dispatch) => {
        const axios1 = axios('https://api.openweathermap.org/data/2.5/weather?q=Minsk&appid=a94d0a5ac08570add4b47b8da933f247');
        const axios2 = axios('https://www.nbrb.by/API/ExRates/Rates/145');
        const requests = [axios1, axios2];
                
        Promise.all(requests)
             .then(response=> {
                dispatch(getWeatherAndRateSuccess(response));
                
            });
    }
}

export const getMems = (count) => {
    return (dispatch) => {
        axios("https://api.imgflip.com/get_memes")
            .then(response=> {
                let mems = response.data.data.memes;
                mems.length = count;
                dispatch(getMemsSuccess(mems));
            });
    }
}

export const chooseMem =   (memID) => ({type:'CHOOSE_MEM', payload: memID});

export const postMem = (mem) => {
    return (dispatch) => {
        axios.post("https://api.imgflip.com/caption_image", mem)
            .then(response=> {
                dispatch(postMemSuccess(response.data.data));
            });
    }
}
const getWeatherSuccess = (weather)     => ({type:'GET_WEATHER_SUCCESS', payload: weather});
const getVideoSuccess =   (video)       => ({type:'GET_VIDEO_SUCCESS', payload: video});
const getWeatherAndRateSuccess = (data) => ({type:'GET_WEATHER_AND_RATE_SUCCESS', payload: data});
const getMemsSuccess = (mems)           => ({type:'GET_MEMS_SUCCESS', payload: mems});
const postMemSuccess = (mem)            => ({type:'POST_MEM_SUCCESS', payload: mem});