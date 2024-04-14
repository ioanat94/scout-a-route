<script lang="ts">
  import { onMount } from "svelte";
  import { Loader } from "@googlemaps/js-api-loader";
  import { PUBLIC_MAPS_API_KEY } from "$env/static/public";

  onMount(async () => {
    const loader = new Loader({
      apiKey: PUBLIC_MAPS_API_KEY,
      version: "weekly",
      libraries: ["places"],
    });

    const mapOptions = {
      center: { lat: -34.397, lng: 150.644 },
      zoom: 4,
    };

    const map = document.getElementById("map");

    if (map) {
      loader
        .importLibrary("maps")
        .then(({ Map }) => {
          new Map(map, mapOptions);
        })
        .catch((e) => {
          console.error(e);
        });
    } else {
      console.error("Map element not found");
    }
  });
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
<button class="btn btn-primary">Hello daisyUI</button>
<div id="map" style="width: 100%; height: 100%; position: absolute;">
  <div id="map-canvas"></div>
</div>
