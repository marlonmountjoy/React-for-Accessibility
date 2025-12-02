import React, { useState } from "react";
import SkipToContent from "./components/SkipToContent/SkipToContent";
import Header from "./components/Header/Header";
import TopNav from "./components/TopNav/TopNav";
import Footer from "./components/Footer/Footer";
import Button from "./components/Button/Button";
import Anchor from "./components/Anchor/Anchor";
import Label from "./components/Label/Label";
import TextBox from "./components/TextBox/TextBox";

function App() {
  const [message, setMessage] = useState("");

  const handlePrimaryClick = () => {
    alert("Primary button clicked");
  };

  return (
    <>
      <SkipToContent />
      <div className="layout">
        <Header />

        <TopNav />

        <Label htmlFor="messageInput" text="Your message" />

        <TextBox
          id="messageInput"
          value={message}
          placeholder="Type something…"
          onChange={(e) => setMessage(e.target.value)}
        />

        <Button
          label="This is a Button"
          onClick={handlePrimaryClick}
          ariaLabel="Do the primary action"
          type="button"
        />

        <Anchor
          href="https://www.w3.org/WAI/"
          label="This is a link"
          target="_blank"
        />

        <main id="mainContent" tabIndex={-1}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas
            praesentium perferendis temporibus recusandae similique possimus
            reprehenderit sunt voluptatibus dicta autem? Voluptas pariatur totam
            minima inventore excepturi soluta laboriosam suscipit reprehenderit!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
            officiis eligendi deleniti laborum illo ab in rem, dolore repellat,
            facere ad nobis fugit dolorem quisquam natus, a nihil et
            voluptatibus. Lorem ipsum dolor sit amet, consectetur adipisicing
            elit. Quas praesentium perferendis temporibus recusandae similique
            possimus reprehenderit sunt voluptatibus dicta autem? Voluptas
            pariatur totam minima inventore excepturi soluta laboriosam suscipit
            reprehenderit! Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Delectus officiis eligendi deleniti laborum illo ab in rem,
            dolore repellat, facere ad nobis fugit dolorem quisquam natus, a
            nihil et voluptatibus. Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Quas praesentium perferendis temporibus recusandae
            similique possimus reprehenderit sunt voluptatibus dicta autem?
            Voluptas pariatur totam minima inventore excepturi soluta laboriosam
            suscipit reprehenderit! Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Delectus officiis eligendi deleniti laborum illo
            ab in rem, dolore repellat, facere ad nobis fugit dolorem quisquam
            natus, a nihil et voluptatibus.
          </p>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
