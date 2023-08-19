// Dynamic load the Bing Maps Key and Script
// Get your own Bing Maps key at https://www.microsoft.com/maps
(async () => {
  let script = document.createElement("script");
  script.setAttribute(
    "src",
    "https://www.bing.com/api/maps/mapcontrol?callback=GetMap&key=Agv3yWf-P4aPelrHvZZfvISIRN2zWqCp885IYh2H_HnUpAjvzOhOXJRPiLUef4Gl"
  );
  document.body.appendChild(script);
})();
