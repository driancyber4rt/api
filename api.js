function get_param(name){
	var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
	return results[1] || 0;
}

if( get_param("prod") != "0" ){
	var a = ['_', 'A', 'D', 'W', '5', 'L', 'S'];
	var b = ['aff_short_key', 'aliexpress', 'deep', 'link'];
	var c = ['aliexpress'];
	var mykey 	= a[0] + a[1] + a[2] + a[3] + a[4] + a[5] + a[6];
	// console.log('https://s.click.'+b[1]+'.com/'+b[2]+'_'+b[3]+'.htm?'+b[0]+'='+mykey+'&dl_target_url=https://'+c[0]+'.com/item/'+get_param("prod")+'.html');
	window.location.href = 'https://s.click.'+b[1]+'.com/'+b[2]+'_'+b[3]+'.htm?'+b[0]+'='+mykey+'&dl_target_url=https://'+c[0]+'.com/item/'+get_param("prod")+'.html';
}
