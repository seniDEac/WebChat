<?php
require("config.php");


echo '
  <!doctype html>
  <html>
    <head>
      <title>
        One Simple Chat!
      </title>

      <!--
        -     the scripts and CSSs...
        -->

      <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
      <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
      <script language="javascript" type="text/javascript" src="assets/js/chat/script.js"></script>
      <link rel="stylesheet" href="assets/css/style.css">

      <!--
        -     one simple meta...
        -->
      <meta http-equiv="X-UA-Compatible" content="IE=edge" charset="utf-8">
      </M>
    </head>
    <body>
      <br>
      <br>
      <font color=blue>Ola!<br>
      Sou o usuario de teste NU</font>.  <font color=red>' . $_REQUEST["myid"] . '</font>
      <div id="box">boxxx</div>
      <br>
      <br><a href="chat_index.php?myid=100">entrar como <b>Clara    </b></a>
      <br><a href="chat_index.php?myid=200">entrar como <b>Ana      </b></a>
      <br><a href="chat_index.php?myid=300">entrar como <b>Jonas    </b></a>
      <br><a href="chat_index.php?myid=400">entrar como <b>Laisa    </b></a>
      <br><a href="chat_index.php?myid=500">entrar como <b>Figueroa </b></a>
      <br><a href="chat_index.php?myid=600">entrar como <b>Tadeu    </b></a>
      <br>
      <br><a href="delete.php" target="_BLANCK"> delete/reset all chats </a>
      <br>
      <br>
      <br>
      <br>

      <div id="chat-sidebar" class="chat-sidebar">
          <div class="sidebar-name">
          <div class="sidebar-name" onclick="register_popup(`100`, `Clara`);">
                  <img width="30" height="30" src="assets/image/avatars/01.jpg" />
                  <span>Clara</span>
          </div>
          <div class="sidebar-name" onclick="register_popup(`200`, `Ana`);">
                  <img width="30" height="30" src="assets/image/avatars/02.jpg" />
                  <span>Ana</span>
          </div>
          <div class="sidebar-name" onclick="register_popup(`300`, `Jonas`);">
                  <img width="30" height="30" src="assets/image/avatars/03.jpg" />
                  <span>Jonas</span>
          </div>
          <div class="sidebar-name" onclick="register_popup(`400`, `Laisa`);">
                  <img width="30" height="30" src="assets/image/avatars/04.jpg" />
                  <span>Laisa</span>
          </div>
          <div class="sidebar-name" onclick="register_popup(`500`, `Figueroa`);">
                  <img width="30" height="30" src="assets/image/avatars/05.jpg" />
                  <span>Figueroa</span>
          </div>
          <div class="sidebar-name" onclick="register_popup(`600`, `Tadeu`)">
                  <img width="30" height="30" src="assets/image/avatars/06.jpg" />
                  Tadeu
         </div>
      </div>
    </body>
  </html>

  <script>
    /**
     *  variables to the .JS file...
     */
    myId =  ' . $_REQUEST["myid"] . ';
  </script>
';
