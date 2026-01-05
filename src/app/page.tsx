import { login } from "@/lib/actions/authActions";

export default function Home() {
  return (
    <div>
      <p>You are not signed in</p>

      <form action={login}>
        <button type="submit">Sign in with GitHub</button>
      </form>
    </div>
  );
}
