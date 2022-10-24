import airbnbLogo from '../assets/airbnb-logo.png';
export default function Navbar() {
    return (
        <nav>
            <img src={airbnbLogo} alt='airbnb logo' className='logo-img'></img>
        </nav>
    )
}