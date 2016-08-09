/**
 * Binding for the jquery plugin 'Progression.js'(http://jquerycards.com/forms/date-time/progression-js/), so if you want to use this binding you have to include the required js files for this
 * jquery plugin.
 **/
 ko.bindingHandlers.progression = { 
	init: function(element, valueAccessor) { 
			var options = valueAccessor() || {}; 
			$(element).progression(options); 
		  } 
};
