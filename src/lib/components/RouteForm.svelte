<script lang="ts">
  let distance: number;
  let unit: string;
  let errors: { [key: string]: string };

  async function getRoute() {
    if (!distance) {
      errors = {
        distance: "Distance is required",
      };
      return;
    } else if (distance <= 0) {
      errors = {
        distance: "Distance must be greater than 0",
      };
      return;
    } else if (!unit) {
      errors = {
        unit: "Unit is required",
      };
      return;
    } else {
      errors = {};
    }

    const body = {
      distance,
      unit,
    };

    const response = await fetch("/api/get-route", {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "content-type": "application/json",
      },
    });

    const res = await response.json();

    console.log("res: ", res);
  }
</script>

<form id="route-form" class="flex flex-col gap-4">
  <label class="form-control w-full">
    <div class="label pb-1">
      <span class="label-text">Starting location</span>
    </div>
    <input
      readonly
      type="text"
      placeholder="Click on the map to choose"
      class="input input-md input-bordered w-full cursor-not-allowed focus:outline-none"
    />
  </label>
  <div class="flex items-end gap-8">
    <label class="form-control w-1/2">
      <div class="label pb-1">
        <span class="label-text">Distance</span>
      </div>
      <input
        bind:value={distance}
        type="number"
        class="input input-md input-bordered w-full focus:outline-none focus:border-primary"
      />
    </label>
    <select
      bind:value={unit}
      class="select select-bordered w-1/2 focus:outline-none focus:border-primary"
    >
      <option selected>kilometers</option>
      <option>minutes</option>
      <option>steps</option>
    </select>
  </div>
  {#if errors?.distance}
    <p class="text-sm text-error p-0 -mt-3">{errors.distance}</p>
  {/if}
  {#if errors?.unit}
    <p class="text-sm text-error p-0 -mt-3">{errors.unit}</p>
  {/if}
  <button type="button" on:click={getRoute} class="btn btn-primary w-max mt-2"
    >Generate route</button
  >
</form>
