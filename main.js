$(document).ready(function(){

    $(".btn").click(function(){

        var num =$(".num").val();

        if (num>=1 && num<=4) {
        num=num-1;
        var color=$('input[name="colors"]:checked').val();
        for(var i=0; i<5; i++){
            if (i==num) {
                $("tr td:eq("+num+")").css("background", "white");        
            }else{
                $("tr td:eq("+i+")").css("background", color);        
            }
        }
        $(".num").val(" ");

        }
        
    });
})