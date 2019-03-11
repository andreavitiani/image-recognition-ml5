let mobilenet;
let toCheck;
let resultDisplayed = document.getElementById('prediction');
let dropzone;
let classifier;
let imageFile

function setup() {
	noCanvas();
	dropzone = select('#dropzone');
	dropzone.dragOver(highlight);
	dropzone.drop(gotFile, unHighlight);
	dropzone.dragLeave(unHighlight);
	// Initialize the Image Classifier method with MobileNet
	classifier = ml5.imageClassifier('MobileNet', modelLoaded);
	// When the model is loaded
	function modelLoaded() {
		console.log('Model Loaded!');
	}
}

function checkIt(err, results) {
	console.log(results);
	resultDisplayed.innerHTML = results[0]['className'];
}

function highlight() {
	dropzone.style('background-color', '#ccc');
}

function unHighlight() {
	dropzone.style('background-color', '#fff');
}

function gotFile(file) {
	imageFile = createImg(file.data);
	imageFile.addClass('droppedimage');
	dropzone.html('');
	dropzone.child(imageFile);
	classifier.predict(imageFile, checkIt);
}
