$(document).ready(function() {
  document.getElementById("order-form").onsubmit = function() {
    var el = document.getElementById("popup-order-id");
    el.classList.add("popup-flex");
    el.classList.remove("popup");
  };

  document.getElementById("close-icon-order").onclick = function() {
    var el = document.getElementById("popup-order-id");
    el.classList.add("popup");
    el.classList.remove("popup-flex");
    location.reload();
  };
})
