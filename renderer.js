// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

// Skill Tab
for (var i = 1; i < 11; i++) {
    $("#skillTable").append(
        '<tr><td><select class = "skillSelector" id="sk'+i+'"><option value = "" selected="selected">'+""+'</option></select><td><input id="skv'+ i+'"></td></tr>')
};
$.getJSON(__dirname+'/data.json', function (data) {
            $.each(data.skills, function(i, v) {
                $('.skillSelector').append('<option value="' + v + '">' + v + '</option>');
            });
        });
// Investory Tab
for (var k = 1; k < 11; k++ ) {
  $("#inventory").append(
    '<tr><td><input class="item" id="item '+k+'"></td></tr>'
);
};
// Attributes Tab
$.getJSON(__dirname+'/data.json', function (data) {
    $.each(data.attributes, function(i,v) {
        $("#attributesTable").append(
            '<tr><td>'+v+'</td><td><input type="text" class="attrInput" id="'+v+'"></td></tr>'
        );
    });
});

$(".btn").css("color","green");
$("#saveButton").on("click", function () {
    var jsonDict = {
      "attributes": {},
      "skills": {},
      "drop": []
    };
    var file = __dirname+'/'+$("#nameInput").val()+'.json';
    var jsonfile = require('jsonfile');
    fs = require('fs');
    $(".attrInput").each(function () {
        jsonDict.attributes[this.id] = $(this).val();

    });
    $(".skillSelector").each(function () {
      if ($(this).val().length > 0) {
        jsonDict.skills[$(this).val()] = $("#skv"+this.id[2]).val();
      }
    });
    $(".item").each(function () {
      if ($(this).val().length > 0) {
        jsonDict.drop.push($(this).val())};
    })
    console.log(JSON.stringify(jsonDict))
    fs.writeFile(file, JSON.stringify(jsonDict, null, "\t"), function (err) {
      console.log(err)
    });
})
