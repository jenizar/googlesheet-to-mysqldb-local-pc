function myFunction() {
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = ss.getSheetByName("Sheet1");
    var rows = sheet.getRange(2,1,sheet.getLastRow()-1, sheet.getLastColumn()).getValues();
    
  var jo = {};
  var dataArray = [];
  
  // collecting data from 2nd Row , 1st column to last row and last column
//  var rows = sheet.getRange(2,1,sheet.getLastRow()-1, sheet.getLastColumn()-1).getValues();
  for(var i = 1, l= rows.length; i<l ; i++){
    var dataRow = rows[i];
    var record = {};
    if (dataRow[0] == true) {
     record['productid'] = dataRow[1];
     record['name'] = dataRow[2];
     record['category'] = dataRow[3];
     record['available'] = dataRow[4];
     record['unitprice'] = dataRow[5];
     record['datechecked'] = dataRow[6];
    
     dataArray.push(record);
     
     // change color rows
     for(var k = 1; k < 8; k++) {
      ss.getSheetByName("Sheet1").getRange(i+2,1).setValue('');
      ss.getSheetByName("Sheet1").getRange(i+2, k).setBackground("#00FF00");
      //ss.getSheetByName("Sheet1").getRange(i+2, k).clearContent();
     }
     
    }
  }  
  
  jo = dataArray;
  
  //var result = JSON.stringify(jo);
  
  //Logger.log(result);
  
      var options = {
  'method' : 'post',
  'contentType': 'application/json',
  // Convert the JavaScript object to a JSON string.
  'payload' : JSON.stringify(jo)
    };
    var response = UrlFetchApp.fetch('http://4eb619fb.ngrok.io/postData.php', options);
}  

