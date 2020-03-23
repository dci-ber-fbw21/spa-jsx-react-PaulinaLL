import React from "react";
import "./styles/App.scss";
import data from "./data/data.json";

function App() {
  return (
    <div className="App">
      <main className="App-main">
        <div className="card">
          <div className="foto-name">
            <img src={data[0].avatar} className="" alt="profil-pic" />
            <div className="name-title">
              <h1>
                {data[0].firstName} {data[0].lastName}
              </h1>
              <p>{data[0].title}</p>
            </div>
          </div>
          <div className="contact-data">
            <img src="https://img.icons8.com/carbon-copy/100/000000/phone.png" />
            <p>{data[0].contact.phone}</p>
            <img src="https://img.icons8.com/dotty/80/000000/email.png" />
            <p>{data[0].contact.email}</p>
            <img src="https://img.icons8.com/wired/64/000000/domain.png" />
            <a
              className="App-link"
              href={data[0].contact.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {data[0].contact.url}
            </a>
          </div>
          <p>member since: {data[0].memberSince}</p>
        </div>
      </main>
    </div>
  );
}

export default App;
