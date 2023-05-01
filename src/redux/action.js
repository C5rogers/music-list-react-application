import { MUSIC_LIST,ADD_MUSIC,EDIT_MUSIC,DELETE_MUSIC,GET_MUSIC,EDIT_WHOLE_MUSIC} from './constant'

export const musicList = () => {
    return {
        type: MUSIC_LIST
    }
}

export const addMusic=(payload)=>{
    return {
        type:ADD_MUSIC,
        payload
    }
}

export const editMusic=(payload)=>{
    return {
        type:EDIT_MUSIC,
        payload
    }
}

export const editWholeMusic=(payload)=>{
    return {
        type:EDIT_WHOLE_MUSIC,
        payload
    }
}

export const deleteMusic=(payload)=>{
    return {
        type:DELETE_MUSIC,
        payload
    }
}

export const getMusic=(payload)=>{
    return{
        type:GET_MUSIC,
        payload
    }
}