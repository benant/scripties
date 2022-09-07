;(function() {

    const url = window.location.href; 
    const max_visit_no = 30000; // 작동 중지시킬 방문자수
    const min_time = 1500; // 최소 실행 간격시간 1초 = 1000
    const max_time = 5000; // 최대 실행 간격시간 1초 = 1000


    const mt_rand = function(min,max){var argc=arguments.length;if(argc===0){min=0;max=2147483647;}else if(argc===1){throw new Error('Warning: mt_rand() expects exactly 2 parameters, 1 given');} return Math.floor(Math.random()*(max-min+1))+min;}
	
  	const remove_cookie = () => {
        (function () {
            var cookies = document.cookie.split("; ");
            for (var c = 0; c < cookies.length; c++) {
                var d = window.location.hostname.split(".");
                while (d.length > 0) {
                    var cookieBase = encodeURIComponent(cookies[c].split(";")[0].split("=")[0]) + '=; expires=Thu, 01-Jan-1970 00:00:01 GMT; domain=' + d.join('.') + ' ;path=';
                    var p = location.pathname.split('/');
                    document.cookie = cookieBase + '/';
                    while (p.length > 0) {
                        document.cookie = cookieBase + p.join('/');
                        p.pop();
                    };
                    d.shift();
                }
            }
        })(); 
    }

    const visit_site = (url) => {
        setTimeout(function(){  
            const vno = document.querySelector('.BroadcastStatusBadge_number_LXTwp').innerHTML.replace(/[^0-9]/g,'');
            if(vno>=max_visit_no) {
                // alert('최대 방문자수에 도달해 중지합니다.');
            } else {
                remove_cookie();
                window.location.href = url;
            }
        }, mt_rand(min_time, max_time));
    }

    visit_site(url);

})();

