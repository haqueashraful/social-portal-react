import DiscussSection from "./Component/DiscussSection";
import Footer from "./Component/Footer";
import Header from "./Component/Header";
import JoinForum from "./Component/JoinForum";
import LatestPost from "./Component/LatestPost";

function App() {
  return (
    <div className="container mx-auto">
      <div className="lg:mx-10 mx-1 md:mx-3">
        <Header />
        <DiscussSection />
        <JoinForum />
        <LatestPost />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
