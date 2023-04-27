import Event from "./Event";
import Styles from './event-list.module.css'
const EventList = (props) => {

    return (
        <div>
            <ul className={Styles.list}>
                {props.Events.map((event) => {
                    return (
                        <Event
                            key={event.id}
                            id={event.id}
                            title={event.title}
                            description={event.description}
                            date={event.date}
                            location={event.location}
                            image={event.image}
                        />
                    );
                })}
            </ul>
        </div>
    );
};

export default EventList