import React from "react";
import { baseImg } from "../utils/constants";

const CallToAction = (props) => {
  return (
    <section class="cta middle-xs">
      <div class="container">
        <div class="row middle-md">
          <div class="col-md-8">
            <h2>Call to Action</h2>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat.
            </p>
            <a href="">
              <button class="light">Call to action</button>
            </a>
          </div>
          <div class="col-md-4">
            <img
              src={`${baseImg}/banner-braile.jpg" alt="imagen de referencia`}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
