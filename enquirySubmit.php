<!-- /*MAKE THE CHANGES ACCORDING TO BHOOMI*/ -->

<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {

$email = $_POST['email'];
$phone = $_POST['phone'];
$format = "/^[0-9]{10}+$/";

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {

	echo '<script>
	alert("Please Enter Correct Email");
	window.location.href = "http://localhost/venkateshbhoomi.github.io/";
	</script>';

}

elseif ( preg_match($format, $phone) === 0) {

		echo '<script>
		alert("Please Enter Correct Phone Number");
		window.location.href = "http://localhost/venkateshbhoomi.github.io/";
		</script>';
	
}

else{
    
    include 'connection.php';
  if(isset($_POST['enquiry'])){
        $statement = $conn->prepare('INSERT INTO enquiry (name, phone, email, city)
            VALUES (:name, :phone, :email, :city)');
        
        $x = $statement->execute([
            'name' => $_POST['name'],
            'phone' => $_POST['phone'],
            'email' => $_POST['email'],
            'city' => $_POST['city']
        ]);
    }
         print_r($x);
         die();
        
//         if($x){

    
        
            
//                 echo '<script>
//         	            alert("Submitted Successfully");
//         	            window.location.href = "http://localhost/venkateshbhoomi.github.io/";
//         	       </script>';
//         }
//         else{
//         	echo '<script>
//         	            alert("Something went wrong! Try again.");
//         	            window.location.href = "http://localhost/venkateshbhoomi.github.io/";
//         	        </script>';
//         }
//   }    
//  if(isset($_POST['brochure'])){
//     //  echo "<pre>";
//     //  print_r($_POST);
//     //  die();
//      $statement = $conn->prepare('INSERT INTO brochure (firstname, lastname, email, city, phonenumber)
//     VALUES (:firstname, :lastname, :email, :city, :phone)');

//     $result = $statement->execute([
//         'firstname' => $_POST['fname'],
//         'lastname' => $_POST['lastname'],
//         'email' => $_POST['email'],
//         'city' => $_POST['city'],
//         'phone' => $_POST['phone']
//     ]);

//     if($result){
//             $url = 'https://millenniumtower.in/images/Brochure.pdf';
// 	       // $file_name = basename($url);
//             header('Content-type: application/pdf');
//             header('Content-Disposition: attachment; filename="' . basename($url) . '"');
//             header('Content-Transfer-Encoding: binary');
//             readfile($url);
	       
//     }else{
//         echo '<script>
// 	            alert("Something went wrong! Try again.");
// 	            window.location.href = "https://millenniumtower.in/";
// 	        </script>';
//     }
//  }
} 
}

?> 