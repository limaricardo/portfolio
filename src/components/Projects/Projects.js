import React, { useEffect, useState } from "react";
import "../../styles/projects.scss";
import BackNav from "../Nav/BackNav";

const Projects = () => {
  const images = [
    "url('https://i.imgur.com/mhHUaIP.png')",
    "url('https://i.imgur.com/LWQG6dF.png')",
    "url('https://i.imgur.com/kYCTrZz.png')",
    "url('https://i.imgur.com/Ijt1eA7.png')",
    "url('https://i.imgur.com/FHJBhk1.png')",
    "url('https://i.imgur.com/kvMmFrO.png')",
    "url('https://i.imgur.com/G07HO9l.png')",
    "url('https://i.imgur.com/uSToRvq.png')",
    "url('https://i.imgur.com/nE7qcqx.png')",
    "url('https://i.imgur.com/0O5XCPX.png')",
    "url('https://i.imgur.com/AazsieU.png')",
    "url('https://i.imgur.com/1P5XXgG.png')",
    "url('https://i.imgur.com/DXsPgUM.png')",
    "url('https://i.imgur.com/w6i8Gwk.png')",
    "url('https://i.imgur.com/IaOQMza.png')",
    "url('https://i.imgur.com/080LcFO.png')",
    "url('https://i.imgur.com/5x5qV8L.png')",
    "url('https://i.imgur.com/KGpCJnP.png')",
    "url('https://i.imgur.com/7avcEXW.png')",
    "url('https://i.imgur.com/UShgdfy.png')",
    "url('https://i.imgur.com/uLRLtyk.png')",
    "url('https://i.imgur.com/xHwcPTH.png')",
    "url('https://i.imgur.com/IAWWnev.png')",
    "url('https://cdn.discordapp.com/attachments/723634067857473606/1045719835784511499/image.png')",
  ];
  const imagesReverse = [
    "url('https://i.imgur.com/mhHUaIP.png')",
    "url('https://i.imgur.com/4qVixTz.png')",
    "url('https://i.imgur.com/ZxEgjtJ.png')",
    "url('https://i.imgur.com/SCtq3Xj.png')",
    "url('https://i.imgur.com/J39AE19.png')",
    "url('https://i.imgur.com/jAjWNpa.png')",
    "url('https://i.imgur.com/a538bBH.png')",
    "url('https://i.imgur.com/FBJYquy.png')",
    "url('https://i.imgur.com/t9HBaca.png')",
    "url('https://i.imgur.com/pMUnUUK.png')",
    "url('https://i.imgur.com/G0wN653.png')",
    "url('https://i.imgur.com/NJEqrvR.png')",
    "url('https://i.imgur.com/0GYJnpM.png')",
    "url('https://i.imgur.com/GMTrOn7.png')",
    "url('https://i.imgur.com/qVCcLlH.png')",
    "url('https://i.imgur.com/peks067.png')",
    "url('https://i.imgur.com/C2z4ReZ.png')",
    "url('https://i.imgur.com/Pr8ZqZf.png')",
    "url('https://i.imgur.com/Ar03ngB.png')",
    "url('https://i.imgur.com/P2XsyKT.png')",
    "url('https://i.imgur.com/vfQQcVy.png')",
    "url('https://i.imgur.com/KCkGZvL.png')",
    "url('https://i.imgur.com/GOdCV6H.png')",
  ];

  const [currentPage, setCurrentPage] = useState(-1);
  const [pageLoad, setPageLoad] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  console.log(currentPage);

  useEffect(() => {
    setCurrentPage(0);
    setPageLoad(true);
  }, []);

  const page3 = document.getElementById(`page3`);
  const page6 = document.getElementById(`page6`);

  if (currentPage === 0 && pageLoad) {
    page3.style.display = "none";

    // page3.style.backgroundImage = images[currentPage];
    page6.style.backgroundImage = imagesReverse[currentPage];
    page6.style.borderRadius = "0px";
  }

  const onCloseClick = () => {
    setIsClicked(true);

    for (let i = 1; i <= 7; i++) {
      document.getElementById(
        `flip${i}`
      ).className = `flipPageBackward${currentPage} flip flip${i} flep${i}`;
      setTimeout(() => {
        document.getElementById(
          `flip${i}`
        ).className = `flipPageBackward${currentPage} flip flip${i} flop${i}`;
      }, 2000);
    }

    for (let i = 0; i < 13; i++) {
      if (currentPage - 1 === 0) {
        page3.style.display = "none";
        setTimeout(() => {
          page6.style.backgroundImage = imagesReverse[currentPage - 1];
          setIsClicked(false);
        }, 4000);
      } else if (currentPage + 1 === i) {
        page3.style.display = "none";
        setTimeout(() => {
          page6.style.backgroundImage = imagesReverse[currentPage];
          page6.style.borderRadius = "0px";
          setIsClicked(false);
        }, 4000);
        page3.style.backgroundImage = images[currentPage - 1];
      }
    }

    setTimeout(() => {
      for (let i = 1; i <= 7; i++) {
        document.getElementById(`flip${i}`).className = ``;
      }
    }, 4000);

    setCurrentPage(currentPage - 1);
  };

  const onBackClick = () => {
    console.log(currentPage);
    setIsClicked(true);

    for (let i = 1; i <= 7; i++) {
      document.getElementById(
        `flip${i}`
      ).className = `flipPageBackward${currentPage} flip flip${i} flep${i}`;

      setTimeout(() => {
        document.getElementById(
          `flip${i}`
        ).className = `flipPageBackward${currentPage} flip flip${i} flop${i}`;
      }, 2000);
    }

    for (let i = 0; i < 13; i++) {
      console.log(currentPage, "ALO");
      if (currentPage + 1 === i) {
        setTimeout(() => {
          page6.style.backgroundImage = imagesReverse[currentPage * 2 - 2];
          setIsClicked(false);
        }, 4000);

        page3.style.backgroundImage = images[currentPage * 2 - 3];
      }
    }

    setTimeout(() => {
      for (let i = 1; i <= 7; i++) {
        document.getElementById(`flip${i}`).className = ``;
      }
    }, 4000);

    setCurrentPage(currentPage - 1);
  };

  const onNextClick = () => {
    setPageLoad(false);
    setIsClicked(true);

    for (let i = 1; i <= 7; i++) {
      document.getElementById(
        `flip2${i}`
      ).className = `flipPageForward${currentPage} flip flip${i} flep${i}`;

      setTimeout(() => {
        document.getElementById(
          `flip2${i}`
        ).className = `flipPageForward${currentPage} flip flip${i} flop${i}`;
      }, 2000);
    }

    for (let i = 0; i < 13; i++) {
      console.log(currentPage);
      if (currentPage === i) {
        setTimeout(() => {
          page3.style.backgroundImage = images[currentPage + (currentPage + 1)];
          page3.style.display = "block";
          setIsClicked(false);
        }, 4000);
        page6.style.borderRadius = "10% 41% 24% 30% / 0% 2.5% 2.5% 0%";
        page6.style.backgroundImage =
          imagesReverse[currentPage + (currentPage + 2)];
      }
    }

    setTimeout(() => {
      for (let i = 1; i <= 7; i++) {
        document.getElementById(`flip2${i}`).className = ``;
      }
    }, 4000);
    setCurrentPage(currentPage + 1);
  };

  return (
    <div id="projects">
      <BackNav className="buttonBackNavProjects"/>
      <div className="container">
        <div id="book" className="book">
          <div className="pages">
            <div id="page1" className=""></div>
            <div id="page2" className=""></div>
            <div id="page3" className="page"></div>
            <div className=""></div>
            <div className=""></div>
            <div id="page6" className="page"></div>
          </div>
          <div>
            {currentPage > 1 ? (
              <button
                disabled={isClicked}
                onClick={onBackClick}
                className={
                  isClicked
                    ? "disabled previousPage"
                    : "buttonPreviousPage previousPage"
                }
              >
                Previous Page
              </button>
            ) : currentPage > 0 ? (
              <button
                disabled={isClicked}
                onClick={onCloseClick}
                className={
                  isClicked
                    ? "disabled closeBook"
                    : "buttonPreviousPage closeBook"
                }
              >
                Close projects
              </button>
            ) : (
              ""
            )}
            {currentPage === 11 ? (
              <button
                disabled={isClicked}
                onClick={onBackClick}
                className={
                  isClicked
                    ? "disabled previousPage"
                    : "buttonPreviousPage previousPage"
                }
              >
                Previous Page
              </button>
            ) : currentPage < 13 && currentPage > 0 ? (
              <button
                disabled={isClicked}
                onClick={onNextClick}
                className={
                  isClicked ? "disabled nextPage" : "buttonNextPage nextPage"
                }
              >
                Next Page
              </button>
            ) : (
              <button
                disabled={isClicked}
                onClick={onNextClick}
                className={
                  isClicked ? "disabled openBook" : "buttonNextPage openBook"
                }
              >
                Open projects
              </button>
            )}
          </div>
          <div className="flips">
            <div id="flip1" className=" ">
              <div id="flip2" className=" ">
                <div id="flip3" className=" ">
                  <div id="flip4" className=" ">
                    <div id="flip5" className=" ">
                      <div id="flip6" className="">
                        <div id="flip7" className=""></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flips2">
            <div id="flip21" className="">
              <div id="flip22" className="">
                <div id="flip23" className="">
                  <div id="flip24" className="">
                    <div id="flip25" className="">
                      <div id="flip26" className="">
                        <div id="flip27" className=""></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
