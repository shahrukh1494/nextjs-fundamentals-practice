import { useState } from "react";
import jwt from "jsonwebtoken";
import Link from "next/link";

export default function Home() {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [message, setMessage] = useState<string>("You are not logged in");
  const [secret, setSecret] = useState<string>("");

  async function submitForm() {
    const res = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({ username, password }),
    }).then((t) => t.json());

    const token = res.token;

    if (token) {
      const json = jwt.decode(token) as { [key: string]: string };
      setMessage(
        `Welcome ${json.username} and you are ${
          json.admin ? "an admin" : "not an admin"
        }`
      );

      const res = await fetch("/api/secrets", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ token }),
      }).then((t) => t.json());

      if (res.secretAdminCode) {
        setSecret(res.secretAdminCode);
      } else {
        setSecret("Nothing Available");
      }
    } else {
      setMessage("Something went wrong");
    }
  }

  return (
    <div>
      <Link href="/linkpage">
        <a>Go to Link Page</a>
      </Link>
      <br />
      <Link href="/linkpage/nestedlinkpage">
        <a>Go to nested Page</a>
      </Link>
      <h1>{message}</h1>
      <h1>Secret: {secret}</h1>
      <form>
        <input
          type="text"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />
        <input
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <input type="button" value="Login" onClick={submitForm} />
      </form>
    </div>
  );
}
