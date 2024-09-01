import { LoginForm } from "../../features/authentication/components/LoginForm/LoginForm";
import { User } from "../../models/User";

interface HomePageProps {
    displayLogin: boolean,
    updateLoggedInUser(user: User):void
}

export default function HomePage(props: HomePageProps) {
  return (
    <div className="page">
        {props.displayLogin? <LoginForm updateLoggedInUser={props.updateLoggedInUser}/> :<></>}
    </div>
  )
}
