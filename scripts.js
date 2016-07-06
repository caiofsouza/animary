'use strict';
// Animation Gif Library
// Animary
var Animary = function(){



	this.triangleAnimation = function(elem){
		this.addClass(elem+'.left-triangle', 'animary-triangle-circle-left');
		this.addClass(elem+'.right-triangle', 'animary-triangle-circle-right');
	};


	this.batteryBar = function(elem){
		var bar = document.createElement('div');
		bar.className = 'animary-bar-animary';
		document.querySelector(elem).appendChild(bar);
	};

	this.circleTunning = function(elem){
		this.addClass(elem, 'animary-circle-tunning');
	}





	// HELPER FUNCTIONS
	this.getClasses = function(elem){
		return document.querySelector(elem).className;
	}

	this.addClass = function(elem, new_classes){
		var current_classes = this.getClasses(elem);
		var formatted_classes = new_classes.replace(/\s/gi, '');
		document.querySelector(elem).className = current_classes + ' ' + formatted_classes;
	}


	return this; 
};


var animary = new Animary();

animary.triangleAnimation('.triangle-circle-animary');
animary.batteryBar('.battery-bar');
animary.circleTunning('.circle-tunning');




