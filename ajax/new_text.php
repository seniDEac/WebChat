<?php
require("../config.php");
    /**
     *  Garantee that, the folder is there also, the config file
    */
    $folder1    = '../chat_container';
    $folder2    = '../chat_container' . '/' . $_POST['acc'];
    $configFile = '../chat_container' . '/' . $_POST['acc'] . '/' . 'config.php';
    // $configFile2 = '../chat_container' . '/' . $_POST['acc'] . '/' . 'config2.php';

		if ( !file_exists($folder1) ) { mkdir($folder1, 0777); }
		if ( !file_exists($folder2) ) { mkdir($folder2, 0777); }
		if ( !file_exists($configFile) ) {
      $file = @fopen( $configFile, "w+" );
      // $contend =  '<?php
      // $chatTextNumberPosition = "1";
      // echo "RETURN:OK;<br>";
      // echo "RETURN:" . $chatTextNumberPosition . ";";
      // ';
      fwrite($file,$contend,strlen($contend));
      fclose($file);


  }

  /** read the config file  */
  require($configFile);
  $chatTextNumberPosition++;

  /** create the text file */
  $file2 = @fopen( $folder2 . '/' .$chatTextNumberPosition  . '.php', "w+" );
  $contend2 =  '<?php
  $myId            = "'.$_POST['myId'].'";
  $chatBoxTextarea = "'.$_POST['chatBoxTextarea'].'";
  echo $myId . "|||" . $chatBoxTextarea;
  ';
  fwrite($file2,$contend2,strlen($contend2));
  fclose($file2);


  /** update config file */
  $file = @fopen( $configFile, "w+" );
  $contend =  '<?php
  $chatTextNumberPosition = "'.$chatTextNumberPosition.'";
  echo "$chatTextNumberPosition";
  ';
  fwrite($file,$contend,strlen($contend));
  fclose($file);
