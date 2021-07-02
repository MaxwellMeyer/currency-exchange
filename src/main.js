import $ from "jquery";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/styles.css";
import CurrencyExchange from "../src/service.js";

$(document).ready(function () {
  $("#exchange").submit(function (event) {
    event.preventDefault();
    let usd = parseInt($("#amount").val());
    let forex = $("#country").val();
  });
});
