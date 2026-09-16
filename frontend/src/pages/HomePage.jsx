import JobListing from "../components/JobListing";
import { useEffect, useState } from "react";

const Home = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await fetch("/api/jobs");
<<<<<<< HEAD

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

=======
        const data = await response.json();
        setJobs(data);
      } catch (error) {
        console.error("Error fetching jobs:", error);
      }
    };
    fetchJobs();
  }, []);
>>>>>>> 1e08d09 ([iter1]compeleted)
  return (
    <div className="home">
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

<<<<<<< HEAD
export default Home;
=======
export default Home;


>>>>>>> 1e08d09 ([iter1]compeleted)
