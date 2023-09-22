var a = location.href.split('/');
var message = window.prompt("メッセージを入力してください。((略)/ここ/../get%5image/(略))", "");
if(a[a.length - 3] == "projects") {
	var project_id = a[a.length - 2];
	var result = "https://scratch.mit.edu/" + message + "/../get%5image/project/" + project_id + "_5000x5000.png";
	navigator.clipboard.writeText(result);
	alert("コピーしました！");
}else if(a[a.length - 3] == "studios") {
		var studio_id = a[a.length - 2];
		var result = "https://scratch.mit.edu/" + message + "/../get%5image/gallery/" + studio_id + "_5000x5000.png";
		navigator.clipboard.writeText(result);
		alert("コピーしました！");
}else{
	alert("スタジオまたはプロジェクトページを開いてください。");
}
