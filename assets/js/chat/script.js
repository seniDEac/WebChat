
//important
chatID1= "";   chatID2= "";   chatID3= "";   chatID4= "";   chatID5= "";
chatID6= "";   chatID7= "";   chatID8= "";   chatID9= "";   chatID10= "";
chatID11= "";  chatID12= "";  chatID13= "";  chatID14= "";  chatID15= "";

//this function can remove a array element.
Array.remove = function(array, from, to) {
    var rest = array.slice((to || from) + 1 || array.length);
    array.length = from < 0 ? array.length + from : from;
    return array.push.apply(array, rest);
};

//this variable represents the total number of popups can be displayed according to the viewport width
var total_popups = 0;

//arrays of popups ids
var popups = [];

//this is used to close a popup
function close_popup(id)
{
    for(var iii = 0; iii < popups.length; iii++)
    {
        if(id == popups[iii])
        {
            Array.remove(popups, iii);

            document.getElementById(id).style.display = "none";

            calculate_popups();

            return;
        }
    }
}

/**
 *     displays the popups.
 *     Displays based on the maximum number of popups that can be displayed on the current viewport: "width"
 */
function display_popups(){
  /**  */
    var right = 220;
    var iii = 0;
    for(iii; iii < total_popups; iii++) {
        if(popups[iii] != undefined){
            var element = document.getElementById(popups[iii]);
            element.style.right = right + "px";
            right = right + 320;
            element.style.display = "block";
        }
    }
      /**  */
    for(var jjj = iii; jjj < popups.length; jjj++){
        var element = document.getElementById(popups[jjj]);
        element.style.display = "none";
    }
}

/**
 *     creates markup for a new popup. Adds the id to popups array.
 */
function register_popup(id, name){
    console.log('WARNING: REGISTER_POPUP = ' + id + ' | name =' + name);

    /**  */
    if ( id  < myId){
      chatID = id + "_" + myId;
    }
    else{
      chatID = myId + "_" + id;
    }
    $("#box").load('ajax/folder.php', {acc:chatID} );

    /**  */
    for(var iii = 0; iii < popups.length; iii++){
        //already registered. Bring it to front.
        if(id == popups[iii]){
            Array.remove(popups, iii);
            popups.unshift(id);
            calculate_popups();
            return;
        }
    }
    /**  */
    var element=
      '<div class="popup-box" id="' + id + '">' +
      '    <div class="" style="margin-left:00px;">' +
      '        <div class="">' +
      '        	<div class="panel panel-default">' +
      '                <div class="panel-heading top-bar">' +
      '                    <div class="col-md-8 col-xs-8">' +
      '                        <h3 class="panel-title"><span class="glyphicon glyphicon-comment"></span> Chat - '+name+'</h3>' +
      // '                            - ('+ id + ')' + myId + ' | ' + chatID +
      '                            <div id="messageNumberActual_' + chatID + '" style="color:red; border:solid red 1px; display: none;">' +
      '                                0' +
      '                            </div>' +
      '                            <div   id="messageNumberLast_' + chatID + '" style="color:red; border:solid red 1px; display: none;">' +
      '                                0' +
      '                            </div>' +
      '                    </div>' +
      '                    <div class="col-md-4 col-xs-4" style="text-align: right;">' +
      '                        <!-- <a href="#"><span id="minim_chat_window" class="glyphicon glyphicon-minus icon_minim"></span></a>   -->' +
      '                        <a href="javascript:close_popup(\''+ id +'\');"><span class="glyphicon glyphicon-remove icon_close" data-id="chat_window_1"></span></a>' +
      '                    </div>' +
      '                </div>' +

      '                <div id="popup-messages_' + chatID + '" class="panel-body msg_container_base">' +
      '                </div>' +

      '                <div class="panel-footer">' +
      '                    <div class="input-group">' +
      '                        <input id="' + id + '_text" type="text" class="form-control input-sm chat_input" placeholder="Write your message here..." />' +
      '                        <span class="input-group-btn">' +
      '                        <button class="btn btn-primary btn-sm"  onclick="goButton(' + id + ', `' + chatID + '`)">Send</button>' +
      '                        </span>' +
      '                    </div>' +
      '                </div>' +
      '    		  </div>' +
      '        </div>' +
      '    </div>' +
      '  </div>' +
      '</div>' +


      // '<div class="popup-box chat-popup" id="' + id + '">' +
      // '  <div class="popup-head"> ' +
      // '    <div class="popup-head-left"> ' +
      //       name +
      // ' - ('+ id + ')' + myId + ' | ' + chatID +
      // '        <div id="messageNumberActual_' + chatID + '" style="color:red; border:solid red 1px; display: none;">' +
      // '            0' +
      // '        </div>' +
      // '        <div   id="messageNumberLast_' + chatID + '" style="color:red; border:solid red 1px; display: none;">' +
      // '            0' +
      // '        </div>' +
      // '    </div>' +
      // '    <div class="popup-head-right">' +
      // '      <a href="javascript:close_popup(\''+ id +'\');">' +
      // '        &#10005;' +
      // '      </a>' +
      // '    </div>' +
      // '    <div style="clear: both">' +
      // '    </div>'+
      // '  </div>' +
      // '  <div id="popup-messages_' + chatID + '" class="popup-messages">' +
      // '    messages..'  +
      // '  </div>' +
      // '  <div class="popup-type">' +
      // '    <textarea class="inputTextBox" NAME="textAreaChat" id="' + id + '_text">' +
      // '    ola...' +
      // '    </textarea>' +
      // '    <button class="sendButton btn btn-success active" onclick="goButton(' + id + ', `' + chatID + '`)">' +
      // '    </i>' +
      // '     Go' +
      // '    </button>' +
      // '  </div>' +
      // '</div>'


      ''

    ;





    /**  */
    document.getElementsByTagName("body")[0].innerHTML = document.getElementsByTagName("body")[0].innerHTML + element;
    popups.unshift(id);
    /**  */
    calculate_popups();




        chatID15 = chatID14;  chatID14 = chatID13;  chatID13 = chatID12;   chatID12 = chatID11;
        chatID11 = chatID10;  chatID10 = chatID9;   chatID9 = chatID8;     chatID8 = chatID7;
        chatID7 = chatID6;    chatID6 = chatID5;    chatID5 = chatID4;     chatID4 = chatID3;
        chatID3 = chatID2;    chatID2 = chatID1;    chatID1 = chatID;


        // put the chat texts in to their correct spaces
        $("#messageNumberLast_"+chatID1).load("chat_container/" + chatID1 + "/config.php");
        $("#messageNumberLast_"+chatID2).load("chat_container/" + chatID2 + "/config.php");
        $("#messageNumberLast_"+chatID3).load("chat_container/" + chatID3 + "/config.php");
        $("#messageNumberLast_"+chatID4).load("chat_container/" + chatID4 + "/config.php");
        $("#messageNumberLast_"+chatID5).load("chat_container/" + chatID5 + "/config.php");
        $("#messageNumberLast_"+chatID6).load("chat_container/" + chatID6 + "/config.php");
        $("#messageNumberLast_"+chatID7).load("chat_container/" + chatID7 + "/config.php");
        $("#messageNumberLast_"+chatID8).load("chat_container/" + chatID8 + "/config.php");
        $("#messageNumberLast_"+chatID9).load("chat_container/" + chatID9 + "/config.php");
        $("#messageNumberLast_"+chatID10).load("chat_container/" + chatID10 + "/config.php");
        $("#messageNumberLast_"+chatID11).load("chat_container/" + chatID11 + "/config.php");
        $("#messageNumberLast_"+chatID12).load("chat_container/" + chatID12 + "/config.php");
        $("#messageNumberLast_"+chatID13).load("chat_container/" + chatID13 + "/config.php");
        $("#messageNumberLast_"+chatID14).load("chat_container/" + chatID14 + "/config.php");
        $("#messageNumberLast_"+chatID15).load("chat_container/" + chatID15 + "/config.php");



        setInterval(function(){
              // placing the "last message Numbers"  in te correct div
              $("#messageNumberLast_"+chatID1).load("chat_container/" + chatID1 + "/config.php");
              $("#messageNumberLast_"+chatID2).load("chat_container/" + chatID2 + "/config.php");
              $("#messageNumberLast_"+chatID3).load("chat_container/" + chatID3 + "/config.php");
              $("#messageNumberLast_"+chatID4).load("chat_container/" + chatID4 + "/config.php");
              $("#messageNumberLast_"+chatID5).load("chat_container/" + chatID5 + "/config.php");
              $("#messageNumberLast_"+chatID6).load("chat_container/" + chatID6 + "/config.php");
              $("#messageNumberLast_"+chatID7).load("chat_container/" + chatID7 + "/config.php");
              $("#messageNumberLast_"+chatID8).load("chat_container/" + chatID8 + "/config.php");
              $("#messageNumberLast_"+chatID9).load("chat_container/" + chatID9 + "/config.php");
              $("#messageNumberLast_"+chatID10).load("chat_container/" + chatID10 + "/config.php");
              $("#messageNumberLast_"+chatID11).load("chat_container/" + chatID11 + "/config.php");
              $("#messageNumberLast_"+chatID12).load("chat_container/" + chatID12 + "/config.php");
              $("#messageNumberLast_"+chatID13).load("chat_container/" + chatID13 + "/config.php");
              $("#messageNumberLast_"+chatID14).load("chat_container/" + chatID14 + "/config.php");
              $("#messageNumberLast_"+chatID15).load("chat_container/" + chatID15 + "/config.php");


              // taking all "Actual message Numbers" to some variables..
              messageNumberLast_chatID1 = $("#messageNumberLast_"+chatID1).text();
              messageNumberLast_chatID2 = $("#messageNumberLast_"+chatID2).text();
              messageNumberLast_chatID3 = $("#messageNumberLast_"+chatID3).text();
              messageNumberLast_chatID4 = $("#messageNumberLast_"+chatID4).text();
              messageNumberLast_chatID5 = $("#messageNumberLast_"+chatID5).text();
              messageNumberLast_chatID6 = $("#messageNumberLast_"+chatID6).text();
              messageNumberLast_chatID7 = $("#messageNumberLast_"+chatID7).text();
              messageNumberLast_chatID8 = $("#messageNumberLast_"+chatID8).text();
              messageNumberLast_chatID9 = $("#messageNumberLast_"+chatID9).text();
              messageNumberLast_chatID10 = $("#messageNumberLast_"+chatID10).text();
              messageNumberLast_chatID11 = $("#messageNumberLast_"+chatID11).text();
              messageNumberLast_chatID12 = $("#messageNumberLast_"+chatID12).text();
              messageNumberLast_chatID13 = $("#messageNumberLast_"+chatID13).text();
              messageNumberLast_chatID14 = $("#messageNumberLast_"+chatID14).text();
              messageNumberLast_chatID15 = $("#messageNumberLast_"+chatID15).text();




              messageNumberActual_chatID1 = $("#messageNumberActual_"+chatID1).text();
              messageNumberActual_chatID2 = $("#messageNumberActual_"+chatID2).text();
              messageNumberActual_chatID3 = $("#messageNumberActual_"+chatID3).text();
              messageNumberActual_chatID4 = $("#messageNumberActual_"+chatID4).text();
              messageNumberActual_chatID5 = $("#messageNumberActual_"+chatID5).text();
              messageNumberActual_chatID6 = $("#messageNumberActual_"+chatID6).text();
              messageNumberActual_chatID7 = $("#messageNumberActual_"+chatID7).text();
              messageNumberActual_chatID8 = $("#messageNumberActual_"+chatID8).text();
              messageNumberActual_chatID9 = $("#messageNumberActual_"+chatID9).text();
              messageNumberActual_chatID10 = $("#messageNumberActual_"+chatID10).text();
              messageNumberActual_chatID11 = $("#messageNumberActual_"+chatID11).text();
              messageNumberActual_chatID12 = $("#messageNumberActual_"+chatID12).text();
              messageNumberActual_chatID13 = $("#messageNumberActual_"+chatID13).text();
              messageNumberActual_chatID14 = $("#messageNumberActual_"+chatID14).text();
              messageNumberActual_chatID15 = $("#messageNumberActual_"+chatID15).text();




              if ( messageNumberActual_chatID1 != messageNumberLast_chatID1){
                  while(messageNumberActual_chatID1 < messageNumberLast_chatID1){
                          messageNumberActual_chatID1 = (messageNumberActual_chatID1 * 1) + 1;
                          var response;
                          $.ajax({ type: 'GET',
                               url: 'chat_container/'+chatID1+'/'+ messageNumberActual_chatID1 + '.php',
                               async: false,
                               success : function(text){
                                   response= text;
                               }
                          });
                          var responseSplit = response.split("|||");
                          if (responseSplit[0] == myId){
                            $('#popup-messages_'+chatID1).append(
                                '                <div class="panel-body msg_container_base">' +
                                '                    <div class="row msg_container base_sent">' +
                                '                        <div class="col-md-8 col-xs-8">' +
                                '                            <div class="messages msg_sent">' +
                                '                                <p>'+ responseSplit[1]+'</p>' +
                                '                                <time datetime="2009-11-13T20:00">Timothy • 51 min</time>' +
                                '                            </div>' +
                                '                        </div>' +
                                '                        <div class="col-md-2 col-xs-2 avatar">' +
                                '                            <img src="http://www.bitrebels.com/wp-content/uploads/2011/02/Original-Facebook-Geek-Profile-Avatar-1.jpg" class=" img-responsive ">' +
                                '                        </div>' +
                                '                    </div>' +
                                '               </div>' +
                                ''
                            );
                          }
                          else{
                            $('#popup-messages_'+chatID1).append(
                                '                <div class="panel-body msg_container_base">' +
                                '                    <div class="row msg_container base_receive">' +
                                '                        <div class="col-md-2 col-xs-2 avatar">' +
                                '                            <img src="http://www.bitrebels.com/wp-content/uploads/2011/02/Original-Facebook-Geek-Profile-Avatar-1.jpg" class=" img-responsive ">' +
                                '                        </div>' +
                                '                        <div class="col-md-8 col-xs-8">' +
                                '                            <div class="messages msg_receive">' +
                                '                                <p>'+responseSplit[1]+'</p>' +
                                '                                <time datetime="2009-11-13T20:00">Timothy • 51 min</time>' +
                                '                            </div>' +
                                '                        </div>' +
                                '                    </div>' +
                                '                </div>' +
                                ''
                            );
                          }
                  }
                  $('#messageNumberActual_'+chatID1).html(messageNumberLast_chatID1);
              }


              if ( messageNumberActual_chatID2 != messageNumberLast_chatID2){
                  while(messageNumberActual_chatID2 < messageNumberLast_chatID2){
                          messageNumberActual_chatID2 = (messageNumberActual_chatID2 * 1) + 1;
                          var response;
                          $.ajax({ type: 'GET',
                               url: 'chat_container/'+chatID2+'/'+ messageNumberActual_chatID2 + '.php',
                               async: false,
                               success : function(text){
                                   response= text;
                               }
                          });
                          $('#popup-messages_'+chatID2).append('<div>'+response+'</div>');
                  }
                  $('#messageNumberActual_'+chatID2).html(messageNumberLast_chatID2);
              }



        }, 3000);
}

/**
 *     calculate the total number of popups suitable and then populate the toatal_popups variable.
 */
function calculate_popups(){
    var width = window.innerWidth;
    if(width < 540){
        total_popups = 0;
    }
    else{
        width = width - 200;
        total_popups = parseInt(width/320);
    }
    display_popups();
}


/**
 *    sending data by ajax
 */
function goButton(chatBoxId, chatIDtemp){
  console.log('MESSAGE ' + chatBoxId + ' ' + chatIDtemp);

  /** getting the text from textbox*/
  var chatBoxTextarea = document.getElementById(chatBoxId + '_text').value;

  /** sending data to the server */
  $("#box").load('ajax/new_text.php',{acc:chatIDtemp, myId:myId, chatBoxTextarea:chatBoxTextarea, });

  /** cleanning the send text box */
  document.getElementById(chatBoxId + '_text').value = "";
}

/** recalculate when window is loaded and also when window is resized. */
window.addEventListener("resize", calculate_popups);
window.addEventListener("load", calculate_popups);
