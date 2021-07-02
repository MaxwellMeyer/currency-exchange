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
    } else if (isNaN(usd)) {
      $(".results").text(
        `Please select a valid numerical currency amount to compare!`
      );
    } else if (typeof response === "string") {
      $(".results").html(`${response}`);
    } else {
      $(".results").text(`$${usd} converts to ${rate} ${forex}`);
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

// NGN	Nigerian Naira	Nigeria
// NIO	Nicaraguan Córdoba	Nicaragua
// NOK	Norwegian Krone	Norway
// NPR	Nepalese Rupee	Nepal
// NZD	New Zealand Dollar	New Zealand
// OMR	Omani Rial	Oman
// PAB	Panamanian Balboa	Panama
// PEN	Peruvian Sol	Peru
// PGK	Papua New Guinean Kina	Papua New Guinea
// PHP	Philippine Peso	Philippines
// PKR	Pakistani Rupee	Pakistan
// PLN	Polish Złoty	Poland
// PYG	Paraguayan Guaraní	Paraguay
// QAR	Qatari Riyal	Qatar
// RON	Romanian Leu	Romania
// RSD	Serbian Dinar	Serbia
// RUB	Russian Ruble	Russia
// RWF	Rwandan Franc	Rwanda
// SAR	Saudi Riyal	Saudi Arabia
// SBD	Solomon Islands Dollar	Solomon Islands
// SCR	Seychellois Rupee	Seychelles
// SDG	Sudanese Pound	Sudan
// SEK	Swedish Krona	Sweden
// SGD	Singapore Dollar	Singapore
// SHP	Saint Helena Pound	Saint Helena
// SLL	Sierra Leonean Leone	Sierra Leone
// SOS	Somali Shilling	Somalia
// SRD	Surinamese Dollar	Suriname
// SSP	South Sudanese Pound	South Sudan
// STN	São Tomé and Príncipe Dobra	São Tomé and Príncipe
// SYP	Syrian Pound	Syria
// SZL	Eswatini Lilangeni	Eswatini
// THB	Thai Baht	Thailand
// TJS	Tajikistani Somoni	Tajikistan
// TMT	Turkmenistan Manat	Turkmenistan
// TND	Tunisian Dinar	Tunisia
// TOP	Tongan Paʻanga	Tonga
// TRY	Turkish Lira	Turkey
// TTD	Trinidad and Tobago Dollar	Trinidad and Tobago
// TVD	Tuvaluan Dollar	Tuvalu
// TWD	New Taiwan Dollar	Taiwan
// TZS	Tanzanian Shilling	Tanzania
// UAH	Ukrainian Hryvnia	Ukraine
// UGX	Ugandan Shilling	Uganda
// USD	United States Dollar	United States
// UYU	Uruguayan Peso	Uruguay
// UZS	Uzbekistani So'm	Uzbekistan
// VES	Venezuelan Bolívar Soberano	Venezuela
// VND	Vietnamese Đồng	Vietnam
// VUV	Vanuatu Vatu	Vanuatu
// WST	Samoan Tālā	Samoa
// XAF	Central African CFA Franc	CEMAC
// XCD	East Caribbean Dollar	Organisation of Eastern Caribbean
// XDR	Special Drawing Rights	International Monetary Fund
// XOF	West African CFA franc	CFA
// XPF	CFP Franc	Collectivités d'Outre-Mer
// YER	Yemeni Rial	Yemen
// ZAR	South African Rand	South Africa
// ZMW	Zambian Kwacha	Zambia
