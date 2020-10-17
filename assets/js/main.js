//Variables
var searchButton = $(".searchButton");
var projectsListEl = $("#projects-list");
var projectsHistory = $("#saved-searches");
var projectsection = $(".projects-section");
var searchHistory = JSON.parse(localStorage.getItem("searchHistory")) || [];
var projects = "" || searchHistory[0];

// for the nav bar
$(function () {
  $(window).scroll(function () {
    var winTop = $(window).scrollTop();
    if (winTop >= 30) {
      $("body").addClass("sticky-shrinknav-wrapper");
    } else {
      $("body").removeClass("sticky-shrinknav-wrapper");
    }
  });
});

// Forloop for persisting the projects on the DOM
function loadHistory() {
  for (var i = 0; i < searchHistory.length; i++) {
    var historyDivs = $("<div>");
    historyDivs.addClass("saved-items");
    historyDivs.addClass("list-group-item");
    historyDivs.innerHTML(searchHistory[i]);
    historyDivs.attr("data-index", searchHistory[i]);
    projectsHistory.append(historyDivs);
  }
}

//find child to give me name position 4 or 3 text content
// i= "= projectstype"
//funtion to call projects
$(".projects").on("click", function () {
  projectsection.empty();
  var projectsType = $(this).attr("data-index");

  $.ajax({
    url:
      "" + projectsType,

    method: "GET",
  }).then(function (response) {
    for (var i = 0; i < 14; i++) {
      response.projects[i];
      var card = $('<div class="card" style="width: 300px;">');
      var projectsheader = $('<div class="card-divider">')
        .text(response.projects[i].strprojects)
        .appendTo(card);
      var projectsimage = $(
        "<img src=" + response.projects[i].strprojectsThumb + ">"
      ).appendTo(card);
      card.appendTo(projectsection);
    }
    //Append information to Page
    var currentCard = $("#vodka").append("<div>").addClass("card-body");
    // currentCard.();
    var currentName = currentCard.append("<p>");
    // .addClass("card-text");
    currentCard.append(currentName);
  });
});
