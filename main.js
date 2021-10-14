// 輪播圖
        // 1.取得小圓點且背景顏色跟著動
        var box = document.getElementsByClassName('box')[0];
        var spans = document.getElementsByClassName('direction');
        var ul = box.children[0];
        box.onmouseover = function(){
            for(var i = 0; i < spans.length; i++){
                spans[i].style.display = 'block';
            }
        }
        box.onmouseout = function(){
            for(var i = 0; i < spans.length; i++){
                spans[i].style.display = 'none';
            }
        }
        document.getElementsByClassName('btnRight')[0].onclick = function(){
            target = target + (-900);
        }

        document.getElementsByClassName('btnLeft')[0].onclick = function(){
            target = target + 900;
        }

        var leader = 0;
        var target = 0;
        setInterval(function(){
            if (target < -(900*4)){
                target = -(900*4);
            }else if(target >= 0){
                target = 0;
            };
            leader = leader + (target - leader)/10;
            ul.style.left = leader + "px";
        }, 30)

         // 1.取得小圓點且背景顏色跟著動
        var ol = box.children[2];
        var lis = ol.children; 

        for(var i = 0; i < lis.length; i++){
            lis[i].index = i
            lis[i].onmouseover = function(){
                for(var j = 0; j < lis.length; j++){
                    lis[j].className = "";
                }
                this.className = 'bgc';
                target = -900 * (this.index)
            }
        }

        // 圖片和小圓點對應
        var leader = 0;
        var target = 0;
        setInterval(function(){
            leader = leader + (target - leader)/10;
            ul.style.left = leader + 'px';
        },20)



        // 計時器
        function getTimeRemaining(endtime) {
            const total = Date.parse(endtime) - Date.parse(new Date());
            const seconds = Math.floor((total / 1000) % 60);
            const minutes = Math.floor((total / 1000 / 60) % 60);
            const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
            const days = Math.floor(total / (1000 * 60 * 60 * 24));

            return {
              total,
              days,
              hours,
              minutes,
              seconds,
            };
    }

        function initializeClock(id, endtime) {
          const clock = document.getElementById(id);
          const daysSpan = clock.querySelector(".days");
          const hoursSpan = clock.querySelector(".hours");
          const minutesSpan = clock.querySelector(".minutes");
          const secondsSpan = clock.querySelector(".seconds");
        
          function updateClock() {
            const t = getTimeRemaining(endtime);
        
            daysSpan.innerHTML = t.days;
            hoursSpan.innerHTML = ("0" + t.hours).slice(-2);
            minutesSpan.innerHTML = ("0" + t.minutes).slice(-2);
            secondsSpan.innerHTML = ("0" + t.seconds).slice(-2);
        
            if (t.total <= 0) {
              clearInterval(timeinterval);
            }
          }
      
          updateClock();
          const timeinterval = setInterval(updateClock, 1000);
        }

        const deadline = new Date(
          Date.parse(new Date()) + 15 * 24 * 60 * 60 * 1000
        );
        initializeClock("clockdiv", deadline);




        // 商品分類
       var tabs = document.querySelectorAll(".tabs ul li");
        var tab_wraps = document.querySelectorAll(".tab_wrap");

        tabs.forEach(function (tab, tab_index) {
            tab.addEventListener("click", function () {
                tabs.forEach(function (tab) {
                    tab.classList.remove("active");
                })
                tab.classList.add("active");

                tab_wraps.forEach(function (content, content_index) {
                    if (content_index == tab_index) {
                        content.style.display = "block";
                    }
                    else {
                        content.style.display = "none";
                    }
                })

            })
        })


        // 商品搜尋框
        var that = $(this);
        var mSearch = $("#m-search");
        $("#search-input").bind("change paste keyup", function(){
          var value = $(this).val();
          if (!value) {
            mSearch.html("");
            return;
          }; 
          mSearch.html('.wrap:not([data-index*="' + value.toLowerCase() + '"]) {display: none;}');
        });


        // 當用戶點擊按鈕時，通過動畫效果返回頭部
        $(function () {

            var $win = $(window);

            var $backToTop = $('.topp');
            $backToTop.click(function () {
            
            $('html, body').animate({scrollTop: 0}, 400);
            
            });

        });


        $(".tkyy").click(function(event){
            event.stopPropagation(); //停止事件冒泡
          $(".marsk-container").toggle();
      });
      //點擊空白處隱藏彈出層
         $("body").click(function(event){
              var _con = $('.tkyy_con');   // 設置目標區域
              if(!_con.is(event.target) && _con.has(event.target).length ==0){ 
                $('.marsk-container').hide();          //淡出消失
              }
        });