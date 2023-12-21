function bookTheTickets(){
    console.log("this button should do something. Let it change title color");
    
    let currentTitleColor = document.querySelector("#title").style.color;
 
    if(currentTitleColor != "orange"){
        document.querySelector("#title").style.color = "orange";
        currentTitleColor = "orange";
    }
    else{
        document.querySelector("#title").style.color = "#fff";
        currentTitleColor = "#fff";
    }
}