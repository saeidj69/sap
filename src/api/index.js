import axios from "axios";
import { notification} from 'antd';
import { activeLoading, deActiveLoaing } from "../feautures/loading/loadingSlice";
import store from "../app/store"
let baseURL = window.shahrdari_api_url+`/api/`;


const config = {
  baseURL: `${baseURL}/`,
  headers: {
    "Content-Type": "application/json",
  },
};

const axiosInstance = axios.create(config);



axiosInstance.interceptors.request.use((config) => {


  config.withCredentials = true
  store.dispatch(activeLoading())


  //document.body.classList.add('loading-indicator');
  // if (token()) {
  //   config.headers.Authorization = `Bearer ${token()}`;
  // }
  return config;
});

axiosInstance.interceptors.response.use(  
  
  (response) => {

    config.withCredentials = true
   // document.body.classList.remove('loading-indicator');
  
    
    store.dispatch(deActiveLoaing())
    return response;
  },
  (error) => {

   // document.body.classList.remove('loading-indicator');
    
    store.dispatch(deActiveLoaing())
     


    const { response } = error;
    if (response) {      
         
      
      const  status  = response.status;
      if (status) {    
        if(status===400)       {
          notification.error({
            message: response.data.message,
            placement: "bottomLeft",
          });
        }
        else if(status===405){
          notification.error({
            message: `${response.data.Error.Message}`,
            description: "",
            placement:"bottomRight"
          });
          if(localStorage.getItem('checkHasInfo')){
            setTimeout(()=>{
              localStorage.setItem("checkHasInfo",false);
              localStorage.setItem('fromCart',true);
              window.location.href="/profile";
            },1500);
          }
   
        }
        else if (status === 401) {   

          localStorage.clear()          
          window.location.href="/logout";    
        }else{
          notification.error({
            message: `${response.data.Error.Message}`,
            description: "",
            placement:"bottomRight"
          });
        }
      }
    }
    return Promise.reject(error);
  }
);



export default axiosInstance;
