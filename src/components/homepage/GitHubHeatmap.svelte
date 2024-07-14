<script lang="ts">
  /* import { actions } from "astro:actions"; */
  import ActivityCalendarWidget from "activity-calendar-widget/svelte";
</script>

<div class="w-full">
  {#await actions.getGitHubActivity()}
    <p>Give us a mo...</p>
  {:then data}
    <ActivityCalendarWidget daysToRender={365} {data} levelColorMode={"dark"} />
  {/await}
</div>

<style>
  img {
    width: 82px;
  }
</style>
