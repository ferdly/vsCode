


$(document).ready(function () {
    // BOOK MENU MAGIC
    $(".bookMenu > li > ul").hide();
    $(".bookMenu > li").hover(function () {
        $(this).find("ul").show('slow');
    }, function () {
        $(this).find("ul").hide();
    });

    $(".drop").change(function () {
        window.location.href = $(this).val();
    });



    // OLD WAY
    $(".togMenu").click(function (e) {
        e.preventDefault();
        if ($(this).next().next().is(":visible")) {
            $(this).html("+");
            $(this).next().next().hide();
        } else {
            $(this).next().next().show();
            $(this).html("-");
        }
    });
    $("#myMenu > li > ul").hide();
    $("#myMenu > li > ul > li > ul").hide();
    $(".selected").parents().show();
    $(".selected").next().show();
    $(".togMenu").each(function () {
        if ($(this).next().next().is(":visible")) {
            $(this).html("-");
        } else {
            $(this).html("+");
        }
    });
    $("#expand").click(function (e) {
        e.preventDefault();
        $("#myMenu > li > ul").show();
        $("#myMenu > li > ul > li > ul").show();
        $(".togMenu").each(function () {
            $(this).html("-");
        });
    });
    $("#collapse").click(function (e) {
        e.preventDefault();
        $("#myMenu > li > ul").hide();
        $("#myMenu > li > ul > li > ul").hide();
        $(".togMenu").each(function () {
            $(this).html("+");
        });
    });


  
});
