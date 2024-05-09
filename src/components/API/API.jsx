import React, { useState, useEffect } from "react";
import "./API.css";

const API = () => {
  const [repos, setRepos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch(
          "https://api.github.com/users/Lamskidoski/repos"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch repositories");
        }
        const data = await response.json();
        setRepos(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchRepos();
  }, []);

  if (isLoading) {
    return <div className="github-container">Loading...</div>;
  }

  if (error) {
    return <div className="github-container">Error: {error}</div>;
  }

  return (
    <div className="github-container">
      <h1 className="github-header">GitHub Repositories for Lamskidoski</h1>
      <ul className="github-repo-list">
        {repos.map((repo) => (
          <li key={repo.id} className="github-repo-item">
            <a
              href={repo.html_url}
              className="github-repo-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              {repo.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default API;

// ----
// import React, { useState, useEffect } from "react";
// import "./API.css";

// const API = () => {
//   const [repos, setRepos] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchRepos = async () => {
//       try {
//         const response = await fetch(
//           "https://api.github.com/users/Lamskidoski/repos"
//         );
//         if (!response.ok) {
//           throw new Error("Failed to fetch repositories");
//         }
//         const data = await response.json();
//         setRepos(data);
//       } catch (error) {
//         setError(error.message);
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     fetchRepos();
//   }, []);

//   if (isLoading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>Error: {error}</div>;
//   }

//   return (
//     <div>
//       <h1>GitHub Repositories for Lamskidoski</h1>
//       <ul>
//         {repos.map((repo) => (
//           <li key={repo.id}>{repo.name}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default API;

// -------

// import { useEffect, useState } from "react";

// const API = () => {
//   const [data, setData] = useState(null);
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch(
//           `https://api.github.com/users/Lamskidoski/repos`
//         );
//         if (!response.ok) {
//           throw new Error("Failed to fetch data");
//         }
//         const jsonData = await response.json();
//         setData(jsonData);
//       } catch (error) {
//         setError(error.message);
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     fetchData();
//   }, []); // Empty dependecy array means the Effect runs only ONCE,

//   if (isLoading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>Error: {error} </div>;
//   }

//   return (
//     <div>
//       <h1>Lamskidoski Github</h1>
//       <ul>
//         {repos.map((repo) => (
//           <li key={repo.id}>{repo.solaris} </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default API;
