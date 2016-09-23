jQuery(document).ready(function(){ 


		// var flickerAPI ="https://api.vk.com/method/audio.search?q=eric+prydz&access_token=80ecf46f9d4361a62493fa109ab9a09b9fdbf5f03c323ebf66900c4e40edc2aa2f21d745a8d233bc737f8&v=V";


   		function timeWell(duration){
			var min = Math.floor(duration/60);
			var sec = (duration % 60);
			var mod = sec<=9 ? sec = "0" + sec : sec;
			var timesong = ( min + ":"+ mod );
			return timesong;
    	};


		 $('#searchForm').on( "submit", function(event){

			$("tbody").html("");
			event.preventDefault();
			var $textInput = $('input:text');
 			var getText = $textInput.serialize();
			if (getText===""){
				alert("Введите данные!");
			}

			console.log(getText);

			var searchLink = "https://api.vk.com/method/audio.search?" + getText +"&access_token=80ecf46f9d4361a62493fa109ab9a09b9fdbf5f03c323ebf66900c4e40edc2aa2f21d745a8d233bc737f8&v=V";


		$.ajax({
			method: "GET",
			url: searchLink,
			data: null,
			dataType: "jsonp",
			// beforeSend: function(){
			// },
			success: function(data){
			var items = [];

			var fine = data.response.shift();

			$.each(data.response, function(){

			// console.log(this.title);

				items.push( "<tr>" + "<td>" + this.artist + "</td>" + "<td>" + this.title + "</td>" + "<td>" + timeWell(this.duration) + "</td>" + "</tr>" );
				});

				$( "<tbody/>", {
					html: items.join( "" )
					}).appendTo( "table" );
			},

			error: function(){
			alert("Sorry we can't find this file.");
			}

		});
	});
});
