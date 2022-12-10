import React from "react";
import styled from "styled-components";

export default function MainRight() {
  return (
    <>
      <div class="detail-side">
        <div class="sticky">
          <div class="side-bar">
            <div class="side-blk">
              <div class="side-mny">
                <div>
                  <span class="side-mny-span">₩1,442,856</span>
                  <span>/ 박</span>
                </div>

                <div class="side-star">
                  <span>
                    <SideStar
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
                    </SideStar>
                  </span>
                  <span>5.0 ·</span>
                  <span>후기 7개</span>
                </div>
              </div>

              <div class="side-btn-div">
                <div class="side-chk-box">
                  <div class="side-chkin">
                    <div>체크인</div>
                    <div>2022. 12. 06.</div>
                  </div>
                  <div class="side-chkout">
                    <div>체크아웃</div>
                    <div>2022. 12. 11.</div>
                  </div>
                </div>
                <div class="side-guest">
                  <div>
                    <div>인원</div>
                    <div>게스트 1명</div>
                  </div>
                  <div class="side-guest-cnt">
                    <SideGuestCnt
                      viewBox="0 0 32 32"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      role="presentation"
                      focusable="false"
                    >
                      <g fill="none">
                        <path d="m28 12-11.2928932 11.2928932c-.3905243.3905243-1.0236893.3905243-1.4142136 0l-11.2928932-11.2928932"></path>
                      </g>
                    </SideGuestCnt>
                  </div>
                </div>
              </div>
              <a href="/reservation.html">
                <div class="side-res">
                  <button class="side-res-btn">예약하기</button>
                </div>
              </a>

              <div class="res-info">
                예약 확정 전에는 요금이 청구되지 않습니다.
              </div>
              <div class="side-cal-div">
                <div class="side-cal">
                  <div>₩1,442,856 x 5박</div>
                  <div>₩7,214,280</div>
                </div>
                <div class="side-cal">
                  <div>청소비</div>
                  <div>₩600,000</div>
                </div>
                <div class="side-cal">
                  <div>서비스 수수료</div>
                  <div>₩400,000</div>
                </div>
                <div class="side-cal">
                  <div>세금</div>
                  <div>₩300,000</div>
                </div>
              </div>
              <div class="side-allcal">
                <div class="side-cal">
                  <div>총 합계</div>
                  <div>₩8,514,280</div>
                </div>
              </div>
            </div>
          </div>
          <div class="side-info">
            <div class="side-info-div">
              <h2 class="side-info-h2">저렴한 요금</h2>
              <span>
                검색하시는 날짜의 요금은 지난 3개월의 평균 1박 요금보다 ₩283,513
                저렴합니다.
              </span>
            </div>
            <div>
              <MoneySvg
                viewBox="0 0 48 48"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                role="presentation"
                focusable="false"
              >
                <g stroke="none">
                  <path d="M25.55 1a5 5 0 0 1 3.344 1.282l.192.182 17.207 17.208a3 3 0 0 1 .135 4.098l-.135.144-18.379 18.379a3.001 3.001 0 0 1-3.32.63l-6.42 3.81c-1.296.768-2.948.452-3.894-.736l-.115-.153-.118-.186L2.094 25.046a5 5 0 0 1-.53-3.7l3.435-14.01L5 6a5 5 0 0 1 4.783-4.995L10 1h15.55zM5 15.733l-1.494 6.09a3 3 0 0 0 .219 2.034l.1.186 11.93 20.574.07.112a1 1 0 0 0 1.328.283l5.797-3.441L6.464 25.086a5 5 0 0 1-1.457-3.272L5 21.55v-5.817zM25.55 3H10a3 3 0 0 0-2.995 2.824L7 6v15.55a3 3 0 0 0 .743 1.977l.136.144L25.086 40.88a1 1 0 0 0 1.32.083l.094-.083L44.88 22.5a1 1 0 0 0 .083-1.32l-.083-.094L27.67 3.879A3 3 0 0 0 25.55 3zM14 7a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"></path>
                  <path
                    d="M25.556 5H10a1 1 0 0 0-.993.883L9 6v15.556a1 1 0 0 0 .206.608l.087.1 16.505 16.505 16.971-16.971L26.263 5.293a1 1 0 0 0-.575-.284L25.556 5z"
                    fill-opacity=".2"
                  ></path>
                </g>
              </MoneySvg>
            </div>
          </div>
          <div class="report">
            <div>
              <button class="report-btn">
                <span>
                  <ReportSvg
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    role="presentation"
                    focusable="false"
                  >
                    <path d="M28 6H17V4a2 2 0 0 0-2-2H3v28h2V18h10v2a2 2 0 0 0 2 2h11l.115-.006a1 1 0 0 0 .847-1.269L27.039 14l1.923-6.724A1 1 0 0 0 28 6z"></path>
                  </ReportSvg>
                </span>
                <span class="report-con"> 숙소 신고하기 </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

const SideStar = styled.svg`
  display: block;
  height: 12px;
  width: 12px;
  fill: currentcolor;
`;

const SideGuestCnt = styled.svg`
  display: block;
  fill: none;
  height: 16px;
  width: 16px;
  stroke: currentcolor;
  stroke-width: 4;
  overflow: visible;
`;

const MoneySvg = styled.svg`
  display: block;
  height: 32px;
  width: 32px;
  fill: rgb(227, 28, 95);
  stroke: currentcolor;
`;

const ReportSvg = styled.svg`
  display: block;
  height: 16px;
  width: 16px;
  fill: currentcolor;
`;