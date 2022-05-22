
var UserCommentAPI = "http://localhost:3000/comments";


function start() {
    getComments(function (UserComments) {
        renderComments(UserComments);
    });


    handleCreateComments();
}

start();


// hàm get
function getComments(callback) {
    fetch(UserCommentAPI)
        .then(function (response) {
            return response.json(); // để nhận đc chuỗi kiểu Json ở thằng then tiếp theo
        })
        .then(callback)
}



// hàm tạo comments
function createComments(dataCmt, callback) {
    var options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify(dataCmt),

    }
    fetch(UserCommentAPI, options)
        .then(function (res) {
            res.json();
        })
        .then(callback)
        .catch(function () {
            console.log("Lỗi tạo dữ liệu")
        })
}


// Hàm delete Comment
function handleDeleteComment(_id) {
    console.log(_id)
    var options = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },

    }
    fetch(UserCommentAPI + '/' + _id, options)
        .then(function (res) {
            res.json();
        })
        .then(
            function () {
                getComments(renderComments);

            }
        )
        .catch(function () {
            console.log("Lỗi xóa ")
        })
}




// hàm render
function renderComments(UserComments) {
    // console.log(UserComments)
    var listComments = document.querySelector('#list-comments-audio');

    var htmls = UserComments.map(function (comment) {
        console.log(comment._id)
        return `
        <div class="container"> 
            <div class="row" style="  margin-top: 60" >
               <img class="avatar-user" src="${comment.avatar}">
               <div class="box-user-comments">
                    <div class="container">
                    <p class="name-user-cmt"><b>${comment.nameUser}</b></p>
                    <p class="content-user-cmt">${comment.contentComment}</p>
                    </div>
               </div>
               
            </div>
        <button class="btn-delete-comment" onclick="handleDeleteComment(${comment._id})"><b>...</b></button>
        </div>
        
        `
    });
    listComments.innerHTML = htmls.join('')
}



// hàm sử lý event tạo cmt
function handleCreateComments() {
    var createBtn = document.querySelector(".button-comment");

    createBtn.onclick = function () {
        var contentComment = document.querySelector('input[name="comment"]').value;

        // console.log(contentComment)
        var DataComments = {
            contentComment: contentComment,
            nameUser: "User",
            avatar: "https://scontent.fdad3-3.fna.fbcdn.net/v/t39.30808-6/245102463_1258594407898288_1979264186118617785_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=b9115d&_nc_ohc=_ERkGiBhGaIAX-vpezJ&_nc_ht=scontent.fdad3-3.fna&oh=af328fd843115575b0ebb2864edf08ad&oe=61AFCE7E"
        }
        createComments(DataComments, function () { // call back
            getComments(renderComments);
        });
    }
}

// 18.
















/*

var UserCommentAPI = "http://localhost:3000/comments";


function start() {
    getComments(function (UserComments) {
        renderComments(UserComments);
    });


    handleCreateComments();
}

start();


// hàm get
function getComments(callback) {
    fetch(UserCommentAPI)
        .then(function (response) {
            return response.json(); // để nhận đc chuỗi kiểu Json ở thằng then tiếp theo
        })
        .then(callback)
}



// hàm tạo comments
function createComments(dataCmt, callback) {
    var options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify(dataCmt),

    }
    fetch(UserCommentAPI, options)
        .then(function (res) {
            res.json();
        })
        .then(callback)
        .catch(function () {
            console.log("Lỗi tạo dữ liệu")
        })
}


// Hàm delete Comment
function handleDeleteComment(id) {
    console.log(id)
    var options = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },

    }
    fetch(UserCommentAPI + '/' + id, options)
        .then(function (res) {
            res.json();
        })
        .then(
            function () {
                getComments(renderComments);

            }
        )
        .catch(function () {
            console.log("Lỗi")
        })
}





// hàm render
function renderComments(UserComments) {
    var listComments = document.querySelector('#list-comments-audio');

    var htmls = UserComments.map(function (comment) {
        return `
        <div class="container"> 
            <div class="row" style="  margin-top: 60" >
               <img class="avatar-user" src="${comment.avatar}">
               <div class="box-user-comments">
                    <div class="container">
                    <p class="name-user-cmt"><b>${comment.nameUser}</b></p>
                    <p class="content-user-cmt">${comment.contentComment}</p>
                    </div>
               </div>     
            </div>

            <button onclick="menuCmt(${comment.id})" class="btn-menu-cmt">cc</button>
            <div class="">
                <button class="cc" onclick="handleDeleteComment(${comment.id})"><b>.dadadasdasda..</b></button>
            </div>
        
        </div>
        
        `
    });
    listComments.innerHTML = htmls.join('')
}

function menuCmt() {
    var cc = document.querySelector('.cc')
    cc.classList.toggle('active3');
}



// hàm sử lý event tạo cmt
function handleCreateComments() {
    var createBtn = document.querySelector(".button-comment");

    createBtn.onclick = function () {
        var contentComment = document.querySelector('input[name="comment"]').value;

        // console.log(contentComment)
        var DataComments = {
            contentComment: contentComment,
            nameUser: "User",
            avatar: "https://scontent.fdad3-3.fna.fbcdn.net/v/t39.30808-6/245102463_1258594407898288_1979264186118617785_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=b9115d&_nc_ohc=_ERkGiBhGaIAX-vpezJ&_nc_ht=scontent.fdad3-3.fna&oh=af328fd843115575b0ebb2864edf08ad&oe=61AFCE7E"
        }
        createComments(DataComments, function () { // call back
            getComments(renderComments);
        });
    }
}

// 18.
*/