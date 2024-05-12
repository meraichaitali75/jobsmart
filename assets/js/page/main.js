
$(function () {

    "use strict";

    var wind = $(window);

    var c4 = $('.circle');
    var myVal = $(this).attr('data-value');

    $(".sk-progress .circle").each(function () {
        c4.circleProgress({
            startAngle: -Math.PI / 2 * 1,
            value: myVal,
            thickness: 4,
            fill: {
                gradient: ["#000", "#999"]
            }
        });
    });
});


// === window When Loading === //

$(window).on("load", function () {

    var wind = $(window);

    // Preloader
    $(".loading").fadeOut(500);

    // stellar
    // wind.stellar();
});


// === Add/Delete Row === //
function createRow() {
    var table = document.getElementById("quoteTable");
    var row = table.insertRow(2);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    cell1.innerHTML = "<input type='text' class='form-control' placeholder='Name' id='inputQuoteName'>";
    cell2.innerHTML = "<input type='text' class='form-control' placeholder='Quantity' id='inputQuoteQuantity'>";
    cell3.innerHTML = "<input type='text' class='form-control' placeholder='Cost' id='inputQuoteCost'>";
    cell4.innerHTML = "<span>0.00</span>";
    cell5.innerHTML = "<button class='btn btn-danger btn-lg btn-block' onclick='deleteRow()'>Delete</button>";
}

function deleteRow() {
    document.getElementById("quoteTable").deleteRow(2);
}

