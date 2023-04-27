import { getAllEvents } from "../../helpers/api-util";
import EventList from "@/components/events/EventList";
import EventsSearch from "@/components/events/EventsSearch";
import { useRouter } from 'next/router'
import Head from 'next/head';

const allevents = (props) => {
  const router = useRouter()
  const allevents = props.allEvents;
  
  function findEventsHandler(year,month) {
    const fullPath=`/events/${year}/${month}`

    router.push(fullPath)
  }
  return (
    <div>
      <Head>
        <title>All Events </title>
        <meta name='description' content='find a lot of great events you can envolve '/>
      </Head>
      <EventsSearch onSearch={ findEventsHandler}/>
      <EventList Events={allevents} />
      
    </div>
  );
}

export async function getStaticProps(context) {
  const allEvents = await getAllEvents()

  return {
    props: {
      allEvents: allEvents,
      revalidate:60
    }
  };
};

export default allevents