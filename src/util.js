import { redirect } from "react-router-dom";

export async function requiredAuth(request){
  const pathname = new URL(request.url).pathname
    const isLoggedIn = localStorage.getItem("loggedin");
    if(!isLoggedIn) {
      const response = redirect(`/login?message=😔Sorry, you're gonna have to login/signup.&redirectTo=${pathname}`)//Receive the request in requireAuth and pass along a search param of `redirectTo`* 
      response.body = true 
      return response
    }
    return null
  }
  