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
    <div class="container py-5 ">
      <div class="row">
        <div class="card">
          <div class="col-12">


            <div class="row">
              <div class="col-12">
                <h1 class="card-title">QuerQuee</h1>
                <h6 class="card-subtitle mb-2 text-muted">An Experiment in Collective Studying</h6>
              </div>
            </div>

            <div class="row py-3 d-flex justify-content-evenly">
              <div class="col-11">
                <About />
              </div>
            </div>

            <div class="row py-3 d-flex justify-content-evenly">
              <div class="col-4">
                <CreateRoom />
              </div>

              <div class="col-4">
                <JoinRoom />
              </div>
            </div>


          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;