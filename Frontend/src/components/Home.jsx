import '../styles/home.css'
import mainImage from '../assets/mainImage.jpg'

const Home = () => {

    return (
        <section className='home'>
            <div>
                <img src={mainImage} alt="" className='homeImage'></img>
            </div>
            <div className='homeText'>
                <div>
                    <h1>Fun games</h1>
                </div>
                <div>
                    <p >find out fun games</p>
                </div>
                
            </div>
            <div>
                
            </div>
        </section>
    )

}

export default Home