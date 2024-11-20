import '../styles/footer.css'
import {Link} from 'react-router-dom'

const Footer = () => {
    const youtubeLink = 'https://www.youtube.com/@PenguiniumGames' //laita muualle


    return (
        <footer>
            <div className='footerLeft'>
                    
            </div>
            <div className='footerCenter'>
                <Link className='footerElement linkNoDecor'  to={youtubeLink} target='_blank'>Youtube</Link>
            </div>
            <div className='footerRight'>
                <Link className='footerElement linkNoDecor' to='/about'>Contact</Link>
            </div>

        </footer>
    )
}


export default Footer