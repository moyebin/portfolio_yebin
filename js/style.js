$(document).ready(function(){
    $(".gnb > li > a").on("click",function(e){
        console.log(this.hash);
        // let hash = this.hash;
        e.preventDefault();
        if(this.hash !== ""){
            let hash = this.hash;
            $(window).scrollTop();
            $("html, body").animate({
                scrollTop : $(hash).offset().top
            },500)
        }
    })

    $(window).scroll(function(){
        if($(this).scrollTop() < 700){
            $("#top_btn").hide();

        }else if($(this).scrollTop() < 1000){
            $("#top_btn").fadeIn(800)

        }else if($(this).scrollTop() < 3000){

        }
    });

    $(window).resize(function(){
        resizeable()
    })

    function resizeable(){
        if($(window).width() < 768){
            console.log('모바일에서 실행될 스크립트')
        }else if($(window).width() < 1200){
            console.log('태블릿에서 실행될 스크립트')
        }else{
            console.log('데스크탑에서 실행될 스크립트')
        }
    }
    resizeable()

    function test(){
        alert("test")
    }





    $('#top_btn').on("click",function(){
        $('html, body').animate({
            scrollTop : 0
        },500)
    })
    



    $(".skill_bg").each(function(i){
        let skill = $(this).find(".skill_bar");
        let num = 0;
        let percent = parseInt(skill.text());
        console.log(percent)
        skill.delay(i * 1000).animate({
            width : percent + "%"
        },function(){
            let increase = setInterval(function(){
                num++
                if(num > percent){
                    clearInterval(increase)
                }else{
                    skill.text(num + "%")
                }
            },10)
        })
    })

}); // jquery enda
var swiper = new Swiper(".mySwiper", {
      pagination: {
        el: ".swiper-pagination",
      },
    });