import Styles from './event-item.module.css'
import Button from '../ui/button';
import DateIcon from '../icons/date-icon';
import AddressIcon from '../icons/address-icon';
import ArrowRightIcon from '../icons/arrow-right-icon';
const Event = (props) => {
    
    const { title, image, date, location, id } = props;
    const humanReadableDate = new Date(date).toLocaleDateString('en-US');
    const fromattedAddress = location.replace(", ", "\n");
    const exploreLink=`/events/${id}`
    return (
        <li key={id} className={Styles.item}>
            <img src={'/' + image} />

            <div >

                <div className={Styles.content}>
                    <h2>{title}</h2>
                    <div className={Styles.icon}>
                        <DateIcon/>
                        <time>{humanReadableDate}</time>
                    </div>
                    <div className={Styles.icon}>
                        <AddressIcon/>
                        <address>{fromattedAddress}</address>
                    </div>
                </div >
                <div className={Styles.actions}>
                    <Button link={exploreLink}>
                        <span>Explore events</span>
                        <span className={Styles.icon}> <ArrowRightIcon /> </span>
                    </Button>
                </div>
            </div>
        </li>
    );
};

export default Event