function generateMarkdown() {
    return  `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Team Roster</title>
    <!-- link to bootstrap -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-uWxY/CJNBR+1zjPWmfnSnVxwRheevXITnMqoEIeG1LJrdI0GlVs/9cVSyPYXdcSF" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css"
</head>
<body class="d-flex justify-content-center">
    <!-- grid container for rows -->
    <div class = "container">
    <!-- header container -->
        <div class = "row">
    <!-- header -->
            <nav class="col .page-header navbar navbar-light bg-light">
                <div class="container-fluid">
                <a class="navbar-brand">MY TEAM</a>
                </div>
            </nav>
        </div>
    <!-- card container-->
        <div class= "row">
        <!-- card -->
            <div class="col card" style="width: 18rem;">
                <h5 class="card-title">Name</h5>
                <div class="card-body">
                <p class="card-text">Role</p>
                </div>
                <ul class="list-group list-group-flush">
                <li class="list-group-item">Office Number</li>
                <li class="list-group-item" href="#">Email</li>
                </ul>
                <div class="card-body">
                <a class="card-link" href="#">GitHub</a>
                </div>
            </div>
        </div>
    </div>
  
    <!-- script link for bootstrap -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-kQtW33rZJAHjgefvhyyzcGF3C5TFyBQBA13V1RKPf4uH+bwyzQxZ6CmMZHmNBEfJ" crossorigin="anonymous"></script>
</body>
</html>
    `
}

module.exports = generateMarkdown;