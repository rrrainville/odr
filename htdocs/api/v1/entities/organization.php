<?php

class Organization {
    
    // Connection instance
    private $connection;

    // table name
    private $table_name = "organization";

    // table columns
    public $_id;
    public $_name;
    public $_email;
    public $_website;
    public $_phone;
    public $_address;
    public $_createdon;
    public $_updatedon;

    public function __construct($connection) {
        $this->connection = $connection;
    }

    //C
    public function create() {

    }
    //R
    public function read() {
        $query = "SELECT organizationid, name, email, website, phone, address, createdon, updatedon FROM " . $table_name;

        if($this->_id != null) {
            $query .= " WHERE organizationid = " . $this->_id;
        }

        $query .= " ORDER BY name";

        $stmt = $this->connection->prepare($query);

        $stmt->execute();

        $count = $stmt->rowCount();

        $organizations = array();
        $organizations["body"] = array();
        $organizations["count"] = $count;

        if($count > 0) {
            while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
                extract($row);

                $o = array(

                );

                array_push($organizations["body"], $o);
            }
        }

        return json_encode($organizations);
    }
    //U
    public function update() {
        
    }
    //D
    public function delete() {
        
    }
}
?>