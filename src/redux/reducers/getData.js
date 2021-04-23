import {GET_DATAS, DATAS_ERROR} from '../types'

const initialState = {
    data:[],
    loading:true
}

export default function(state = initialState, action){

    switch(action.type){

        case GET_DATAS:
        return {
            ...state,
            data:action.payload,
            loading:false

        }
        case DATAS_ERROR:
            return{
                loading: false, 
                error: action.payload 
            }
        default: return state
    }

}