# image-recognition-ml5-and-p5.js
You can use neural networks to recognize the content of images. 

ml5.imageClassifier() is a method to create an object that classifies an image using a pre-trained model.

It should be noted that the pre-trained model provided by the example below was trained on a database of approximately 15 million images (ImageNet). 
The ml5 library accesses this model from the cloud. What the algorithm labels an image is entirely dependent on that training data -- what is included, excluded, and how those images are labeled (or mislabeled).
