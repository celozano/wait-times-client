import React from "react";

const Loading = () => {
  let cards = [1, 2, 3, 4].map(port => {
    return (
      <div className="col-sm-12 col-lg-3 pb-3">
        <div className="card border-dark">
          <div className="card-body">
            <div className="animated-background">
              <div className="background-masker content-first" />
              <div className="background-masker content-second" />
              <div className="background-masker content-third" />
              <div className="background-masker content-fourth" />
              <div className="background-masker content-fifth" />
            </div>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className="container pt-5">
      <div className="row">{cards}</div>
    </div>
  );
};

export default Loading;
