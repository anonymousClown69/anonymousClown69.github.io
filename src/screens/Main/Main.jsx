import React from "react";
import { Button } from "../../components/Button";
import { Minute } from "../../components/Minute";
import { Seconds } from "../../components/Seconds";
import { ContentBars } from "../../icons/ContentBars";
import { useAccount, useConnect, useEnsName, useDisconnect } from 'wagmi';
import { MintNFTForm } from '../../components/MintNFTForm';
import { MintNFT } from '../../components/MintNFT';

import "../../styles.css";
import SideBar from "../../sidebar";

import "./style.css";

export const Main = () => {

  const { connect, connectors, error, isLoading, pendingConnector } = useConnect()
  const { isConnected } = useAccount()

  if (isConnected){

    return (
      
      <div className="main">
        
        <SideBar right pageWrapId={"page-wrap"} outerContainerId={"main"} />
        
        <div id="page-wrap">
        
          <div className="div-2">
            <div className="overlap">
              <img className="group" alt="Group" src="https://c.animaapp.com/Rx9akQjn/img/group-13.png" />
              <img className="img" alt="Group" src="https://c.animaapp.com/Rx9akQjn/img/group-13.png" />
              <div className="overlap-group-wrapper">
                <div className="overlap-group">
                
                  <img className="objects" alt="Objects" src="https://c.animaapp.com/Rx9akQjn/img/group-13.png" />
                  <img className="image" alt="Image" src="https://c.animaapp.com/Rx9akQjn/img/image-18@2x.png" />
                </div>
              </div>
              
              <img
                className="peluche-per-bambini"
                alt="Peluche per bambini"
                src="https://c.animaapp.com/Rx9akQjn/img/peluche-per-bambini-4x-eliminate-parti--2@2x.png"
              />
              
              <img className="group-2" alt="Group" src="https://c.animaapp.com/Rx9akQjn/img/group-11.png" />
              
              <div className="group-wrapper">
                <div className="hey-there-you-wrapper">
                  <p className="hey-there-you">
                  
                    Connect!
                    Hey there, you fearless cybers voyagers! <br />
                    Buckle up, &#39;cause we&#39;re about to spill the tea on a whole new level of meme-worthy madness.
                    <br />
                    Enter the realm of Cyber Clown Token – the memecoin that&#39;s here to roast the roasters and meme the
                    memers.
                  </p>
                </div>
              </div>
              
              
              
              <div className="bg-wrapper">
              
                <div className="bg" />
              </div>
              
              <p className="get-ready-to-clown">
                Get Ready To Clown The Fame: <br />
                cyber Clown Token!
              </p>
              <div className="frame">
                {/* <Metamask /> */}
                

                <div className="text-wrapper-4">Coming Soon~~~~~</div>

                {/* <div className="text-wrapper-4">2</div>
                <div className="text-wrapper-4">:</div>
                <Minute minutes="default" />
                <div className="text-wrapper-4">:</div>
                <Seconds seconds="default" /> */}

                
              </div>
              
              <img className="image-2" alt="Image" src="https://c.animaapp.com/Rx9akQjn/img/image-15@2x.png" />
              <img
                className="isolation-mode"
                alt="Isolation mode"
                src="https://c.animaapp.com/Rx9akQjn/img/isolation-mode-1.svg"
              />
              <img
                className="isolation-mode-2"
                alt="Isolation mode"
                src="https://c.animaapp.com/Rx9akQjn/img/isolation-mode.svg"
              />
              <div className="overlap-wrapper">
                <div className="overlap-2">
                  <div className="titolo-acquisti-per">
                    <div className="overlap-group-2">
                      <div className="rectangle" />
                      <img className="frame-2" alt="Frame" src="https://c.animaapp.com/Rx9akQjn/img/frame-12.svg" />
                      <div className="text-wrapper-5"> clowning The Fame Game</div>
                    </div>
                  </div>
                  <div className="column">
                    <div className="section-title">
                      <p className="p">
                        <span className="span">Ever watched some random person blow up on the web and thought, &#34;</span>
                        <span className="text-wrapper-6">Am I the joke here?</span>
                        <span className="span">
                          &#34; <br />
                          <br />
                          Well, grab your popcorn, &#39;cause we&#39;re turning the tables on the meme gods.
                          <br />
                          <br /> Cyber Clown Token is our way of poking fun at the online fame frenzy. <br />
                          <br />
                          From overnight celebs with zero skills to legit talents getting ghosted, it&#39;s time to
                          meme-shame the system.
                        </span>
                      </p>
                    </div>
                  </div>
                  <img className="frame-3" alt="Frame" src="https://c.animaapp.com/Rx9akQjn/img/frame-11.svg" />
                  <img className="frame-4" alt="Frame" src="https://c.animaapp.com/Rx9akQjn/img/frame-10.svg" />
                </div>
              </div>
              <div className="element-2">
                <div className="overlap-3">
                  <div className="rectangle" />
                  <div className="frame-2">
                    <img className="image-3" alt="Image" src="https://c.animaapp.com/Rx9akQjn/img/image-16@2x.png" />
                  </div>
                  <div className="text-wrapper-5">Laughs And Gains, Baby!</div>
                </div>
                <div className="overlap-4">
                  <div className="section-title-wrapper">
                    <div className="but-hold-up-it-s-not-wrapper">
                      <p className="p">
                        <span className="span">
                          But hold up, it&#39;s not all jest and jesting. <br />
                          <br />
                          While we&#39;re clowning around, we&#39;re also cooking up some potential gains. <br />
                          <br />
                          Yeah, you heard that right – you could be laughing all the way to the digital bank.
                        </span>
                        <span className="text-wrapper-6">
                          {" "}
                          <br />
                          <br />
                          Who said memes can&#39;t pay the bills?
                        </span>
                      </p>
                    </div>
                  </div>
                  <img className="image-4" alt="Image" src="https://c.animaapp.com/Rx9akQjn/img/image-17@2x.png" />
                  <img className="group-3" alt="Group" src="https://c.animaapp.com/Rx9akQjn/img/group-10@2x.png" />
                </div>
              </div>
              <img className="layer" alt="Layer" src="https://c.animaapp.com/Rx9akQjn/img/layer-1.svg" />
              <div className="div-wrapper">
                <div className="layer-wrapper">
                  <div className="layer-2">
                    <div className="overlap-group-3">
                      <div className="group-4">
                        <div className="overlap-group-3">
                          <img className="group-5" alt="Group" src="https://c.animaapp.com/Rx9akQjn/img/group-9@2x.png" />
                          <img className="group-6" alt="Group" src="https://c.animaapp.com/Rx9akQjn/img/group-8@2x.png" />
                          <img
                            className="rectangle-2"
                            alt="Rectangle"
                            src="https://c.animaapp.com/Rx9akQjn/img/rectangle-6@2x.png"
                          />
                          <img className="group-7" alt="Group" src="https://c.animaapp.com/Rx9akQjn/img/group-7@2x.png" />
                          <img className="group-8" alt="Group" src="https://c.animaapp.com/Rx9akQjn/img/group-6@2x.png" />
                          <img className="group-9" alt="Group" src="https://c.animaapp.com/Rx9akQjn/img/group-5@2x.png" />
                          <img className="group-10" alt="Group" src="https://c.animaapp.com/Rx9akQjn/img/group-4@2x.png" />
                          <img className="group-11" alt="Group" src="https://c.animaapp.com/Rx9akQjn/img/group-3@2x.png" />
                        </div>
                      </div>
                      <img
                        className="rectangle-3"
                        alt="Rectangle"
                        src="https://c.animaapp.com/Rx9akQjn/img/rectangle-5@2x.png"
                      />
                      <img
                        className="rectangle-4"
                        alt="Rectangle"
                        src="https://c.animaapp.com/Rx9akQjn/img/rectangle-4@2x.png"
                      />
                      <img
                        className="rectangle-5"
                        alt="Rectangle"
                        src="https://c.animaapp.com/Rx9akQjn/img/rectangle-3@2x.png"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <img className="frame-5" alt="Frame" src="https://c.animaapp.com/Rx9akQjn/img/frame-9.svg" />
            <div className="column-2">
              <div className="avatar">
                <div className="overlap-group-4">
                  <div className="avatar-image" />
                  <img className="group-12" alt="Group" src="https://c.animaapp.com/Rx9akQjn/img/group-2@2x.png" />
                </div>
                <div className="avatar-content">
                  <div className="text-wrapper-7">Phase 1</div>
                </div>
              </div>
              <div className="group-13">
                <div className="text-wrapper-8">Token Development (180,500,000,000 CCT)</div>
                <img className="frame-6" alt="Frame" src="https://c.animaapp.com/Rx9akQjn/img/frame-8.svg" />
              </div>
              <div className="group-14">
                <div className="text-wrapper-9">Community Deploy</div>
                <img className="frame-7" alt="Frame" src="https://c.animaapp.com/Rx9akQjn/img/frame-7.svg" />
              </div>
              <div className="group-15">
                <div className="text-wrapper-10">Presale Live!</div>
                <img className="frame-7" alt="Frame" src="https://c.animaapp.com/Rx9akQjn/img/frame-6.svg" />
              </div>
            </div>
            <div className="column-3">
              <div className="avatar">
                <div className="overlap-group-5">
                  <div className="avatar-image-2" />
                  <img className="group-16" alt="Group" src="https://c.animaapp.com/Rx9akQjn/img/group-1@2x.png" />
                </div>
                <div className="avatar-content">
                  <div className="text-wrapper-7">Phase 2</div>
                </div>
              </div>
              <div className="group-17">
                <div className="text-wrapper-11">Token Release</div>
                <img className="frame-7" alt="Frame" src="https://c.animaapp.com/Rx9akQjn/img/frame-5.svg" />
              </div>
              <div className="group-18">
                <div className="text-wrapper-12">NFT Release</div>
                <img className="frame-7" alt="Frame" src="https://c.animaapp.com/Rx9akQjn/img/frame-4.svg" />
              </div>
              <div className="group-19">
                <div className="text-wrapper-13">DEX Listing</div>
                <img className="frame-7" alt="Frame" src="https://c.animaapp.com/Rx9akQjn/img/frame-3.svg" />
              </div>
            </div>
            <div className="column-4">
              <div className="avatar">
                <div className="overlap-group-6">
                  <div className="avatar-image-3" />
                  <img className="group-20" alt="Group" src="https://c.animaapp.com/Rx9akQjn/img/group@2x.png" />
                </div>
                <div className="avatar-content">
                  <div className="text-wrapper-7">Phase 3</div>
                </div>
              </div>
              <div className="group-21">
                <p className="text-wrapper-14">
                  Merchandise Release <br />
                  For Token Holders
                </p>
                <img className="frame-8" alt="Frame" src="https://c.animaapp.com/Rx9akQjn/img/frame-2.svg" />
              </div>
              <div className="group-22">
                <div className="text-wrapper-15">20% Token Supply Burnt</div>
                <img className="frame-7" alt="Frame" src="https://c.animaapp.com/Rx9akQjn/img/frame-1.svg" />
              </div>
              <div className="group-23">
                <p className="text-wrapper-14">
                  Clowning Our Way to <br />
                  99M Market Cap
                </p>
                <img className="frame-6" alt="Frame" src="https://c.animaapp.com/Rx9akQjn/img/frame.svg" />
              </div>
            </div>
            <footer className="footer">
              <div className="overlap-5">
                <div className="container">
                  <div className="newsletter">
                    <div className="content">
                      <div className="join-the-meme-team">🌐&nbsp;&nbsp;Join the Meme Team</div>
                    </div>
                  </div>
                  <div className="content-wrapper">
                    <div className="content-2">
                      <div className="text-wrapper-16">Cyber Clown Commandments:</div>
                    </div>
                  </div>
                  <p className="thou-shalt-not-take">
                    Thou shalt not take life too seriously.
                    <br />
                    Thou shalt meme responsibly (and hilariously).
                    <br />
                    Thou shalt remember: Clowns run this town.
                  </p>
                  <div className="divider" />
                  <div className="credits">
                    <div className="overlap-6">
                      <div className="overlap-group-7">
                        <div className="row">
                          <div className="text-wrapper-17">Cyber Clown Token</div>
                        </div>
                        <img
                          className="rectangle-6"
                          alt="Rectangle"
                          src="https://c.animaapp.com/Rx9akQjn/img/rectangle-2@2x.png"
                        />
                      </div>
                      <p className="text-wrapper-18">© 2023 Cyber Clown Token. Terms and Conditions Apply.</p>
                    </div>
                  </div>
                </div>
                <p className="are-you-all-about">
                  Are you all about crypto, memes, and the wild world of the web? <br />
                  Welcome to the squad, meme warrior! <br />
                  <br />
                  Cyber Clown Token is the place where memes and money collide in the most gloriously chaotic way possible.{" "}
                  <br />
                  <br />
                  Join us as we ride this meme-mobile to parts unknown.
                </p>
              </div>
            </footer>
            <div className="group-24">
              
              <img className="rectangle-7" alt="Rectangle" src="https://c.animaapp.com/Rx9akQjn/img/rectangle@2x.png" />
              <div className="cw-button">
                <w3m-button size="sm" />
              </div>
              <div className="buy-button">
                    <MintNFTForm/>
                  </div>
              <Button
                className="button-instance"
                darkMode={false}
                divClassName="design-component-instance-node"
                iconPosition="no-icon"
                small
                style="primary"
                text="BUY NOW"
              />
              
              <ContentBars className="content-bars" />
              
            </div>
          </div>
        </div>
      </div>
    );


  }else{


  
  
    return (
      <div className="main">
        
        <SideBar right pageWrapId={"page-wrap"} outerContainerId={"main"} />
        <div id="page-wrap">
        
          <div className="div-2">
            <div className="overlap">
              <img className="group" alt="Group" src="https://c.animaapp.com/Rx9akQjn/img/group-13.png" />
              <img className="img" alt="Group" src="https://c.animaapp.com/Rx9akQjn/img/group-13.png" />
              <div className="overlap-group-wrapper">
                <div className="overlap-group">
                
                  <img className="objects" alt="Objects" src="https://c.animaapp.com/Rx9akQjn/img/group-13.png" />
                  <img className="image" alt="Image" src="https://c.animaapp.com/Rx9akQjn/img/image-18@2x.png" />
                </div>
              </div>
              
              <img
                className="peluche-per-bambini"
                alt="Peluche per bambini"
                src="https://c.animaapp.com/Rx9akQjn/img/peluche-per-bambini-4x-eliminate-parti--2@2x.png"
              />
              
              <img className="group-2" alt="Group" src="https://c.animaapp.com/Rx9akQjn/img/group-11.png" />
              
              <div className="group-wrapper">
                <div className="hey-there-you-wrapper">
                  <p className="hey-there-you">
                    Hey there, you fearless cybers voyagers! <br />
                    Buckle up, &#39;cause we&#39;re about to spill the tea on a whole new level of meme-worthy madness.
                    <br />
                    Enter the realm of Cyber Clown Token – the memecoin that&#39;s here to roast the roasters and meme the
                    memers.
                  </p>
                </div>
              </div>

              
              
              <div className="bg-wrapper">
              
                <div className="bg" />
              </div>
              
              <p className="get-ready-to-clown">
                Get Ready To Clown The Fame: <br />
                cyber Clown Token!
              </p>
              <div className="frame">
                {/* <Metamask /> */}
                

                <div className="text-wrapper-4">Coming Soon...</div>
                {/* <div className="text-wrapper-4">2</div>
                <div className="text-wrapper-4">:</div>
                <Minute minutes="default" />
                <div className="text-wrapper-4">:</div>
                <Seconds seconds="default" /> */}

                
              </div>
              
              <img className="image-2" alt="Image" src="https://c.animaapp.com/Rx9akQjn/img/image-15@2x.png" />
              <img
                className="isolation-mode"
                alt="Isolation mode"
                src="https://c.animaapp.com/Rx9akQjn/img/isolation-mode-1.svg"
              />
              <img
                className="isolation-mode-2"
                alt="Isolation mode"
                src="https://c.animaapp.com/Rx9akQjn/img/isolation-mode.svg"
              />
              <div className="overlap-wrapper">
                <div className="overlap-2">
                  <div className="titolo-acquisti-per">
                    <div className="overlap-group-2">
                      <div className="rectangle" />
                      <img className="frame-2" alt="Frame" src="https://c.animaapp.com/Rx9akQjn/img/frame-12.svg" />
                      <div className="text-wrapper-5"> clowning The Fame Game</div>
                    </div>
                  </div>
                  <div className="column">
                    <div className="section-title">
                      <p className="p">
                        <span className="span">Ever watched some random person blow up on the web and thought, &#34;</span>
                        <span className="text-wrapper-6">Am I the joke here?</span>
                        <span className="span">
                          &#34; <br />
                          <br />
                          Well, grab your popcorn, &#39;cause we&#39;re turning the tables on the meme gods.
                          <br />
                          <br /> Cyber Clown Token is our way of poking fun at the online fame frenzy. <br />
                          <br />
                          From overnight celebs with zero skills to legit talents getting ghosted, it&#39;s time to
                          meme-shame the system.
                        </span>
                      </p>
                    </div>
                  </div>
                  <img className="frame-3" alt="Frame" src="https://c.animaapp.com/Rx9akQjn/img/frame-11.svg" />
                  <img className="frame-4" alt="Frame" src="https://c.animaapp.com/Rx9akQjn/img/frame-10.svg" />
                </div>
              </div>
              <div className="element-2">
                <div className="overlap-3">
                  <div className="rectangle" />
                  <div className="frame-2">
                    <img className="image-3" alt="Image" src="https://c.animaapp.com/Rx9akQjn/img/image-16@2x.png" />
                  </div>
                  <div className="text-wrapper-5">Laughs And Gains, Baby!</div>
                </div>
                <div className="overlap-4">
                  <div className="section-title-wrapper">
                    <div className="but-hold-up-it-s-not-wrapper">
                      <p className="p">
                        <span className="span">
                          But hold up, it&#39;s not all jest and jesting. <br />
                          <br />
                          While we&#39;re clowning around, we&#39;re also cooking up some potential gains. <br />
                          <br />
                          Yeah, you heard that right – you could be laughing all the way to the digital bank.
                        </span>
                        <span className="text-wrapper-6">
                          {" "}
                          <br />
                          <br />
                          Who said memes can&#39;t pay the bills?
                        </span>
                      </p>
                    </div>
                  </div>
                  <img className="image-4" alt="Image" src="https://c.animaapp.com/Rx9akQjn/img/image-17@2x.png" />
                  <img className="group-3" alt="Group" src="https://c.animaapp.com/Rx9akQjn/img/group-10@2x.png" />
                </div>
              </div>
              <img className="layer" alt="Layer" src="https://c.animaapp.com/Rx9akQjn/img/layer-1.svg" />
              <div className="div-wrapper">
                <div className="layer-wrapper">
                  <div className="layer-2">
                    <div className="overlap-group-3">
                      <div className="group-4">
                        <div className="overlap-group-3">
                          <img className="group-5" alt="Group" src="https://c.animaapp.com/Rx9akQjn/img/group-9@2x.png" />
                          <img className="group-6" alt="Group" src="https://c.animaapp.com/Rx9akQjn/img/group-8@2x.png" />
                          <img
                            className="rectangle-2"
                            alt="Rectangle"
                            src="https://c.animaapp.com/Rx9akQjn/img/rectangle-6@2x.png"
                          />
                          <img className="group-7" alt="Group" src="https://c.animaapp.com/Rx9akQjn/img/group-7@2x.png" />
                          <img className="group-8" alt="Group" src="https://c.animaapp.com/Rx9akQjn/img/group-6@2x.png" />
                          <img className="group-9" alt="Group" src="https://c.animaapp.com/Rx9akQjn/img/group-5@2x.png" />
                          <img className="group-10" alt="Group" src="https://c.animaapp.com/Rx9akQjn/img/group-4@2x.png" />
                          <img className="group-11" alt="Group" src="https://c.animaapp.com/Rx9akQjn/img/group-3@2x.png" />
                        </div>
                      </div>
                      <img
                        className="rectangle-3"
                        alt="Rectangle"
                        src="https://c.animaapp.com/Rx9akQjn/img/rectangle-5@2x.png"
                      />
                      <img
                        className="rectangle-4"
                        alt="Rectangle"
                        src="https://c.animaapp.com/Rx9akQjn/img/rectangle-4@2x.png"
                      />
                      <img
                        className="rectangle-5"
                        alt="Rectangle"
                        src="https://c.animaapp.com/Rx9akQjn/img/rectangle-3@2x.png"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <img className="frame-5" alt="Frame" src="https://c.animaapp.com/Rx9akQjn/img/frame-9.svg" />
            <div className="column-2">
              <div className="avatar">
                <div className="overlap-group-4">
                  <div className="avatar-image" />
                  <img className="group-12" alt="Group" src="https://c.animaapp.com/Rx9akQjn/img/group-2@2x.png" />
                </div>
                <div className="avatar-content">
                  <div className="text-wrapper-7">Phase 1</div>
                </div>
              </div>
              <div className="group-13">
                <div className="text-wrapper-8">Token Development (180,500,000,000 CCT)</div>
                <img className="frame-6" alt="Frame" src="https://c.animaapp.com/Rx9akQjn/img/frame-8.svg" />
              </div>
              <div className="group-14">
                <div className="text-wrapper-9">Community Deploy</div>
                <img className="frame-7" alt="Frame" src="https://c.animaapp.com/Rx9akQjn/img/frame-7.svg" />
              </div>
              <div className="group-15">
                <div className="text-wrapper-10">Presale Live!</div>
                <img className="frame-7" alt="Frame" src="https://c.animaapp.com/Rx9akQjn/img/frame-6.svg" />
              </div>
            </div>
            <div className="column-3">
              <div className="avatar">
                <div className="overlap-group-5">
                  <div className="avatar-image-2" />
                  <img className="group-16" alt="Group" src="https://c.animaapp.com/Rx9akQjn/img/group-1@2x.png" />
                </div>
                <div className="avatar-content">
                  <div className="text-wrapper-7">Phase 2</div>
                </div>
              </div>
              <div className="group-17">
                <div className="text-wrapper-11">Token Release</div>
                <img className="frame-7" alt="Frame" src="https://c.animaapp.com/Rx9akQjn/img/frame-5.svg" />
              </div>
              <div className="group-18">
                <div className="text-wrapper-12">NFT Release</div>
                <img className="frame-7" alt="Frame" src="https://c.animaapp.com/Rx9akQjn/img/frame-4.svg" />
              </div>
              <div className="group-19">
                <div className="text-wrapper-13">DEX Listing</div>
                <img className="frame-7" alt="Frame" src="https://c.animaapp.com/Rx9akQjn/img/frame-3.svg" />
              </div>
            </div>
            <div className="column-4">
              <div className="avatar">
                <div className="overlap-group-6">
                  <div className="avatar-image-3" />
                  <img className="group-20" alt="Group" src="https://c.animaapp.com/Rx9akQjn/img/group@2x.png" />
                </div>
                <div className="avatar-content">
                  <div className="text-wrapper-7">Phase 3</div>
                </div>
              </div>
              <div className="group-21">
                <p className="text-wrapper-14">
                  Merchandise Release <br />
                  For Token Holders
                </p>
                <img className="frame-8" alt="Frame" src="https://c.animaapp.com/Rx9akQjn/img/frame-2.svg" />
              </div>
              <div className="group-22">
                <div className="text-wrapper-15">20% Token Supply Burnt</div>
                <img className="frame-7" alt="Frame" src="https://c.animaapp.com/Rx9akQjn/img/frame-1.svg" />
              </div>
              <div className="group-23">
                <p className="text-wrapper-14">
                  Clowning Our Way to <br />
                  99M Market Cap
                </p>
                <img className="frame-6" alt="Frame" src="https://c.animaapp.com/Rx9akQjn/img/frame.svg" />
              </div>
            </div>
            <footer className="footer">
              <div className="overlap-5">
                <div className="container">
                  <div className="newsletter">
                    <div className="content">
                      <div className="join-the-meme-team">🌐&nbsp;&nbsp;Join the Meme Team</div>
                    </div>
                  </div>
                  <div className="content-wrapper">
                    <div className="content-2">
                      <div className="text-wrapper-16">Cyber Clown Commandments:</div>
                    </div>
                  </div>
                  <p className="thou-shalt-not-take">
                    Thou shalt not take life too seriously.
                    <br />
                    Thou shalt meme responsibly (and hilariously).
                    <br />
                    Thou shalt remember: Clowns run this town.
                  </p>
                  <div className="divider" />
                  <div className="credits">
                    <div className="overlap-6">
                      <div className="overlap-group-7">
                        <div className="row">
                          <div className="text-wrapper-17">Cyber Clown Token</div>
                        </div>
                        <img
                          className="rectangle-6"
                          alt="Rectangle"
                          src="https://c.animaapp.com/Rx9akQjn/img/rectangle-2@2x.png"
                        />
                      </div>
                      <p className="text-wrapper-18">© 2023 Cyber Clown Token. Terms and Conditions Apply.</p>
                    </div>
                  </div>
                </div>
                <p className="are-you-all-about">
                  Are you all about crypto, memes, and the wild world of the web? <br />
                  Welcome to the squad, meme warrior! <br />
                  <br />
                  Cyber Clown Token is the place where memes and money collide in the most gloriously chaotic way possible.{" "}
                  <br />
                  <br />
                  Join us as we ride this meme-mobile to parts unknown.
                </p>
              </div>
            </footer>
            <div className="group-24">
              
              <img className="rectangle-7" alt="Rectangle" src="https://c.animaapp.com/Rx9akQjn/img/rectangle@2x.png" />
              <div className="cw-button">
                <w3m-button size="sm" />
              </div>
              <Button
                className="button-instance"
                darkMode={false}
                divClassName="design-component-instance-node"
                iconPosition="no-icon"
                small
                style="primary"
                text="BUY NOW"
              />
              
              <ContentBars className="content-bars" />
              
            </div>
          </div>
        </div>
      </div>
    );
  }
};

// export default Main;
