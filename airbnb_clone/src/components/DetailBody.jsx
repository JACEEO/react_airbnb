import React from "react";
import styled from "styled-components";

export default function DetailBody() {
  return (
    <>
      <section>
        <div class="main-section-padding">
          <div class="main-section-margin">
            <div class="main-section-padding-top">
              <span>
                <h1 class="main-h1">
                  10-Acre Retreat-10 Beds-Hot Tub-Pool Table-Pets
                </h1>
              </span>
              <div class="main-between">
                <div class="main-host">
                  <span class="main-star">
                    <span class="">
                      <StarSvg
                        viewBox="0 0 32 32"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                        role="presentation"
                        focusable="false"
                      >
                        <path
                          d="M15.094 1.579l-4.124 8.885-9.86 1.27a1 1 0 0 0-.542 1.736l7.293 6.565-1.965 9.852a1 1 0 0 0 1.483 1.061L16 25.951l8.625 4.997a1 1 0 0 0 1.482-1.06l-1.965-9.853 7.293-6.565a1 1 0 0 0-.541-1.735l-9.86-1.271-4.127-8.885a1 1 0 0 0-1.814 0z"
                          fill-rule="evenodd"
                        ></path>
                      </StarSvg>
                    </span>
                    <span class="">5.0 · </span>
                    <span class=""> 후기 7개 · </span>
                  </span>

                  <span class="main-star">
                    <span> 슈퍼호스트 · </span>
                  </span>

                  <span class="main-star">
                    <span> Fairplay, 콜로라도, 미국 </span>
                  </span>
                </div>
                <div class="main-save">
                  <div class="main-star">
                    <span class="_14tkmhr">
                      <HeartSvg
                        viewBox="0 0 32 32"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                        role="presentation"
                        focusable="false"
                      >
                        <g fill="none">
                          <path d="M27 18v9a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-9"></path>
                          <path d="M16 3v23V3z"></path>
                          <path d="M6 13l9.293-9.293a1 1 0 0 1 1.414 0L26 13"></path>
                        </g>
                      </HeartSvg>
                    </span>
                    공유하기
                  </div>

                  <div class="main-star">
                    <span class="_14tkmhr">
                      <HeartSvg
                        viewBox="0 0 32 32"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                        role="presentation"
                        focusable="false"
                      >
                        <path d="m16 28c7-4.733 14-10 14-17 0-1.792-.683-3.583-2.05-4.95-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05l-2.051 2.051-2.05-2.051c-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05-1.367 1.367-2.051 3.158-2.051 4.95 0 7 7 12.267 14 17z"></path>
                      </HeartSvg>
                    </span>
                    저장
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

const StarSvg = styled.svg`
  display: block;
  height: 14px;
  width: 14px;
  fill: currentcolor;
`;

const HeartSvg = styled.svg`
  display: block;
  fill: none;
  height: 16px;
  width: 16px;
  stroke: currentcolor;
  stroke-width: 2;
  overflow: visible;
`;