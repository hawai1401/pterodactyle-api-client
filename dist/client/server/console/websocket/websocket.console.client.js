import HttpClient from "../../../../class/HttpClient.js";
import WebSocket from "ws";
export default class WebsocketClient {
    httpClient;
    panelUrl;
    constructor(httpClient, panelUrl) {
        this.httpClient = httpClient;
        this.panelUrl = panelUrl;
    }
    credentials(id) {
        return this.httpClient.request("GET", `/client/servers/${id}/websocket`);
    }
    async connect(id, { onConsoleOutput, onStats, onStatusChange, } = {}) {
        const credentials = await this.credentials(id);
        return new Promise((resolve, reject) => {
            const socket = new WebSocket(credentials.data.socket, {
                headers: {
                    Origin: this.panelUrl.origin,
                },
            });
            socket.addEventListener("open", () => {
                socket.send(JSON.stringify({
                    event: "auth",
                    args: [credentials.data.token],
                }));
                socket.addEventListener("message", (event) => {
                    const data = JSON.parse(event.data.toString());
                    if (data.event === "stats" && onStats)
                        onStats(JSON.parse(data.args[0]));
                    if (data.event === "status" && onStatusChange)
                        onStatusChange(data.args[0]);
                    if (data.event === "console output" && onConsoleOutput)
                        onConsoleOutput(data.args[0]);
                });
                setTimeout(() => {
                    resolve({
                        sendCommand(command) {
                            socket.send(JSON.stringify({
                                event: "send command",
                                args: [command],
                            }));
                        },
                        sendSignal(state) {
                            socket.send(JSON.stringify({
                                event: "set state",
                                args: [state],
                            }));
                        },
                    });
                }, 1000);
            });
            socket.addEventListener("error", (err) => {
                reject(err);
            });
        });
    }
}
