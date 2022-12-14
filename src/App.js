import React, { useLayoutEffect } from "react";
import "./style/global.scss";
import {
  header,
  map,
  intro,
  feature,
  mapibt,
  footer,
  facebook,
  linkedin,
  snapchat,
  twitter,
  whatsapp,
  office,
  tower,
  bedroom,
  lounge,
} from "./assests";
import { ComponentSectionCard } from "./components/ComponentSectionCard";

export default function App() {
  const [isOpen, setIsOpen] = React.useState(true);
  const [IsScrolling, setIsScrolling] = React.useState(false);
  function checkNavOpenClose() {
    if (window.innerWidth < 900) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  }
  useLayoutEffect(() => {
    checkNavOpenClose();
    window.addEventListener("resize", checkNavOpenClose);
    window.addEventListener("scroll", () => {
      checkNavOpenClose();
      if (window.scrollY > 0) {
        setIsScrolling(true);
      } else {
        setIsScrolling(false);
      }
    });
  }, []);

  return (
    <>
      <div className={IsScrolling ? "header header__active" : "header"}>
        <div
          className={
            IsScrolling ? "header__left header__left__active" : "header__left"
          }
        />
        <div
          className={
            IsScrolling
              ? "header__contant header__contant__active"
              : "header__contant"
          }
        >
          <div className="header__logo__main">
            <a href="#" className="header__contant__logo">
              <svg width="150" height="38" viewBox="0 0 199 38">
                <g
                  id="Group_437"
                  data-name="Group 437"
                  transform="translate(-0.382 0.029)"
                >
                  <text
                    id="IBT"
                    transform="translate(0.382 29.971)"
                    fill="#fff"
                    fontSize="31"
                    fontFamily="Montserrat-Bold, Montserrat"
                    fontWeight="700"
                  >
                    <tspan x="0" y="0">
                      IBT
                    </tspan>
                  </text>
                  <text
                    id="Pakistan"
                    transform="translate(65.382 29.971)"
                    fill="#fff"
                    fontSize="31"
                    fontFamily="Montserrat-Regular, Montserrat"
                  >
                    <tspan x="0" y="0">
                      Pakistan
                    </tspan>
                  </text>
                </g>
              </svg>
            </a>
          </div>

          {isOpen ? (
            <div className="ibt__nav__link__wraper">
              <a
                href="#home__section"
                onClick={() => {
                  if (window.innerWidth < 900) {
                    setIsOpen(false);
                  }
                }}
                className="ibt__nav__link"
              >
                Home
                <title>home</title>
              </a>
              <a
                href="#intro__section"
                onClick={() => {
                  if (window.innerWidth < 900) {
                    setIsOpen(false);
                  }
                }}
                className="ibt__nav__link"
              >
                About Us
                <title>About us</title>
              </a>
              <a
                href="#feature__section"
                onClick={() => {
                  if (window.innerWidth < 900) {
                    setIsOpen(false);
                  }
                }}
                className="ibt__nav__link"
              >
                Feature
                <title>feature</title>
              </a>
              <a
                href="#location__map__section"
                onClick={() => {
                  if (window.innerWidth < 900) {
                    setIsOpen(false);
                  }
                }}
                className="ibt__nav__link"
              >
                components
                <title>components</title>
              </a>
              <a
                href="#footer__section"
                onClick={() => {
                  if (window.innerWidth < 900) {
                    setIsOpen(false);
                  }
                }}
                className="ibt__nav__link"
              >
                Contact Us
                <title>contact us</title>
              </a>
            </div>
          ) : null}
          <button
            className="ibt__contant__nav__menu"
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            {isOpen ? (
              <Close size="24" color="white" />
            ) : (
              <Menu size="24" color="white" />
            )}
          </button>
        </div>
        <div className="header__right" />
      </div>
      <section id="home__section" className="home__section">
        <img src={header} alt="header" className="home__section__img" />
        <div className="home__section__overlay">
          <img src={map} alt="map" className="home__section__overlay__img" />
          <div className="home__section__overlay__content">
            <div className="header__heading__text">
              <span>IBT</span> Pakistan
            </div>
            <div className="home__section__overlay__content__info">
              Pakistan's Largest Business Tower
            </div>
          </div>
        </div>
      </section>
      <section id="intro__section" className="intro__section">
        <div className="intro__container">
          <div className="intro__container__left">
            <div className="intro__container__left__contant">
              <div className="intro__container__left__contant__heading">
                INTRODUCTION
              </div>
              <div className="intro__container__left__contant__sub__heading">
                IBT is an industrial Mall , It will cater needs of all
                construction industry, Home furnitures and accessories and auto
                mobile industry Pakistan needs industrial mall for its economic
                growth It will be like mini china It will be like a trade centre
                IBT will create opportunities for Pakistani traders to buy
                Chinese, Korean, German and other International Products under
                one roof in international pavilion, While our national products
                will be displayed at national pavilion,
              </div>
            </div>
          </div>
          <div className="intro__container__right">
            <div className="intro__container__right__img">
              <img src={intro} alt="intro" />
            </div>
          </div>
        </div>
      </section>
      <section id="components__section" className="components__section">
        <div className="components__section__top" />
        <div className="components__section__bottom">
          <div className="components__section__bottom__content">
            <div className="components__section__bottom__content__heading">
              PROJECT COMPONENTS
            </div>
            <div className="components__section__bottom__content__content">
              <ComponentSectionCard
                img={tower}
                title="One dedicated tower for most Luxurious Apartments "
              />
              <ComponentSectionCard img={lounge} title="Industrial Mall" />
              <ComponentSectionCard img={bedroom} title="One Five Star Hotel" />
              <ComponentSectionCard
                img={office}
                title="Dedicated corporate and IT Centre"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="specification__section">
        <div className="specification__section__left">
          <div className="specificaryion__left__wraper">
            <div className="specification__section__left__entry">
              <div className="specification__section__left__entry__svg">
                <svg
                  id="Group_312"
                  data-name="Group 312"
                  width="30"
                  height="60"
                  viewBox="0 0 72.167 72.165"
                >
                  <defs>
                    <clipPath id="clipPath">
                      <rect
                        id="Rectangle_794"
                        data-name="Rectangle 794"
                        width="72.167"
                        height="72.165"
                        fill="none"
                      />
                    </clipPath>
                  </defs>
                  <g
                    id="Group_311"
                    data-name="Group 311"
                    clipPath="url(#clipPath)"
                  >
                    <path
                      id="Path_41"
                      data-name="Path 41"
                      d="M36.077,0Q47.124,0,58.17,0a13.825,13.825,0,0,1,13.982,13.92q.02,22.169.005,44.338a13.743,13.743,0,0,1-13.936,13.9q-22.131.017-44.263,0A13.753,13.753,0,0,1,.007,58.2q-.013-22.131,0-44.263A13.753,13.753,0,0,1,13.982,0Q25.029-.008,36.077,0M67.352,36.156q0-10.972,0-21.945a8.974,8.974,0,0,0-9.4-9.4H14.215a8.977,8.977,0,0,0-9.4,9.4q0,21.87,0,43.739a8.979,8.979,0,0,0,9.4,9.4q21.87,0,43.739,0a8.979,8.979,0,0,0,9.4-9.4q0-10.9,0-21.794"
                      transform="translate(0 0)"
                    />
                    <path
                      id="Path_42"
                      data-name="Path 42"
                      d="M64.7,68.356c0,2.842.011,5.744,0,8.645a2.4,2.4,0,1,1-4.8-.066q-.01-5.711,0-11.422c0-1.252-.008-2.5,0-3.757a1.68,1.68,0,0,1,1.854-1.868q7.627-.011,15.255,0a2.4,2.4,0,1,1,.023,4.8c-2.9.014-5.808,0-8.569,0l34.73,34.725v-.481q0-3.945,0-7.89a2.419,2.419,0,1,1,4.808.011q0,7.44,0,14.879c0,1.446-.606,2.051-2.051,2.052q-7.44,0-14.879,0a2.419,2.419,0,1,1-.011-4.808q3.907-.007,7.815,0h.656Z"
                      transform="translate(-47.862 -47.855)"
                    />
                  </g>
                </svg>
              </div>
              <div className="specification__section__left__entry__contant">
                <div className="specification__section__left__entry__contant__heading">
                  Land Area
                </div>
                <div className="specification__section__left__entry__contant__sub__heading">
                  136 Kanals 81600 Sq
                </div>
              </div>
            </div>
            <div className="specification__section__left__entry">
              <div className="specification__section__left__entry__svg">
                <svg
                  id="Group_312"
                  data-name="Group 312"
                  width="30"
                  height="60"
                  viewBox="0 0 72.167 72.165"
                >
                  <defs>
                    <clipPath id="clipPath">
                      <rect
                        id="Rectangle_794"
                        data-name="Rectangle 794"
                        width="72.167"
                        height="72.165"
                        fill="none"
                      />
                    </clipPath>
                  </defs>
                  <g
                    id="Group_311"
                    data-name="Group 311"
                    clipPath="url(#clipPath)"
                  >
                    <path
                      id="Path_41"
                      data-name="Path 41"
                      d="M36.077,0Q47.124,0,58.17,0a13.825,13.825,0,0,1,13.982,13.92q.02,22.169.005,44.338a13.743,13.743,0,0,1-13.936,13.9q-22.131.017-44.263,0A13.753,13.753,0,0,1,.007,58.2q-.013-22.131,0-44.263A13.753,13.753,0,0,1,13.982,0Q25.029-.008,36.077,0M67.352,36.156q0-10.972,0-21.945a8.974,8.974,0,0,0-9.4-9.4H14.215a8.977,8.977,0,0,0-9.4,9.4q0,21.87,0,43.739a8.979,8.979,0,0,0,9.4,9.4q21.87,0,43.739,0a8.979,8.979,0,0,0,9.4-9.4q0-10.9,0-21.794"
                      transform="translate(0 0)"
                    />
                    <path
                      id="Path_42"
                      data-name="Path 42"
                      d="M64.7,68.356c0,2.842.011,5.744,0,8.645a2.4,2.4,0,1,1-4.8-.066q-.01-5.711,0-11.422c0-1.252-.008-2.5,0-3.757a1.68,1.68,0,0,1,1.854-1.868q7.627-.011,15.255,0a2.4,2.4,0,1,1,.023,4.8c-2.9.014-5.808,0-8.569,0l34.73,34.725v-.481q0-3.945,0-7.89a2.419,2.419,0,1,1,4.808.011q0,7.44,0,14.879c0,1.446-.606,2.051-2.051,2.052q-7.44,0-14.879,0a2.419,2.419,0,1,1-.011-4.808q3.907-.007,7.815,0h.656Z"
                      transform="translate(-47.862 -47.855)"
                    />
                  </g>
                </svg>
              </div>
              <div className="specification__section__left__entry__contant">
                <div className="specification__section__left__entry__contant__heading">
                  Land Area
                </div>
                <div className="specification__section__left__entry__contant__sub__heading">
                  136 Kanals 81600 Sq Yards
                </div>
              </div>
            </div>
            <div className="specification__section__left__entry">
              <div className="specification__section__left__entry__svg">
                <svg
                  id="Group_312"
                  data-name="Group 312"
                  width="30"
                  height="60"
                  viewBox="0 0 72.167 72.165"
                >
                  <defs>
                    <clipPath id="clipPath">
                      <rect
                        id="Rectangle_794"
                        data-name="Rectangle 794"
                        width="72.167"
                        height="72.165"
                        fill="none"
                      />
                    </clipPath>
                  </defs>
                  <g
                    id="Group_311"
                    data-name="Group 311"
                    clipPath="url(#clipPath)"
                  >
                    <path
                      id="Path_41"
                      data-name="Path 41"
                      d="M36.077,0Q47.124,0,58.17,0a13.825,13.825,0,0,1,13.982,13.92q.02,22.169.005,44.338a13.743,13.743,0,0,1-13.936,13.9q-22.131.017-44.263,0A13.753,13.753,0,0,1,.007,58.2q-.013-22.131,0-44.263A13.753,13.753,0,0,1,13.982,0Q25.029-.008,36.077,0M67.352,36.156q0-10.972,0-21.945a8.974,8.974,0,0,0-9.4-9.4H14.215a8.977,8.977,0,0,0-9.4,9.4q0,21.87,0,43.739a8.979,8.979,0,0,0,9.4,9.4q21.87,0,43.739,0a8.979,8.979,0,0,0,9.4-9.4q0-10.9,0-21.794"
                      transform="translate(0 0)"
                    />
                    <path
                      id="Path_42"
                      data-name="Path 42"
                      d="M64.7,68.356c0,2.842.011,5.744,0,8.645a2.4,2.4,0,1,1-4.8-.066q-.01-5.711,0-11.422c0-1.252-.008-2.5,0-3.757a1.68,1.68,0,0,1,1.854-1.868q7.627-.011,15.255,0a2.4,2.4,0,1,1,.023,4.8c-2.9.014-5.808,0-8.569,0l34.73,34.725v-.481q0-3.945,0-7.89a2.419,2.419,0,1,1,4.808.011q0,7.44,0,14.879c0,1.446-.606,2.051-2.051,2.052q-7.44,0-14.879,0a2.419,2.419,0,1,1-.011-4.808q3.907-.007,7.815,0h.656Z"
                      transform="translate(-47.862 -47.855)"
                    />
                  </g>
                </svg>
              </div>
              <div className="specification__section__left__entry__contant">
                <div className="specification__section__left__entry__contant__heading">
                  Land Area
                </div>
                <div className="specification__section__left__entry__contant__sub__heading">
                  136 Kanals 81600 Sq Yards
                </div>
              </div>
            </div>
            <div className="specification__section__left__entry">
              <div className="specification__section__left__entry__svg">
                <svg
                  id="Group_312"
                  data-name="Group 312"
                  width="30"
                  height="60"
                  viewBox="0 0 72.167 72.165"
                >
                  <defs>
                    <clipPath id="clipPath">
                      <rect
                        id="Rectangle_794"
                        data-name="Rectangle 794"
                        width="72.167"
                        height="72.165"
                        fill="none"
                      />
                    </clipPath>
                  </defs>
                  <g
                    id="Group_311"
                    data-name="Group 311"
                    clipPath="url(#clipPath)"
                  >
                    <path
                      id="Path_41"
                      data-name="Path 41"
                      d="M36.077,0Q47.124,0,58.17,0a13.825,13.825,0,0,1,13.982,13.92q.02,22.169.005,44.338a13.743,13.743,0,0,1-13.936,13.9q-22.131.017-44.263,0A13.753,13.753,0,0,1,.007,58.2q-.013-22.131,0-44.263A13.753,13.753,0,0,1,13.982,0Q25.029-.008,36.077,0M67.352,36.156q0-10.972,0-21.945a8.974,8.974,0,0,0-9.4-9.4H14.215a8.977,8.977,0,0,0-9.4,9.4q0,21.87,0,43.739a8.979,8.979,0,0,0,9.4,9.4q21.87,0,43.739,0a8.979,8.979,0,0,0,9.4-9.4q0-10.9,0-21.794"
                      transform="translate(0 0)"
                    />
                    <path
                      id="Path_42"
                      data-name="Path 42"
                      d="M64.7,68.356c0,2.842.011,5.744,0,8.645a2.4,2.4,0,1,1-4.8-.066q-.01-5.711,0-11.422c0-1.252-.008-2.5,0-3.757a1.68,1.68,0,0,1,1.854-1.868q7.627-.011,15.255,0a2.4,2.4,0,1,1,.023,4.8c-2.9.014-5.808,0-8.569,0l34.73,34.725v-.481q0-3.945,0-7.89a2.419,2.419,0,1,1,4.808.011q0,7.44,0,14.879c0,1.446-.606,2.051-2.051,2.052q-7.44,0-14.879,0a2.419,2.419,0,1,1-.011-4.808q3.907-.007,7.815,0h.656Z"
                      transform="translate(-47.862 -47.855)"
                    />
                  </g>
                </svg>
              </div>
              <div className="specification__section__left__entry__contant">
                <div className="specification__section__left__entry__contant__heading">
                  Land Area
                </div>
                <div className="specification__section__left__entry__contant__sub__heading">
                  136 Kanals 81600 Sq Yards
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="specification__section__right">
          <div className="specification__section__right__wraper">
            <div className="specification__section__right__contant">
              PROJECT SPECIFICATIONS
            </div>
          </div>
        </div>
      </section>
      <section id="feature__section" className="feature__section">
        <div className="feature__section__left">
          <div className="feature__section__left__contant__wraper">
            <div className="feature__section__left__contant">
              <div className="feature__section__left__contant__heading">
                Project Feature
              </div>
              <div className="feature__section__left__contant__card">
                <span>Largest </span> and <span>Tallest </span> Building of
                Pakistan
              </div>
              <div className="feature__section__left__contant__card">
                <span>Largest </span>and<span>Tallest </span> Building of
                Pakistan
              </div>
              <div className="feature__section__left__contant__card">
                <span>Largest </span> and <span>Tallest </span> Building of
                Pakistan
              </div>
            </div>
          </div>
        </div>
        <div className="feature__section__right">
          <div className="feature__section__right__img">
            {<img src={feature} alt="feature" />}
          </div>
        </div>
      </section>
      <section id="location__section" className="location__section">
        <div className="location__wraper">
          <div className="location__wraper__heading">LOCATION DISTANCES</div>
          <div className="location__wraper__cards">
            <div className="location__card">
              <div className="location__card__svg">
                <svg
                  width="94.111"
                  height="113.226"
                  viewBox="0 0 94.111 113.226"
                >
                  <g
                    id="Group_322"
                    data-name="Group 322"
                    transform="translate(-641.947 -3634)"
                  >
                    <path
                      id="Path_52"
                      data-name="Path 52"
                      d="M67.4,0c1.5.646,1.964,1.913,2.21,3.412.638,3.887,1.359,7.759,2.05,11.638.033.179.1.352.2.669,1.436,0,2.895,0,4.354,0,2.883.008,4.421,1.551,4.431,4.448,0,1.691,0,3.384,0,5.237h1.244c2.728,0,5.456-.018,8.184.008A3.856,3.856,0,0,1,94.1,29.344c.013.257.005.516.005.775q0,27.2,0,54.4a5.746,5.746,0,0,1-.113,1.423,1.617,1.617,0,0,1-3.169-.248,12.244,12.244,0,0,1-.03-1.325q0-26.979,0-53.958c0-1.689,0-1.689-1.707-1.689-2.76,0-5.519,0-8.441,0,0,.973,0,1.878,0,2.784,0,3.06-1.358,4.471-4.386,4.584-.214.008-.428.051-.778.095.247,1.379.491,2.708.719,4.041.205,1.2-.262,2.051-1.218,2.249a1.657,1.657,0,0,1-2.032-1.516q-.383-2.006-.7-4.025c-.095-.592-.306-.891-.991-.863-1.392.056-2.786.016-4.337.016,3.01,24.661,6.006,49.2,9.011,73.818,2.894,0,5.689,0,8.484,0,.884,0,.775-.617.677-1.171-.462-2.647-.94-5.291-1.414-7.937q-3.6-20.055-7.2-40.109c-.676-3.768-1.354-7.536-2.009-11.307C74.23,48,74.706,47.171,75.754,47c1.032-.166,1.744.484,1.992,1.87q1.918,10.707,3.824,21.416,3.368,18.805,6.754,37.608c.612,3.385-.97,5.329-4.434,5.329q-36.827,0-73.653,0c-3.523,0-5.075-1.929-4.427-5.421.727-3.909,1.381-7.83,2.131-11.734a2.766,2.766,0,0,1,.924-1.627,1.682,1.682,0,0,1,1.6.024,2.182,2.182,0,0,1,.744,1.653c-.226,1.972-.637,3.922-.986,5.878-.389,2.175-.794,4.346-1.176,6.521-.221,1.257-.1,1.386,1.211,1.388,2.61,0,5.221,0,7.925,0,3-24.6,6-49.115,9.01-73.811-1.654,0-3.22-.028-4.781.038-.19.008-.467.5-.523.807q-1.81,9.941-3.575,19.89-2.788,15.6-5.574,31.2c-.229,1.279-.953,1.906-1.977,1.753-1.068-.159-1.539-1.033-1.279-2.5q1.791-10.057,3.605-20.11,2.7-15,5.391-30c.056-.317.053-.644.088-1.095-.444,0-.8.009-1.163,0a3.854,3.854,0,0,1-3.93-3.918c-.034-1.1-.005-2.2-.005-3.384-.439-.023-.794-.056-1.149-.056-2.618,0-5.236.024-7.852-.017-.87-.014-1.229.3-1.154,1.156.029.329,0,.663,0,.994q0,26.87,0,53.738c0,1.8-.514,2.576-1.684,2.55C.5,87.119,0,86.352,0,84.626Q0,57.316,0,30c0-3.148,1.448-4.593,4.591-4.6q4.258-.01,8.514-.021a1.777,1.777,0,0,0,.358-.124V20.5c0-3.369,1.406-4.778,4.762-4.779,1.324,0,2.647,0,4.077,0,.44-2.431.873-4.811,1.3-7.192.325-1.812.692-3.618.948-5.439A3.66,3.66,0,0,1,26.707,0ZM30.527,36.155q-4.5,36.856-8.993,73.68H72.577c-3-24.6-6-49.109-8.995-73.68Zm16.531-3.386c9.653,0,19.307-.013,28.96.02,1.018,0,1.342-.307,1.329-1.326-.051-3.721-.043-7.441,0-11.162.01-.958-.307-1.282-1.276-1.281q-29.016.031-58.03,0c-.979,0-1.277.341-1.268,1.289.039,3.647.015,7.293.016,10.941,0,1.516,0,1.52,1.536,1.52q14.368,0,28.738,0M33.038,15.657H61.074L59.58,3.4H34.525c-.5,4.109-.989,8.148-1.487,12.261m-7.344.061c1.137,0,2.16-.037,3.177.014.676.033.874-.238.936-.874.164-1.681.406-3.353.606-5.03.255-2.135.5-4.271.753-6.429H27.893c-.734,4.116-1.456,8.154-2.2,12.319M66.212,3.383H62.934c.478,3.981.941,7.889,1.438,11.793a.768.768,0,0,0,.533.514c1.131.049,2.265.024,3.511.024l-2.2-12.331"
                      transform="translate(641.947 3634)"
                      fill="#001920"
                    />
                    <path
                      id="Path_53"
                      data-name="Path 53"
                      d="M45.134,52.908a16.174,16.174,0,0,1-.106,1.87,1.464,1.464,0,0,1-1.54,1.3,1.429,1.429,0,0,1-1.616-1.33,24.3,24.3,0,0,1,.005-3.741,1.42,1.42,0,0,1,1.53-1.308,1.492,1.492,0,0,1,1.627,1.337,16.453,16.453,0,0,1,.1,1.871"
                      transform="translate(645.554 3638.289)"
                      fill="#001920"
                    />
                    <path
                      id="Path_54"
                      data-name="Path 54"
                      d="M45.056,38.057a14.9,14.9,0,0,1-.015,1.87,1.467,1.467,0,0,1-1.595,1.364,1.433,1.433,0,0,1-1.587-1.364,25.791,25.791,0,0,1,0-3.63,1.435,1.435,0,0,1,1.588-1.364A1.473,1.473,0,0,1,45.042,36.3a13.772,13.772,0,0,1,.014,1.76"
                      transform="translate(645.553 3637.015)"
                      fill="#001920"
                    />
                    <path
                      id="Path_55"
                      data-name="Path 55"
                      d="M45.056,67.63A14.912,14.912,0,0,1,45.04,69.5a1.486,1.486,0,0,1-1.6,1.367,1.458,1.458,0,0,1-1.581-1.388,25.482,25.482,0,0,1,.008-3.631A1.422,1.422,0,0,1,43.458,64.5a1.464,1.464,0,0,1,1.585,1.37,13.405,13.405,0,0,1,.013,1.761"
                      transform="translate(645.553 3639.566)"
                      fill="#001920"
                    />
                    <path
                      id="Path_56"
                      data-name="Path 56"
                      d="M41.816,82.429c0-.55-.04-1.1.009-1.652a1.525,1.525,0,0,1,1.589-1.516,1.479,1.479,0,0,1,1.636,1.452,26.659,26.659,0,0,1-.009,3.523,1.433,1.433,0,0,1-1.562,1.392,1.488,1.488,0,0,1-1.641-1.436,15.119,15.119,0,0,1-.013-1.762h-.009"
                      transform="translate(645.554 3640.84)"
                      fill="#001920"
                    />
                    <path
                      id="Path_57"
                      data-name="Path 57"
                      d="M45.069,97.206a15.141,15.141,0,0,1-.013,1.763,1.516,1.516,0,0,1-1.637,1.459,1.457,1.457,0,0,1-1.566-1.4,24.889,24.889,0,0,1,.014-3.634,1.428,1.428,0,0,1,1.608-1.339,1.479,1.479,0,0,1,1.572,1.394,13.792,13.792,0,0,1,.014,1.761h.009"
                      transform="translate(645.553 3642.116)"
                      fill="#001920"
                    />
                    <path
                      id="Path_58"
                      data-name="Path 58"
                      d="M45.068,8.533a14.657,14.657,0,0,1-.013,1.762,1.488,1.488,0,0,1-1.645,1.432,1.433,1.433,0,0,1-1.558-1.4,26.309,26.309,0,0,1-.007-3.524,1.479,1.479,0,0,1,1.638-1.448,1.5,1.5,0,0,1,1.566,1.412,15.366,15.366,0,0,1,.012,1.762h.005"
                      transform="translate(645.553 3634.462)"
                      fill="#001920"
                    />
                  </g>
                </svg>
              </div>
              <div className="location__card__contant">
                On main <span>G.T Road</span>
              </div>
            </div>
            <div className="location__card">
              <div className="location__card__svg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="79.389"
                  height="112.026"
                  viewBox="0 0 79.389 112.026"
                >
                  <g
                    id="Group_321"
                    data-name="Group 321"
                    transform="translate(-849.076 -3631.499)"
                  >
                    <path
                      id="Path_59"
                      data-name="Path 59"
                      d="M213.258,107.025c-2.748-.86-3.633-2.652-3.629-5.177q.067-48.374.036-96.747a8.373,8.373,0,0,1,.17-2.076A4.469,4.469,0,0,1,214.43.006a4.312,4.312,0,0,1,4.221,3.538,12,12,0,0,1,.083,1.563q0,48.373.032,96.747c0,2.527-.9,4.314-3.643,5.171Z"
                      transform="translate(641.947 3634)"
                      fill="#001920"
                      stroke="#ffeb38"
                      strokeWidth="5"
                    />
                    <path
                      id="Path_60"
                      data-name="Path 60"
                      d="M278.524,107.025c-2.746-.857-3.647-2.644-3.644-5.171q.067-48.373.037-96.747a8.525,8.525,0,0,1,.175-2.076A4.473,4.473,0,0,1,279.682,0a4.312,4.312,0,0,1,4.227,3.533,13.451,13.451,0,0,1,.076,1.668q.006,48.321.033,96.642c0,2.525-.881,4.317-3.629,5.177Z"
                      transform="translate(641.947 3634)"
                      fill="#001920"
                      stroke="#ffeb38"
                      strokeWidth="5"
                    />
                    <rect
                      id="Rectangle_818"
                      data-name="Rectangle 818"
                      width="8.896"
                      height="19.635"
                      transform="translate(884.31 3717.257)"
                      fill="#001920"
                      stroke="#ffeb38"
                      strokeWidth="5"
                    />
                    <rect
                      id="Rectangle_819"
                      data-name="Rectangle 819"
                      width="8.93"
                      height="19.631"
                      transform="translate(884.308 3638.146)"
                      fill="#001920"
                      stroke="#ffeb38"
                      strokeWidth="5"
                    />
                    <rect
                      id="Rectangle_820"
                      data-name="Rectangle 820"
                      width="8.907"
                      height="19.581"
                      transform="translate(884.306 3677.709)"
                      fill="#001920"
                      stroke="#ffeb38"
                      strokeWidth="5"
                    />
                  </g>
                </svg>
              </div>
              <div className="location__card__contant">
                <span>4KM</span> from Motorway
              </div>
            </div>
            <div className="location__card">
              <div className="location__card__svg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="98.949"
                  height="102.222"
                  viewBox="0 0 98.949 102.222"
                >
                  <g
                    id="Group_1966"
                    data-name="Group 1966"
                    transform="translate(959.419 -3777)"
                  >
                    <path
                      id="Path_4756"
                      data-name="Path 4756"
                      d="M398.592,16.8h98.949V45.857H398.592Zm19.68,10.953.268.113q0,3.586,0,7.173a29.466,29.466,0,0,0,.059,3.586,1.534,1.534,0,0,0,1.046,1.064c.365.014.832-.592,1.107-1.02.164-.254.051-.69.051-1.045q0-5.523,0-11.046a15.656,15.656,0,0,0-.052-2.39A1.522,1.522,0,0,0,420,23.119a1.711,1.711,0,0,0-1.259.4,5.4,5.4,0,0,0-.922,1.126c-1.539,1.992-3.075,3.986-4.694,6.084-1.829-2.369-3.524-4.637-5.317-6.825a5.357,5.357,0,0,0-1.687-.933,5.2,5.2,0,0,0-.688,1.7c-.059,4.257-.049,8.517-.019,12.775.006.9-.4,2.254,1.072,2.277s1.116-1.319,1.123-2.234c.025-3.261.01-6.522.01-10.2l3.951,5.118c1.342,1.739,1.748,1.746,3.064.05q1.822-2.35,3.639-4.7M424.236,38.7c.221.267.472.857.841.94.387.088.914-.258,1.32-.512.186-.116.231-.463.333-.708,1.235-3,1.234-3,4.436-3,3.384,0,3.381,0,4.67,3.077.136.323.248.745.5.906a1.508,1.508,0,0,0,1.178.221,1.532,1.532,0,0,0,.666-1,2.006,2.006,0,0,0-.279-1c-1.763-4.439-3.51-8.886-5.334-13.3-.233-.565-.886-.957-1.344-1.429a6.358,6.358,0,0,0-1.287,1.5c-1.792,4.332-3.511,8.695-5.251,13.048-.131.328-.238.665-.452,1.267m64.284-8.831-.266.373h-7.7q-4.386,0-8.773,0c-.759,0-1.345.24-1.333,1.105s.6,1.1,1.356,1.093c.31,0,.621,0,.93,0q7.245,0,14.49,0c.372,0,.743.041,1.115.063l.185.309c-.776.708-1.567,1.4-2.326,2.13-.557.535-.744,1.26-.059,1.695a1.7,1.7,0,0,0,1.6-.135c1.484-1.326,2.852-2.784,4.261-4.194a1.217,1.217,0,0,0-.008-1.958c-1.384-1.373-2.713-2.807-4.172-4.095a1.8,1.8,0,0,0-1.686-.209c-.75.5-.413,1.239.17,1.787.732.687,1.478,1.357,2.22,2.034m-29.613,7.66V35.764q0-5.715-.006-11.428c0-.8-.315-1.549-1.177-1.385a1.794,1.794,0,0,0-1.045,1.358c-.078,4.693-.046,9.389-.047,14.083,0,.848.405,1.386,1.257,1.394,3.011.03,6.025.055,9.033-.042.4-.013.77-.743,1.154-1.142a6.082,6.082,0,0,0-1.162-1.036,2.831,2.831,0,0,0-1.179-.04h-6.828m-14.8,0v-1.65c0-3.855.036-7.711-.048-11.564-.01-.484-.658-.954-1.011-1.431-.383.4-1.093.789-1.1,1.192q-.116,7.242,0,14.489a1.64,1.64,0,0,0,1.084,1.174c3.053.1,6.114.094,9.169,0a1.51,1.51,0,0,0,1.053-1.061c.007-.373-.6-.852-1.038-1.106-.3-.174-.778-.047-1.177-.047-2.253,0-4.506,0-6.929,0"
                      transform="translate(-1358.011 3776.265)"
                      fill="#001920"
                    />
                    <rect
                      id="Rectangle_984"
                      data-name="Rectangle 984"
                      width="4.834"
                      height="54.704"
                      transform="translate(-947.936 3824.519)"
                      fill="#001920"
                    />
                    <rect
                      id="Rectangle_985"
                      data-name="Rectangle 985"
                      width="4.862"
                      height="54.703"
                      transform="translate(-876.761 3824.484)"
                      fill="#001920"
                    />
                    <path
                      id="Path_4757"
                      data-name="Path 4757"
                      d="M415.537,13.7h-5.045c0-2.767,0-5.46,0-8.153,0-1.019-.028-2.042.016-3.059a2.491,2.491,0,0,1,4.971-.236,23.985,23.985,0,0,1,.056,2.789c0,2.834,0,5.67,0,8.659"
                      transform="translate(-1358.531 3777)"
                      fill="#001920"
                    />
                    <path
                      id="Path_4759"
                      data-name="Path 4759"
                      d="M484.977,13.607c0-3.806-.063-7.608.033-11.407A2.375,2.375,0,0,1,487.575,0a2.449,2.449,0,0,1,2.385,2.528c.035,3.635.011,7.271.011,11.074Z"
                      transform="translate(-1361.787 3777)"
                      fill="#001920"
                    />
                  </g>
                </svg>
              </div>
              <div className="location__card__contant">
                <span>5KM</span> from CPEC
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="location__map__section" className="location__map__section">
        <div className="location__map__container">
          <div className="location__map__container__img">
            {<img src={mapibt} alt="map" />}
          </div>
          <div className="location__map__container__overlay">
            <div className="location__map__container__overlay__contant">
              <div className="location__map__container__overlay__contant__heading">
                Location Feature
              </div>
              <div className="location__map__container__overlay__contant__sub__heading">
                Most futuristic location of Islamabad. Very easy access from all
                over Pakistan. Ideal location for International trade. Most
                suitable location for nearest warehouses. Very near to airport
                for foreigner visitors approach. In next 10 years IBT location
                will b the centre of Capital Islamabad
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="contact__section">
        <div className="contant__container">
          <div className="contant__container__text">
            IBT is an industrial Mall , It will cater needs of all construction
            industry, Home furnitures and accessories and auto mobile industry
            Pakistan needs industrial mall for its economic growth It will be
            like mini china.
          </div>
          <div className="contact__button">
            <button className="contact__button__btn">Contact Us</button>
          </div>
        </div>
      </section>
      <section id="footer__section" className="footer__section">
        <div className="footer__left">
          <img src={footer} alt="footer" />
        </div>
        <div className="footer__contant__container">
          <div className="footer__contant__container__contant">
            <div className="footer__contant__container__contant__heading">
              <span>IBT </span>Pakistan
            </div>
            <div className="footer__contant__container__contant__sub__heading">
              IBT is an industrial Mall , It will cater needs of all
              construction industry, Home furnitures and accessories and auto
              mobile industry Pakistan needs industrial mall for its economic
              growth It will be like mini china It will be like a trade centre
            </div>
          </div>
          <div className="footer__contant__pages__link__wraper">
            <div className="footer__links__wraper__main">
              <div className="footer__pages__links__heading">pages</div>
              <a href="#" className="footer__pages__links">
                Home
              </a>
              <a href="#" className="footer__pages__links">
                Components
              </a>
              <a href="#" className="footer__pages__links">
                Specifications
              </a>
              <a href="#" className="footer__pages__links">
                Features
              </a>
              <a href="#" className="footer__pages__links">
                Location
              </a>
            </div>
          </div>
          <div className="footer__contant__pages__link__wraper">
            <div className="footer__links__wraper__main">
              <div className="footer__pages__links__heading">Quick Links</div>
              <a href="#" className="footer__pages__links">
                About Us
              </a>
              <a href="#" className="footer__pages__links">
                Contact Us
              </a>
              <a href="#" className="footer__pages__links">
                Term & Conditions
              </a>
              <a href="#" className="footer__pages__links">
                Privacy Policy
              </a>
            </div>
          </div>
          <div className="footer__contant__pages__link__wraper">
            <div className="footer__links__wraper__main">
              <div className="footer__pages__links__heading">Mailing List</div>
              <div className="footer__mailing__wraper__sub__heading">
                Sign up for our mailing list to get latest updates and offers
              </div>
            </div>
            <div className="footer__mailing__send">
              <input
                type="Eail"
                className="footer__mailing__send__input"
                placeholder="Email..."
              />
            </div>
          </div>
        </div>
        <div className="footer__right">
          <div className="footer__right__bg" />
        </div>
      </section>
      <div className="buttom__footer__social">
        <div className="buttom__footer__social__link">
          <a href="#" className="facebook">
            <img src={facebook} alt="facebook" />
          </a>
          <a href="#" className="LinkdIN">
            <img src={linkedin} alt="facebook" />
          </a>
          <a href="#" className="Instagram">
            <img src={snapchat} alt="facebook" />
          </a>
          <a href="#" className="Snapchat">
            <img src={twitter} alt="facebook" />
          </a>
          <a href="#" className="Snapchat">
            <img src={whatsapp} alt="facebook" />
          </a>
        </div>
      </div>
    </>
  );
}

export function Close({ size, color }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="feather feather-x"
    >
      <line x1="18" y1="6" x2="6" y2="18"></line>
      <line x1="6" y1="6" x2="18" y2="18"></line>
    </svg>
  );
}

export function Menu({ size, color }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="feather feather-menu"
    >
      <line x1="3" y1="12" x2="21" y2="12"></line>
      <line x1="3" y1="6" x2="21" y2="6"></line>
      <line x1="3" y1="18" x2="21" y2="18"></line>
    </svg>
  );
}
export function Location({ img, title }) {
  return (
    <div className="location__card">
      <div className="location__card__svg">
        {img}
        <svg width="111.448" height="94.105" viewBox="0 0 111.448 94.105">
          <g
            id="Group_319"
            data-name="Group 319"
            transform="translate(-1232.545 -3634)"
          >
            <path
              id="Path_65"
              data-name="Path 65"
              d="M590.6,40.762a2.258,2.258,0,0,1,2.281-1.121c1.813.057,3.629-.015,5.441.032a1.124,1.124,0,0,0,1.257-.844c1.024-2.435,2.125-4.838,3.233-7.236a3.334,3.334,0,0,1,3.174-2.094,3.411,3.411,0,0,1,3.178,2.1c.768,1.541,1.538,3.081,2.364,4.736.6-1.21,1.133-2.3,1.673-3.389a2.839,2.839,0,0,1,2.651-1.762A2.887,2.887,0,0,1,618.577,33c.418.837.846,1.67,1.287,2.54.616-1.375,1.2-2.693,1.8-4.01a2.432,2.432,0,0,1,2.251-1.613,2.352,2.352,0,0,1,2.344,1.635c.913,2.4,1.789,4.81,2.591,7.246.2.622.383.879,1.074.878q16.38-.033,32.76,0c.731,0,.922-.272,1.138-.934.8-2.437,1.688-4.846,2.6-7.242a2.314,2.314,0,0,1,2.266-1.583,2.394,2.394,0,0,1,2.276,1.57c.594,1.317,1.183,2.637,1.815,4.047.473-.922.922-1.8,1.375-2.675a2.812,2.812,0,0,1,2.593-1.676,2.771,2.771,0,0,1,2.626,1.62c.584,1.12,1.123,2.265,1.75,3.539.19-.356.339-.619.473-.891.658-1.332,1.294-2.674,1.972-3.994a3.326,3.326,0,0,1,3.151-1.955,3.245,3.245,0,0,1,3.039,1.952c1.139,2.423,2.254,4.86,3.291,7.328a1.184,1.184,0,0,0,1.33.9c1.885-.055,3.772-.026,5.659-.015,1.261.008,2.014.635,2.006,1.636s-.76,1.616-2.029,1.623c-1.775.011-3.549,0-5.491,0,.395,1.466.8,2.832,1.124,4.217a1.519,1.519,0,0,1-1.049,1.9,1.568,1.568,0,0,1-2.041-.953c-.137-.333-.194-.7-.308-1.041-1.08-3.225-2.106-6.471-3.275-9.663-.58-1.586-1.424-3.075-2.278-4.881-.557,1.086-1,1.9-1.4,2.735a80.657,80.657,0,0,0-6.057,20.128,142.026,142.026,0,0,0-2.145,21.3c-.006.177,0,.354,0,.628h19.184c-.143-2.708-.174-5.387-.449-8.041-.472-4.54-1.094-9.065-1.663-13.6-.156-1.243.322-2.066,1.329-2.217.922-.138,1.665.486,1.877,1.683a138,138,0,0,1,2.105,22.066,3.289,3.289,0,0,1-3.41,3.453c-1.445.04-2.891.008-4.459.008-.029.458-.074.838-.075,1.218-.007,2.14.011,4.281-.01,6.421-.014,1.478-.592,2.053-2.048,2.065q-2.829.022-5.659,0c-1.4-.013-1.989-.6-2-1.992-.015-2.177,0-4.353,0-6.531V80.653c-1.45,0-2.783.009-4.115,0-2.645-.022-3.989-1.447-3.868-4.118.132-2.929.286-5.857.439-8.941-1.226,0-2.41.01-3.594,0-2.256-.024-3.363-1.117-3.25-3.382.152-3.04.408-6.075.62-9.113.03-.431.06-.862.1-1.462-.962,0-1.853,0-2.743,0-2.416-.006-3.271-.9-3.1-3.344.145-2.1.36-4.188.54-6.283.027-.319.033-.64.053-1.022H651.435c.169.408.307.766.464,1.115q11.381,25.262,22.763,50.526a4.725,4.725,0,0,1,.39,1.007A1.608,1.608,0,0,1,672.1,96.8a8.578,8.578,0,0,1-.515-1.078q-11.656-25.856-23.271-51.728c-.539-1.207-1.322-1-2.229-1.091-.961-.1-1.365.3-1.747,1.147q-11.612,25.874-23.288,51.72c-.09.2-.175.4-.27.594-.526,1.083-1.366,1.493-2.257,1.1-.944-.412-1.207-1.321-.7-2.5.447-1.03.917-2.05,1.378-3.074q10.787-23.922,21.574-47.844c.145-.323.267-.656.434-1.071H629.785c.178,2.26.356,4.484.526,6.709a12.741,12.741,0,0,1,.067,1.521,2.373,2.373,0,0,1-2.423,2.412c-1.084.045-2.17.05-3.253.077-.031,0-.06.038-.16.106.182,2.261.386,4.563.544,6.868.092,1.339.149,2.682.146,4.023a2.75,2.75,0,0,1-2.768,2.879c-.687.036-1.378.015-2.067.017-.643,0-1.287,0-2.032,0,.056,1.086.1,2.051.153,3.017.1,2.065.234,4.128.306,6.194a3.442,3.442,0,0,1-3.71,3.846c-1.372.019-2.745,0-4.278,0v1.992c0,1.923.014,3.846-.005,5.768-.013,1.32-.614,1.921-1.946,1.937q-2.884.033-5.768,0c-1.391-.014-1.972-.6-1.988-2.011-.024-2.1-.007-4.209-.007-6.313,0-.395,0-.79,0-1.373-1.331,0-2.582,0-3.832,0-2.944-.007-4.191-1.265-4.113-4.172a127.679,127.679,0,0,1,4.77-32.833,5.948,5.948,0,0,0,.109-.724c-1.754,0-3.454-.043-5.151.016a2.349,2.349,0,0,1-2.306-1.087Zm15.432-7.941c-3.877,6.761-5.866,14.112-7.3,21.633a131.677,131.677,0,0,0-2.3,22.86h19.176c-.679-15.418-2.425-30.506-9.579-44.493m70.91,2.065c-3.286,4.61-7.224,23.919-6.108,29.375h3.784c.072-.451.152-.841.2-1.235A108.528,108.528,0,0,1,679.144,42a1.657,1.657,0,0,0,.142-.935c-.732-2.021-1.518-4.022-2.346-6.182m-60.9.214-.392-.019c-.684,1.744-1.417,3.471-2.023,5.241a3.186,3.186,0,0,0-.034,1.851,107.236,107.236,0,0,1,3.6,15.979c.3,2.03.569,4.065.863,6.174h3.963c-.456-10.173-1.664-20.018-5.974-29.227m49.546,15.178H668.6c.562-2.467.954-4.877,1.676-7.184,1-3.208-.682-5.791-1.565-8.588a44.211,44.211,0,0,0-3.126,15.773m-38.517.033c-.256-5.5-.961-10.772-3.178-15.811-.68,1.8-1.226,3.62-1.731,5.451a3.263,3.263,0,0,0-.181,1.487c.665,2.956,1.4,5.894,2.119,8.873ZM607.494,80.715h-3.023v6.316h3.023Zm77.678,6.3h2.992V80.691h-2.992Z"
              transform="translate(641.947 3630.496)"
              fill="#001920"
            />
            <path
              id="Path_66"
              data-name="Path 66"
              d="M691.236,15.462q-5.767,0-11.535,0a4.207,4.207,0,0,1-1.077-.086,1.514,1.514,0,0,1-1.227-1.69,1.476,1.476,0,0,1,1.48-1.463c1.123-.052,2.428.323,3.321-.136.865-.444,1.249-1.761,1.95-2.606a9.239,9.239,0,0,1,4.536-2.856,1.892,1.892,0,0,0,1.043-.879,9.773,9.773,0,0,1,10-5.684,9.58,9.58,0,0,1,8.369,7.833,10.368,10.368,0,0,1,.054,3.349,4.948,4.948,0,0,1-5.159,4.212c-3.918.026-7.836.007-11.753.007M686.184,12.2h16.074c2.244,0,2.824-.6,2.731-2.856a6,6,0,0,0-.19-1.282,6.336,6.336,0,0,0-5.9-4.772,6.224,6.224,0,0,0-6.362,4.423,2.336,2.336,0,0,1-2.3,1.989,5.378,5.378,0,0,0-4.05,2.5"
              transform="translate(631.636 3634)"
              fill="#001920"
            />
            <path
              id="Path_67"
              data-name="Path 67"
              d="M632.006,18.832a3.56,3.56,0,0,0-3.653-2.505,2.409,2.409,0,0,1-2.552-1.371,8.2,8.2,0,0,0-10.253-3.814,1.61,1.61,0,0,1-2.238-.894A1.663,1.663,0,0,1,614.433,8.1a11.285,11.285,0,0,1,13.286,3.893,2.69,2.69,0,0,0,1.907,1.153,6.91,6.91,0,0,1,5.566,4.643,3.167,3.167,0,0,1-2.518,4.328,7.156,7.156,0,0,1-1.191.062q-13.823.005-27.646,0a5.151,5.151,0,0,1-1.083-.056,1.507,1.507,0,0,1-1.318-1.714,1.446,1.446,0,0,1,1.464-1.459,25.449,25.449,0,0,1,2.719-.023c.69.031.989-.142,1.133-.909a19.284,19.284,0,0,1,1.059-3.411,1.623,1.623,0,0,1,2.259-1.054,1.7,1.7,0,0,1,.74,2.311c-.343.938-.648,1.89-1.016,2.971Z"
              transform="translate(640.66 3633.136)"
              fill="#001920"
            />
            <path
              id="Path_68"
              data-name="Path 68"
              d="M655.246,99.984c0,1.16.026,2.32-.006,3.479-.033,1.2-.674,1.873-1.677,1.843-.953-.029-1.554-.684-1.568-1.84q-.041-3.587,0-7.175a1.629,1.629,0,1,1,3.238,0c.036,1.231.009,2.464.01,3.7"
              transform="translate(634.655 3622.776)"
              fill="#001920"
            />
            <path
              id="Path_69"
              data-name="Path 69"
              d="M655.249,81.381c0,.975.019,1.951-.006,2.926-.033,1.242-.6,1.89-1.6,1.9s-1.63-.632-1.648-1.852c-.03-1.986-.026-3.973,0-5.96.014-1.2.635-1.91,1.6-1.925,1-.018,1.616.72,1.659,1.982,0,.072,0,.145,0,.217q0,1.354,0,2.709"
              transform="translate(634.656 3624.915)"
              fill="#001920"
            />
            <path
              id="Path_70"
              data-name="Path 70"
              d="M655.241,65.672c0,.758.033,1.518-.008,2.274a1.566,1.566,0,0,1-1.59,1.688A1.542,1.542,0,0,1,652.008,68q-.074-2.379,0-4.764a1.608,1.608,0,0,1,1.635-1.658,1.644,1.644,0,0,1,1.59,1.714c.041.792.008,1.588.008,2.382"
              transform="translate(634.656 3626.685)"
              fill="#001920"
            />
            <path
              id="Path_71"
              data-name="Path 71"
              d="M655.211,52.315a13.2,13.2,0,0,1-.012,1.618,1.466,1.466,0,0,1-1.609,1.408,1.415,1.415,0,0,1-1.539-1.357,19.822,19.822,0,0,1-.011-3.127,1.442,1.442,0,0,1,1.6-1.411,1.489,1.489,0,0,1,1.566,1.466,12.413,12.413,0,0,1,.009,1.4Z"
              transform="translate(634.654 3628.126)"
              fill="#001920"
            />
          </g>
        </svg>
      </div>
      <div className="location__card__contant">
        {title}
        <span>1KM</span> from Margalla Avenue
      </div>
    </div>
  );
}
