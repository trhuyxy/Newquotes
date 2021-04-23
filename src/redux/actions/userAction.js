import {GET_DATAS, DATAS_ERROR} from '../types'
import axios from 'axios'

export const getDatas = () => async dispatch => {
    
    try{
        const res = await axios.get(`https://5f9782ef42706e0016957335.mockapi.io/Google-Trans`)
        dispatch( {
            type: GET_DATAS,
            payload: res.data
        })
    }
    catch(error){
        dispatch( {
            type: DATAS_ERROR,
            payload: error,
        })
    }

}