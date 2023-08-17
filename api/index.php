<?php
error_reporting(E_ALL);
ini_set('display_errors, 1');
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: *");

include 'dbConect.php';

$objDB = new DbConnect;
$conn = $objDB->connect();
$method = $_SERVER['REQUEST_METHOD'];

switch($method){

     case "GET": 
        $sql = "SELECT * FROM users";
        $path =explode('/', $_SERVER['REQUEST_URI']); 
        if(isset($path[3]) && is_numeric($path[3])){
            $sql = "WHERE id .= :id";
            $stmt->bindParam(':id', $path[3]);
            $stmt = $conn->prepare($sql);
            $stmt->execute();
            $users = $stmt->fetchAll(PDO::FETCH_ASSOC);

        }else {
             $stmt = $conn->prepare($sql);
             $stmt->execute();
             $users = $stmt->fetchAll(PDO::FETCH_ASSOC);
        }
        $stmt = $conn->prepare($sql);
        $stmt->execute();
        $users = $stmt->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode($users);
        break;
    case "PUT":
        $user = json_decode(file_get_contents('php://input'));
        $sql = "UPDATE SET  name = :name, email = :email, mobile = :mobile, update_at = :update_at WHERE id = :id);
        $stmt = $conn->prepare($sql);
        $update_at = date('Y-m-d');
        $stmt->bindParam(':id', $user->id);
        $stmt->bindParam(':name', $user->name);
        $stmt->bindParam(':email', $user->email);
        $stmt->bindParam(':mobile', $user->mobile);
        $stmt->bindParam(':update_at', $update_at);

        if($stmt->execute()){
            $response = ['status' => 1, 'message' => 'Record updated successfully.'];
        }else{
             $response = ['status' => 0, 'message' => 'created to updated record.'];
        }
        echo json_enconde($response);
        break;
        
    case "DELETE":
         $sql = "DELETE * FROM users WHERE id = :id";
        $path =explode('/', $_SERVER['REQUEST_URI']); 
        $stmt->bindParam(':id', $path[3]);
        $stmt = $conn->prepare($sql);

        if($stmt->execute()){
            $response = ['status' => 1, 'message' => 'Record deleted successfully.'];
        }else{
             $response = ['status' => 0, 'message' => 'created to deleted record.'];
        }
        echo json_enconde($response);
        break;
}
   
?>
