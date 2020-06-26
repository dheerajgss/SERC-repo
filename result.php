<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h2>The details of the student are: </h2> <br><br>
    First name: <?php echo $_POST["fname"];  ?><br>
    Last name: <?php echo $_POST["lname"]; ?> <br>
    Phone number: <?php echo $_POST["ph_number"]; ?> <br>
    Degree: <?php echo $_POST["degree"]; ?> <br>
    Description: <?php echo $_POST["sub_interest"]; ?> <br>
    Interests: <?php echo $_POST["subject"]; ?> <br>
</body>
</html>