function showUserPage() {
    document.getElementById("container").innerHTML =
        `<main class="hm-gradient">
        <div class="bg-image" style="
                background-image: url('https://mdbootstrap.com/img/Photos/Others/images/76.jpg');
                height: 100vh;">
            <nav class="mb-4 navbar navbar-expand-lg navbar-dark cyan">
                <a class="navbar-brand font-bold" href="#">Homepage</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent-4" aria-controls="navbarSupportedContent-4"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent-4">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item active">
                            <a class="nav-link" href="#" onclick="showAddForm()" >Add</a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" id="navbarDropdownMenuLink-5" data-toggle="dropdown"
                               aria-haspopup="true" aria-expanded="false">Show Post
                            </a>
                            <div class="dropdown-menu dropdown-purple" aria-labelledby="navbarDropdownMenuLink-5">
                                <a class="dropdown-item" href="#" onclick="findAllProduct()">All</a>
                                <a class="dropdown-item" href="#" onclick="findByUserId()">My Posts</a>
                            </div>
                        </li>
                    </ul>
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item active">
                            <input type="text" id="searchName" placeholder="Enter the author" onchange="findByUsername()">
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#"><i class="fa fa-gear"></i> Settings</a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" id="navbarDropdownMenuLink-4" data-toggle="dropdown"
                               aria-haspopup="true" aria-expanded="false"><i class="fa fa-user"></i> Profile </a>
                            <div class="dropdown-menu dropdown-menu-right dropdown-cyan"
                                 aria-labelledby="navbarDropdownMenuLink-4" id="account">
                                <a class="dropdown-item" data-toggle="modal" data-target="#modalLoginForm">My Account</a>
                                <a class="dropdown-item" data-toggle="modal" data-target="#modalRegisterForm">Logout</a>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
            <div class="row">
            <div class="col-3"></div>
            <div class="col-9" id="display"></div>
            </div>
        </div>
    </main>`
}