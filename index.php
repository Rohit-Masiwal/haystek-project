<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>People Data</title>
    <link rel="stylesheet" href="style.css">
</head>
<body class="container" onload="loadTable('on-load')">
    <script type="text/javascript" src="loadTable.js"></script>
    <div>
        <?php
            echo '<h1 class="p1">';
            echo "PEOPLE DATA";
            echo '</h1>';
        ?>
    </div>
    <div class="p2">
        <?php
            echo '<button type="button" class="button" onclick="loadTable()">';
            echo "NEXT PERSON";
            echo '</button>';
        ?>
    </div>
    <div id="container"><br></div>
    <?php
        echo '<h2 id="para">';
        echo "</h2>";
    ?>

</body>
</html>