<html>
    <head>
    <link rel="stylesheet" href="budget.css">
    <title>Budget Saved!!</title>
    </head>
    <body>
        <?php 
        $categories = $_POST["category"];
        $amounts = $_POST["amount"];
        $day = $_POST["day"];
        ?>
        <hr>
        <h1>You've successfully saved your budget as a text file!</h1>
        <hr>
        <p>Click the piggy bank to return to the home page!!!</p>
        <?php 
        $content = "";
        for ($i = 0; $i < count($categories)-1; $i++) {
            $content .= $day[$i] . " -  Spent $" . $amounts[$i] . " on " . $categories[$i] . "\n";
        }
            file_put_contents("weeklyBudget.txt", $content, FILE_APPEND);
        ?>

        <a href="budget.html"><img src="images/piggy bank.png"></a>
    </body>
</html>