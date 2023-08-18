if("serviceWorker" in navigator){
    navigator.serviceWorker.register("serviceWorker.js").then(registration =>{
        console.log("Service worker registered");
        console.log("Registration");
    }).catch(error =>{
        console.log("Service Registration failed");
        console.log(error);
    })
}