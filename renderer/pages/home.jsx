import React, { Children } from "react";
import Head from "next/head";
import { Aside } from "../components/common/aside";
import { PanelSection } from "../components/home/panelSection";
import { Controls } from "../components/home/controls/index";

function Home() {
  return (
    <React.Fragment>
      <Head>
        <title>Home</title>
      </Head>
      {/* body */}
      <div className="w-screen h-screen relative overflow-hidden">
        {/* layer */}
        <div className="bg-hardLightBlue dark:bg-black transition-color grid grid-rows-[25px_1fr_90px] gap-[10px] grid-cols-[320px_minmax(495px,1fr)] h-screen  px-[10px] transition-color duration-300">
          {/* Drag */}
          <div className="drag w-full h-full col-span-2"></div>
          {/* Aside -> Arduino Controls */}
          <Aside children={<Controls/>}/>
          {/* Section -> Grafics */}
          <section className="row-span-1 col-span-1 rounded-[10px] overflow-y-auto relative transition-color duration-300 ">
            <PanelSection />
          </section>
          {/* Footer -> Messages to Arduino */}
          <footer className=" dark:bg-blackDark-3 col-span-2 transition-color duration-300 pb-[1rem] flex justify-center">
            <div className="w-[80%] max-w-[80rem] h-full flex justify-evenly gap-[4rem]">
              <img srcSet="./img/EEK__logo.webp" alt=""  />
              <img srcSet="./img/NASA_logo.webp" alt=""  />
              <img srcSet="./img/peu.webp" alt="" />   
            </div>
          </footer>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Home;
