import React from "react";
import { Job } from "./Job";

export const JobList = ({ jobs, changeJob, jobSelected }) => (
  <ul className="col-md-4">
    {jobs &&
      jobs.map((job, index) => (
        <Job
          {...job}
          key={index}
          changeJob={changeJob}
          jobSelected={jobSelected}
        />
      ))}
  </ul>
);
