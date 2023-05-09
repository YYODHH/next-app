import kv from "@vercel/kv";

export default async function Home() {
  await kv.incr("counter");
  const counter = (await kv.get("counter")) as number;
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-6xl font-bold">{counter}</h1>
    </main>
  );
}
