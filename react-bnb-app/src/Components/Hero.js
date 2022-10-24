import photoGrid from '../assets/photo-grid.png';
export default function Hero() {
    return (
        <div className='hero'>
            <img src={photoGrid} className='photo-grid'></img>
            <div className='hero-text'>
                <h1>Online Experiences</h1>
                <p>Join unique interactive activities led by
                 one-of-a-kind hosts all without leaving home
                </p>
            </div>
        </div>
    )
}