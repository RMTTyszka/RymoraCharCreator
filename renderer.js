// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
var jsonfile = require('jsonfile');
var fs = require('fs');
var char = require("./charTemplate.js");
//var save = "initial";
// Access role creator tab
$(".btn").css("color","green");
$("#roleSwapper").on("click", function () {
  $("#swapped").empty();
  var link = document.querySelector('#charImport');
  var template = link.import.querySelector("template");
  var clone = document.importNode(template.content, true);
  save = "role";
  $("#swapped").append(clone);
  char.skillTab();
  char.attributesTab();
  //$("#inventory").prev("h2").remove();
  $("#inventory").prev("div").empty().remove();
  $("#templateID").text("Role Name");
  $("#screenName").text("Role Creator");
})
// Access race creator tab
$("#raceSwapper").on("click", function () {
  $("#swapped").empty();
  var link = document.querySelector('#charImport');
  var template = link.import.querySelector("template");
  var clone = document.importNode(template.content, true);
  save = "race";
  $("#swapped").append(clone);
  char.skillTab();
  char.attributesTab();
  char.inventoryTab();
  $("#templateID").text("Race Name");
  $("#screenName").text("Race Creator");
})

$("#charSwapper").on("click", function () {
  $("#swapped").empty();
  var link = document.querySelector('#charImport');
  var template = link.import.querySelector("template");
  var clone = document.importNode(template.content, true);
  save = "char";
  $("#swapped").append(clone);
  char.skillTab();
  char.attributesTab();
  char.inventoryTab();
  $("#templateID").text("Char Name");
  $("#screenName").text("Char Creator")
  $("#nameTable").append(
    '<td><h3>Race</h3></td><td><input type="test" id="charRace"/><td><h3>Role</h3></td><td><input type="test" id="charRole"/>'
  )
})
$("#saveButton").on("click", function () {
    char.saveButton(save);
})
