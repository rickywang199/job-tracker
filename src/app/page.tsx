import {auth} from "@/auth";
import {SignInButton} from "./components/sign-in-button";
import { SignOutButton } from "./components/sign-out-button";

export default async function Home() {
  const session = await auth()
  console.log (session) ;
  return (
    <div>
    {session ? ( <p> Welcome, {session.user?.name} <SignOutButton/></p>) : ( <SignInButton /> )
    }
    </div>);
  }
