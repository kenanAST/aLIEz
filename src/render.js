const ipc = require('electron').ipcRenderer;
const exec = require('child_process').exec;


const errorBtn = document.getElementById("errorBtn");
const sidebar = document.getElementById("sidebar");
const main = document.getElementById("display");

// const dropArea = document.querySelector("#sideline");


sidebar.addEventListener('drop', (event) => {
    event.preventDefault();
    event.stopPropagation();
  
    for (const f of event.dataTransfer.files) {
        // Using the path attribute to get absolute file path
        main.style.textAlign = "left";
        main.innerHTML = f.path;
    }
});
  
sidebar.addEventListener('dragover', (e) => {
    e.preventDefault();
    e.stopPropagation();
  });
  
sidebar.addEventListener('dragenter', (event) => {
    console.log('File is in the Drop Space');
});
  
sidebar.addEventListener('dragleave', (event) => {
    console.log('File has left the Drop Space');
});


// function getStrings(fileName) {
// 	exec("strings " + fileName, (err, stdout, stderr) => console.log(stdout));
// }


function mainDisplay(){
    exec(cmd, (err, stdout) => 
        document.querySelector(".main").innerHTML = (stdout),
        console.log(stdout)
    );
    console.log("Main DIsplay Called")
}

// mainDisplay();