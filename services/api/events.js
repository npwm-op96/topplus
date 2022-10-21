// import { BaseUrl } from './ApiUrl'
// import { GET_LOCAL_TOKEN } from '../../utils/Utils'
// import AXIOS_SERVICE from '../../utils/AxiosUtil'
import events from "~/static/api/events.js";



// const _token = GET_LOCAL_TOKEN()

export async function GET_EVENTS_ALL(Req){
    return await events
    // return await AXIOS_SERVICE()
}
export async function GET_EVENT_BY_ID(Req){
    return await Req
}
export async function UPDATE_EVENT_BY_ID(Req){
    return await Req
}
export async function DELETE_EVENT_BY_ID(Req){
    return await Req
}
