$(function(){
    var cellCount = 0;// stores the cell count
    var table = document.getElementById('dynamic-table');// gets the id of the table
    $('#add-table').click(function(){//click event to draw the table
        var rowCount = table.rows.length;//store the count of row in table
        var row = table.insertRow(rowCount);//creates a new row in table
        var cell1 = row.insertCell(0);//creates cell in a row
        cellCount += 1;
        cell1.innerHTML = "Cell " + cellCount;//appends the text inside cell     

        var cell2 = row.insertCell(1);//creates cell in a row
        cellCount += 1;
        cell2.innerHTML = "Cell " + cellCount;//appends text inside cell
    });
});