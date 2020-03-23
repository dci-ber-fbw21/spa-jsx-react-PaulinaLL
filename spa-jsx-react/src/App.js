import React from "react";
import "./styles/App.scss";
import data from "./data/data.json";

function App() {
  return (
    <div className="App">
      <main className="App-main">
        <ul>
          {data.map(person => {
            return (
              <li key={person.id}>
                <div className="card">
                  <div className="foto-name">
                    <img src={person.avatar} className="" alt="profil-pic" />
                    <div className="name-title">
                      <h1>
                        {person.firstName} {person.lastName}
                      </h1>
                      {person.isAdmin && <span>Admin</span>}
                      <p>{person.title}</p>
                    </div>
                  </div>
                  <div className="contact-data">
                    <img src="https://img.icons8.com/carbon-copy/100/000000/phone.png" />
                    <p>{person.contact.phone}</p>
                    <img src="https://img.icons8.com/dotty/80/000000/email.png" />
                    <p>{person.contact.email}</p>
                    <img src="https://img.icons8.com/wired/64/000000/domain.png" />
                    <a
                      className="App-link"
                      href={person.contact.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {person.contact.url}
                    </a>
                  </div>
                  <p>member since: {person.memberSince}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </main>
    </div>
  );
}

export default App;
