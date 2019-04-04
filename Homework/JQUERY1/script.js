$(document).ready(function () {
    $("li").on({
        mouseover: function () {
            $(this).css("background-color", "lightblue");
        },

        mouseleave: function () {
            $(this).css("background-color", "lightgrey");
        }
    });
    $(".toggler").on("click", function () {
        if ($(".toggler").html() == "Show Picture") {
            $(".toggler").html("Hide Picture");
        } else $(".toggler").html("Show Picture");
        $("img").toggle();
    });
})

function showStep(evt, cityName) {
    $(".Step-1").css('display', 'none');
    $(".Step-2").css('display', 'none');
    $(".Step-3").css('display', 'none');
    $(".Step-4").css('display', 'none');
    $(".Step-5").css('display', 'none');
    $(".Step-6").css('display', 'none');
    $(".Step-7").css('display', 'none');
    $(".Step-8").css('display', 'none');
    $(".Step-9").css('display', 'none');
    $(".ingredients").css('display', 'none');
    $(cityName).css('display', 'block');
}
