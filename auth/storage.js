import * as SecureStore from "expo-secure-store";
import jwt_decode from "jwt-decode";

const key  = "mySecretKey";
const storeToken = async authToken =>{
    try{
        await SecureStore.setItemAsync(key, authToken);
    }catch(error){
        console.log("error storing auth token", error)
    }
}

const getToken = async () =>{
    try{
        return await SecureStore.getItemAsync(key);
    }catch(error){
        console.log("error getting the auth token",error)
    }
}
const getUser = async () =>{
  const token = await getToken()
  return (token) ? jwt_decode(token): null;
}

const removeToken = async () =>{
    try{
        return await SecureStore.deleteItemAsync(key);
    }catch(error){
        console.log("error removing the auth token",error)
    }
}

export default { getUser, storeToken, removeToken};