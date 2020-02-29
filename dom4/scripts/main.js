function getAttributes()
{
    var h = document.getElementById("w3r").href;
    alert('The value of the href attribute of the link is : '+h);

    var l = document.getElementById("w3r").hreflang;
    alert('The value of the hreflang attribute of the link is : '+l)

    var r = document.getElementById("w3r").rel;
    alert('The value of the rel attribute of the link is : '+r)

    var t = document.getElementById("w3r").target;
    alert('The value of the target attribute of the link is : '+t)

    var a = document.getElementById("w3r").type;
    alert('The value of the type attribute is : ' +a)

}