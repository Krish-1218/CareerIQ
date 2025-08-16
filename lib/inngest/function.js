import { inngest } from "./client";

export const helloWorldFn = inngest.createFunction(
  { id: "hello-world" },
  { event: "app/hello" },
  async ({ event, step }) => {
    return { message: "Hello from Inngest 🎉", event };
  }
);
