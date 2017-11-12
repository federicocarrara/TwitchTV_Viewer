$(function(){
  let channels = ["MedryBW", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas", "RocketLeague"];
  function getChannelInfo(){
    channels.forEach(function(channel){
      let urlTwitchStream = "https://wind-bow.gomix.me/twitch-api/streams/" + channel + "/?callback=?"
      let urlTwitchChannel = "https://wind-bow.gomix.me/twitch-api/channels/" + channel + "/?callback=?"
//jquery getJSON request
      $.getJSON(urlTwitchStream, function(data){
        let status = data.stream != null ? data.stream.game : "offline";
        $.getJSON(urlTwitchChannel, function(data){
          let logo = data.logo != null ? data.logo : "https://dummyimage.com/50x50/ecf0e7/5c5457.jpg&text=0x3F";
          $("#channels").append("<a href='" + data.url + "'><li id='channel' class='" + status + "'><img id='logo' src=" + logo + "><img>" + channel + "  -  " + status + "</li></a>");
        });
      });
    });
  }
//buttons functionalities
  function filterChannelsBlack(){
    $("#buttonBlack").click(function(){
      $("#channel:not(.offline)").addClass("hide");
      $(".offline").removeClass("hide");
    });
  }
  function filterChannelsBlue(){
    $("#buttonBlue").click(function(){
      $(".offline").addClass("hide");
      $("#channel:not(.offline)").removeClass("hide");
    });
  }
  function filterChannelsAll(){
    $("#all").click(function(){
      $(".offline").removeClass("hide");
      $("#channel:not(.offline)").removeClass("hide");
    });
  }
  function hoverButtons() {
    $("#buttonBlue").mouseover(function(){
      $("#all").html("").html("Online")
    });
    $("#buttonBlue").mouseleave(function(){
      $("#all").html("").html("All")
    });
    $("#buttonBlack").mouseover(function(){
      $("#all").html("").html("Offline")
    });
    $("#buttonBlack").mouseleave(function(){
      $("#all").html("").html("All")
    });
  }

  getChannelInfo();
  filterChannelsBlue();
  filterChannelsBlack();
  filterChannelsAll();
  hoverButtons();
});
