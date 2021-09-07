$(document).ready(function () {
  var playersData = [];
  var max = 0;
  var ind = 0;

  var image = $("#image");
  var name = $("#name");
  var team = $("#team");
  var price = $("#price");
  var playerType = $("#type");

  var buttonNext = $("#buttonNext");
  var buttonPrev = $("#buttonPrev");

  $.get("https://cricplayerapi.herokuapp.com/players", function (response) {
    $("#loading").css("display", "none");
    $("#main").css("display", "unset");
    console.log(response);
    playersData = response;
    max = playersData.length - 1;
    image.attr("src", playersData[ind].imgUrl);
    name.html(playersData[ind].playerName);
    team.html(playersData[ind].from);
    price.html(playersData[ind].price);
    playerType.html(playersData[ind].description);
    buttonPrev.prop("disabled", true);
  });

  buttonNext.click(function () {
    if (ind < max) {
      ind++;
      if (ind == 1) {
        buttonPrev.prop("disabled", false);
      }
      if (ind == max) {
        buttonNext.prop("disabled", true);
      }
    }
    image.attr("src", playersData[ind].imgUrl);
    name.html(playersData[ind].playerName);
    team.html(playersData[ind].from);
    price.html(playersData[ind].price);
    playerType.html(playersData[ind].description);
  });

  buttonPrev.click(function () {
    if (ind > 0) {
      ind--;
      if (ind == max - 1) {
        buttonNext.prop("disabled", false);
      }
      if (ind == 0) {
        buttonPrev.prop("disabled", true);
      }
    }
    image.attr("src", playersData[ind].imgUrl);
    name.html(playersData[ind].playerName);
    team.html(playersData[ind].from);
    price.html(playersData[ind].price);
    playerType.html(playersData[ind].description);
  });
});
