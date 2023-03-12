import React from 'react';

const FeatureCard = ({ feature }) => {
  return (
    <div class="col-lg-1/2 ">
      <div class="column-inner dorik-column-b10ybbcb  1/2">
        <div class="dorik-wrapper dorik-image-d33w7idr-wrapper ">
          <img
            src={feature.image}
            class="dorik-image-d33w7idr "
          />
        </div>
        <div class="dorik-wrapper dorik-heading-giijxmbr-wrapper ">
          <h4 class="dorik-heading dorik-heading-giijxmbr ">
            <span>{feature.title}</span>
          </h4>
        </div>
        <div class="dorik-text dorik-text-inpwtn4r ">{feature.description}</div>
        <div class="dorik-button-12nkqyce-wrapper  ">
          <button class="dorik-btn dorik-button-12nkqyce ">
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="arrow-right"
              class="svg-inline--fa fa-arrow-right fa-w-14 fa-fw icon"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path
                fill="currentColor"
                d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"
              ></path>
            </svg>
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;
