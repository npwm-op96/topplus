import axios from "axios"

export async function GET_BRANDS_ALL(Req) {
    return await axios.get('http://localhost:3000/brands')
}