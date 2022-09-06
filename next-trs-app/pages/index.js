import Metatags from '../components/Metatags';
import Loader from '../components/Loader';
import Navbar from '../components/Navbar';
import { useState } from 'react';

export default function Home(props) {
  const [loading, setLoading] = useState(false);
  return (
    <main>
      <Metatags title="Home Page" description="Get the latest posts on our site" />
      <h2>Home</h2>
      <Loader show={loading} />
    </main>
  )
}
