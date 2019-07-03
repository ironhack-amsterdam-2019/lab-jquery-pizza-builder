// Write your Pizza Builder JavaScript in this file.
let peppers;
let mushrooms;
let peps;
let sauce;
let crust;

let btnCrust;
let btnSauce;

function gogo() {
  getToppings()
  addListeners()
  setDefaults()
  updateCurrentPrice()
}

function setDefaults() {
  btnCrust = $("div.panel.controls button.btn-crust")
  btnSauce = $("div.panel.controls button.btn-sauce")
  btnCrust.removeClass("active")
  btnSauce.removeClass("active")
  sauce = $("#pizza section.sauce")
  crust = $("#pizza section.crust")
  sauce.removeClass("sauce-white")
  crust.removeClass("crust-gluten-free")
  $("aside.panel li:contains(crust)").hide()
  $("aside.panel li:contains(sauce)").hide()

  btnCrust.click(clickCrust);
  btnSauce.click(clickSauce);
}

function clickCrust() {
  btnCrust.toggleClass("active")
  crust.toggleClass("crust-gluten-free")
  $("aside.panel li:contains(crust)").toggle()
  updateCurrentPrice()
}

function clickSauce() {
  btnSauce.toggleClass("active")
  sauce.toggleClass("sauce-white")
  $("aside.panel li:contains(sauce)").toggle()
  updateCurrentPrice()
}

function getToppings() {
  peppers = $("#pizza section.green-pepper")
  mushrooms = $("#pizza section.mushroom")
  peps = $("#pizza section.pep")
}

function addListeners() {
  $("div.panel.controls button.btn-pepperonni").click(clickPepperonni)
  $("div.panel.controls button.btn-mushrooms").click(clickSchrooms)
  $("div.panel.controls button.btn-green-peppers").click(clickPeppers)
}

function clickPepperonni() {
  $("aside.panel li:contains(pepperonni)").toggle()
  let button = $("div.panel.controls button.btn-pepperonni");
  if(button.hasClass("active")) {
    button.removeClass("active");
    $("#pizza section.pep").remove()
  } else {
    button.addClass("active");
    $("#pizza").prepend(peps.get());
  }
  updateCurrentPrice()
}

function clickSchrooms() {
  $("aside.panel li:contains(mushrooms)").toggle()
  let button = $("div.panel.controls button.btn-mushrooms");
  if(button.hasClass("active")) {
    button.removeClass("active");
    $("#pizza section.mushroom").remove()
  } else {
    button.addClass("active");
    $("#pizza").prepend(mushrooms.get());
  }
  updateCurrentPrice()
}

function clickPeppers() {
  $("aside.panel li:contains(peppers)").toggle()
  let button = $("div.panel.controls button.btn-green-peppers");
  if(button.hasClass("active")) {
    button.removeClass("active");
    $("#pizza section.green-pepper").remove()
  } else {
    button.addClass("active");
    $("#pizza").prepend(peppers.get());
  }
  updateCurrentPrice()
}

function updateCurrentPrice() {
  $("aside.panel strong").text("$" + (10 + $("aside.panel ul li").filter(function () {return $(this).css("display") != "none"}).toArray().reduce((sum, e) => sum + parseInt(e.innerText.charAt(1)), 0)));
}

$("document").ready(gogo)
