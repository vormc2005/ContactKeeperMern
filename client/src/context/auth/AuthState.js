import React, {useReducer} from 'react';
import axios from 'axios'
import AuthContext from './authContext';
import authReducer from './authReducer';

import {
 REGITER_SUCCESS,
 REGISTER_FAIL,
 USER_LOADED,
 AUTH_ERROR,
 LOGIN_FAIL,
 LOGIN_SUCCESS,
 LOGOUT,
 CLEAR_ERRORS
} from "../types";


const AuthState = props =>{
    const initialState = {
       token: localStorage.getItem('token'),
       isAuthenticated: null,
       loading:true,
       error: null,
       user: null
    };

    const [state, dispatch] = useReducer(authReducer, initialState);

    //Load User
    const loadUser =()=>{
        console.log("loadUser")
    }


    // Register User
    const register = async (formData) =>{
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        try{
            const res = await axios.post('/api/users', formData, config)
            dispatch({
                type: REGITER_SUCCESS,
                payload: res.data
            })
        }catch(err){
            dispatch({
                type: REGISTER_FAIL,
                payload: err.response.data.msg
            })

        }
    }
    //  Login User
    const login =()=>{
        console.log("login")
    }
    // Logout
    const logout =()=>{
        console.log("logout")
    }
    // Clear Errors
    const clearErros =()=>{
        dispatch({
            type: CLEAR_ERRORS
        })
       
    }

return (
    <AuthContext.Provider value={{
       token: state.token,
       isAuthenticated: state.isAuthenticated,
       loading: state.loading,
       user: state.user,
       token: state.token,
       error:state.error,
       register, 
       login,
       logout,
       clearErros,
       loadUser

    }}>
       
        {props.children}
    </AuthContext.Provider>
)

}


export default AuthState;
