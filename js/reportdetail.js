function openrpt(id,cate){
	var contentstr = "<div id=\"documentViewer\" style=\"width:580px;height:650px\"></div>";
	if(cate == "zh"){
		layer.open({
		type: 1,
		title: '中文报告',
		shade: 0,
		maxmin: false,
		area: ['600px', '750px'],
		resize: false,
		btn: ['关闭'],
		btnAlign: 'c',
		content: contentstr
	  });
	  var filename = id + ".pdf.swf";
	   $('#documentViewer').FlexPaperViewer(
            { config : {

                SWFFile : escape('/Service/docs/'+ filename),

                Scale : 1.0,
                ZoomTransition : 'easeOut',
                ZoomTime : 0.5,
                ZoomInterval : 0.2,
                FitPageOnLoad : true,
                FitWidthOnLoad : true,
                FullScreenAsMaxWindow : false,
                ProgressiveLoading : false,
                MinZoomSize : 0.2,
                MaxZoomSize : 5,
                SearchMatchAll : false,
                InitViewMode : 'Portrait',
                RenderingOrder : 'flash',
                StartAtPage : '',

                ViewModeToolsVisible : true,
                ZoomToolsVisible : true,
                NavToolsVisible : true,
                CursorToolsVisible : true,
                SearchToolsVisible : true,
                WMode : 'window',
                localeChain: 'en_US'
            }
		});
	}
	else{
		layer.open({
		type: 1,
		title: 'Report Detail',
		shade: 0,
		maxmin: false,
		area: ['600px', '750px'],
		resize: false,
		btn: ['Close'],
		btnAlign: 'c',
		content: contentstr
	  });
	  var filename = id + "-en.pdf.swf";
	   $('#documentViewer').FlexPaperViewer(
            { config : {

                SWFFile : escape('/Service/docs/'+ filename),

                Scale : 1.0,
                ZoomTransition : 'easeOut',
                ZoomTime : 0.5,
                ZoomInterval : 0.2,
                FitPageOnLoad : true,
                FitWidthOnLoad : true,
                FullScreenAsMaxWindow : false,
                ProgressiveLoading : false,
                MinZoomSize : 0.2,
                MaxZoomSize : 5,
                SearchMatchAll : false,
                InitViewMode : 'Portrait',
                RenderingOrder : 'flash',
                StartAtPage : '',

                ViewModeToolsVisible : true,
                ZoomToolsVisible : true,
                NavToolsVisible : true,
                CursorToolsVisible : true,
                SearchToolsVisible : true,
                WMode : 'window',
                localeChain: 'en_US'
            }}
		);
	}
}
function opencert(rptid){
	var contentstr = "<img src='/Report/cert/"+rptid+"/0.jpg' width='780px' />";
	layer.open({
		type: 1,
		title: '型号备案证书',
		maxmin: false,
		area: ['800px', '610px'],
		content: contentstr
	 });
}
function openpasscert(rptid){
	var contentstr = "<img src='/Report/passcert/"+rptid+".jpg' width='480px' />";
	layer.open({
		type: 1,
		title: '试验合格证书',
		maxmin: false,
		area: ['500px', '680px'],
		content: contentstr
	 });
}