

$(document).ready(function () {
	var getDaysInMonth = function(Month,Year) {
	 return new Date(Year, Month,0).getDate();


	};
	
	var D = new Date();
	var Month   = D.getMonth();
	var Day     = D.getDate();
	var Year    = D.getFullYear();
	var numbers = getDaysInMonth(Month,Year);
	
	for (var i = 1; i <= numbers;i++) {
		var classname = '';
	
		if(i == Day)
		{
			classname = 'toDay';
		}
		else if(i>Day)
		{
			classname = 'waiting';
		}
		
		var block = "<div class='col-sm-2'><div class='Day "+classname+"'>"+i+"</div></div>"
		$( ".allDays" ).append(block);
	}
	
	$(".toDay").click(function(){
		$.getJSON('http://quotes.stormconsultancy.co.uk/random.json', function(data) {
    		$(".details").text(data.quote);
    		$( ".alertbox" ).slideDown( "slow", function() {});
		});
	});
	
				$(".waiting").click(function(){
					$(".details").text("Whats your plan this Day");
					$( ".alertbox" ).slideDown( "slow", function() {});
				});


							$(".exit").click(function(){
								$( ".alertbox" ).slideUp( "slow", function() {
								
								});
	});
});
