import React, { useState, useEffect } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";

const url = "https://course-api.com/react-tabs-project";

function App() {
  const [companies, setCompanies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeCompany, setActiveCompany] = useState(0);

  const fetchCompanies = async () => {
    const fetchedUsers = await fetch(url);
    const fetchedUsersJSON = await fetchedUsers.json();
    setCompanies(fetchedUsersJSON);
    setLoading(false);
  };

  useEffect(() => {
    fetchCompanies();
  }, []);

  if (loading) {
    return (
      <section className="section">
        <div className="title">
          <h2>Loading...</h2>
        </div>
      </section>
    );
  }

  const { title, company, dates, duties } = companies[activeCompany];

  return (
    <React.Fragment>
      <section className="section">
        <div className="title">
          <h2>Experience</h2>
          <div className="underline"></div>
        </div>
        <div className="jobs-center">
          <div className="btn-container">
            {companies.map((comp, index) => {
              return (
                <button
                  className={`job-btn ${
                    activeCompany === index && "active-btn"
                  }`}
                  key={comp.id}
                  onClick={() => setActiveCompany(index)}
                >
                  {comp.company}
                </button>
              );
            })}
          </div>

          <article className="job-info">
            <h3>{title}</h3>
            <h4>{company}</h4>
            <p className="job-date">{dates}</p>
            {duties.map((duty, i) => {
              return (
                <div className="job-desc" key={i}>
                  <FaAngleDoubleRight className="job-icon" />
                  <p>{duty}</p>
                </div>
              );
            })}
          </article>
        </div>
        <button className="btn">More Info</button>
      </section>
    </React.Fragment>
  );
}

export default App;
