import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

class IndexPage extends React.Component {
  componentDidMount() {
    const sideNav = document.getElementById('side-nav');

    const introSection = document.getElementById('intro');
    const introContainer = introSection.getElementsByClassName('section-container')[0];
    const introContainerLeftOrigin = getComputedStyle(introContainer).left;

    const brandDivider = introSection.getElementsByClassName('divider')[0];
    const brandDividerBoundingBox = brandDivider.getBoundingClientRect();
    const brandAmorrisContainer = introContainer.getElementsByClassName('amorris')[0];
    
    const brandCodeContainer = introContainer.getElementsByClassName('code')[0];
    const brandCodeContainerBoundingBox = brandCodeContainer.getBoundingClientRect();

    const positiveImpactContainer = introContainer.getElementsByClassName('positive-impact')[0];
    const positiveImpactContainerBoundingBox = positiveImpactContainer.getBoundingClientRect();
    const madeWithCodeContainer = introContainer.getElementsByClassName('made-with-code')[0];

    const goForAScroll = document.getElementById('go-for-a-scroll');
    const goForAScrollLetters = goForAScroll.getElementsByClassName('letter');

    const blocksSection = document.getElementById('blocks');
    const blocks = document.getElementsByClassName('block');

    const aboutMeSection = document.getElementById('about-me');

    const glitchables = document.getElementsByClassName('glitchable');

    // Make sure the viewport is big enough for the cool stuff
    const showScrollEffects = window.matchMedia('(min-width: 816px)');

    // Randomize
    const getRandomZeroToMax = max => Math.floor(Math.random() * max);

    // Fake horizontal scroll
    let xOffset = 0;

    // Clip path math
    const getClipPathOffset = (boundingBox) => {
      let clipPathOffset = '0px';
      if (window.innerWidth - xOffset < brandDividerBoundingBox.x) {
        clipPathOffset = '85%';
      } else if (window.innerWidth - xOffset < boundingBox.right) {
        clipPathOffset = `${Math.abs(window.innerWidth - xOffset - boundingBox.right)}px`;
      }

      return clipPathOffset;
    }

    if (showScrollEffects.matches) {
      // Change vertical scroll to horizontal
      document.addEventListener('mousewheel', event => {
        const isMovingLeft = event.deltaY >= 0 ? 1 : 0;
        xOffset += event.deltaY;
        xOffset = xOffset < 0 ? 0 : xOffset;

        const hasScrolledPastDivider = window.innerWidth - xOffset < brandDividerBoundingBox.x;

        // Adjust the gradient in the background
        const darkGradientPercentage = xOffset > 600 ? xOffset / 6 : 100;
        introSection.style.setProperty('background', `linear-gradient(270deg, rgba(31,24,55,1) ${xOffset / 10}%, rgba(101,40,90,1) ${darkGradientPercentage}%)`);

        // Adjust divider height
        const computedHeight = (xOffset !== 0)
          ? `${xOffset * 2}px`
          : '20px';
        brandDivider.style.setProperty('height', computedHeight);

        // Adjust divider position from top
        const computedDividerPosition = (xOffset !== 0)
          ? `-${xOffset - 10}px`
          : '0px';
        brandDivider.style.setProperty('top', computedDividerPosition);

        // Move the intro out of the way
        const computedIntroContainerPosition = (hasScrolledPastDivider)
          ? `${window.innerWidth - xOffset - 117}px`
          : introContainerLeftOrigin;
        introContainer.style.setProperty('left', computedIntroContainerPosition);

        // Clip go for a scroll section
        const goForAScrollClipPath = `inset(0 ${xOffset}px 0 0)`;
        goForAScroll.style.setProperty('clip-path', goForAScrollClipPath);
        
        // Clip code in brand section
        const brandClipPathOffset = getClipPathOffset(brandCodeContainerBoundingBox);
        const brandClipPath = `inset(0 ${brandClipPathOffset} 0 0)`;
        brandCodeContainer.style.setProperty('clip-path', brandClipPath);

        // Clip intro section
        const introClipPathOffset = getClipPathOffset(positiveImpactContainerBoundingBox);
        const introClipPath = `inset(0 ${introClipPathOffset} 0 0)`;
        positiveImpactContainer.style.setProperty('clip-path', introClipPath);
        madeWithCodeContainer.style.setProperty('clip-path', introClipPath);

        // Fade the intro text
        const brandAmorrisContainerOpacity = parseFloat(getComputedStyle(brandAmorrisContainer).opacity);
        const positiveImpactContainerOpacity = parseFloat(getComputedStyle(positiveImpactContainer).opacity);
        const madeWithCodeContainerOpacity = parseFloat(getComputedStyle(madeWithCodeContainer).opacity);
        if (hasScrolledPastDivider) {
          const adjustment = isMovingLeft ? -0.01 : 0.01;
          brandAmorrisContainer.style.setProperty('opacity', brandAmorrisContainerOpacity + adjustment);
          positiveImpactContainer.style.setProperty('opacity', positiveImpactContainerOpacity + adjustment);
          madeWithCodeContainer.style.setProperty('opacity', madeWithCodeContainerOpacity + adjustment);
        } else {
          brandAmorrisContainer.style.setProperty('opacity', 1);
          positiveImpactContainer.style.setProperty('opacity', 1);
          madeWithCodeContainer.style.setProperty('opacity', 1);
        }

        // Adjust Blocks and About Me Section
        const computedContentDisplay = (xOffset < window.innerWidth - 450)
          ? `none`
          : 'block';
        // blocksSection.style.setProperty('display', computedContentDisplay);
        aboutMeSection.style.setProperty('display', computedContentDisplay);

        // Adjust the side nav positioning
        const computedSideNavPositioning = (xOffset < window.innerWidth - 50)
          ? `${xOffset - (window.innerWidth - 50)}px`
          : '0';
        sideNav.style.setProperty('left', computedSideNavPositioning);

        // Made the divider absolutely positioned
        if (computedSideNavPositioning === '0') {
          brandDivider.style.setProperty('position', 'fixed');
          brandDivider.style.setProperty('left', '50px');
        } else {
          brandDivider.style.setProperty('left', '0');
          brandDivider.style.setProperty('position', 'absolute');
        }
      });
    }  

    const possibleCharacters = [
      'A','B','C','D','E','F','G',
      'H','I','J','K','L','M','N',
      'O','P','Q','R','S','T','U',
      'V','W','X','Y','Z'
    ];

    const possibleClipPaths = [
      'polygon(0 38%, 66% 44%, 100% 82%, 0 63%)',
      'polygon(0 42%, 100% 42%, 100% 88%, 0 88%)',
      'polygon(0 38%, 100% 0, 100% 42%, 0 63%)',
      'polygon(0 40%, 100% 40%, 100% 60%, 0 60%)',
      'polygon(0 68%, 21% 67%, 31% 100%, 0 100%)',
      'polygon(45% 0, 100% 0%, 100% 100%, 44% 100%)',
    ];

    setInterval(() => {
      const randomGlitch = glitchables[getRandomZeroToMax(glitchables.length)];
      const originalValue = randomGlitch.innerHTML;

      // Only swap the letters sometimes
      let letterSwapper;
      if (getRandomZeroToMax(100) % 2 === 0) {
        letterSwapper = setInterval(() => { 
          randomGlitch.innerHTML = possibleCharacters[getRandomZeroToMax(possibleCharacters.length)];
        }, 50);
      }

      const clipPathSwapper = setInterval(() => {
        randomGlitch.style.setProperty('clip-path', possibleClipPaths[getRandomZeroToMax(possibleClipPaths.length)]);
      }, 100)

      // Randomize the positioning of the glitch
      randomGlitch.style.setProperty('--glitch1-random-x', `${getRandomZeroToMax(10)}px`);
      randomGlitch.style.setProperty('--glitch1-random-y', `${getRandomZeroToMax(10)}px`);
      randomGlitch.style.setProperty('--glitch2-random-x', `-${getRandomZeroToMax(10)}px`);
      randomGlitch.style.setProperty('--glitch2-random-y', `-${getRandomZeroToMax(10)}px`);

      randomGlitch.classList.add('glitch');

      // Set back to normal letter
      setTimeout(() => {
        clearInterval(letterSwapper);
        clearInterval(clipPathSwapper);

        randomGlitch.innerHTML = originalValue;
        randomGlitch.style.setProperty('clip-path', 'none');
      }, 300);
      
      // Remove glitchy CSS
      setTimeout(() => {
        randomGlitch.classList.remove('glitch');
      }, getRandomZeroToMax(5000));
    }, 1000);

    // Shitty lights
    setInterval(() => {
      brandDivider.style.setProperty('box-shadow', `0 0 ${getRandomZeroToMax(10)}px 0px #61FF00`);
      goForAScroll.style.setProperty('text-shadow', `0 0 ${getRandomZeroToMax(10)}px #61FF00`);
    }, 50);

    const neonLetterColors = ['#A6F673', '#1F1837'];

    setInterval(() => {
      const goForAScrollDeadLetter = goForAScrollLetters[getRandomZeroToMax(goForAScrollLetters.length - 1)];

      const flickeringLetter = setInterval(() => {
        const color = neonLetterColors[getRandomZeroToMax(neonLetterColors.length)];
        const textShadow = (color !== '#1F1837')
          ? `0 0 ${getRandomZeroToMax(10)}px #61FF00`
          : 'none';

        goForAScrollDeadLetter.style.setProperty('color', color);
        goForAScrollDeadLetter.style.setProperty('text-shadow', textShadow);
      }, getRandomZeroToMax(100));

      setTimeout(() => {
        clearTimeout(flickeringLetter);
      
        goForAScrollDeadLetter.style.setProperty('color', neonLetterColors[0]);
        goForAScrollDeadLetter.style.removeProperty('text-shadow');
      }, 1000);
      
    }, getRandomZeroToMax(4000));
  }

  render() {
    return (
      <Layout>
        <SEO title="amorrriscode" />
        <section id="main-grid">
          <section id="intro">
            <div className="section-container">
              <div className="brand">
                <span className="amorris">
                  <span data-text="a">a</span>
                  <span>&nbsp;</span>
                  <span data-text="m">m</span>
                  <span>&nbsp;</span>
                  <span data-text="o">o</span>
                  <span>&nbsp;</span>
                  <span data-text="r">r</span>
                  <span>&nbsp;</span>
                  <span data-text="r">r</span>
                  <span>&nbsp;</span>
                  <span data-text="i">i</span>
                  <span>&nbsp;</span>
                  <span data-text="s">s</span>
                  <span>&nbsp;</span>
                  <span>&nbsp;</span>
                </span>
    
                <div className="divider"></div>
    
                <span className="code">
                  <span>&nbsp;</span>
                  <span>&nbsp;</span>
                  <span data-text="c">c</span>
                  <span>&nbsp;</span>
                  <span data-text="o">o</span>
                  <span>&nbsp;</span>
                  <span data-text="d">d</span>
                  <span>&nbsp;</span>
                  <span data-text="e">e</span>
                </span>
              </div>
    
              <div className="positive-impact">
                <span className="glitchable" data-text="P">P</span>
                <span>&nbsp;</span>
                <span className="glitchable" data-text="O">O</span>
                <span>&nbsp;</span>
                <span className="glitchable" data-text="S">S</span>
                <span>&nbsp;</span>
                <span className="glitchable" data-text="I">I</span>
                <span>&nbsp;</span>
                <span className="glitchable" data-text="T">T</span>
                <span>&nbsp;</span>
                <span className="glitchable" data-text="I">I</span>
                <span>&nbsp;</span>
                <span className="glitchable" data-text="V">V</span>
                <span>&nbsp;</span>
                <span className="glitchable" data-text="E">E</span>
                <span>&nbsp;</span>
    
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="-20 0 140 120" className="triangle">
                  <polygon points="50 15, 100 100, 0 100"/>
                </svg>
                <span>&nbsp;</span>
    
                <span className="glitchable" data-text="I">I</span>
                <span>&nbsp;</span>
                <span className="glitchable" data-text="M">M</span>
                <span>&nbsp;</span>
                <span className="glitchable" data-text="P">P</span>
                <span>&nbsp;</span>
                <span className="glitchable" data-text="A">A</span>
                <span>&nbsp;</span>
                <span className="glitchable" data-text="C">C</span>
                <span>&nbsp;</span>
                <span className="glitchable" data-text="T">T</span>
              </div>
    
              <div className="made-with-code">
                  <span className="glitchable" data-text="M">M</span>
                  <span>&nbsp;</span>
                  <span className="glitchable" data-text="A">A</span>
                  <span>&nbsp;</span>
                  <span className="glitchable" data-text="D">D</span>
                  <span>&nbsp;</span>
                  <span className="glitchable" data-text="E">E</span>
                  <span>&nbsp;</span>
    
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-20 0 140 120" className="triangle">
                    <polygon points="50 15, 100 100, 0 100"/>
                  </svg>
                  <span>&nbsp;</span>
    
                  <span className="glitchable" data-text="W">W</span>
                  <span>&nbsp;</span>
                  <span className="glitchable" data-text="I">I</span>
                  <span>&nbsp;</span>
                  <span className="glitchable" data-text="T">T</span>
                  <span>&nbsp;</span>
                  <span className="glitchable" data-text="H">H</span>
                  <span>&nbsp;</span>
                  
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-20 0 140 120" className="triangle">
                    <polygon points="50 15, 100 100, 0 100"/>
                  </svg>
                  <span>&nbsp;</span>
                  
                  <span className="glitchable" data-text="C">C</span>
                  <span>&nbsp;</span>
                  <span className="glitchable" data-text="O">O</span>
                  <span>&nbsp;</span>
                  <span className="glitchable" data-text="D">D</span>
                  <span>&nbsp;</span>
                  <span className="glitchable" data-text="E">E</span>
                  <span>&nbsp;</span>
              </div>
            </div>
          </section>
        </section>
    
        <section id="go-for-a-scroll">
          <span className="letter">W</span>
          <span>&nbsp;</span>
          <span className="letter">h</span>
          <span>&nbsp;</span>
          <span className="letter">y</span>
          <span>&nbsp;</span>
          <span className="letter">&nbsp;</span>
          <span>&nbsp;</span>
          <span className="letter">d</span>
          <span>&nbsp;</span>
          <span className="letter">o</span>
          <span>&nbsp;</span>
          <span className="letter">n</span>
          <span>&nbsp;</span>
          <span className="letter">'</span>
          <span>&nbsp;</span>
          <span className="letter">t</span>
          <span>&nbsp;</span>
          <span className="letter">&nbsp;</span>
          <span>&nbsp;</span>
          <span className="letter">y</span>
          <span>&nbsp;</span>
          <span className="letter">o</span>
          <span>&nbsp;</span>
          <span className="letter">u</span>
          <span>&nbsp;</span>
          <span className="letter">&nbsp;</span>
          <span>&nbsp;</span>
          <span className="letter">g</span>
          <span>&nbsp;</span>
          <span className="letter">o</span>
          <span>&nbsp;</span>
          <span className="letter">&nbsp;</span>
          <span>&nbsp;</span>
          <span className="letter">f</span>
          <span>&nbsp;</span>
          <span className="letter">o</span>
          <span>&nbsp;</span>
          <span className="letter">r</span>
          <span>&nbsp;</span>
          <span className="letter">&nbsp;</span>
          <span>&nbsp;</span>
          <span className="letter">a</span>
          <span>&nbsp;</span>
          <span className="letter">&nbsp;</span>
          <span>&nbsp;</span>
          <span className="letter">s</span>
          <span>&nbsp;</span>
          <span className="letter">c</span>
          <span>&nbsp;</span>
          <span className="letter">r</span>
          <span>&nbsp;</span>
          <span className="letter">o</span>
          <span>&nbsp;</span>
          <span className="letter">l</span>
          <span>&nbsp;</span>
          <span className="letter">l</span>
          <span>&nbsp;</span>
          <span className="letter">?</span>
        </section>

        {/* <section id="blocks">
          <div className="block block-one"></div>
          <div className="block block-two"></div>
          <div className="block block-three"></div>
        </section>
     */}
        <section id="about-me">
          <p class="greeting">Hello! <div role="img" aria-label="wave" class="wave">👋</div></p>
          <p>My name is Anthony Morris.</p>
          <p>I'm a software engineer currently working for a <a href="https://www.cisco.com">multinational networking company</a>. I'm endlessly curious, always looking to improve. To do that while working, I'm <a href="https://www.coursera.org/degrees/bachelor-of-science-computer-science-london">studying computer science</a>.</p>
          <p>Writing code has allowed me to become a builder. I want to use my skills to do something positive for others.</p>
          <p>I have a strong interest in building products that people love. Products that are a pleasure to use, a pleasure to look at, and make us better off as humans.</p>
          <p>You can follow me on <a href='http://twitter.com/amorriscode'>Twitter</a> or take a look at my career path on <a href='https://www.linkedin.com/in/amorriscode'>LinkedIn</a>.</p>
        </section>
      </Layout>
    )
  }
}

export default IndexPage;
