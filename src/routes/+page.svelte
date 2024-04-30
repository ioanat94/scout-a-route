<script lang="ts">
  // import { onMount } from "svelte";
  // import { Loader } from "@googlemaps/js-api-loader";
  // import { PUBLIC_MAPS_API_KEY } from "$env/static/public";

  import Footer from "$lib/components/Footer.svelte";
  import Sidebar from "$lib/components/Sidebar.svelte";

  // onMount(async () => {
  //   const loader = new Loader({
  //     apiKey: PUBLIC_MAPS_API_KEY,
  //     version: "weekly",
  //     libraries: ["places"],
  //   });

  //   const mapOptions = {
  //     center: { lat: -34.397, lng: 150.644 },
  //     zoom: 4,
  //   };

  //   const map = document.getElementById("map");

  //   if (map) {
  //     loader
  //       .importLibrary("maps")
  //       .then(({ Map }) => {
  //         new Map(map, mapOptions);
  //       })
  //       .catch((e) => {
  //         console.error(e);
  //       });
  //   } else {
  //     console.error("Map element not found");
  //   }
  // });
</script>

<div class="text-black h-screen flex flex-col">
  <div id="header" class="h-12 bg-primary">Header</div>
  <div id="content" class="grid grid-cols-4 grow">
    <Sidebar />
    <div id="map" class="col-span-3 bg-yellow-200">
      <div id="map-canvas">Map</div>
    </div>
  </div>
  <Footer />
</div>
