import { useState } from "react"
import Navigation from "../Navigation/Navigation"
import UserNav from "../UserNav/UserNav"
import AuthNav from "../AuthNav/AuthNav"


export default function Header() {
    const [isLogedIn] = useState(false)
  return (
    <header>
        <Navigation/>
        {isLogedIn ? <AuthNav/> : <UserNav/>}
    </header>
  )
}
