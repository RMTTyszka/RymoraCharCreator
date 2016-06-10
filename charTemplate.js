
var fs = require('fs');
// Skill Tab
exports.skillTab = function() {
  for (var i = 1; i < 11; i++) {
      $("#skillTable").append(
          '<tr><td><select class = "skillSelector" id="sk'+i+'"><option value = "" selected="selected">'+""+'</option></select><td><input id="skv'+ i+'" size="3"/></td></tr>')
  };
  $.getJSON(__dirname+'/data.json', function (data) {
              $.each(data.skills, function(i, v) {
                  $('.skillSelector').append('<option value="' + v + '">' + v + '</option>');
              });
          });
}

// Investory Tab
exports.inventoryTab = function() {
  for (var k = 1; k < 11; k++ ) {
    $("#inventory").append(
      '<tr><td><input class="item" id="item '+k+'"></td></tr>'
  );
  };
}

// Attributes Tab
exports.attributesTab = function() {
  $.getJSON(__dirname+'/data.json', function (data) {
      $.each(data.attributes, function(i,v) {
          $("#attributesTable").append(
              '<tr><td>'+v+'</td><td><input type="text" value=0 class="attrInput" id="'+v+'" size="3"/></td></tr>'
          );
      });
  });
}
exports.saveButton = function (dir) {
      var jsonDict = {
        "attributes": {},
        "skills": {},
        "inventory": []
      };
      var file = __dirname+'/'+dir+'/'+$("#objectName").val()+'.json';

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
          jsonDict.inventory.push($(this).val())};
      })
      if (dir == "char") {
        jsonDict.role = $("#charRole").val();
        jsonDict.race = $("#charRace").val();
      }
      console.log(JSON.stringify(jsonDict))
      fs.writeFile(file, JSON.stringify(jsonDict, null, "\t"), function (err) {
        console.log(err)
      });
  }
