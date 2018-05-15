<?php
require("../config.php");
    $folder1    = '../chat_container';
    $folder2    = '../chat_container' . '/' . $_POST['acc'];
    $configFile = '../chat_container' . '/' . $_POST['acc'] . '/' . 'config.php';

		if ( !file_exists($folder1) ) { mkdir($folder1, 0777); }
		if ( !file_exists($folder2) ) { mkdir($folder2, 0777); }
		if ( !file_exists($configFile) ) {
      $file = @fopen( $configFile, "w+" );
      // $contend = "<?php \n lastPostNumber = 0;\n";
      // $contend = "<?php \n \n";
      // $contend =  '<?php
      // $chatTextNumberPosition = "1";
      // echo "RETURN:OK;<br>";
      // echo "RETURN:" . $chatTextNumberPosition . ";";
      // ';
      fwrite($file,$contend,strlen($contend));
      fclose($file);
    }


echo 'response: OK;';
