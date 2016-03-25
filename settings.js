/* Define your mockup's components settings */

var components_list = {

	mockup: {
			behavior: "mockup",
			reference_id: "mockup",
			defaults: { multipage: false },
			screens: [
				{ url: "mockups/main.svg", id: "main" }
			]
	},
	button: {
			behavior: "button",
			reference_id: "btn",
			defaults: { target: undefined }
	},
	hidden: {
			behavior: "hidden",
			reference_id: "hidden",
			defaults: { animation: false }
	},
	dropdown: {
		behavior: "dropdown",
		reference_id: "drpdn",
		defaults: { combo: false, animation: false }
	}



};
