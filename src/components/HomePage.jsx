import { Link } from 'react-router-dom'; 
const HomePage = () => {
  return (
    <div className="home">
      <h1>Welcome to What U Need 2 Do!</h1>
      <p>This is where the magic happens!</p>

      <div className="content">
        <h2>About Us</h2>
        <p>We are dedicated to provide you with all of your upkeep needs. Whether that is a grocery list, a weekly list of chores for the kids, or any thing you need done!</p>

        <h2>Our Services</h2>
        <p>We offer our list making hub to make your list making not a chore but an experience. Contact us to learn more.</p>
      </div>

      
      <button><Link to="/contact">Contact Us</Link></button>

      <footer>
        <p>Contact information: info@whatuneed2do.com</p>
        <p>Follow us on social media: Facebook, Twitter, Instagram</p>
      </footer>
    </div>
  );
}

export default HomePage;
