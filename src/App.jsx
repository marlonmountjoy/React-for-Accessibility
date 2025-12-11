import React, { useState } from "react";
import SkipToContent from "./components/SkipToContent/SkipToContent";
import Header from "./components/Header/Header";
import TopNav from "./components/TopNav/TopNav";
import Footer from "./components/Footer/Footer";
import Button from "./components/Button/Button";
import Anchor from "./components/Anchor/Anchor";
import Label from "./components/Label/Label";
import TextBox from "./components/TextBox/TextBox";
import Sidebar from "./components/Sidebar/Sidebar";
import Table from "./components/Table/Table";

function App() {
  const [message, setMessage] = useState("");

  const handlePrimaryClick = () => {
    alert(
      message.trim()
        ? `You submitted: ${message}`
        : "Please enter a message before submitting."
    );
  };

  const sidebarItems = [
    { id: "main", href: "#mainContent", label: "Main content" },
    { id: "about", href: "#about", label: "About this demo" },
    { id: "components", href: "#components", label: "Components table" },
  ];

  const tableColumns = [
    { key: "component", header: "Component" },
    { key: "purpose", header: "Purpose" },
    { key: "status", header: "Status" },
  ];

  const tableData = [
    {
      component: "Header",
      purpose: "Page title and branding",
      status: "Done",
    },
    {
      component: "SkipToContent",
      purpose: "Bypass repeated content",
      status: "Done",
    },
    {
      component: "TopNav",
      purpose: "Primary navigation",
      status: "Done",
    },
    {
      component: "Sidebar",
      purpose: "Section navigation (slide-out)",
      status: "Done",
    },
    {
      component: "Table",
      purpose: "Summarize components",
      status: "Done",
    },
    {
      component: "Button / Anchor / TextBox / Label",
      purpose: "Reusable accessible controls",
      status: "Done",
    },
  ];

  return (
    <>
      <SkipToContent />

      {/* Floating slide-out sidebar */}
      <Sidebar title="Page sections" items={sidebarItems}>
        <p>Use these links to jump between sections of the page.</p>
      </Sidebar>

      <div className="layout">
        <Header />
        <TopNav />

        <main id="mainContent" tabIndex={-1}>
          <section id="about" aria-labelledby="about-heading">
            <h1 id="about-heading">React accessibility demo</h1>
            <p>
              This page demonstrates reusable accessible first components.
            </p>

            <div className="form-block">
              <Label htmlFor="messageInput" text="Your message" />

              <TextBox
                id="messageInput"
                value={message}
                placeholder="Type something…"
                onChange={(e) => setMessage(e.target.value)}
              />

              <Button
                label="Submit message"
                onClick={handlePrimaryClick}
                type="button"
              />

              <p style={{ marginTop: "1rem" }}>
                Learn more at{" "}
                <Anchor
                  href="https://www.w3.org/WAI/"
                  label="W3C Web Accessibility Initiative (opens in a new tab)"
                  target="_blank"
                />
                .
              </p>
            </div>
          </section>

          <section
            id="components"
            aria-labelledby="components-heading"
            style={{ marginTop: "2rem" }}
          >
            <h2 id="components-heading">Component overview</h2>
            <Table
              caption="Summary of components in this accessibility demo"
              columns={tableColumns}
              data={tableData}
            />
          </section>

          <section
            aria-labelledby="lorem-heading"
            style={{ marginTop: "2rem" }}
          >
            <h2 id="lorem-heading">Sample content</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas
              praesentium perferendis temporibus recusandae similique possimus
              reprehenderit sunt voluptatibus dicta autem? Voluptas pariatur
              totam minima inventore excepturi soluta laboriosam suscipit
              reprehenderit! Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Delectus officiis eligendi deleniti laborum illo ab in rem,
              dolore repellat, facere ad nobis fugit dolorem quisquam natus, a
              nihil et voluptatibus. Lorem ipsum dolor sit amet, consectetur
              adipisicing elit. Quas praesentium perferendis temporibus
              recusandae similique possimus reprehenderit sunt voluptatibus
              dicta autem? Voluptas pariatur totam minima inventore excepturi
              soluta laboriosam suscipit reprehenderit! Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Delectus officiis eligendi
              deleniti laborum illo ab in rem, dolore repellat, facere ad nobis
              fugit dolorem quisquam natus, a nihil et voluptatibus. Lorem ipsum
              dolor sit amet, consectetur adipisicing elit. Quas praesentium
              perferendis temporibus recusandae similique possimus
              reprehenderit sunt voluptatibus dicta autem? Voluptas pariatur
              totam minima inventore excepturi soluta laboriosam suscipit
              reprehenderit! Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Delectus officiis eligendi deleniti laborum illo ab in rem,
              dolore repellat, facere ad nobis fugit dolorem quisquam natus, a
              nihil et voluptatibus.
            </p>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}

export default App;
