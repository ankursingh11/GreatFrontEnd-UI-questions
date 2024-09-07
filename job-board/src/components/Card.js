import React from "react";
import useFetchJob from "../utils/useFetchJobs";
import convertUnixTimestamp from "../utils/timeDate"

const Card = ({ id }) => {
  const data = useFetchJob(id);
  console.log(data);

  return (
    <div className = "border-4 border-orange-400 w-6/12 my-2 p-2">
      {data?.url ? (
        <h1 className = "text-xl font-bold">
          <a href={data?.url}>{data.title}</a>
        </h1>
      ) : (
        <h1 className = "text-xl font-bold">{data.title}</h1>
      )}
      <div className = "flex gap-4">
        <span>by <span className = "font-bold">{data.by}</span></span>
        <span>. {convertUnixTimestamp(data.time)}</span>
      </div>
    </div>
  );
};

export default Card;
