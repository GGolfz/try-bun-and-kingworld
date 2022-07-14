import KingWorld from "kingworld";

new KingWorld().get("/ping", () => ({
    message: "pong",
    timestamp: new Date().toISOString()
})).listen(3000);

console.log("Server running on port 3000");