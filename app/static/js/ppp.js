/* Funções para controlar movimentação dos icones da callopse*/

function iconNoticia(){
    if($(document.getElementById("Noticias-collapse")).hasClass('show')){
        $('#iconN').removeClass('fa-angle-down');
        $('#iconN').addClass('fa-angle-right');
        $("#n-trade").show();
        $("#n-conjuntura").show();
        $("#n-mercados").show();
        $("#n-news").show();
        $("#n-analises").show();
    } else{
        $('#iconN').removeClass('fa-angle-right');
        $('#iconN').addClass('fa-angle-down');
        $("#n-trade").hide();
        $("#n-conjuntura").hide();
        $("#n-mercados").hide();
        $("#n-news").hide();
        $("#n-analises").hide();
    }
}

function iconNoticiaContri(){
    if($(document.getElementById("Noticias-ctbd-collapse")).hasClass('show')){
        $('#iconNContri').removeClass('fa-angle-down');
        $('#iconNContri').addClass('fa-angle-right');
        $("#n-ctbd-trade").show();
        $("#n-ctbd-conjuntura").show();
        $("#n-ctbd-mercados").show();
        $("#n-ctbd-news").show();
        $("#n-ctbd-analises").show();
    } else{
        $('#iconNContri').removeClass('fa-angle-right');
        $('#iconNContri').addClass('fa-angle-down');
        $("#n-ctbd-trade").hide();
        $("#n-ctbd-conjuntura").hide();
        $("#n-ctbd-mercados").hide();
        $("#n-ctbd-news").hide();
        $("#n-ctbd-analises").hide();
    }
}

function iconCotacao(){
    if($(document.getElementById("Cotacao-collapse")).hasClass('show')){
        $('#iconCotacao').removeClass('fa-angle-down');
        $('#iconCotacao').addClass('fa-angle-right');
        $("#c-trade").show();
        $("#c-conjuntura").show();
        $("#c-mercados").show();
        $("#c-news").show();
        $("#c-analises").show();

    } else{
        $('#iconCotacao').removeClass('fa-angle-right');
        $('#iconCotacao').addClass('fa-angle-down');
        $("#c-trade").hide();
        $("#c-conjuntura").hide();
        $("#c-mercados").hide();
        $("#c-news").hide();
        $("#c-analises").hide();
    }
}

function iconCotacaoAnb(){
    if($(document.getElementById("Cotacao-anb-collapse")).hasClass('show')){
        $('#iconCAnb-0').removeClass('fa-angle-down');
        $('#iconCAnb-0').addClass('fa-angle-right');
        $('#iconCAnb-1').show();
        $("#c-anb-trade").show();
        $("#c-anb-conjuntura").show();
        $("#c-anb-mercados").show();
        $("#c-anb-news").show();
        $("#c-anb-analises").show();
    } else{
        $('#iconCAnb-0').removeClass('fa-angle-right');
        $('#iconCAnb-0').addClass('fa-angle-down');
        $('#iconCAnb-1').hide();
        $("#c-anb-trade").hide();
        $("#c-anb-conjuntura").hide();
        $("#c-anb-mercados").hide();
        $("#c-anb-news").hide();
        $("#c-anb-analises").hide();
    }
}

function iconCotacaoB3(){
    if($(document.getElementById("Cotacao-b3-collapse")).hasClass('show')){
        $('#iconCB3-0').removeClass('fa-angle-down');
        $('#iconCB3-0').addClass('fa-angle-right');
        $('#iconCB3-1').show();
        $("#c-b3-trade").show();
        $("#c-b3-conjuntura").show();
        $("#c-b3-mercados").show();
        $("#c-b3-news").show();
        $("#c-b3-analises").show();
    } else{
        $('#iconCB3-0').removeClass('fa-angle-right');
        $('#iconCB3-0').addClass('fa-angle-down');
        $('#iconCB3-1').hide();
        $("#c-b3-trade").hide();
        $("#c-b3-conjuntura").hide();
        $("#c-b3-mercados").hide();
        $("#c-b3-news").hide();
        $("#c-b3-analises").hide();
    }
}

function iconCotacaoBC(){
    if($(document.getElementById("Cotacao-bc-collapse")).hasClass('show')){
        $('#iconCBC-0').removeClass('fa-angle-down');
        $('#iconCBC-0').addClass('fa-angle-right');
        $('#iconCBC-1').show();
        $("#c-bc-trade").show();
        $("#c-bc-conjuntura").show();
        $("#c-bc-mercados").show();
        $("#c-bc-news").show();
        $("#c-bc-analises").show();
    } else{
        $('#iconCBC-0').removeClass('fa-angle-right');
        $('#iconCBC-0').addClass('fa-angle-down');
        $('#iconCBC-1').hide();
        $("#c-bc-trade").hide();
        $("#c-bc-conjuntura").hide();
        $("#c-bc-mercados").hide();
        $("#c-bc-news").hide();
        $("#c-bc-analises").hide();
    }
}

function iconCIndices(){
    if($(document.getElementById("c-indices-collapse")).hasClass('show')){
        $('#iconCIndices-0').removeClass('fa-angle-down');
        $('#iconCIndices-0').addClass('fa-angle-right');
        $("#iconCIndices-1").show();
        $("#iconCIndices-2").show();
        $("#c-indicesMundi-trade").show();
        $("#c-indicesMundi-conjuntura").show();
        $("#c-indicesMundi-mercados").show();
        $("#c-indicesMundi-news").show();
        $("#c-indicesMundi-analises").show();
    } else{
        $('#iconCIndices-0').removeClass('fa-angle-right');
        $('#iconCIndices-0').addClass('fa-angle-down');
        $("#iconCIndices-1").hide();
        $("#iconCIndices-2").hide();
        $("#c-indicesMundi-trade").hide();
        $("#c-indicesMundi-conjuntura").hide();
        $("#c-indicesMundi-mercados").hide();
        $("#c-indicesMundi-news").hide();
        $("#c-indicesMundi-analises").hide();
    }
}

function iconCIndAsiaOcean(){
    if($(document.getElementById("c-ind-ao-collapse")).hasClass('show')){
        $('#iconCIndAsiaOcean-0').removeClass('fa-angle-down');
        $('#iconCIndAsiaOcean-0').addClass('fa-angle-right');
        $("#iconCIndAsiaOcean-1").show();
        $("#iconCIndAsiaOcean-2").show();
        $("#c-ind-ao-trade").show();
        $("#c-ind-ao-conjuntura").show();
        $("#c-ind-ao-mercados").show();
        $("#c-ind-ao-news").show();
        $("#c-ind-ao-analises").show();
    } else{
        $('#iconCIndAsiaOcean-0').removeClass('fa-angle-right');
        $('#iconCIndAsiaOcean-0').addClass('fa-angle-down');
        $("#iconCIndAsiaOcean-1").hide();
        $("#iconCIndAsiaOcean-2").hide();
        $("#c-ind-ao-trade").hide();
        $("#c-ind-ao-conjuntura").hide();
        $("#c-ind-ao-mercados").hide();
        $("#c-ind-ao-news").hide();
        $("#c-ind-ao-analises").hide();
    }
}

function iconCIndEuropa(){
    if($(document.getElementById("c-ind-euro-collapse")).hasClass('show')){
        $('#iconCIndEuropa-0').removeClass('fa-angle-down');
        $('#iconCIndEuropa-0').addClass('fa-angle-right');
        $("#iconCIndEuropa-1").show();
        $("#c-ind-euro-trade").show();
        $("#c-ind-euro-conjuntura").show();
        $("#c-ind-euro-mercados").show();
        $("#c-ind-euro-news").show();
        $("#c-ind-euro-analises").show();
    } else{
        $('#iconCIndEuropa-0').removeClass('fa-angle-right');
        $('#iconCIndEuropa-0').addClass('fa-angle-down');
        $("#iconCIndEuropa-1").hide();
        $("#c-ind-euro-trade").hide();
        $("#c-ind-euro-conjuntura").hide();
        $("#c-ind-euro-mercados").hide();
        $("#c-ind-euro-news").hide();
        $("#c-ind-euro-analises").hide();
    }
}

function iconCIndLatam(){
    if($(document.getElementById("c-ind-latam-collapse")).hasClass('show')){
        $('#iconCIndLatam-0').removeClass('fa-angle-down');
        $('#iconCIndLatam-0').addClass('fa-angle-right');
        $("#iconCIndLatam-1").show();
        $("#c-ind-latam-trade").show();
        $("#c-ind-latam-conjuntura").show();
        $("#c-ind-latam-mercados").show();
        $("#c-ind-latam-news").show();
        $("#c-ind-latam-analises").show();
    } else{
        $('#iconCIndLatam-0').removeClass('fa-angle-right');
        $('#iconCIndLatam-0').addClass('fa-angle-down');
        $("#iconCIndLatam-1").hide();
        
        $("#c-ind-latam-trade").hide();
        $("#c-ind-latam-conjuntura").hide();
        $("#c-ind-latam-mercados").hide();
        $("#c-ind-latam-news").hide();
        $("#c-ind-latam-analises").hide();
    }
}

function iconCIndUSA(){
    if($(document.getElementById("c-ind-usa-collapse")).hasClass('show')){
        $('#iconCIndUSA-0').removeClass('fa-angle-down');
        $('#iconCIndUSA-0').addClass('fa-angle-right');
        $('#iconCIndUSA-1').show();
        $("#c-ind-usa-trade").show();
        $("#c-ind-usa-conjuntura").show();
        $("#c-ind-usa-mercados").show();
        $("#c-ind-usa-news").show();
        $("#c-ind-usa-analises").show();
    } else{
        $('#iconCIndUSA-0').removeClass('fa-angle-right');
        $('#iconCIndUSA-0').addClass('fa-angle-down');
        $('#iconCIndUSA-1').hide();
        $("#c-ind-usd-trade").hide();
        $("#c-ind-usa-conjuntura").hide();
        $("#c-ind-usa-mercados").hide();
        $("#c-ind-usa-news").hide();
        $("#c-ind-usa-analises").hide();
    }
}

function iconCNyse(){
    if($(document.getElementById("c-nyse-collapse")).hasClass('show')){
        $('#iconCNyse-0').removeClass('fa-angle-down');
        $('#iconCNyse-0').addClass('fa-angle-right');
        $('#iconCNyse-1').show();
        $("#c-nyse-trade").show();
        $("#c-nyse-conjuntura").show();
        $("#c-nyse-mercados").show();
        $("#c-nyse-news").show();
        $("#c-nyse-analises").show();
    } else{
        $('#iconCNyse-0').removeClass('fa-angle-right');
        $('#iconCNyse-0').addClass('fa-angle-down');
        $('#iconCNyse-1').hide();
        $("#c-nyse-trade").hide();
        $("#c-nyse-conjuntura").hide();
        $("#c-nyse-mercados").hide();
        $("#c-nyse-news").hide();
        $("#c-nyse-analises").hide();
    }
}

function iconCotacaoContri(){
    if($(document.getElementById("Cotacao-ctbd-collapse")).hasClass('show')){
        $('#iconCContri').removeClass('fa-angle-down');
        $('#iconCContri').addClass('fa-angle-right');
        $("#c-ctbd-trade").show();
        $("#c-ctbd-conjuntura").show();
        $("#c-ctbd-mercados").show();
        $("#c-ctbd-news").show();
        $("#c-ctbd-analises").show();
    } else{
        $('#iconCContri').removeClass('fa-angle-right');
        $('#iconCContri').addClass('fa-angle-down');
        $("#c-ctbd-trade").hide();
        $("#c-ctbd-conjuntura").hide();
        $("#c-ctbd-mercados").hide();
        $("#c-ctbd-news").hide();
        $("#c-ctbd-analises").hide();
    }
}

function iconAddon(){
    if($(document.getElementById("Addon-collapse")).hasClass('show')){
        $('#iconAddon').removeClass('fa-angle-down');
        $('#iconAddon').addClass('fa-angle-right');
        $("#ad-trade").show();
        $("#ad-conjuntura").show();
        $("#ad-mercados").show();
        $("#ad-news").show();
        $("#ad-analises").show();
    } else{
        $('#iconAddon').removeClass('fa-angle-right');
        $('#iconAddon').addClass('fa-angle-down');
        $("#ad-trade").hide();
        $("#ad-conjuntura").hide();
        $("#ad-mercados").hide();
        $("#ad-news").hide();
        $("#ad-analises").hide();
    }
}

function iconModulos(){
    if($(document.getElementById("Addon-mod-collapse")).hasClass('show')){
        $('#iconModulos').removeClass('fa-angle-down');
        $('#iconModulos').addClass('fa-angle-right');
    } else{
        $('#iconModulos').removeClass('fa-angle-right');
        $('#iconModulos').addClass('fa-angle-down');
    }
}

function iconAnaFund(){
    if($(document.getElementById("Addon-mod-af-collapse")).hasClass('show')){
        $('#iconAnaFund').removeClass('fa-angle-down');
        $('#iconAnaFund').addClass('fa-angle-right');
    } else{
        $('#iconAnaFund').removeClass('fa-angle-right');
        $('#iconAnaFund').addClass('fa-angle-down');
    }
}

function iconModNoticias(){
    if($(document.getElementById("Addon-n-collapse")).hasClass('show')){
        $('#iconModNoticias').removeClass('fa-angle-down');
        $('#iconModNoticias').addClass('fa-angle-right');
    } else{
        $('#iconModNoticias').removeClass('fa-angle-right');
        $('#iconModNoticias').addClass('fa-angle-down');
    }
}

function iconModNDJN(){
    if($(document.getElementById("Addon-n-djn-collapse")).hasClass('show')){
        $('#iconModNDJN').removeClass('fa-angle-down');
        $('#iconModNDJN').addClass('fa-angle-right');
    } else{
        $('#iconModNDJN').removeClass('fa-angle-right');
        $('#iconModNDJN').addClass('fa-angle-down');
    }
}

function iconAdCotacaoB3(){
    if($(document.getElementById("ad-c-b3-collapse")).hasClass('show')){
        $('#iconAdCB3-0').removeClass('fa-angle-down');
        $('#iconAdCB3-0').addClass('fa-angle-right');
        $('#iconAdCB3-1').show();
        $("#ad-c-b3-trade").show();
        $("#ad-c-b3-conjuntura").show();
        $("#ad-c-b3-mercados").show();
        $("#ad-c-b3-news").show();
        $("#ad-c-b3-analises").show();
    } else{
        $('#iconAdCB3-0').removeClass('fa-angle-right');
        $('#iconAdCB3-0').addClass('fa-angle-down');
        $('#iconAdCB3-1').hide();
        $("#ad-c-b3-trade").hide();
        $("#ad-c-b3-conjuntura").hide();
        $("#ad-c-b3-mercados").hide();
        $("#ad-c-b3-news").hide();
        $("#ad-c-b3-analises").hide();
    }
}

function iconAdCIndices(){
    if($(document.getElementById("ad-c-indices-collapse")).hasClass('show')){
        $('#iconAdCIndices-0').removeClass('fa-angle-down');
        $('#iconAdCIndices-0').addClass('fa-angle-right');
        $("#iconAdCIndices-1").show();
        $("#iconAdCIndices-2").show();
        $("#ad-c-indicesMundi-trade").show();
        $("#ad-c-indicesMundi-conjuntura").show();
        $("#ad-c-indicesMundi-mercados").show();
        $("#ad-c-indicesMundi-news").show();
        $("#ad-c-indicesMundi-analises").show();
    } else{
        $('#iconAdCIndices-0').removeClass('fa-angle-right');
        $('#iconAdCIndices-0').addClass('fa-angle-down');
        $("#iconAdCIndices-1").hide();
        $("#iconAdCIndices-2").hide();
        $("#ad-c-indicesMundi-trade").hide();
        $("#ad-c-indicesMundi-conjuntura").hide();
        $("#ad-c-indicesMundi-mercados").hide();
        $("#ad-c-indicesMundi-news").hide();
        $("#ad-c-indicesMundi-analises").hide();
    }
}

function iconAdCIndEuropa(){
    if($(document.getElementById("ad-c-ind-euro-collapse")).hasClass('show')){
        $('#iconAdCIndEuropa-0').removeClass('fa-angle-down');
        $('#iconAdCIndEuropa-0').addClass('fa-angle-right');
        $("#iconAdCIndEuropa-1").show();
        $("#ad-c-ind-euro-trade").show();
        $("#ad-c-ind-euro-conjuntura").show();
        $("#ad-c-ind-euro-mercados").show();
        $("#ad-c-ind-euro-news").show();
        $("#ad-c-ind-euro-analises").show();
    } else{
        $('#iconAdCIndEuropa-0').removeClass('fa-angle-right');
        $('#iconAdCIndEuropa-0').addClass('fa-angle-down');
        $("#iconAdCIndEuropa-1").hide();
        $("#ad-c-ind-euro-trade").hide();
        $("#ad-c-ind-euro-conjuntura").hide();
        $("#ad-c-ind-euro-mercados").hide();
        $("#ad-c-ind-euro-news").hide();
        $("#ad-c-ind-euro-analises").hide();
    }
}

function iconAdCIndUSA(){
    if($(document.getElementById("ad-c-ind-usa-collapse")).hasClass('show')){
        $('#iconAdCIndUSA-0').removeClass('fa-angle-down');
        $('#iconAdCIndUSA-0').addClass('fa-angle-right');
        $('#iconAdCIndUSA-1').show();
        $('#iconAdCIndUSA-2').show();
        $("#ad-c-ind-usa-trade").show();
        $("#ad-c-ind-usa-conjuntura").show();
        $("#ad-c-ind-usa-mercados").show();
        $("#ad-c-ind-usa-news").show();
        $("#ad-c-ind-usa-analises").show();
    } else{
        $('#iconAdCIndUSA-0').removeClass('fa-angle-right');
        $('#iconAdCIndUSA-0').addClass('fa-angle-down');
        $('#iconAdCIndUSA-1').hide();
        $('#iconAdCIndUSA-2').hide();
        $("#ad-c-ind-usd-trade").hide();
        $("#ad-c-ind-usa-conjuntura").hide();
        $("#ad-c-ind-usa-mercados").hide();
        $("#ad-c-ind-usa-news").hide();
        $("#ad-c-ind-usa-analises").hide();
    }
}

function iconAdCNyse(){
    if($(document.getElementById("ad-c-nyse-collapse")).hasClass('show')){
        $('#iconAdCNyse-0').removeClass('fa-angle-down');
        $('#iconAdCNyse-0').addClass('fa-angle-right');
        $('#iconAdCNyse-1').show();
        $("#ad-c-nyse-trade").show();
        $("#ad-c-nyse-conjuntura").show();
        $("#ad-c-nyse-mercados").show();
        $("#ad-c-nyse-news").show();
        $("#ad-c-nyse-analises").show();
    } else{
        $('#iconAdCNyse-0').removeClass('fa-angle-right');
        $('#iconAdCNyse-0').addClass('fa-angle-down');
        $('#iconAdCNyse-1').hide();
        $("#ad-c-nyse-trade").hide();
        $("#ad-c-nyse-conjuntura").hide();
        $("#ad-c-nyse-mercados").hide();
        $("#ad-c-nyse-news").hide();
        $("#ad-c-nyse-analises").hide();
    }
}
/*JS Lisbox */

function controlaNivel(){

    var sel = document.getElementById('selectNivel');
    var v0 = sel.options[sel.selectedIndex].value;
    var v1 = sel.value;

    console.log(v1);
    if(sel.value == 0){
        $('#Noticias-collapse').removeClass('show');
        $('#Cotacao-collapse').removeClass('show');
        iconCotacao();
        iconNoticia();
        console.log('teste0')
    }else{
        if(sel.value == 1) {
            $('#Noticias-collapse').addClass('show');
            $('#Cotacao-collapse').addClass('show');
            iconCotacao();
            iconNoticia();
            console.log('teste1')

        }else{
            if(sel.value == 2){
                iconNoticiaContri();
                iconCotacaoB3();
                iconCotacaoBC();
                iconCIndices();
                console.log('teste2')
            }else{
                if(sel.value == 3){
                      iconCIndAsiaOcean();
                      iconCIndEuropa();
                      iconCIndLatam();
                      iconCIndUSA();
                      console.log('teste3')
                }
            }
        }
    }


}


$(document).ready(function() {
        $('.fixed').addClass('is-sticky');
        $('[data-toggle="tooltip"]').tooltip();

/* Inicio do script que trava os header*/
        var offset1 = $('#cont-incluso').offset().top -10;
        var $contincluso = $('#cont-incluso'); // guardar o elemento na memoria para melhorar performance
        $(document).on('scroll', function () {
            if (offset1 <= $(window).scrollTop()) {
                $contincluso.addClass('fixar');
            } else {
                $contincluso.removeClass('fixar');
            }

        });
/*
        var offset2 = $('#cont-adc-pago').offset().top -100;
        var $adcpago = $('#cont-adc-pago'); // guardar o elemento na memoria para melhorar performance
        $(document).on('scroll', function () {
            if (offset2 <= $(window).scrollTop()) {
                $adcpago.addClass('fixar');
            } else {
                $adcpago.removeClass('fixar');
            }
});
 Fim do script que trava os header */
    });

/* JS dos Checkbox */

$('#ckMostraPrecos').click(function(){
    var ckPrecos = document.getElementById('ckMostraPrecos');
    if(ckMPrecos.checked == true){
        $('#valores').show();
    }else{
        $('#valores').hide();
    }
})


$('#checkAll').click(function(){
    var chkAll = document.getElementById('checkAll');
    var ckTrade = document.getElementById('trade');
    var ckConjuntura  = document.getElementById('conjuntura');
    //var ckAAI  = document.getElementById('trade-aai');
    var ckMercados  = document.getElementById('mercados');
    //var ckMercadosBS  = document.getElementById('mercados-bs');
    var ckNews  = document.getElementById('news');
    //var ckNewsBS  = document.getElementById('news-bs');
    var ckAnalises  = document.getElementById('analises');

    if(chkAll.checked == true){

        ckTrade.checked = true;
        ckConjuntura.checked = true;
        //ckAAI.checked = true;
        ckMercados.checked = true;
        //ckMercadosBS.checked = true;
        ckNews.checked = true;
        //ckNewsBS.checked = true;
        ckAnalises.checked = true;

    } else {

        ckTrade.checked = false;
        ckConjuntura.checked = false;
        //ckAAI.checked = false;
        ckMercados.checked = false;
        //ckMercadosBS.checked = false;
        ckNews.checked = false;
        //ckNewsBS.checked = false;
        ckAnalises.checked = false;
    }
});

 $('#trade').click(function() {
        
        var ckTrade = document.getElementById('trade');
        if(ckTrade.checked == false){
            var chkAll = document.getElementById('checkAll');
            chkAll.checked = false;
        };

    });
/*    $('#trade-aai').click(function() {
        
        var ckTrade = document.getElementById('trade-aai');
        if(ckTrade.checked == false){
            var chkAll = document.getElementById('checkAll');
            chkAll.checked = false;
        };

    });
*/
    $('#conjuntura').click(function() {
        
        var ckTrade = document.getElementById('conjuntura');
        if(ckTrade.checked == false){
            var chkAll = document.getElementById('checkAll');
            chkAll.checked = false;
        };

    });
/*    $('#mercados-bs').click(function() {
        
        var ckTrade = document.getElementById('mercados-bs');
        if(ckTrade.checked == false){
            var chkAll = document.getElementById('checkAll');
            chkAll.checked = false;
        };

    });
*/
    $('#mercados').click(function() {
        
        var ckTrade = document.getElementById('mercados');
        if(ckTrade.checked == false){
            var chkAll = document.getElementById('checkAll');
            chkAll.checked = false;
        };

    });
/*    $('#news-bs').click(function() {
        
        var ckTrade = document.getElementById('news-bs');
        if(ckTrade.checked == false){
            var chkAll = document.getElementById('checkAll');
            chkAll.checked = false;
        };

    });
*/
    $('#news').click(function() {
        
        var ckTrade = document.getElementById('news');
        if(ckTrade.checked == false){
            var chkAll = document.getElementById('checkAll');
            chkAll.checked = false;
        };

    });
    $('#analises').click(function() {
         
        var ckTrade = document.getElementById('analises');
        if(ckTrade.checked == false){
            var chkAll = document.getElementById('checkAll');
            chkAll.checked = false;
        };

    });
