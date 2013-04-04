function add_card() {
	var template = $("#card-template");
	var newCard = template.clone(true, true);
	newCard.removeAttr("id");
	newCard.insertBefore(template);
}

var colors = ["card-green", "card-orange", "card-blue", "card-violet"];

function switch_color(select, value) {
	var designer = select.parent("div");
	var card = designer.find(".card");
	
	card.removeClass();
	card.addClass("card");
	card.addClass(colors[value]);
}

function document_ready() {
	// register functions 
	
	$('.color-switcher').change(function () {
		switch_color($(this), $(this).prop("selectedIndex"));
	});

	$('.add-card').click(function() {
		add_card();
	});
	
	$('.remove-card').click(function () {
		$(this).parent().remove();
	});
	
	// add first card
	add_card();
}