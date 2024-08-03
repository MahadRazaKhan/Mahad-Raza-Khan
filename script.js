let modeBtn = document.querySelector("#mode");
let currMode = "Light";
let a = alert("Site is under maintenance");
modeBtn.addEventListener("click", () => {
    console.log("Mode Changed!");
    if(currMode === "Light"){
        currMode = "Dark";
        document.querySelector("body").style.backgroundColor = "black";
        document.querySelector("body").style.color = "white";        
    }
    else{
        currMode = "Light";
        document.querySelector("body").style.backgroundColor = "white";
        document.querySelector("body").style.color = "black";    
    }
})
modeBtn.removeEventListener("click", () => {
    console.log("Mode Changed!");
    if(currMode === "Light"){
        currMode = "Dark";
        document.querySelector("body").style.backgroundColor = "black";
        document.querySelector("body").style.color = "white";        
    }
    else{
        currMode = "Light";
        document.querySelector("body").style.backgroundColor = "white";
        document.querySelector("body").style.color = "black";    
    }
})
