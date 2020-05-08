function TwoArrayToCSV(data){
  let csv = "";
  for (var i =0 ; i < data.length; i++){
    for (var j =0;j < data[i].length;j++){
      if (j === data[i].length - 1){
        csv += data[i][j] + "\n";
      }else{
        csv += data[i][j] + ",";
      }
    }
  }
  return csv;
}

