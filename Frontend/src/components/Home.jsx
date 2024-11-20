import '../styles/home.css'
import mainImage from '../assets/mainImage.jpg'

const Home = () => {

    return (
        <section className='home'>
            <section className='landingImageSection'>
                <img 
                    src={mainImage} 
                    alt="Image from Sentry System game. The boss enemy is destroyed in the center of the image." 
                    className='homeImage'>
                </img>
                <div className='homeText'>
                    <h1>Fun games</h1>
                    <p >Find out our fun games!</p>
                </div>
            </section> 
            <section className='textSectionMargins'>
                <h2>more text here </h2>
                <p>
                    more text here more text here more text here more text here more text here more text here more text here more text here more text here 
                    more text here more text here more text here more text here more text here more text here more text here more text here more text here 
                    more text here more text here more text here more text here more text here more text here more text here more text here more text here 
                    more text here more text here more text here more text here more text here more text here more text here more text here more text here 
                </p>
            </section>
        </section>
    )

}

export default Home