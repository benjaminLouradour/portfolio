function init() {

    $('.jschoixquete1').on('click', function (e) {
        e.preventDefault();

        $('.jschoixquete').removeClass('selectionnee');
        $(this).addClass('selectionnee');

        $('.jsquete').removeClass('estaffichee');
        $('.jsquete1').addClass('estaffichee');

        $('.jsquete').hide();
        $('.jsquete1').show();
    });

    $('.jschoixquete2').on('click', function (e) {
        e.preventDefault();

        $('.jschoixquete').removeClass('selectionnee');
        $(this).addClass('selectionnee');

        $('.jsquete').removeClass('estaffichee');
        $('.jsquete2').addClass('estaffichee');

        $('.jsquete').hide();
        $('.jsquete2').show();
    });

    $('.jschoixquete3').on('click', function (e) {
        e.preventDefault();

        $('.jschoixquete').removeClass('selectionnee');
        $(this).addClass('selectionnee');

        $('.jsquete').removeClass('estaffichee');
        $('.jsquete3').addClass('estaffichee');

        $('.jsquete').hide();
        $('.jsquete3').show();
    });

    $('.jschoixquete4').on('click', function (e) {
        e.preventDefault();

        $('.jschoixquete').removeClass('selectionnee');
        $(this).addClass('selectionnee');

        $('.jsquete').removeClass('estaffichee');
        $('.jsquete4').addClass('estaffichee');

        $('.jsquete').hide();
        $('.jsquete4').show();
    });

    $('.jschoixquete5').on('click', function (e) {
        e.preventDefault();

        $('.jschoixquete').removeClass('selectionnee');
        $(this).addClass('selectionnee');

        $('.jsquete').removeClass('estaffichee');
        $('.jsquete5').addClass('estaffichee');

        $('.jsquete').hide();
        $('.jsquete5').show();
    });

    $('.jschoixquete6').on('click', function (e) {
        e.preventDefault();

        $('.jschoixquete').removeClass('selectionnee');
        $(this).addClass('selectionnee');

        $('.jsquete').removeClass('estaffichee');
        $('.jsquete6').addClass('estaffichee');

        $('.jsquete').hide();
        $('.jsquete6').show();
    });

    $('.jschoixquete7').on('click', function (e) {
        e.preventDefault();

        $('.jschoixquete').removeClass('selectionnee');
        $(this).addClass('selectionnee');

        $('.jsquete').removeClass('estaffichee');
        $('.jsquete7').addClass('estaffichee');

        $('.jsquete').hide();
        $('.jsquete7').show();
    });

    $('.jsvignettequette').on('click', function (e) {
        e.preventDefault();

        $('.jsquete.estaffichee .jsimagequete').attr('src', $(this).attr('src'));
        $('.jsquete.estaffichee .jsvignettequette').removeClass('selectionnee');
        $(this).addClass('selectionnee');
    });

    $('.jsitem1').on('click', function (e) {
        e.preventDefault();

        $('.jsitem').removeClass('selectionne');
        $(this).addClass('selectionne');

        $('.jstitreequipement').text('Motivated');

        $('.jsiddle1').attr('src', 'img/iddle1.1.png');
        $('.jsiddle2').attr('src', 'img/iddle1.2.png');
    });

    $('.jsitem2').on('click', function (e) {
        e.preventDefault();

        $('.jsitem').removeClass('selectionne');
        $(this).addClass('selectionne');

        $('.jstitreequipement').text('Curious');

        $('.jsiddle1').attr('src', 'img/iddle2.1.png');
        $('.jsiddle2').attr('src', 'img/iddle2.2.png');
    });

    $('.jsitem3').on('click', function (e) {
        e.preventDefault();

        $('.jsitem').removeClass('selectionne');
        $(this).addClass('selectionne');

        $('.jstitreequipement').text('Passionate');

        $('.jsiddle1').attr('src', 'img/iddle3.1.png');
        $('.jsiddle2').attr('src', 'img/iddle3.2.png');
    });

    $('.jsitem4').on('click', function (e) {
        e.preventDefault();

        $('.jsitem').removeClass('selectionne');
        $(this).addClass('selectionne');

        $('.jstitreequipement').text('Resourceful');

        $('.jsiddle1').attr('src', 'img/iddle4.1.png');
        $('.jsiddle2').attr('src', 'img/iddle4.2.png');
    });

    $('.jsitem5').on('click', function (e) {
        e.preventDefault();

        $('.jsitem').removeClass('selectionne');
        $(this).addClass('selectionne');

        $('.jstitreequipement').text('Creative');

        $('.jsiddle1').attr('src', 'img/iddle5.1.png');
        $('.jsiddle2').attr('src', 'img/iddle5.2.png');
    });

    $('.jsitem6').on('click', function (e) {
        e.preventDefault();

        $('.jsitem').removeClass('selectionne');
        $(this).addClass('selectionne');

        $('.jstitreequipement').text('Attention to detail');

        $('.jsiddle1').attr('src', 'img/iddle6.1.png');
        $('.jsiddle2').attr('src', 'img/iddle6.2.png');
    });

    $('.jsimagequete').on('click', function (e) {
        e.preventDefault();

        $('.jsfenetremodale').show();
        $('.jsimagemodale').attr('src', $(this).attr('src'));
    });

    $('.fenetremodale .voile').on('click', function (e) {
        e.preventDefault();

        $('.jsfenetremodale').hide();
    });

    $('.fenetremodale .iconefermer').on('click', function (e) {
        e.preventDefault();

        $('.jsfenetremodale').hide();
    });

    setInterval(function() {
        $('.jsiddle1').show();
        $('.jsiddle2').hide();
    }, 3000);

    setTimeout(function(){ 
        $('.jsiddle1').hide();
        $('.jsiddle2').show();

        setInterval(function() {
            $('.jsiddle1').hide();
            $('.jsiddle2').show();
        }, 3000);
    }, 1500);

    $('.jslanguefr').on('click', function (e) {
        e.preventDefault();

        document.location.href = './index.html';
    });
}