/*global chrome, FontFace*/
(function (document) {
	'use strict';

	var processFunc = function () {
		document.addEventListener("DOMContentLoaded", function(event) {
			var comments = document.getElementById('comments-jsrender');
			var replybox = document.querySelector('.comment-bar');

			comments.classList.toggle('disappear');
			replybox.classList.toggle('disappear');
			
			document.getElementById('comments-counts').onclick = function(e) {
				comments.classList.toggle('disappear');
			};
			
			comments.nextElementSibling.onclick = function(e) {
				replybox.classList.toggle('disappear');
			};
		});
	};
	
	processFunc();
}(document));
