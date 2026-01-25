import ActivityClient from "./activity/activity.client.js";
import ConsoleClient from "./console/console.client.js";
import ImageClient from "./image/image.client.js";
import { AllocationClient, DatabaseClient, ScheduleClient, SubuserClient, } from "./index.js";
import PowerClient from "./power/power.client.js";
import RessourceClient from "./ressource/ressource.client.js";
import StartupClient from "./startup/startup.client.js";
import { z } from "zod";
export default class Servers {
    httpClient;
    panelUrl;
    activity;
    allocation;
    console;
    database;
    image;
    ressource;
    power;
    schedule;
    startup;
    subser;
    constructor(httpClient, panelUrl) {
        this.httpClient = httpClient;
        this.panelUrl = panelUrl;
        this.activity = new ActivityClient(httpClient);
        this.allocation = new AllocationClient(httpClient);
        this.console = new ConsoleClient(httpClient, panelUrl);
        this.database = new DatabaseClient(httpClient);
        this.image = new ImageClient(httpClient);
        this.ressource = new RessourceClient(httpClient);
        this.power = new PowerClient(httpClient);
        this.schedule = new ScheduleClient(httpClient);
        this.startup = new StartupClient(httpClient);
        this.subser = new SubuserClient(httpClient);
    }
    list({ page, per_page, }) {
        return this.httpClient.request("GET", `/client?page=${page ?? 1}&per_page=${per_page ?? 50}`);
    }
    info(id) {
        return this.httpClient.request("GET", `/client/servers/${id}`);
    }
    edit(id, args) {
        const schema = z.object({
            name: z.string().min(1).max(255),
            description: z.string().max(500).optional(),
        });
        const { name, description } = schema.parse(args);
        return this.httpClient.request("POST", `/client/servers/${id}/settings/rename`, { name, description });
    }
    reinstall(id) {
        return this.httpClient.request("POST", `/client/servers/${id}/settings/reinstall`);
    }
}
