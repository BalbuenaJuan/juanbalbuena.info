/**
 * Created by Juan on 11/06/2015.
 */
(function(){

var ids = ["#animacion1", "#animacion2", "#animacion3", "#animacion4", "#animacion5", "#animacion6", "#animacion7", "#animacion8", "#animacion9", "#animacion10", "#animacion11", "#animacion12",
            "#animacion13", "#animacion14", "#animacion15", "#animacion16", "#animacion17", "#animacion18", "#animacion19", "#animacion20", "#animacion21", "#animacion22", "#animacon23", "#animacion24",
            "#animacion25", "#animacion26"];

function cerrarAnimaciones(){

    for(var i = 0; i < ids.length; i++ ){
        $(ids[i]).hide("slow");
    }
}

$("#mas1").click(function(){
    console.log("Funciona???");
    cerrarAnimaciones();
    $(ids[0]).show();
});
    $("#mas2").click(function(){
    cerrarAnimaciones();
    $(ids[1]).show();
});
    $("#mas3").click(function(){
    cerrarAnimaciones();
    $(ids[2]).show();
});
    $("#mas4").click(function(){
    cerrarAnimaciones();
    $(ids[3]).show();
});
    $("#mas5").click(function(){
    cerrarAnimaciones();
    $(ids[4]).show();
});
    $("#mas6").click(function(){
    cerrarAnimaciones();
   $(ids[5]).show();
});
    $("#mas7").click(function(){
    cerrarAnimaciones();
    $(ids[6]).show();
});
    $("#mas8").click(function(){
    cerrarAnimaciones();
    $(ids[7]).show();
});
    $("#mas9").click(function(){
    cerrarAnimaciones();
    $(ids[8]).show();
});
    $("#mas10").click(function(){
    cerrarAnimaciones();
    $(ids[9]).show();
});
    $("#mas11").click(function(){
    cerrarAnimaciones();
    $(ids[10]).show();
});
    $("#mas12").click(function(){
    cerrarAnimaciones();
    $(ids[11]).show();
});
    $("#mas13").click(function(){
    cerrarAnimaciones();
    $(ids[12]).show();
});
    $("#mas14").click(function(){
    cerrarAnimaciones();
    $(ids[13]).show();
});
    $("#mas15").click(function(){
    cerrarAnimaciones();
    $(ids[14]).show();
});
    $("#mas16").click(function(){
    cerrarAnimaciones();
    $(ids[15]).show();
});
    $("#mas17").click(function(){
    cerrarAnimaciones();
    $(ids[16]).show();
});
    $("#mas18").click(function(){
    cerrarAnimaciones();
    $(ids[17]).show();
});
    $("#mas19").click(function(){
    cerrarAnimaciones();
    $(ids[18]).show();
});
    $("#mas20").click(function(){
    cerrarAnimaciones();
    $(ids[19]).show();
});
    $("#mas21").click(function(){
    cerrarAnimaciones();
    $(ids[20]).show();
});
    $("#mas22").click(function(){
    cerrarAnimaciones();
    $(ids[21]).show();
});
    $("#mas23").click(function(){
    cerrarAnimaciones();
    $(ids[22]).show();
});
    $("#mas24").click(function(){
    cerrarAnimaciones();
    $(ids[23]).show();
});
    $("#mas25").click(function(){
    cerrarAnimaciones();
    $(ids[24]).show();
});
    $("#mas26").click(function(){
    cerrarAnimaciones();
    $(ids[25]).show();
});


    var iconElement = document.getElementById('mas1');
    var options = {
        from: 'icon-plus-circle',
        to: 'icon-minus-circle',
        animation: 'zoomOut'
    };


    iconElement.addEventListener('click', function(e) {
        e.preventDefault();

        iconate(iconElement, options, function() {
            var temp = options.from;
            options.from = options.to;
            options.to = temp;
        });
    });

var iconElement2 = document.getElementById('mas2');
    var options = {
        from: 'icon-plus-circle',
        to: 'icon-minus-circle',
        animation: 'zoomOut'
    };


    iconElement2.addEventListener('click', function(e) {
        e.preventDefault();

        iconate(iconElement2, options, function() {
            var temp = options.from;
            options.from = options.to;
            options.to = temp;
        });
    });
var iconElement3 = document.getElementById('mas3');
    var options = {
        from: 'icon-plus-circle',
        to: 'icon-minus-circle',
        animation: 'zoomOut'
    };


    iconElement3.addEventListener('click', function(e) {
        e.preventDefault();

        iconate(iconElement3, options, function() {
            var temp = options.from;
            options.from = options.to;
            options.to = temp;
        });
    });
var iconElement4 = document.getElementById('mas4');
    var options = {
        from: 'icon-plus-circle',
        to: 'icon-minus-circle',
        animation: 'zoomOut'
    };


    iconElement4.addEventListener('click', function(e) {
        e.preventDefault();

        iconate(iconElement4, options, function() {
            var temp = options.from;
            options.from = options.to;
            options.to = temp;
        });
    });
var iconElement5 = document.getElementById('mas5');
    var options = {
        from: 'icon-plus-circle',
        to: 'icon-minus-circle',
        animation: 'zoomOut'
    };


    iconElement5.addEventListener('click', function(e) {
        e.preventDefault();

        iconate(iconElement5, options, function() {
            var temp = options.from;
            options.from = options.to;
            options.to = temp;
        });
    });
var iconElement6 = document.getElementById('mas6');
    var options = {
        from: 'icon-plus-circle',
        to: 'icon-minus-circle',
        animation: 'zoomOut'
    };


    iconElement6.addEventListener('click', function(e) {
        e.preventDefault();

        iconate(iconElement6, options, function() {
            var temp = options.from;
            options.from = options.to;
            options.to = temp;
        });
    });
var iconElement7 = document.getElementById('mas7');
    var options = {
        from: 'icon-plus-circle',
        to: 'icon-minus-circle',
        animation: 'zoomOut'
    };


    iconElement7.addEventListener('click', function(e) {
        e.preventDefault();

        iconate(iconElement7, options, function() {
            var temp = options.from;
            options.from = options.to;
            options.to = temp;
        });
    });
var iconElement8 = document.getElementById('mas8');
    var options = {
        from: 'icon-plus-circle',
        to: 'icon-minus-circle',
        animation: 'zoomOut'
    };


    iconElement8.addEventListener('click', function(e) {
        e.preventDefault();

        iconate(iconElement8, options, function() {
            var temp = options.from;
            options.from = options.to;
            options.to = temp;
        });
    });
var iconElement9 = document.getElementById('mas9');
    var options = {
        from: 'icon-plus-circle',
        to: 'icon-minus-circle',
        animation: 'zoomOut'
    };


    iconElement9.addEventListener('click', function(e) {
        e.preventDefault();

        iconate(iconElement9, options, function() {
            var temp = options.from;
            options.from = options.to;
            options.to = temp;
        });
    });
var iconElement10 = document.getElementById('mas10');
    var options = {
        from: 'icon-plus-circle',
        to: 'icon-minus-circle',
        animation: 'zoomOut'
    };


    iconElement10.addEventListener('click', function(e) {
        e.preventDefault();

        iconate(iconElement10, options, function() {
            var temp = options.from;
            options.from = options.to;
            options.to = temp;
        });
    });
var iconElement11 = document.getElementById('mas11');
    var options = {
        from: 'icon-plus-circle',
        to: 'icon-minus-circle',
        animation: 'zoomOut'
    };


    iconElement11.addEventListener('click', function(e) {
        e.preventDefault();

        iconate(iconElement11, options, function() {
            var temp = options.from;
            options.from = options.to;
            options.to = temp;
        });
    });
var iconElement12 = document.getElementById('mas12');
    var options = {
        from: 'icon-plus-circle',
        to: 'icon-minus-circle',
        animation: 'zoomOut'
    };


    iconElement12.addEventListener('click', function(e) {
        e.preventDefault();

        iconate(iconElement12, options, function() {
            var temp = options.from;
            options.from = options.to;
            options.to = temp;
        });
    });
var iconElement13 = document.getElementById('mas13');
    var options = {
        from: 'icon-plus-circle',
        to: 'icon-minus-circle',
        animation: 'zoomOut'
    };


    iconElement13.addEventListener('click', function(e) {
        e.preventDefault();

        iconate(iconElement13, options, function() {
            var temp = options.from;
            options.from = options.to;
            options.to = temp;
        });
    });
var iconElement14 = document.getElementById('mas14');
    var options = {
        from: 'icon-plus-circle',
        to: 'icon-minus-circle',
        animation: 'zoomOut'
    };


    iconElement14.addEventListener('click', function(e) {
        e.preventDefault();

        iconate(iconElement14, options, function() {
            var temp = options.from;
            options.from = options.to;
            options.to = temp;
        });
    });
var iconElement15 = document.getElementById('mas15');
    var options = {
        from: 'icon-plus-circle',
        to: 'icon-minus-circle',
        animation: 'zoomOut'
    };


    iconElement15.addEventListener('click', function(e) {
        e.preventDefault();

        iconate(iconElement15, options, function() {
            var temp = options.from;
            options.from = options.to;
            options.to = temp;
        });
    });
var iconElement16 = document.getElementById('mas16');
    var options = {
        from: 'icon-plus-circle',
        to: 'icon-minus-circle',
        animation: 'zoomOut'
    };


    iconElement16.addEventListener('click', function(e) {
        e.preventDefault();

        iconate(iconElement16, options, function() {
            var temp = options.from;
            options.from = options.to;
            options.to = temp;
        });
    });
var iconElement17 = document.getElementById('mas17');
    var options = {
        from: 'icon-plus-circle',
        to: 'icon-minus-circle',
        animation: 'zoomOut'
    };


    iconElement17.addEventListener('click', function(e) {
        e.preventDefault();

        iconate(iconElement17, options, function() {
            var temp = options.from;
            options.from = options.to;
            options.to = temp;
        });
    });
var iconElement18 = document.getElementById('mas18');
    var options = {
        from: 'icon-plus-circle',
        to: 'icon-minus-circle',
        animation: 'zoomOut'
    };


    iconElement18.addEventListener('click', function(e) {
        e.preventDefault();

        iconate(iconElement18, options, function() {
            var temp = options.from;
            options.from = options.to;
            options.to = temp;
        });
    });
var iconElement19 = document.getElementById('mas19');
    var options = {
        from: 'icon-plus-circle',
        to: 'icon-minus-circle',
        animation: 'zoomOut'
    };


    iconElement19.addEventListener('click', function(e) {
        e.preventDefault();

        iconate(iconElement19, options, function() {
            var temp = options.from;
            options.from = options.to;
            options.to = temp;
        });
    });
var iconElement20 = document.getElementById('mas20');
    var options = {
        from: 'icon-plus-circle',
        to: 'icon-minus-circle',
        animation: 'zoomOut'
    };


    iconElement20.addEventListener('click', function(e) {
        e.preventDefault();

        iconate(iconElement20, options, function() {
            var temp = options.from;
            options.from = options.to;
            options.to = temp;
        });
    });
var iconElement21 = document.getElementById('mas21');
    var options = {
        from: 'icon-plus-circle',
        to: 'icon-minus-circle',
        animation: 'zoomOut'
    };


    iconElement21.addEventListener('click', function(e) {
        e.preventDefault();

        iconate(iconElement21, options, function() {
            var temp = options.from;
            options.from = options.to;
            options.to = temp;
        });
    });
var iconElement22 = document.getElementById('mas22');
    var options = {
        from: 'icon-plus-circle',
        to: 'icon-minus-circle',
        animation: 'zoomOut'
    };


    iconElement22.addEventListener('click', function(e) {
        e.preventDefault();

        iconate(iconElement22, options, function() {
            var temp = options.from;
            options.from = options.to;
            options.to = temp;
        });
    });
var iconElement23 = document.getElementById('mas23');
    var options = {
        from: 'icon-plus-circle',
        to: 'icon-minus-circle',
        animation: 'zoomOut'
    };


    iconElement23.addEventListener('click', function(e) {
        e.preventDefault();

        iconate(iconElement23, options, function() {
            var temp = options.from;
            options.from = options.to;
            options.to = temp;
        });
    });
var iconElement24 = document.getElementById('mas24');
    var options = {
        from: 'icon-plus-circle',
        to: 'icon-minus-circle',
        animation: 'zoomOut'
    };


    iconElement24.addEventListener('click', function(e) {
        e.preventDefault();

        iconate(iconElement24, options, function() {
            var temp = options.from;
            options.from = options.to;
            options.to = temp;
        });
    });
var iconElement25 = document.getElementById('mas25');
    var options = {
        from: 'icon-plus-circle',
        to: 'icon-minus-circle',
        animation: 'zoomOut'
    };


    iconElement25.addEventListener('click', function(e) {
        e.preventDefault();

        iconate(iconElement25, options, function() {
            var temp = options.from;
            options.from = options.to;
            options.to = temp;
        });
    });
var iconElement26 = document.getElementById('mas26');
    var options = {
        from: 'icon-plus-circle',
        to: 'icon-minus-circle',
        animation: 'zoomOut'
    };


    iconElement26.addEventListener('click', function(e) {
        e.preventDefault();

        iconate(iconElement26, options, function() {
            var temp = options.from;
            options.from = options.to;
            options.to = temp;
        });
    });

}());
