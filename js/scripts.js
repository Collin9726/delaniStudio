$(document).ready(function(){
    //service icons toggle
    $(".design").click(function(){
        $("#design_content_show").toggle();
        $("#design_icon_show").toggle();
    });
    $(".dev").click(function(){
        $("#dev_content_show").toggle();
        $("#dev_icon_show").toggle();
    });
    $(".p-mgt").click(function(){
        $("#p-mgt_content_show").toggle();
        $("#p-mgt_icon_show").toggle();
    });

    //portfolio hover effects
    hoverEffect("1");
    hoverEffect("2");
    hoverEffect("3");
    hoverEffect("4");
    hoverEffect("5");
    hoverEffect("6");
    hoverEffect("7");
    hoverEffect("8");

    //input forms
    $("#feedback form").submit(function(event){
        event.preventDefault();
        var name=$("#name").val().trim();
        var email=$("#email").val().trim();
        var message=$("#message").val().trim();
        validate(name, email, message);                
    });
});

function hoverEffect(y){
    $(".work"+y).hover(function(){
        $(".title-"+y).show();
        $(".dark-bg"+y).show();
    },function(){
        $(".title-"+y).hide();
        $(".dark-bg"+y).hide();
    });
}

function validate(name, email, message){
    if(name==="" || email==="" || message===""){
        $(".receiptConfirm").hide();
        $(".emptyFields").show();
        return false;
    }
    else{
        $(".emptyFields").hide();
        $(".receiptConfirm").show();
        $(".nameConfirm").text(name);
        $("#myForm").trigger("reset"); 
        return true;
    }
}