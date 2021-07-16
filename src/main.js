import $ from "jquery";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/styles.css";
import CurrencyExchange from "../src/service.js";

function addComm(num) {
  return num.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
}

async function calcExchange(usd, forex) {
  let response = await CurrencyExchange.getExchangeRate();
  if (response.result === "success") {
    const rate = (usd * response.conversion_rates[forex]).toFixed(2);
    const commaNum = addComm(rate);
    const usdComm = addComm(usd);
    if (isNaN(rate)) {
      $(".results").text(`Please select a valid currency to compare rates!`);
    } else {
      $(".results").text(`$${usdComm} USD converts to ${commaNum} ${forex}!`);
    }
  } else if (typeof response === "string") {
    $(".results").html(`${response}`);
  } else {
    $(".results").text("Something happened....Try again?!");
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
