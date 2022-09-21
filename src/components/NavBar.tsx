import { useEffect, useState } from "react";

export const AppBar = () => {
    const [state, setState] = useState(0);

    useEffect(() => {
        console.log(state);

        var nav = document.getElementById("nav");
        if (state == 1 && nav) {
            nav.style.height = "100%";
            var logo = document.getElementById("logoo");
            var nav2 = document.getElementById("nav2");
            var body = document.querySelector("body");
            if (logo) { logo.style.alignItems = ""; logo.style.marginTop = '5%' }
            if (nav2) { nav2.style.alignItems = ""; nav2.style.marginTop = '10%' }
            var c = document.getElementById("c");
            if (c) c.style.display = "none";
            var d = document.getElementById("d");
            if (d) d.style.display = "none";
            var div = document.getElementById("links");
            if (div) {
                div.style.display = "block";
                
            }
        } else if (state == 0 && nav) {
            var c = document.getElementById("c");
                if (c) c.style.display = "";
                var d = document.getElementById("d");
                if (d) d.style.display = "";
            nav.style.height = "80px";
            var logo = document.getElementById("logoo");
            var nav2 = document.getElementById("nav2");
            if (logo) { logo.style.alignItems = "center"; logo.style.marginTop = '' }
            if (nav2) { nav2.style.alignItems = "center"; nav2.style.marginTop = '' }
            var div = document.getElementById("links");
            if (div) {
                div.style.display = "none";
            }
        }
    })

    return (
        <div id="nav">
            <div id="nav2" style={{
                width: '50%',
                display: 'flex',
                justifyContent: 'space-between',
                textAlign: 'center',
                margin: '0 auto',
                alignItems: 'center',
            }}>
                <a className="icon" onClick={() => setState(state === 1 ? 0 : 1)}>
                    <i className="fa fa-bars" style={{ color: "white" }}></i>
                </a>
                <a href="/" className="navLink">Tsyke</a>
                <a href="/projets" className="navLink">Projets</a>
                <a href="/competences" className="navLink">Compétences</a>
                <div id="links" className="links">
                    <a href="/" className="link">Tsyke</a> <br />
                    <a href="/projets" className="link">Projets</a> <br />
                    <a href="/competences" className="link">Compétences</a>
                </div>

            </div>
            <div id="logoo" style={{
                alignItems: 'center',
                justifyContent: 'center',
                display: 'flex',
            }}>
                <img src="https://cdn.discordapp.com/avatars/921813198758371419/bd289098ccd15912bb80df2877810c79.png" alt="Tsyke" style={{
                    width: "60px",
                    height: "60px",
                    marginRight: "100%",
                    borderRadius: "100%"
                }} />
            </div>
        </div>
    )
}
