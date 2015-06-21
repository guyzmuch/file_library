var dive = require('dive');
var config = require('./config.json');

var untrackedExtenstions = [];
var data ={};
var fileTrackedNumber = 0;
var fileUntrackedNumber = 0;


dive(process.cwd()+'/'+config.filesDir, function(err, file) {
  if (err) throw err;
  console.log(file);
  if (checkExtension(file)){
  	saveFile(file);
  }
}, function() {
	showReport();
});


function checkExtension (file){
	var fileExtension = /\.(\w*)$/.exec(file);
	if (!fileExtension[1]){
		return false;
	}
	if (config.extensions.indexOf(fileExtension[1]) == -1){
		fileUntrackedNumber++;
		if (untrackedExtenstions.indexOf(fileExtension[1]) == -1){
			untrackedExtenstions.push(fileExtension[1]);
		}
		return false;
	}
	else {
		return true;
	}
}

function showReport (){
	console.log('___Untracked___');
	console.log('Number of untracked file : '+fileUntrackedNumber);
	console.log('With the extensions : '+untrackedExtenstions);

}

function saveFile (file){

}
function getMeta (file){

}