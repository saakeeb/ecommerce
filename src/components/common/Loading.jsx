import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

/**
 * Reusable Loading Component
 * @param {string} type - "details" | "grid" | "row"
 * @param {number} count - Number of skeletons for grid/row types
 */
const Loading = ({ type = "details", count = 6 }) => {
  switch (type) {
    case "details":
      return (
        <div className="container my-5 py-2">
          <div className="row">
            <div className="col-md-6 py-3">
              <Skeleton height={400} width={400} />
            </div>
            <div className="col-md-6 py-5">
              <Skeleton height={30} width={250} />
              <Skeleton height={90} />
              <Skeleton height={40} width={70} />
              <Skeleton height={50} width={110} />
              <Skeleton height={120} />
              <Skeleton height={40} width={110} inline />
              <Skeleton className="mx-3" height={40} width={110} />
            </div>
          </div>
        </div>
      );

    case "grid":
      return (
        <div className="row">
          <div className="col-12 py-5 text-center">
            <Skeleton height={40} width={560} />
          </div>
          {[...Array(count)].map((_, i) => (
            <div
              className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4"
              key={i}
            >
              <Skeleton height={592} />
            </div>
          ))}
        </div>
      );

    case "row":
      return (
        <div className="my-4 py-4">
          <div className="d-flex">
            {[...Array(count)].map((_, i) => (
              <div className="mx-4" key={i}>
                <Skeleton height={400} width={250} />
              </div>
            ))}
          </div>
        </div>
      );

    default:
      return null;
  }
};

export default Loading;
