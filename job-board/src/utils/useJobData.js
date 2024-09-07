import { useState, useEffect } from "react";
const useJobData = () => {
  const [jobId, setJobIds] = useState([]);

  async function fetchJobIds() {
    const response = await fetch(
      "https://hacker-news.firebaseio.com/v0/jobstories.json"
    );
    const data = await response.json();
    setJobIds(data);
  }

  useEffect(() => {
    fetchJobIds();
  }, []);

  return jobId;
};

export default useJobData;
