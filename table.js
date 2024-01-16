var id = 0;
function sell(){
    id++;
    var pname = frm.pname.value;
    var qty = frm.qty.value;
    var price = frm.up.value;
    var dc = frm.dc.value;
    var sub = qty*price*(1-dc/100);
    var row = "<tr>";
    row += "<tr>" + id + "</td>";
    row += "<tr>" + pname + "</td>";
    row += "<tr>" + qty + "</td>";
    row += "<tr>" + price + "</td>";
    row += "<tr>" + dc + "</td>";
    row += "<tr>" + sub + "</td>";
    row += "<tr>";
    document.getElementById("tbl").innerHTML = row;

}
