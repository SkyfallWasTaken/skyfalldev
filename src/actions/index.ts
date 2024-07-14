import { defineAction } from "astro:actions";
import { Octokit } from "octokit";

export const server = {
  getGitHubActivity: defineAction({
    handler: async () => {
      const octokit = new Octokit({
        auth: import.meta.env.GITHUB_TOKEN,
      });
      let events: any[] = [];
      while (true) {
        const newEvents = await octokit.rest.activity.listPublicEventsForUser({
          username: "SkyfallWasTaken",
        });
        if (newEvents.data.length === 0) {
          break;
        }
        events = [...events, ...newEvents.data];
      }

      const eventsMap: Map<string, number> = new Map();
      events.forEach((event) => {
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
          date: key.slice(0, 10),
          activities: Array(value).fill({}),
        });
      });
      console.log(array);
      return array;
    },
  }),
};
