import { redirect } from "react-router-dom";

export async function requiredAuth(){
    const isLoggedIn = localStorage.getItem("loggedin");
    if(!isLoggedIn) {
      const response = redirect("/login?message=😔Sorry, you're gonna have to login/signup first.")
      response.body = true 
      return response
    }
    return null
  }
  