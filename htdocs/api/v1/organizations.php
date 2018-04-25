<?php

include_once "../dbclass.php";

include_once "./entities/organization.php";

// get DB connection
$dbClass = new DBClass();    
$connection = $dbClass->getConnection();

// get the method message
$request_method=$_SERVER["REQUEST_METHOD"];

// identify the service
switch($request_method) {
    case 'GET':
        // Retrive
        $id = 0;
        if(!empty($_GET["id"])) {
            $id=intval($_GET["id"]);            
        }

        get_organizations($id);
        break;
    case 'POST':
        // Insert
        insert_organization();
        break;
    case 'PUT':
        // Update
        $id = intval($_GET["id"]);
        update_organization($id);
        break;
    case 'DELETE':
        // Delete
        $id = intval($_GET["id"]);
        delete_organization($id);
        break;
    default:
        // Invalid Request Method
        header("HTTP/1.0 405 Method Not Allowed");
        break;
}

// methods used in the entity
function get_organizations($id=0) {
    global $connection;
    
    $query="SELECT organizationid, name, email, website, phone, address, createdon, updatedon, status, state, statename FROM organizations_view;";
    if($id != 0) {
        $query .= " WHERE organizationid = ". $id;
    }

    $query .= " ORDER BY name";

    $stmt = $connection->prepare($query);

    $stmt->execute();
    $count = $stmt->rowCount();

    $response = array();
    $response["body"] = array();
    $response["count"] = $count;
    $response["query"] = $query;

    if($count > 0) {
        while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
            extract($row);

            $o = array(
                "organizationid" => $organizationid, 
                "name"=> $name, 
                "email" => $email, 
                "website" => $website, 
                "phone" => $phone, 
                "address" => $address, 
                "status" => $status,
                "state" => $state,
                "statename" => $statename,
                "createdon" => $createdon, 
                "updatedon" => $updatedon
            );

            array_push($response["body"], $o);
        }
    }

    header('Content-Type: application/json');
    echo json_encode($response);

    // $response=array();
    // $result=mysqli_query($connection, $query);
    // while($row=mysqli_fetch_array($result)) {
    //     $response[]=$row;
    // }
    // echo json_encode($response);
}

function insert_organization() {

}

function update_organization($id) {
    
}

function delete_organization($id) {
    
}

?>