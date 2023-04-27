import { useRouter } from 'next/router'
import { getFilteredEvents } from '../../helpers/api-util'
import EventList from '@/components/events/EventList';
import ResultsTitle from '@/components/events/results-title';
import { Fragment } from 'react';
import Button from '@/components/ui/button';
import ErrorAlert from '@/components/ui/error-alert';
import Head from 'next/head';

const filteredEventsArray = (props) => {

    if (props.hasError) {
        return (
            <Fragment>
                <ErrorAlert><p>Invalid Filter please adjust your value</p></ErrorAlert>
                <div style={{ textAlign: "center" }}>
                    <Button link="/events">Show All Events</Button>
                </div>
            </Fragment>
            
        )
    }

    const filteredEvents = props.events

    if (!filteredEvents || filteredEvents.length === 0) {
        return (
            <Fragment>
                <ErrorAlert><p>No Events found </p></ErrorAlert>
                <div style={{ textAlign: "center" }}>
                    <Button link="/events">Show All Events</Button>
                </div>
            </Fragment>
            
        
        )
    }
    const date = new Date(props.numYear, props.numMonth - 1)
    return (
        <Fragment>
            <Head>
                <title>filtered Events </title>
                <meta
                    name='description'
                    content='find a lot of great events you can envolve ' />
            </Head>
            <ResultsTitle
                date={date}
            />
            <EventList Events={filteredEvents} />
        </Fragment>
    );
};

export async function getServerSideProps(context) {
    const { params } = context;
    const filteredData = params.filteredarray;

    const year = filteredData[0];
    const month = filteredData[1];
    const numYear = +filteredData[0];
    const numMonth = +filteredData[1];

    if (isNaN(year) || isNaN(month) || numYear > 2030 || numMonth > 12 || numYear < 2021 || numMonth < 1) {
        return {hasError: true};
    }

    const filteredEvents = await getFilteredEvents({
        year: numYear,
        month: numMonth,
    })
    
    return {
        props: {
            events: filteredEvents,
            numYear: numYear,
            numMonth:numMonth
        }
    }
}
export default filteredEventsArray