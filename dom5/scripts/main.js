function insert_Row() {
    var myTable = document.getElementById("sampleTable").insertRow(0);

    var y = myTable.insertCell(0);
    var z = myTable.insertCell(1);

    y.innerHTML="New Cell";
    z.innerHTML="New Cell";


}