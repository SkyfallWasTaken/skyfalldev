<script lang="ts">
  import ActivityCalendarWidget from "activity-calendar-widget/svelte";
  import { Octokit } from "octokit";

  async function loadGitHubActivity() {
    const octokit = new Octokit();
    const events = await octokit.rest.activity.listPublicEventsForUser({
      username: "SkyfallWasTaken",
    });

    const eventsMap: Map<string, number> = new Map();
    events.data.forEach((event) => {
      if (!event.created_at) return;

      let count = eventsMap.get(event.created_at);
      if (!count) {
        eventsMap.set(event.created_at, 1);
      } else {
        count += 1;
        eventsMap.set(event.created_at, count);
      }
    });

    const array: { date: string; activities: any[] }[] = [];
    eventsMap.forEach((value, key) => {
      array.push({
        date: key.slice(0, 11),
        activities: Array(value).fill({}),
      });
    });
    console.log(array);
    return array;
  }
</script>

<div class="w-full">
  {#await loadGitHubActivity()}
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
