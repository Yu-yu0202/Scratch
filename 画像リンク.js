const a = location.href.split('/');
if(a[a.length - 3] == "projects") {
	let project_id = a[a.length - 4];
	let result = "https://scratch.mit.edu//../get%5image/project/" + project_id + "_5000x5000.png";
	navigator.clipboard.writeText(result).then( ()=>{
		alert("クリップボードにコピーしました！")
	}, ()=>{
		alert("コピーに失敗しました...")
	});
}else if(a[a.length - 3] == "studios") {
		let studio_id = a[a.length - 4];
		let result = "https://scratch.mit.edu//../get%5image/gallery/" + studio_id + "_5000x5000.png";
		navigator.clipboard.writeText(result).then( ()=>{
			alert("クリップボードにコピーしました！")
		}, ()=>{
			alert("コピーに失敗しました...")
		});
}else{
	alert("スタジオまたはプロジェクトページを開いてください。");
}
