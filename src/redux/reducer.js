import { SET_MUSIC_LIST,APPEND_MUSIC_LIST,REPLACE_MUSIC,FILTER_MUSIC,SET_MUSIC,SET_WHOLE_EDITED_MUSIC} from './constant'

export const musicData = (data = [], action) => {
    switch (action.type) {
        case SET_MUSIC_LIST:
            return [...action.data]
        case APPEND_MUSIC_LIST:
            return [...data,action.data]
        case REPLACE_MUSIC:
            let filteredResult=data.map((item)=>item.id===action.data.id ? action.data : item)   
            return filteredResult 

        case SET_WHOLE_EDITED_MUSIC:
            let anotherFilteredResult=[]
            if(data.length>0){
                anotherFilteredResult=filteredResult=data.map((item)=>item.id===action.data.id ? action.data : item)
            }  
            return anotherFilteredResult  

        case FILTER_MUSIC:
            const result=data.filter((item)=>item.id!==action.data ) 
            return result
        case SET_MUSIC:
            return action.data    

        default:
            return data
    }
}