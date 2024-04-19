<script lang="ts">
  import RouteForm from "./RouteForm.svelte";
</script>

<div data-testid="sidebar" class="flex flex-col gap-10 py-10 px-8">
  <div data-testid="welcome" class="flex flex-col gap-5">
    <h1 class="text-2xl font-semibold">Welcome to Scout-A-Route!</h1>
    <p class="text-base">
      This application will generate a walking route for you based on your starting position and
      distance of choice.
    </p>
    <p class="text-base">
      Start by selecting a starting point on the map. Then choose how many steps, minutes or
      kilometers you would like to walk and click the "Generate route" button.
    </p>
  </div>
  <RouteForm />
</div>
