import React from "react";
import About from "./about";
import CreateRoom from "./createRoom";
import JoinRoom from "./joinRoom";

/** Home Page Component
 * Displays about blurb
 * Displays options, and routes user accordingly
 *
 */
function Home() {




  return (
    <div className="container py-5 col-6" >
      <div className="row">
        <div className="card">

            <div className="row">
              <div className="col-12">
                <h1 className="card-title">QuerQuee</h1>
                <h6 className="card-subtitle mb-2 text-muted">An Experiment in Collective Studying</h6>
              </div>
            </div>

            <div className="row py-3 d-flex justify-content-evenly">
              <div className="col-11">
                <About />
              </div>
            </div>

            <div className="row py-3 d-flex justify-content-evenly">
              <div className="col-4">
                <CreateRoom />
              </div>

              <div className="col-4">
                <JoinRoom />
              </div>
            </div>

        </div>
      </div>
    </div>
  );
}

export default Home;