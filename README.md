# fakeit, until you make it
A strange use of Snap.svg.js to make interface prototypes with svg mockups

I did it, and I keep doing this, because I want to continue creating my interface mockups with vector graphic softwares (like Illustrator and Inkscape) and easily transform the work result into testable prototypes.

Project structure
- dependencies -> a folder to store the snap.svg.js =P
- mockups -> a place to put your svg files
- styles -> a place to put your stylesheets; there's a reset css file too
- prototype.html -> here is where you reference the mockup .svg files
- fakeit.js -> here's the place where the magic happens
- settings.js -> put your definitions here

## You will need
1. A good web browser, like firefox or google chrome
2. An httpd server. I recommend use just php with command `> php -S localhost:8080`. Or you can use python `> python -m SimpleHTTPServer 8080` . If you are in the Windows, there are easy alternatives, like [Xampp](https://www.apachefriends.org/pt_br/download.html) and Node.js + http-server
3. A SVG editor. I recommend the Adobe Illustrator and the Inkscape (opensource and available for linux too \o/)

## How can you call your svg mockup in the html body
You have three alternatives:

* Call the mockup inside the html file by url:
```
<script type="text/javascript">
fakeit("mockup","mockups/mockup_original.svg");
</script>
```
* or Register the url in the `settings.js` file and call the mockups in the html:
  first in the settings.js
```
mockup: {
			behavior: "mockup",
			reference_id: "mockup",
			defaults: { multipage: false },
			screens: [
				{ url: "mockups/mockup_original.svg", id: "my-id" }
			]
	}
```
  second inside html file
```
<script type="text/javascript">
fakeit("mockup");
</script>
```
* or Call the mockup in the html with an object:
```
<script type="text/javascript">
fakeit("mockup",{ id: "second", url: "mockups/mockup_original.svg"});
</script>
```
