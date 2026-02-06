"use client"

import { login } from "@/lib/actions/authActions";

 export const SignInButton = () => {

    return (
        <button onClick={() => login()}>  Sign in with GitHub </button>
    )
 }; 