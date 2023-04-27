import NewsletterRegistration from '@/components/input/newsletter-registration';
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import {getFeaturedEvents} from '../helpers/api-util'
import EventList from '@/components/events/EventList';
import Head from 'next/head';

 function HomePage(props) {

   
   const featuredEvents = props.featuredEvents;
   if (!featuredEvents) {
     return <p>loading</p>
   }
  //console.log(props.events);
  return (
    <div>
      <Head>
        <title>Events Blog</title>
        <meta name='description' content='find a lot of great events you can envolve '/>
      </Head>
      <NewsletterRegistration />
      <EventList Events={featuredEvents} />
    </div>
  );
}

export async function getStaticProps(context) {
  const featuredEvents = await getFeaturedEvents()

  //console.log(featuredEvents)
  return {
    props: {
      featuredEvents: featuredEvents,
      revalidate:1800
    }
  };
};
export default HomePage