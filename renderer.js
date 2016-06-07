// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

// Skill Tab
for (var i = 1; i < 11; i++) {
    $("#skillTable").append(
        '<tr><td><select class = "skillselector" id="skSelect"'+i+'><option value = "">'+i+'</option></select><td><input id="skValue'+ i+'Input"/></td></tr>')
};
$.getJSON(__dirname+'/data.json', function (data) {
            $.each(data.skills, function(i, v) {
                $('.skillselector').append('<option value="' + v + '">' + v + '</option>');
            });
        });
// Investory Tab
for (var k = 1; k < 11; k++ ) {
  $("#inventory").append(
    '<tr><td><input id="item '+k+'"></td></tr>'
);
};
// Atttributes Tab
$.getJSON(__dirname+'/data.json', function (data) {
    $.each(data.attributes, function(i,v) {
        $("#attributesTable").append(
            '<tr><td>'+v+'</td><td><input class="attrInput" id="'+v+'Input"></td></tr>'
        );
    });
});

$(".btn").css("color","green");
$(document).ready( function() {

$.each($(".attrInput"), function () {
  console.log('1');
});
console.log($(".attrInput"))
$(".attrInput").each(function(i) {
  console.log($(this)[0].id);
});
});
