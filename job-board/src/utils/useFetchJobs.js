import { useState, useEffect } from "react";

const useFetchJob = (jobId) => {
  const [jobData, setJobData] = useState({});

  async function getJobData(jobId) {
    const response = await fetch(
      `https://hacker-news.firebaseio.com/v0/item/${jobId}.json`
    );
    const data = await response.json();
    console.log(data);
    setJobData(data);
  }

  useEffect(() => {
    getJobData(jobId);
  }, []);

  return jobData;
};

export default useFetchJob;
