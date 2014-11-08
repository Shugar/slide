

var addHuman = function(addHumans){
	$('.people').append( '<div class="human icon-person"></div>' );
};


var getCount = function(countHumans){
	var countHumans =	$( ".human" ).length; 
	return countHumans;
}

var removeHuman = function(removeHumans){
	var countHumans =	$( ".human" ).length;
	var human = $($('.human')[-1,0]);
	$(human).remove();
};

var showHumansNow = function(showHumans){
	var countHumans =	$( ".human" ).length; 
	$('.count').text( countHumans );
}

var addManyHumans = function(addingManyHumans){
	if(getCount() < 3) {
		for(i = 0; i < 5; i++){
			addHuman()
		}
	}
}

var drawHumans = function(youNeed){
	if(getCount() > youNeed){
		for(i = getCount(); i > youNeed; i--){
			removeHuman();
		}
	}
	else
	{	
		for(i=getCount(); i < youNeed;i++){
		addHuman();
		}
	}
	showHumansNow();
}
