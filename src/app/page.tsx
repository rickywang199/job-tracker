import {auth} from "@/auth";
import {SignInButton} from "./components/sign-in-button";

export default async function Home() {
  const session = await auth()
  console.log (session) ;
  return (
    <div> {""} </div>
    
  );
}
