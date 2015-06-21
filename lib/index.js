var dive = require('dive');
var config = require('./config.json');
var path = require('path');

var untrackedExtenstions = [];
var data ={};
var fileTrackedNumber = 0;
var fileUntrackedNumber = 0;

process.title ="File_library";

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
	var pathFromFilesDir = file.replace( process.cwd()+'/'+config.filesDir, "");
	var paths = pathFromFilesDir.path.sep;
	for (var i=0, u=paths.length; i<u; i++){
		if (u=i){
			//We go the file name
		}
		else{
			for (var j=0, v=config.sepcificTags.length; j<v; j++){
				if(config.sepcificTags[j].indexOf(paths[i]) != -1){
					//save the data with the specificFolder name
				}
			}
		}
	}

}

function getMeta (file){

}