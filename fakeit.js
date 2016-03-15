function fakeit(component, object_id, part_of_id) {

	var initial_array;
	var obj_behavior = components_list[component].behavior;
	var result_obj_array = [];
	var obj_defaults = components_list[component].defaults;

	if (object_id === false) {
		object_id = components_list[component].reference_id;
	}

	if (part_of_id === true) {
		initial_array = document.querySelectorAll('[id*="' + object_id + '"]');
	} else {
		initial_array = [];
		initial_array.push(object_id);
	}

	if (typeof object_id === "object") {
		var obj_complete = mergeObjs(obj_defaults, object_id);
		result_obj_array.push(obj_complete);
		return window[obj_behavior].apply(this, result_obj_array);
	}

	for (var i=0;i < initial_array.length; i++) {
		var _id = part_of_id ? { id: initial_array[i].id } : { id: initial_array[i] };
		var obj_complete = mergeObjs(obj_defaults, _id);
		result_obj_array.push(obj_complete);
		// console.log(result_obj_array);
	}
	return window[obj_behavior].apply(this, result_obj_array);
}

function init() {

	for (component in components_list) {
		fakeit(component, false, true);
	}
	console.log("passou o init!");
	// fakeit("button",{
	// 	id:"avancar",
	// 	target:"text9360"
	// });

	// fakeit("button",{
	// 	id:"menu_btn",
	// 	target:"menu_lateral"
	// });
	// fakeit("hidden","menu_lateral");

}


// Put your svg mockup in the html body
function mockup() {
	if (arguments[0] === undefined) { return false }
	if (arguments[0].id === undefined) { arguments = components_list["mockup"].screens; }
	if (arguments[0].url === undefined) { arguments[0] = { id: "default", url: arguments[0].id }; }
	for (var i=0; i < arguments.length; i++) {
		// Load .svg file
		Snap.ajax(arguments[i].url, "GET", function (data) {

			// Append to body document
			var mockup_target = document.body;
			var mockup_responseText = data.responseText;
			mockup_target.innerHTML = mockup_responseText;

			// Parsing data and get the mockup id // Gambiarra para pegar a id do arquivo .svg
			var parsing = Snap.parse(data);
			var mockup_id = parsing.node.ownerDocument.body.childNodes[0].nextElementSibling.id;

			var svg_mockup;
			svg_mockup = Snap("#" + mockup_id);


			init();

		});
	}
}

function hidden() {
  forEachID(arguments, function(elem) {
		var self = Snap("#" + elem.id);
		if (elem.animation) {

		}
		self.addClass("hidden");
  });
}

function button() {
  forEachID(arguments, function(elem) {

		var self = Snap("#" + elem.id);
		var aim = Snap("#" + elem.target);

		if (aim === null) {
			var complete_id = elem.id;
			var find_a_target = complete_id.search("target");
			if (find_a_target !== -1) {
				complete_id = complete_id.slice(find_a_target+7);
				aim = Snap("#" + complete_id);
			} else {
				aim = null;
			}
		}


		self.addClass("button");
		var shadow = self.filter(Snap.filter.shadow(4, 4, 6, '#000000', 1));

		self.click(function() {
		  if (aim === null) {
			console.error("The target is empty or wrong");
		  } else {
			aim.toggleClass("hidden");
		  }
		});
  });
}


function dropdown() {

}




// External functions and components

// Resig's foreach based
function forEachID(list, callback) {
  for (var n = 0; n < list.length; n++) {
    callback.call(n,list[n]);
  }
}

function mergeObjs(obj_defaults, obj_id) {
	var obj_complete = {};
	for (var attrname in obj_defaults) {
		obj_complete[attrname] = obj_defaults[attrname];
	}
	for (var attrname in obj_id) {
		obj_complete[attrname] = obj_id[attrname];
	}
	return obj_complete;
}
