import { login } from "@/lib/actions/authActions";

export default function Home() {
  return (
    <form action={login}>
      <button type="submit">Sign in with GitHub</button>
    </form>
  );
}
