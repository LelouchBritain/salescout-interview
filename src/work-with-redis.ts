import redis from "redis";
// Write a script that:
// 1. Connects to Redis.
// 2. Saves the keys with their values.
// 3. Reads and outputs values for a given key.

// Use redis library

const client = redis.createClient({
  url: "redis://localhost:6379",
});

client.on("connect", () => {
  console.log("Connected to Redis");
});

client.on("error", (err) => {
  console.error("Error connecting to Redis:", err);
});

async function manageRedis(): Promise<void> {
  // Your code goes here
  try {
    await client.connect();

    await client.set("name", "Alice");
    await client.set("age", "30");
    await client.set("city", "Unicorn");
    console.log("Keys with values have been saved.");

    const name = await client.get("name");
    const age = await client.get("age");
    const city = await client.get("city");

    console.log(`Name: ${name}`);
    console.log(`Age: ${age}`);
    console.log(`City: ${city}`);
  } catch (err) {
    console.error("Error connecting to Rediss", err);
  } finally {
    await client.quit();
    console.log("Disconnected from Redis");
  }
}

manageRedis().catch(console.error);
module.exports = { manageRedis };
