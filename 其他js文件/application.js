(function ($) {
    var Application = function () {

    };
    //window.mainUrl = "http://192.168.40.89:8080";

    window.mainUrl = "http://132.232.147.188/order";


    $(function () {
        localStorage.token = "c5ff82e8-8c47-44c5-962f-863b86028e38";
        localStorage.userId = "1";
        localStorage.merchantId = "1";
        localStorage.userName = "马晓东";
        localStorage.image_ur = "https://image-1255716599.cos.ap-chengdu.myqcloud.com/goods/p3.png";
        localStorage.merchantName = "西安新路网络科技有限公司";
        localStorage.phone = "13895585204";
        localStorage.jifen = "10";
        localStorage.tableNumber = "103";

        localStorage.wxId = "110";
        localStorage.size = 20;

        getBanner();
    });

    function getBanner() {
        var html = "";
        $.ajax({
            url: mainUrl + "/banner/list/" + localStorage.merchantId + "/true",
            type: "get",
            contentType: "application/json",
            dataType: 'json',
            cache: false,
            async: true,
            beforeSend: function (XMLHttpRequest) {
                XMLHttpRequest.setRequestHeader("token", localStorage.token);
            },
            success: function (result) {
                if (result.status === 0) {
                    for (var i = 0; i < result.data.length; i++) {
                        html += "  <div class=\"swiper-slide\">\n" +
                            "            <a href=\"#\">\n" +
                            "                <img src=\"" + result.data[i].image_url + "\"/>\n" +
                            "            </a>\n" +
                            "        </div>\n" +
                            "        <div class=\"swiper-slide\">\n" +
                            "            <a href=\"#\">\n" +
                            "                <img src=\"" + result.data[i].image_url + "\"/>\n" +
                            "            </a>\n" +
                            "        </div>";
                    }
                    $("#swiper-wrapper").empty().append(html);

                } else {
                    alert(result.msg)
                }
            }
        });
    }


    $.application = $.application || new Application();


})(jQuery);