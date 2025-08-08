import Navbar from "@/components/Navbar";
import UpcomingEvents from "@/components/UpcomingEvents";
import Footer from "@/components/Footer";

const EventsPage = () => {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <UpcomingEvents />
      <Footer />
    </div>
  );
};

export default EventsPage; 