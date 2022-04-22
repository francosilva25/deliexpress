import axios from 'axios'
import React, { createContext, useEffect, useState } from 'react'
import ProductsAPI from './api/ProductAPI'
import UserAPI from './api/UserAPI'

export const GlobalState = createContext()

export const DataProvider = ({children}) => {

    const [token, setToken] = useState(false)

    const refreshToken = async () => {
        try {
            const res = await axios.get('/user/refresh_token')
            console.log(res)
        } catch (err) {
            console.error(err.response.data.msg)
        }
    }

    useEffect(() => {
        /* const firstLogin = localStorage.getItem('firstLogin')
        if(firstLogin) refreshToken() */
        const firstLogin = localStorage.getItem('firstLogin')
        if(firstLogin){
            const refreshToken = async () =>{
                const res = await axios.get('/user/refresh_token')
        
                setToken(res.data.accesstoken)
            }
            refreshToken()
        }
    },[])

    const state = {
        token: [token, setToken],
        ProductsAPI: ProductsAPI(),
        UserAPI: UserAPI(token)
    }

    return(
        <GlobalState.Provider value={state}>
            {children}
        </GlobalState.Provider>
    )
}