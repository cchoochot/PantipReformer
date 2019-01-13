/*global chrome*/
(function(document) {
    'use strict';

    document.addEventListener("DOMContentLoaded", (e) => {
        // remove all iframe - commented to prevent its performance degradation
        //[...document.getElementsByTagName("iframe")].forEach((node) => node.parentNode.removeChild(node));

        // set Sarabun font to default
        var el = document.createElement('link');
        el.setAttribute('href', 'https://fonts.googleapis.com/css?family=Sarabun');
        el.setAttribute('rel', 'stylesheet');
        document.head.insertBefore(el, document.head.firstElementChild);

        var comments = document.getElementById('comments-jsrender');

        if (!!comments) {
            // comments.classList.toggle('disappear');
            document.getElementById('comments-counts').onclick = (e) => comments.classList.toggle('disappear');

            var replybox = document.getElementsByClassName('comment-bar')[0];
            if (!!replybox) {
                // replybox.classList.toggle('disappear');
                comments.nextElementSibling.onclick = (e) => replybox.classList.toggle('disappear');
            }
        }
    });
})(document);
