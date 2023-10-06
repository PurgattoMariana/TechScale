<? php
  $countUm = $_POST['countum'];


  //Database connection
  $conn = new mysqli('database-2.ca73bskigwkg.us-east-1.rds.amazonaws.com','seu_usuario','sua_senha','seu_banco_de_dados');
  if($conn->connection_error){
    die('Connection Failed : '.$conn->connect_error);
  } else {
    echo "registration successfull";
  }
?>
