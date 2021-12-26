//saving likes
// function getSavedLike(v) {
//     if (!localStorage.getItem(v)) {
//         localStorage.setItem(v, "");
//         return "";
//     }
//     return localStorage.getItem(v, "like-div");
// }

document.addEventListener('DOMContentLoaded', () => {

    let countLikes = 0;
    var like = document.getElementsByClassName('like');
    var likeTextCount = document.createElement('span');
    var container = document.querySelector('.container');
    var likeCounter = document.querySelector('.like-counter');
    var likeDiv = document.querySelector('.like-div');


    function addLike() {

        countLikes++;
        likeTextCount.setAttribute('class', 'like-counter');
        likeTextCount.innerHTML = parseInt(countLikes);
        likeDiv.appendChild(likeTextCount);

        console.log(likeTextCount)
            // localStorage.setItem(countLikes, "like-div");
    }

    // comment[0].addEventListener('click', showComment, false)
    for (var i = 0; i < like.length; i++) {
        like[i].classList.toggle('is-active');
        like[i].addEventListener('click', addLike, false);
    }



    // for (var i = 0; i < like.length; i++)
    // like.addEventListener('click', function() {
    //     like[i].classList[i].toggle('is-active');
    //     countLikes++;
    //     likeTextCount.setAttribute('class', 'like-counter');
    //     likeTextCount.innerHTML = parseInt(countLikes);
    //     likeDiv.appendChild(likeTextCount);


    //     // localStorage.setItem(countLikes, "like-div");
    // });

    let countComment = 0;
    var commentCountText = document.createElement('span');
    var commentCounter = document.querySelector('.comment-counter');
    var comment = document.getElementById('comment');
    var name = document.getElementById('name');
    var commentPlace = document.getElementById('comment-place');
    var addComment = document.querySelector('.add-comment');



    function addCommentFunc() {


        comment.value = "<b>" + name.value + "</b>" + ": " + comment.value;

        var commentText = document.createElement('p');
        commentText.setAttribute('class', 'comment-box');
        commentText.innerHTML = comment.value;
        commentPlace.appendChild(commentText);

        countComment++;
        //counting comments

        commentCounter.appendChild(commentCountText);
        commentCounter.innerHTML = parseInt(countComment);
    }

    addComment.addEventListener('click', addCommentFunc);


})