import JobListing from "../components/JobListing";
import { useEffect, useState } from "react";

const Home = () => {
  const [jobs, setJobs] = useState([]);
  const [location, setLocation] = useState("");
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await fetch("/api/jobs");

        if (!response.ok) {
          throw new Error("Failed to fetch jobs");
        }

        const data = await response.json();
        setJobs(data);
      } catch (error) {
        console.error("Error fetching jobs:", error);
      }
    };

    fetchJobs();
  }, []);
  const searchByLocation = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        `/api/jobs/location/${encodeURIComponent(location)}`
      );

      if (!response.ok) {
        throw new Error("Failed to search jobs");
      }

      const data = await response.json();
      setJobs(data);
    } catch (error) {
      console.error("Error searching jobs:", error);
    }
  };

  return (
    <div className="home">
      <form onSubmit={searchByLocation}>
        <input
          type="text"
          placeholder="Search jobs by location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />

        <button type="submit">Search</button>
      </form>

      <div className="job-list">
        {jobs.length === 0 && <p>No jobs found</p>}

        {jobs.length !== 0 &&
          jobs.map((job) => (
            <JobListing key={job.id} {...job} />
          ))}
      </div>
    </div>
  );
};

export default Home;