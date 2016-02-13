/**
 * Created by Juan on 29/05/2015.
 */
(function(){
    var text1 = $("#caja1");
    var text2 = $("#caja2");
    var text3 = $("#caja3");
    var hover1 = $("#hover1");
    var hover2 = $("#hover2");
    var hover3 = $("#hover3");
    var caja1 = $("#cajaUno");
    var caja2 = $("#cajaDos");
    var caja3 = $("#cajaTres");

    caja1.hover( function(){
        hover1.css({"display": "block", "height": "50vh", "width": "100%"});
        text1.css({"display": "none"})
    }, function(){
        console.log("Funciona??");
        hover1.css({"display": "none"});
        text1.css({"display": "block"});
    });
    caja2.hover( function(){
        hover2.css({"display": "block", "height": "50vh", "width": "100%"});
        text2.css({"display": "none"});
    }, function(){
        hover2.css({"display": "none"});
        text2.css({"display": "block"})
    });
    caja3.hover( function(){
        hover3.css({"display": "block", "height": "50vh", "width": "100%"});
        text3.css({"display": "none"});
    }, function(){
        hover3.css({"display": "none"});
        text3.css({"display": "block"})
    })

})();