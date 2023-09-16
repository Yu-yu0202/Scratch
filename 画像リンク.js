const url = location.href.split('/');
if(url[url.length - 3] == "projects") {
	let project_id = url[url.length - 4];
	let result = "https://scratch.mit.edu//../get%5image/project/" + project_id + "_5000x5000.png";
	navigator.clipboard.writeText(result).then( ()=>{
		alert("クリップボードにコピーしました！")
	}, ()=>{
		alert("コピーに失敗しました...")
	});
}else if(url[url.length - 3] == "studios") {
		let studio_id = url[url.length - 4];
		let result = "https://scratch.mit.edu//../get%5image/gallery/" + studio_id + "_5000x5000.png";
		navigator.clipboard.writeText(result).then( ()=>{
			alert("クリップボードにコピーしました！")
		}, ()=>{
			alert("コピーに失敗しました...")
		});
}else{
	alert("スタジオまたはプロジェクトページを開いてください。");
}
