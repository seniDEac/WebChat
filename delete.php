<?php

echo '<title>DEL </title> return: OK;';

$output = shell_exec('rm -rf chat_container');
echo "<pre>$output</pre>";

$output = shell_exec('ls -lh');
// $output = shell_exec('chmod a+rwx * -Rfv');
echo "<pre>$output</pre>";

 ?>
