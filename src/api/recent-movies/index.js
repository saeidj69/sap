import axios from "../index";
const baseApiUrl = "https://www.omdbapi.com/";

const apikey="ccfec7d1";

export const getRecentMoviesApi=async (data)=>{
    const res= await axios.get(baseApiUrl+`?apikey=${apikey}&s=${data}`)
    return res.data;
  
  }