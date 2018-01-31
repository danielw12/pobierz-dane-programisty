$(function () {
    $('#guzik').click(function () {
        div = document.createElement('div');
        $(div).attr('id', 'dane-programisty');
        $('#guzik').after(div);
        $.getJSON('https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php', function (data) {
            $('#dane-programisty').after(
                '<br> Imię: ' + data.imie +
                '<br> Nazwisko: ' + data.nazwisko +
                '<br> Zawód: ' + data.zawod +
                '<br> Firma: ' + data.firma);

        });
    });
});