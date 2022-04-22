self.addEventListener("install", () => {
  console.log("SW Installed");
});

self.addEventListener("activate", () => {
  console.log("SW activated");
});
