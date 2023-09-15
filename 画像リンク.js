const url = location.href.sprit('/');
if (url[url.length - 3] == "projects") {
	let project_id = url[url.length - 4];
	let result = "https://scratch.mit.edu//../get%5image/project/" + project_id + "_5000x5000.png"
	copyToClipboard(result);
	alert("クリップボードへコピーしました。")
} else {
	if (url[url.length - 3] == "studios") {
		let studio_id = url[url.length - 4];
		let result = "https://scratch.mit.edu//../get%5image/gallery/" + studio_id + "_5000x5000.png";
		copyToClipboard(result);
		alert("クリップボードへコピーしました。")
	}
} else {
	alert("スタジオまたはプロジェクトページを開いてください。");
}
