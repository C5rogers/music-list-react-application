import { takeEvery, put, all } from 'redux-saga/effects'
import { SET_MUSIC_LIST, MUSIC_LIST, ADD_MUSIC, APPEND_MUSIC_LIST, EDIT_MUSIC, REPLACE_MUSIC, FILTER_MUSIC, DELETE_MUSIC, SET_MUSIC, GET_MUSIC, SET_WHOLE_EDITED_MUSIC, EDIT_WHOLE_MUSIC, SEARCH_MUSIC } from "./constant";
import axios from 'axios';

function* getMusics() {
    const jsonData = yield axios.get('https://back-end-for-music-list-app.onrender.com/musics')
    const data = yield jsonData.data
    yield put({
        type: SET_MUSIC_LIST,
        data: data,
    })
}

function* getMusic(action) {

    const jsonData = yield axios.get(`https://back-end-for-music-list-app.onrender.com/musics/${action.payload}`)
    const data = yield jsonData.data
    yield put({
        type: SET_MUSIC,
        data
    })

}

function* addMusics(action) {


    const jsonData = yield axios.post('https://back-end-for-music-list-app.onrender.com/musics', action.payload)
    const data = yield jsonData.data
    yield put({
        type: APPEND_MUSIC_LIST,
        data
    })

}


function* editMusic(action) {

    const jsonData = yield axios.put(`https://back-end-for-music-list-app.onrender.com/musics/${action.payload.id}`, action.payload)
    const data = yield jsonData.data
    yield put({
        type: REPLACE_MUSIC,
        data
    })

}

function* editWholeMusic(action) {
    const jsonData = yield axios.put(`https://back-end-for-music-list-app.onrender.com/musics/${action.payload.id}`, action.payload)
    const data = yield jsonData.data

    yield put({
        type: SET_WHOLE_EDITED_MUSIC,
        data
    })
}

function* deleteMusic(action) {
    yield axios.delete(`https://back-end-for-music-list-app.onrender.com/musics/${action.payload}`)
    yield put({
        type: FILTER_MUSIC,
        data: action.payload
    })
}

function* searchMusics(action) {

    let result = yield axios.get(`https://back-end-for-music-list-app.onrender.com/musics?q=${action.query}`)
    result = yield result.data
    yield put({
        type: SET_MUSIC_LIST,
        data: result
    })


}



function* musicSaga() {

    yield all([
        takeEvery(MUSIC_LIST, getMusics),
        takeEvery(ADD_MUSIC, addMusics),
        takeEvery(EDIT_MUSIC, editMusic),
        takeEvery(DELETE_MUSIC, deleteMusic),
        takeEvery(GET_MUSIC, getMusic),
        takeEvery(EDIT_WHOLE_MUSIC, editWholeMusic),
        takeEvery(SEARCH_MUSIC, searchMusics)
    ])

}

export default musicSaga