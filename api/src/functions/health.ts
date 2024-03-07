import { app } from "@azure/functions";

app.http("health", {
    methods: ["GET", "POST"],
    authLevel: "anonymous",
    handler: async () => {
        return { status: 200 };
    },
});