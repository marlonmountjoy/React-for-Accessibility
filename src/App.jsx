import React from "react";
import SkipToContent from "./components/SkipToContent/SkipToContent";
import Header from "./components/Header/Header";
import TopNav from "./components/TopNav/TopNav";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <SkipToContent />
      <div className="layout">
        <Header />
        <TopNav />
        <main id="mainContent" tabIndex={-1}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas
            praesentium perferendis temporibus recusandae similique possimus
            reprehenderit sunt voluptatibus dicta autem? Voluptas pariatur totam
            minima inventore excepturi soluta laboriosam suscipit reprehenderit!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
            officiis eligendi deleniti laborum illo ab in rem, dolore repellat,
            facere ad nobis fugit dolorem quisquam natus, a nihil et
            voluptatibus.
          </p>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
