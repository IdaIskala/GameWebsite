import '../styles/games.css'
import {Link} from 'react-router-dom'
import '../index.css'

const Games = () => {
    return (
        <div className='games'>
            <GameSection 
                gameName='Sentry System'
                gameDescription='this is a game! more text here more text here more text here more text here more text here more text here more text here'
                steamURL='https://store.steampowered.com/app/2942160/Sentry_System/'
            />
            <GameSection 
                gameName='Sentry System 2 (test)'
                gameDescription='this is a game! more text here more text here more text here more text here more text here more text here more text here'
                steamURL='https://store.steampowered.com/app/2942160/Sentry_System/'
            />
            <GameSection 
                gameName='Sentry System 3 (test)'
                gameDescription='this is a game! more text here more text here more text here more text here more text here more text here more text here'
                steamURL='https://store.steampowered.com/app/2942160/Sentry_System/'
            />
            
        </div>
    )
}

//presents one game
const GameSection = ({gameName, gameDescription, steamURL}) => {



    return (
        <div className='gameSection'>
            <section className='textSection'>
                <h1>{gameName}</h1>
                <p>{gameDescription}</p>
                <Link className='playButton linkNoDecor'  to={steamURL} target='_blank'>Play</Link>
            </section>
            <VideoEmbed className = 'videoEmbed'/>
        </div>
    )
}

const VideoEmbed = () => {
    return (
        <iframe 
            width="560" 
            height="315" 
            src="https://www.youtube.com/embed/oAX5JaAGYfg?si=LtRFF5FStF2g4hlT" 
            title="YouTube video player" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerPolicy="strict-origin-when-cross-origin" 
            allowFullScreen
        >
        </iframe>

    )

}

export default Games