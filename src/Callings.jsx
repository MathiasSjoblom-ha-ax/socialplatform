import axios from "axios";

export const LoginApiCall = async (userInfo, dispatch) => {
    dispatch({type: "LOGIN_START"});
    try {
        const response = await axios.post("auth/login", userInfo);
        dispatch({type:"LOGIN_SUCESS", package: response.data});
    }catch(error) {
        dispatch({type:"LOGIN_FAIL", package: error });
    }
};