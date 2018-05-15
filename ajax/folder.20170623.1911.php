<?php
    $folder1    = '../chat_container';
    $folder2    = '../chat_container' . '/'.$_POST['acc'];
    $configFile = '../chat_container' . '/'.$_POST['acc'] . '/' . 'config.php';

		if ( !file_exists($folder1) ) { mkdir($folder1, 0777); }
		if ( !file_exists($folder2) ) { mkdir($folder2, 0777); }
		if ( !file_exists($configFile) ) {
      $contend =
        '<?php' +
        'lastPost = "0"'
      ;
      $file = @fopen( $configFile, "w+" );
      @fwrite( $file, stripslashes($contend) );
      @fclose( $file );
    }


/**  exemplo da net */
// diretório onde encontra-se o arquivo
$filename = "meu_arquivo.php";

// verifica se existe o arquivo
if(file_exists($filename)){
  $script = file_get_contents($filename);
} else {
  $script = "";
}

//Adciona um novo texto
$script = "Meu texto!!!" . $script;

//Escrevendo
$file = @fopen($filename, "w+");
@fwrite($file, stripslashes($script));
@fclose($file);




/** exemplo da net */
    if($_POST['acc']=='Editar'){
    // Acoes relacionadas a edicao
     	echo 'A acao selecionada e editar';
    }
    elseif($_POST['acc']=='Novo'){
     	// Acoes de criacao
     	echo 'A acao solicitada e criar';
    }
    else{
     	// Acao para deletar
     	echo 'A acao solicitada e deletar';
    }

echo 'response: OK;';
