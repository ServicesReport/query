$(document).ready(function() {
    //鍒ゆ柇绐楀彛澶у皬锛屾坊鍔犺緭鍏ユ鑷姩瀹屾垚
    var wid = $("body").width();
    if (wid < 640) {
        $(".wd").attr('autocomplete', 'off');
    }else{
    	$(".wd").focus();
    }
    //鎸夐挳
    $('.button').click(function(){
        wd = $(".wd").val();
        wd = $.trim(wd);
       if (wd == "" || wd == null) {
                layer.msg('鏌ユ壘鍐呭涓嶈兘涓虹┖', {icon: 2});
            } else {
                get_cnas(wd,1,1);
            }
    return false;
})

});


/*璋冪敤cnas鏁版嵁*/
function get_cnas(key,page=1,flag){
    var load = layer.load();
    var startIndex = 10*(page-1);
    var str = "&key="+key;
    var url = "/pdf.php?";
    url_record = str
    str = "startIndex="+startIndex+"&sizePerPage=10"+str;
    url = url+ str;
    $.ajax({
        url:url,
        dataType:'json',
        error:function(){
            layer.close(load);
            console.log('鏁版嵁璋冨彇閿欒');
            layer.msg('鏁版嵁璋冨彇閿欒', {icon: 5});
        },
        success:function(res){
            layer.close(load);
            var total = res['totalSize'];
            if (total == 0){
                layer.msg('鏈悳绱㈠埌鐩稿叧鏁版嵁', {icon: 5});
               
            }else{
                $('.result').show();
              $('.result table').show();
                $('.result table tr').empty();
                 var page1 = Math.ceil(total/10);
               console.log(res);
                var rows = res['data'];
             //   console.log(res['data']);
                $(".result table").append("<tr><td>搴忓彿</td><td>鎶ュ憡缂栧彿</td><td>濮旀墭鏂�</td><td>鎿嶄綔</td></tr>");
                for(i = 0;i<rows.length;i++){
                    if(!rows[i]['local']){
                        var local = '';
                    }else{
                        var local = rows[i]['local'];
                    }
                    $(".result table").append("<tr><td>"+(i+1)+"</td><td>"+rows[i]['fBillID_A']+"</td><td>"+rows[i]['fReportWTFName']+"</td><td><a href=\"javascript:;\" onclick=\"view_pdf('"+rows[i]['fBillID_A']+"')\">鏌ョ湅</a> | <a href=\"javascript:;\" onclick=\"view_pic('"+rows[i]['fBillID_A']+"')\">鏌ョ湅鐜板満鐓х墖</a></td></tr>");
                }
              str='';
                if (page1 > 1){
                    var str = '<p>鍏� '+total+' 鏉�,鍏�  '+page1+' 椤�, 褰撳墠绗� '+page+' 椤� </p>';
                    if (page < page1){
                        var next = '<a href="javascript:;" onclick="get_cnas(\''+key+'\','+(page+1)+',1)">涓嬩竴椤�</a>';
                    }else{
                        var next = '';
                    }
                    if(page > 1){
                        var pre = '<a href="javascript:;" onclick="get_cnas(\''+key+'\','+(page-1)+',1)">涓婁竴椤�</a>';
                    }else{
                        var pre = '';
                    }
                
                }
				  str = str+pre+next;
              if(str != 'undefinedundefined'){
                $('.page11').html(str);
              }

            }
           
        }
    });
}
function view_pdf(pdf){
    layer.open({
      type: 2,
      title: pdf+'棰勮',
      shadeClose: true,
      shade: 0.8,
      area: ['60%', '100%'],
      content: 'view/img.php?pdf='+pdf //iframe鐨剈rl
    }); 
}
function IsPC() {
    var userAgentInfo = navigator.userAgent;
    var Agents = ["Android", "iPhone",
                "SymbianOS", "Windows Phone",
                "iPad", "iPod"];
    var flag = true;
    for (var v = 0; v < Agents.length; v++) {
        if (userAgentInfo.indexOf(Agents[v]) > 0) {
            flag = false;
            break;
        }
    }
    return flag;
}
function view_pic(pic){
	layer.open({
      type: 2,
      title: pdf+'棰勮',
      shadeClose: true,
      shade: 0.8,
      area: ['60%', '100%'],
      content: 'view/pic.php?pic='+pic //iframe鐨剈rl
    }); 
}