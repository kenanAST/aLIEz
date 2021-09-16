const ipc = require('electron').ipcRenderer;
const exec = require('child_process').execSync;

const sidebar = document.getElementById('sidebar');
const main = document.getElementById('display');
const displayList = document.getElementById('paths');

let fileList = [];
let queryFileList = [];

// const dropArea = document.querySelector("#sideline");

exec('strings ', {
	encoding: 'utf-8',
});

function updateQueryFileList() {
	for (let i = queryFileList.length; i < fileList.length; i++) {
		queryFileList[i] = document.getElementById(i);
		queryFileList[i].addEventListener('click', (event) => {
			let output = '';
			main.style.textAlign = 'left';
			output = exec('strings "' + fileList[i] + '"', {
				encoding: 'utf-8',
			});
			output = output.replaceAll('\n', '<br>');
			main.innerHTML = output;
		});
	}
}

sidebar.addEventListener('drop', (event) => {
	event.preventDefault();
	event.stopPropagation();

	for (const f of event.dataTransfer.files) {
		fileList.push(f.path);
	}

	cleanName = fileList[fileList.length - 1].split('\\');
	cleanName = cleanName[cleanName.length - 1];
	let node = document.createElement('li');
	let textnode = document.createTextNode(cleanName);
	node.appendChild(textnode);
	node.setAttribute('id', fileList.length - 1);
	displayList.appendChild(node);
	updateQueryFileList();
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

function mainDisplay() {
	exec(
		cmd,
		(err, stdout) => (document.querySelector('.main').innerHTML = stdout)
	);
	console.log('Main DIsplay Called');
}

// mainDisplay();
