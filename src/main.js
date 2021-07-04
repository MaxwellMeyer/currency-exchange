import $ from "jquery";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/styles.css";
import CurrencyExchange from "../src/service.js";

async function calcExchange(usd, forex) {
  let response = await CurrencyExchange.getExchangeRate();
  if (response.result === "success") {
    const rate = (usd * response.conversion_rates[forex]).toFixed(1);
    if (isNaN(rate)) {
      $(".results").text(`Please select a valid currency to compare rates!`);
    } else if (typeof response === "string") {
      $(".results").html(`${response}`);
    } else {
      $(".results").text(`$${usd} USD converts to ${rate} ${forex}!`);
    }
  }
}
$(document).ready(function () {
  $("#exchange").submit(function (event) {
    event.preventDefault();
    let usd = parseInt($("#amount").val());
    let forex = $("#country").val();
    calcExchange(usd, forex);
    $(".results").show();
    $("#country").val("");
  });
});
