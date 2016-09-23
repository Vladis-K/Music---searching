jQuery(document).ready(function(){ 


    var showDuration = function(duration){

		var min = Math.floor(duration/60);
		var sec = (duration % 60);
		var mod = sec<2 ? sec = "0" + sec : sec;
		var timesong = ( min + ":"+ mod );

		return timesong
    };

      console.log( showDuration(241) );


	// var seconds=241;
	// console.log(new Date(seconds*1000).toUTCString().split(/ /)[4])


	var flickerAPI ="https://api.vk.com/method/audio.search?q=баста&access_token=70ff98fc34650148a7f6da218238844ae004f2323e16a6b93c3639cea330d93f59acb6b8f83ce30cb9836&v=V";


	$.ajax({
		method: "GET",
		url: flickerAPI,
		data: null,
		dataType: "jsonp",

		success: function(data){
					
		var items = [];

		$.each(data.response, function(){
			// console.log(this.title);
			items.push( "<tr>" + "<td>" + this.artist + "</td>" + "<td>" + this.title + "</td>" + "<td>" + this.duration + "</td>" + "</tr>" );
			});

			$( "<tbody/>", {
				html: items.join( "" )
				}).appendTo( "table" );
			  
		}

	})

});
