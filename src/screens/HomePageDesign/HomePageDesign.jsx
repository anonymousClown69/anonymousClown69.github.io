import React from "react";
import { Button } from "../../components/Button";
import { Minute } from "../../components/Minute";
import { Seconds } from "../../components/Seconds";
import "./style.css";
import { useAccount, useConnect, useEnsName, useDisconnect } from 'wagmi';
import { MintNFT } from '../../components/MintNFT';


export const HomePageDesign = () => {
  return (
    <div className="home-page-design">
      <div className="div-2">
        <footer className="footer">
          <div className="container">
            <div className="newsletter">
              <div className="content">
                <p className="p">🌐 Join the Meme Team</p>
              </div>
            </div>
            <div className="content-wrapper">
              <div className="content">
                <div className="text-wrapper-4">Cyber Clown Commandments:</div>
              </div>
            </div>
            <p className="are-you-all-about">
              Are you all about crypto, memes, and the wild world of the web? Welcome to the squad, meme warrior! <br />
              Cyber Clown Token is the place where memes and money collide in the most gloriously chaotic way possible.{" "}
              <br />
              Join us as we ride this meme-mobile to parts unknown.
            </p>
            <p className="thou-shalt-not-take">
              Thou shalt not take life too seriously.
              <br />
              Thou shalt meme responsibly (and hilariously).
              <br />
              Thou shalt remember: Clowns run this town.
            </p>
            <div className="divider" />
            <div className="credits">
              <div className="overlap-group">
                <div className="row">
                  <div className="div-wrapper">
                    <p className="text-wrapper-5">© 2023 Cyber Clown Token. Terms and Conditions Apply.</p>
                  </div>
                  <div className="text-wrapper-6">Cyber Clown Token</div>
                </div>
                <img
                  className="rectangle"
                  alt="Rectangle"
                  src="https://c.animaapp.com/2k0AqbV3/img/rectangle-1@2x.png"
                />
              </div>
            </div>
          </div>
        </footer>
        <div className="overlap">
          <div className="recensioni">
            <div className="column">
              <div className="avatar">
                <div className="overlap-group-2">
                  <div className="avatar-image" />
                  <img className="group" alt="Group" src="https://c.animaapp.com/2k0AqbV3/img/group@2x.png" />
                </div>
                <div className="avatar-content">
                  <div className="text-wrapper-7">Phase 1</div>
                </div>
              </div>
              <div className="group-2">
                <div className="text-wrapper-8">Token Development (180,500,000,000 CCT)</div>
                <img className="frame" alt="Frame" src="https://c.animaapp.com/2k0AqbV3/img/frame.svg" />
              </div>
              <div className="group-3">
                <div className="text-wrapper-9">Community Deploy</div>
                <img className="img" alt="Frame" src="https://c.animaapp.com/2k0AqbV3/img/frame-1.svg" />
              </div>
              <div className="group-4">
                <div className="text-wrapper-9">Presale Live!</div>
                <img className="img" alt="Frame" src="https://c.animaapp.com/2k0AqbV3/img/frame-2.svg" />
              </div>
            </div>
            <div className="column-2">
              <div className="avatar">
                <div className="overlap-group-3">
                  <div className="avatar-image-2" />
                  <img className="group-5" alt="Group" src="https://c.animaapp.com/2k0AqbV3/img/group-1@2x.png" />
                </div>
                <div className="avatar-content">
                  <div className="text-wrapper-7">Phase 2</div>
                </div>
              </div>
              <div className="group-6">
                <div className="text-wrapper-10">Token Release</div>
                <img className="img" alt="Frame" src="https://c.animaapp.com/2k0AqbV3/img/frame-3.svg" />
              </div>
              <div className="group-3">
                <div className="text-wrapper-9">NFT Release</div>
                <img className="img" alt="Frame" src="https://c.animaapp.com/2k0AqbV3/img/frame-4.svg" />
              </div>
              <div className="group-4">
                <div className="text-wrapper-9">DEX Listing</div>
                <img className="img" alt="Frame" src="https://c.animaapp.com/2k0AqbV3/img/frame-5.svg" />
              </div>
            </div>
            <div className="column-3">
              <div className="avatar">
                <div className="overlap-group-4">
                  <div className="avatar-image-3" />
                  <img className="group-7" alt="Group" src="https://c.animaapp.com/2k0AqbV3/img/group-2@2x.png" />
                </div>
                <div className="avatar-content">
                  <div className="text-wrapper-7">Phase 3</div>
                </div>
              </div>
              <div className="group-2">
                <p className="text-wrapper-8">Merchandise Release For Token Holders</p>
                <img className="frame" alt="Frame" src="https://c.animaapp.com/2k0AqbV3/img/frame-6.svg" />
              </div>
              <div className="group-3">
                <div className="text-wrapper-9">20% Token Supply Burnt</div>
                <img className="img" alt="Frame" src="https://c.animaapp.com/2k0AqbV3/img/frame-7.svg" />
              </div>
              <div className="group-8">
                <p className="text-wrapper-11">Clowning Our Way to 99M Market Cap</p>
                <img className="frame-2" alt="Frame" src="https://c.animaapp.com/2k0AqbV3/img/frame-8.svg" />
              </div>
            </div>
            <div className="overlap-2">
              <div className="titolo-acquisti-per">
                <div className="overlap-group-5">
                  <div className="rectangle-2" />
                  <img className="frame-3" alt="Frame" src="https://c.animaapp.com/2k0AqbV3/img/frame-9.svg" />
                  <div className="text-wrapper-12">Tokenomics :</div>
                </div>
              </div>
              <div className="group-9">
                <div className="overlap-3">
                  <div className="placeholder-image" />
                  <div className="text-wrapper-13">40% Presale</div>
                  <img className="image" alt="Image" src="https://c.animaapp.com/2k0AqbV3/img/image-22@2x.png" />
                </div>
                <div className="overlap-4">
                  <div className="placeholder-image" />
                  <div className="element-DEX">20% Dex</div>
                  <img className="image-2" alt="Image" src="https://c.animaapp.com/2k0AqbV3/img/image-22@2x.png" />
                </div>
                <div className="overlap-5">
                  <div className="placeholder-image" />
                  <div className="text-wrapper-14">20% Liquidity</div>
                  <img className="image-3" alt="Image" src="https://c.animaapp.com/2k0AqbV3/img/image-22@2x.png" />
                </div>
                <div className="overlap-6">
                  <div className="placeholder-image-2" />
                  <div className="text-wrapper-14">20% Burnt</div>
                  <img className="image-4" alt="Image" src="https://c.animaapp.com/2k0AqbV3/img/image-22@2x.png" />
                </div>
              </div>
            </div>
          </div>
          <div className="novit" />
          <img className="layer" alt="Layer" src="https://c.animaapp.com/2k0AqbV3/img/layer-1.svg" />
          <div className="group-wrapper">
            <div className="layer-wrapper">
              <div className="overlap-wrapper">
                <div className="overlap-group-6">
                  <div className="overlap-group-wrapper">
                    <div className="overlap-group-6">
                      <img className="group-10" alt="Group" src="https://c.animaapp.com/2k0AqbV3/img/group-6.png" />
                      <img className="group-11" alt="Group" src="https://c.animaapp.com/2k0AqbV3/img/group-7.png" />
                      <img
                        className="rectangle-3"
                        alt="Rectangle"
                        src="https://c.animaapp.com/2k0AqbV3/img/rectangle-2@2x.png"
                      />
                      <img className="group-12" alt="Group" src="https://c.animaapp.com/2k0AqbV3/img/group-8.png" />
                      <img className="group-13" alt="Group" src="https://c.animaapp.com/2k0AqbV3/img/group-9@2x.png" />
                      <img className="group-14" alt="Group" src="https://c.animaapp.com/2k0AqbV3/img/group-10@2x.png" />
                      <img className="group-15" alt="Group" src="https://c.animaapp.com/2k0AqbV3/img/group-11@2x.png" />
                      <img className="group-16" alt="Group" src="https://c.animaapp.com/2k0AqbV3/img/group-12@2x.png" />
                    </div>
                  </div>
                  <img
                    className="rectangle-4"
                    alt="Rectangle"
                    src="https://c.animaapp.com/2k0AqbV3/img/rectangle-3@2x.png"
                  />
                  <img
                    className="rectangle-5"
                    alt="Rectangle"
                    src="https://c.animaapp.com/2k0AqbV3/img/rectangle-4@2x.png"
                  />
                  <img
                    className="rectangle-6"
                    alt="Rectangle"
                    src="https://c.animaapp.com/2k0AqbV3/img/rectangle-5@2x.png"
                  />
                </div>
              </div>
            </div>
          </div>
          <img className="frame-4" alt="Frame" src="https://c.animaapp.com/2k0AqbV3/img/frame-13.svg" />
        </div>
        <div className="overlap-7">
          <img
            className="caratteristiche"
            alt="Caratteristiche"
            src="https://c.animaapp.com/2k0AqbV3/img/caratteristiche.png"
          />
          <div className="peluche-principali">
            <div className="overlap-8">
              <div className="PRINICPALI-PRODOTTI">
                <div className="titolo-acquisti-per-2">
                  <div className="overlap-group-5">
                    <div className="rectangle-2" />
                    <img className="frame-3" alt="Frame" src="https://c.animaapp.com/2k0AqbV3/img/frame-10.svg" />
                    <div className="text-wrapper-12"> clowning The Fame Game</div>
                  </div>
                </div>
                <div className="overlap-9">
                  <div className="section-title-wrapper">
                    <div className="section-title">
                      <p className="ever-watched-some">
                        
                        <span className="span">
                        <br></br>
                          Ever watched some random person blow up on the web and thought, &#34;
                        </span>
                        <span className="text-wrapper-15">Am I the joke here?</span>
                        <span className="span">
                          &#34; Well, grab your popcorn, &#39;cause we&#39;re turning the tables on the meme gods.
                          <br /> Cyber Clown Token is our way of poking fun at the online fame frenzy. From overnight
                          celebs with zero skills to legit talents getting ghosted, it&#39;s time to meme-shame the
                          system.
                        </span>
                      </p>
                    </div>
                  </div>
                  <img className="frame-5" alt="Frame" src="https://c.animaapp.com/2k0AqbV3/img/frame-11.svg" />
                  <img className="frame-6" alt="Frame" src="https://c.animaapp.com/2k0AqbV3/img/frame-12.svg" />
                </div>
              </div>
              <img className="group-17" alt="Group" src="https://c.animaapp.com/2k0AqbV3/img/group-4.png" />
              <img className="image-5" alt="Image" src="https://c.animaapp.com/2k0AqbV3/img/image-14@2x.png" />
              <img className="capa" alt="Capa" src="https://c.animaapp.com/2k0AqbV3/img/capa-1.svg" />
            </div>
          </div>
          <img className="group-18" alt="Group" src="https://c.animaapp.com/2k0AqbV3/img/group-5.png" />
          <img className="image-6" alt="Image" src="https://c.animaapp.com/2k0AqbV3/img/image-18.png" />
        </div>
        <div className="collezioni">
          <div className="overlap-10">
            <div className="frame-7">
              <div className="image-wrapper">
                <img className="image-7" alt="Image" src="https://c.animaapp.com/2k0AqbV3/img/image-15@2x.png" />
              </div>
            </div>
            <p className="get-ready-to-clown">Get Ready To Clown The Fame: Cyber Clown Token!</p>
            <div className="hey-there-you-wrapper">
              <p className="hey-there-you">
                Hey there, you fearless cybers voyagers! <br />
                Buckle up, &#39;cause we&#39;re about to spill the tea on a whole new level of meme-worthy madness.
                <br />
                Enter the realm of Cyber Clown Token – the memecoin that&#39;s here to roast the roasters and meme the
                memers.
              </p>
            </div>
            <img
              className="isolation-mode"
              alt="Isolation mode"
              src="https://c.animaapp.com/2k0AqbV3/img/isolation-mode.svg"
            />
            <img
              className="isolation-mode-2"
              alt="Isolation mode"
              src="https://c.animaapp.com/2k0AqbV3/img/isolation-mode-1.svg"
            />
          </div>
        </div>
        <div className="hero-section">
          <div className="overlap-11">
            <div className="group-19">
              <div className="bg-wrapper">
                <div className="bg" />
              </div>
            </div>
            <div className="frame-8">
              <div className="text-wrapper-16">Coming Soon...</div>
              {/* <div className="text-wrapper-16">2</div>
              <div className="text-wrapper-16">:</div>
              <Minute minutes="default" />
              <div className="text-wrapper-16">:</div>
              <Seconds seconds="default" /> */}
            </div>
          </div>
        </div>
        <div className="men">
          <div className="overlap-12">
            <div className="container-2">
              <div className="column-4" />
              <div className="column-wrapper">
                <div className="column-5">
                  <div className="text-wrapper-17">Home</div>
                  <div className="text-wrapper-18">Staking</div>
                  <div className="text-wrapper-19">About</div>
                </div>
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
            </div>
            <img className="rectangle" alt="Rectangle" src="https://c.animaapp.com/2k0AqbV3/img/rectangle-1@2x.png" />
          </div>
        </div>
      </div>
    </div>
  );
};
