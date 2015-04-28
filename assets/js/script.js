$(document).ready(function() {
    $("#start-walking-button").click(function() {
        $(".before-start").fadeOut();
    });

    $("#end-button").click(function() {
        $(".before-start").fadeIn("fast");
    });

    // Chat screen animations, fading the keyboard in and out.

    $("#chat_reply").click(function() {
        if (!$("#chat_messages-container").hasClass("selected")) {
            $("#chat_messages-container").addClass("selected");
            $("#chat_messages-container").animate({top: "-=127px"});
            $("#chat_reply-container").animate({top: "-=275px"});
            $(".chat_row#first").fadeTo("fast", 0);
        }
    });

    $("#chat_messages-container").click(function() {
        if ($("#chat_messages-container").hasClass("selected")) {
            $("#chat_messages-container").removeClass("selected");
            $("#chat_messages-container").animate({top: "+=127px"});
            $("#chat_reply-container").animate({top: "+=275px"});
            $(".chat_row#first").css("zIndex", -1).fadeTo("fast", 1);
        }
    });
})


