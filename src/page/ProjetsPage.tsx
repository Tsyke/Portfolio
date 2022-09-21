import { AppBar } from "../components/NavBar"
import { ProjetBox } from "../components/ProjetBox"

export const ProjetPage = () => {
    return (
        <div>
            <AppBar />
            <br /><br />
            <br />
            <h1 style={{
                textAlign: "center",
                textDecoration: "underline",
                fontSize: "50px",
            }}>Mes projets:</h1>
            <ProjetBox />
        </div>
    )
}