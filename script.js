$(function(){
  let channels = ["MedryBW", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];
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
//functionality of black an blue bottons
  function filterChannelsBlack(){
    $("#bottonBlack").click(function(){
      $("#channel:not(.offline)").addClass("hide");
      $(".offline").removeClass("hide");
    });
  }
  function filterChannelsBlue(){
    $("#bottonBlue").click(function(){
      $(".offline").addClass("hide");
      $("#channel:not(.offline)").removeClass("hide");
    });
  }
  getChannelInfo();
  filterChannelsBlue();
  filterChannelsBlack();
});
