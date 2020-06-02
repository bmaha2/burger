// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function () {
  $("#eatbutton").on("click", function (event) {
    event.preventDefault();
    var id = $(this).data("id");
    var newDevouredState = {
      devoured: 1
    }
    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newDevouredState
    }).then(function () {
      console.log("Burger devoured", id);
      // Reload the page to get the updated list
      location.reload();
    });
  });

  $("#eatenbutton").on("click", function (event) {
    event.preventDefault();
    var id = $(this).data("id");
    $.ajax("/api/burgers/" + id, {
      type: "DELETE"
    }).then(function () {
      console.log("deleted burger:", id);
      location.reload()
    });
  })

  $(".create-form").on("submit", function (event) {
    event.preventDefault();
    var newBurger = {
      name: $("#burger_type").val().trim(),
      devoured: 0
    };
    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(function () {
      console.log("created new burger");
      // Reload the page to get the updated list
      location.reload();
    });
  });
})
