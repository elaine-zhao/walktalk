$(document).ready(function() {
    $("#start-walking-button").click(function() {
        $(".before-start").fadeOut();
    });

    $("#end-button").click(function() {
        $(".before-start").fadeIn("fast");
    });

    // Chat screen animations, fading the keyboard in and out.

    $("#chat_reply").click(function() {
        if (!$("chat_messages").hasClass("selected")) {
            $(".under-topbar-container").addClass("selected");
            $(".under-topbar-container").animate({top: "-=127px"});
            $("#chat_reply-container").animate({top: "-=275px"});
            $(".chat_row#first").fadeTo("fast", 0);
        }
    });

    $("#under-topbar-container").click(function() {
        if ($(".under-topbar-container").hasClass("selected")) {
            $(".under-topbar-container").removeClass("selected");
            $(".under-topbar-container").animate({top: "+=127px"});
            $("#chat_reply-container").animate({top: "+=275px"});
            $(".chat_row#first").css("zIndex", -1).fadeTo("fast", 1);
        }
    });
})


