import { configureStore } from '@reduxjs/toolkit'
import loadingReducer from '../feautures/loading/loadingSlice'


const store=configureStore({
    reducer:{
        loading:loadingReducer,
        
    }
})

export default store