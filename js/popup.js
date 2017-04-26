$(document).ready(function() {
  document.getElementById('call-back').onclick = function() {
    var el = document.getElementById("popupi");
    el.classList.add("popup-flex");
    el.classList.remove("popup");
  };

  document.getElementById("callback-form").onsubmit = function(e) {
    var el = document.getElementById("popup-callback-id");
    el.classList.add("popup-flex");
    el.classList.remove("popup");
    e.preventDefault();
  };

  document.getElementById("close-icon").onclick = function() {
    var el = document.getElementById("popupi");
    el.classList.add("popup");
    el.classList.remove("popup-flex");
  };

  document.getElementById("close-icon-callback").onclick = function() {
    var el = document.getElementById("popup-callback-id");
    el.classList.add("popup");
    el.classList.remove("popup-flex");
    location.reload();
  };
})
