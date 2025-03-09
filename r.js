$(document).ready(function () {
    $(".info-btn").click(function () {
        $("#infoModal").fadeIn();
    });

    $(".close").click(function () {
        $("#infoModal").fadeOut();
    });

    $(window).click(function (event) {
        if (event.target.id === "infoModal") {
            $("#infoModal").fadeOut();
        }
    });
});