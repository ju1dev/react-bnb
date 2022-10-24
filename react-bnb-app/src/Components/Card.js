import star from '../assets/star.png';
import cardsData from '../cardsData';

export default function Card(props) {
    let badgeText;

    if (props.openSpots === 0) {
        badgeText = 'SOLD OUT';
    } else if (props.location === 'Online') {
        badgeText = 'ONLINE';
    }

    return (
        <div className='card'>
            <img src={props.img} className='main-photo'></img>
        {badgeText && <div className='card-badge'>{badgeText}</div>}
            <div className='card-text'>
             <p><img src={star} /> {props.stats.rating}  <span>({props.stats.reviewCount}) • {props.location}</span></p>
             <p>{props.title}</p>
             <p>From ${props.price} <span>/ person</span></p>
            </div>
        </div>
    )
}