$(function () {
    $("#try_me_button").click(function () {
        $.post("Main/SquareMeUp", function (data) {
            console.log("RETURN data: " + data);
            console.log(data);
            $("#whatever").text(data);
        });
    });
});

