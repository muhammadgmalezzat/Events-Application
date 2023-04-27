import { getFeaturedEvents} from '../../helpers/api-util'
import { getEventById } from '../../helpers/api-util'
import EventSummary from '../../components/event-detail/event-summary';
import EventLogistics from '../../components/event-detail/event-logistics';
import EventContent from '../../components/event-detail/event-content';
import { Fragment } from 'react';
import ErrorAlert from '../../components/ui/error-alert';
import Comments from '@/components/input/comments';

const eventid = (props) => {
    const event = props.selectedEvent;

    if (!event) {
        return (
            <ErrorAlert>
                <p>loading... 🕜 </p>
                
            </ErrorAlert>
        )
    }

    return (
        <Fragment>
            <EventSummary title={event.title} />
            <EventLogistics
                date={event.date}
                address={event.location}
                image={event.image}
                imageAlt={event.title}
            />
            <EventContent >
                <p>{event.description}</p>
            </EventContent>
            <Comments eventId={ event.id}/>
        </Fragment>
    );
};


export async function getStaticProps(context) {
    const eventId= context.params.eventid;
    const event = await getEventById(eventId)

    if (!event) {
        return {notFound: true}
    }

    return {
        props: {
            selectedEvent: event
        },
        revalidate: 30
    };
};

export async function getStaticPaths() {
    const allEvents = await getFeaturedEvents()
    const paths = allEvents.map(event => ({params:{eventid:event.id} }))
    return {
        paths: paths,
        fallback:"blocking"
    }
}
export default eventid;
