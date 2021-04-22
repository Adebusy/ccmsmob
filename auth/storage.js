import * as SecureStore from "expo-secure-store";

const storeToken = async authToken =>{
    try{
        await SecureStore.setItemAsync(key, authToken);
    }catch(error){
        console.log("error storing auth token", error)
    }
}

const getToken = async () =>{
    try{
        return await SecureStore.setItemAsync(key);
    }catch(error){
        console.log("error getting the auth token",error)
    }
}

const removeToken = async () =>{
    try{
        return await SecureStore.deleteItemAsync(key);
    }catch(error){
        console.log("error removing the auth token",error)
    }
}

export { storeToken, getToken, removeToken};