function findAllProduct(){
    $.ajax({
        headers:{
            Authorization: 'Bearer ' + token
        },
        type: "GET",
        url: "http://localhost:8000/posts",
        success: function (data) {
            console.log(data)
            display(data)
        },
        error: function (error) {
            console.log(error)
            alert("bạn không vào được trang này")
        },
    })
}

function display(data) {
    let str = `<table class="table">
    <thead>
    <tr>
        <th scope="col">#</th>
        <th scope="col">Author</th>
        <th scope="col">Time</th>
        <th scope="col">Title</th>
        <th scope="col">Content</th>
        <th scope="col">Image</th>
    </tr>
    </thead>
    <tbody>`
    for (let i = 0; i < data.length; i++) {
        str += `<tr>
        <th scope="row">${i + 1}</th>
        <td>${data[i].user.username}</td>
        <td>${data[i].createAt}</td>
        <td>${data[i].title}</td>
        <td>${data[i].content}</td>
        <td><img src="image/${data[i].image}"></td>
    </tr>`
    }
    str += `</tbody>
</table>`
    document.getElementById("display").innerHTML = str
}

function showAddForm() {
    $("#exampleModal").modal('show');
}

function addPost() {
    let title = document.getElementById("title").value
    let content = document.getElementById("content").value
    let createAt = document.getElementById("createAt").value
    let userId = id;

    let post = {
        title : title,
        content : content,
        createAt : createAt,
        user : {
            id : userId
        }
    }
    console.log(post)
    $.ajax({
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + token
        },
        type: "POST",
        url: "http://localhost:8000/users/post",
        data: JSON.stringify(post),
        success: function () {
            let notification = "Your account has been created successfully."
            document.getElementById("notification").innerHTML = notification
            $('#exampleModal').modal('hide');
            $("#myModal").modal('show');
            setTimeout(function () {
                $("#myModal").modal('hide');
            }, 1000);
            findAllProduct()
        },
        error: function (error) {
            console.log(error)
        },
    })
}

function findByUsername() {
    let username = document.getElementById("searchName").value;
    $.ajax({
        headers:{
            Authorization: 'Bearer ' + token
        },
        type: "GET",
        url: "http://localhost:8000/users/find-by-username/" + username,
        success: function (data) {
            console.log(data)
            display(data)
        },
        error: function (error) {
            console.log(error)
        },
    })
}

function findByUserId() {
    console.log(id)
    $.ajax({
        headers:{
            Authorization: 'Bearer ' + token
        },
        type: "GET",
        url: "http://localhost:8000/users/find-by-userid/" + id,
        success: function (data) {
            console.log(data)
            display(data)
        },
        error: function (error) {
            console.log(error)
        },
    })
}