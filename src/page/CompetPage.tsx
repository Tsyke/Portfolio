import { CompetComponent } from "../components/CompetComponent"
import { FooterComponent } from "../components/Footer"
import { AppBar } from "../components/NavBar"

export const CompetPage = () => {
    return (
        <div>
            <AppBar></AppBar>
            <br /><br />
            <br />
            <h1 style={{
                textAlign: "center",
                textDecoration: "underline",
                fontSize: "50px",
            }}>Mes compétences:</h1>
            <div className="test"><CompetComponent></CompetComponent></div>
            <FooterComponent></FooterComponent>
        </div>
    )
}