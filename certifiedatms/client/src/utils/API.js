import axios from "axios";

export default {
    checkAuth: function(req,res){
	// 	return fetch("/auth", {
    //   method: 'GET',
    //   credentials: 'include',
    //   mode: 'cors'
    // });
    return axios.get("/auth",function(){ 
        console.log("request",req)
        console.log("response",res)
    })
    },
    handleSignUp:  function (userData) {
        //  return fetch ("/signup", {
        //     method:"POST",
        //     header:{
        //         "Content-Type": "application/json; charset=utf-8"
        //     },
        //     body:JSON.stringify(userData),
        //     credentials:'include',
        //     mode:"cors"
        // })
        return axios.post("/signup",userData,function(response){
            console.log("Userdata",userData)
            console.log("response",response)
        })
    },
    handleSignIn: function (userData) {
        return axios.post('/signin',userData, function (response){
            console.log("Userdata",userData)
            console.log("response",response)
        })
    },
    handleLogout: function(){
        return axios.get('/logout')
    }
}