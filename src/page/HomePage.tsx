import { CompetComponent } from "../components/CompetComponent"
import { FooterComponent } from "../components/Footer"
import { AppBar } from "../components/NavBar"

export const HomePage = () => {
    return (
        <div>
            <AppBar></AppBar>
            <br /><br />
            <br />
            <h1 style={{
                textAlign: "center",
                textDecoration: "underline",
                fontSize: "50px",
            }}></h1>
            <div className="test2">
                Tsyke aka Mathéo. D, développeur backend depuis 3 ans en autodidacte.
                <br />
                "Je me suis lancé dans la programmation grace à un proche"
                <br />
                "J'avais commencé à la base par du HTML et CSS, puis je me suis rapidement intéressé au backend de manières générales et comment un site fonctionnais hors de ce que l'on peut voir"
                <br /><br />
                À la même époque je me suis aussi rapidement intéressé aux base de données, j'utilise à l'heure d'aujourd'hui "<a href="https://www.mysql.com/">MySQL</a>", "<a href='https://www.mongodb.com/'>MongoDB</a>" et "<a href="https://mariadb.com/">MariaDB</a>"
                <br /><br />
                Dans la même période je me suis intéressé à <a href="https://nodejs.org/en/">NodeJS</a> et j'ai commencer le développement en backend en <a href="https://www.javascript.com/">JavaScript</a> et <a href="https://www.typescriptlang.org/">TypeScript</a>

                <br /><br />
            </div>
            <FooterComponent></FooterComponent>
        </div>
    )
}