// Loading Animations Library

// Author: Caio Fernandes
// GitHub: https://github.com/caiofsouza/animary

'use strict';
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
	};

	this.circleTunningTwo = function(elem){
		this.addClass(elem, 'animary-circle-tunning-two');
	};

	this.diamondFloat = function(elem){
		this.addClass(elem, 'animary-diamond-float');
	};

	this.pacman = function(elem){
		this.addClass(elem, 'animary-pacman');
	};

	this.circleSpace = function(elem){
		this.addClass(elem, 'animary-circle-space');
	};

	this.circleSquare = function(elem){
		this.addClass(elem, 'animary-circle-square');
	};

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
animary.circleTunningTwo('.circle-tunning-two');
animary.diamondFloat('.diamond-float');
animary.pacman('.pacman');
animary.circleSpace('.circle-space');
animary.circleSquare('.circle-square');



