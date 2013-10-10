$(function () {
    $.getJSON("Main/SquareMeUp", function () {
        console.log("Hei!");
    });

    $.ajax({
        dataType: "json",
        url: "Main/SquareMeUp",
        data: "name=bobby222",
        success: function (data) {
            $("#whatever").text("returned");
            console.log("RETURN");

        }
    });
    
    $("#try_me_button").click(function() {
        console.log("Pow!");
        /*
        $.getJSON("Main/SquareMeUp", function() {
            console.log("Hei!");
        });
        */
        $("#whatever").text("sending");
        

    });
    
});

