export const ProjetBox = () => {
    return (
        <div>
            <div className="cardBox">
                <div className="Card tau">
                    <div className="cardLogo">
                        <img src="https://cdn.discordapp.com/attachments/939196720397570109/1021452943704207481/Taukring_Transparent_4k.png" alt="Taukring" width={80} style={{
                            border: "1px solid black",
                            borderRadius: "100%",
                            backgroundColor: 'rgb(25, 25, 25)'
                        }} />
                    </div>
                    <div className="cardTitle">
                        Taukring
                    </div>
                    <hr />

                    <div className="cardDesc">
                        Taukring est un bot Discord pour de la modération et uilitaire.
                    </div>
                </div>
                <div className="Card ng">
                    <div className="cardLogo">
                        <img src="https://cdn.discordapp.com/icons/832296913695932428/ab6e6303481891d2e5633af1b9c7235c.png" alt="NG" width={80} style={{
                            border: "1px solid black",
                            borderRadius: "100%",
                            backgroundColor: 'rgb(25, 25, 25)'
                        }} />
                    </div>
                    <div className="cardTitle">
                        Night Group
                    </div>
                    <hr />
                    <div className="cardDesc">
                        Développeur API, Front, Back, Application pour Night Group
                    </div>
                </div>
            </div>
        </div>
    )
}