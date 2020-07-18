//Click on item, checks off list item.
$("ul").on("click", "li", function(){
    $(this).toggleClass("listCheck");
});

//Click on X to delete specific list item.
$("ul").on("click", "span",function(e){
    $(this).parent().fadeOut(500,function(){
        $(this).remove();
    });
        e.stopPropagation();
});

//Add new items to list through text input.
$("input[type='text']").keypress(function(e){
    if (e.which === 13){
        //Grabs text input
        let toDoText = $(this).val();
        //Clears input text
        $(this).val("");
        //Appends new list item
        $("ul").append("<li><span><i class='fa fa-trash'></i> </span>" + toDoText + "</li>");
    }
});

//Hide Input element on click
$(".fa-plus").click(function(){
    $("input[type='text']").fadeToggle();
});
