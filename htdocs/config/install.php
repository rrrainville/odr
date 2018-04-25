<?php

include_once "../api/dbclass.php";

try {
    $dbClass = new DBClass();    
    $connection = $dbClass->getConfigConnection();
    $sql = file_get_contents("./data/database.sql");

    //echo $connection;

    //echo $sql;

     $connection->exec($sql);
    echo "Database and tables created successfully";
} catch (PDOException $e) {
    echo $e->getMessage();
}


