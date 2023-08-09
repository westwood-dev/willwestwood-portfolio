import './css/header.css';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className="headerContainer headerColour">
      <Link to={'/'} className="headerTitle textColour">
        Will Westwood
      </Link>
      <div
        className="mobileMenuBTN"
        onClick={() => {
          menuSwitch();
        }}
      >
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          viewBox="0 0 1000 1000"
        >
          <g id="menuBTN">
            <g>
              <g>
                <rect
                  className="fillTransition"
                  x="126.8"
                  y="156"
                  width="746.3"
                  height="162.2"
                />
              </g>
              <g>
                <rect
                  className="fillTransition"
                  x="126.8"
                  y="418.9"
                  width="746.3"
                  height="162.2"
                />
              </g>
              <g>
                <rect
                  className="fillTransition"
                  x="126.8"
                  y="681.8"
                  width="746.3"
                  height="162.2"
                />
              </g>
            </g>
          </g>
          <g id="closeBTN" style={{ display: 'none' }}>
            <rect
              className="fillTransition"
              x="131.1"
              y="422.2"
              transform="matrix(0.7071 0.7071 -0.7071 0.7071 500 -207.1068)"
              width="737.8"
              height="155.7"
            />

            <rect
              className="fillTransition"
              x="131.1"
              y="422.2"
              transform="matrix(-0.7071 0.7071 -0.7071 -0.7071 1207.1068 500)"
              width="737.8"
              height="155.7"
            />
          </g>
        </svg>
      </div>
      <div id="mobileMenu" className="switchHolder headerColour">
        <div className="headerBTNHolder">
          <Link
            to={'/work'}
            className="headerBTN textColour"
            onClick={() => {
              menuSwitch();
            }}
          >
            Work
          </Link>
          <Link
            to={'/about'}
            className="headerBTN textColour"
            onClick={() => {
              menuSwitch();
            }}
          >
            About
          </Link>
          <Link
            to={'/contact'}
            className="headerBTN textColour"
            onClick={() => {
              menuSwitch();
            }}
          >
            Contact
          </Link>
          <div
            id="bulbBTN"
            onClick={() => {
              switchLights();
            }}
          >
            <svg
              id="bulbIconSVG"
              enableBackground="new 0 0 24 24"
              version="1.1"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="bulb">
                <path d="m14.7 16.42c0-0.3 0.16-0.58 0.41-0.74 1.51-1.01 2.5-2.72 2.5-4.67 0-3.11-2.53-5.63-5.65-5.61-2.99 0.02-5.46 2.41-5.56 5.4-0.07 2.02 0.93 3.82 2.47 4.86 0.27 0.18 0.43 0.49 0.43 0.81v1.51c0 0.39 0.27 1.1 0.62 1.31 0.14 0.08 0.23 0.22 0.27 0.38l0.47 2.21c0.08 0.35 0.39 0.59 0.74 0.59h1.19c0.35 0 0.66-0.24 0.74-0.59l0.47-2.25c0.03-0.14 0.13-0.26 0.25-0.34 0.36-0.2 0.63-0.93 0.63-1.31l0.02-1.56z" />
                <line x1="10.16" x2="13.82" y1="19.58" y2="19.58" />
              </g>

              <g id="bulbStreaks">
                <line x1="4.31" x2="1.89" y1="10.99" y2="10.99" />
                <line x1="6.56" x2="4.85" y1="5.56" y2="3.85" />
                <line x1="12" x2="12" y1="3.3" y2=".88" />
                <line x1="17.44" x2="19.15" y1="5.56" y2="3.85" />
                <line x1="19.69" x2="22.11" y1="10.99" y2="10.99" />
                <line x1="17.44" x2="19.15" y1="16.43" y2="18.14" />
                <line x1="6.56" x2="4.85" y1="16.43" y2="18.14" />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

let theme = 'dark';

function switchLights() {
  let root = document.documentElement;

  if (theme === 'light') {
    root.style.setProperty('--text', 'white');
    root.style.setProperty('--bg', '#212529');
    root.style.setProperty('--header', '#1B1E22');
    theme = 'dark';
    document.querySelector('#bulbStreaks').style.display = 'block';
  } else {
    root.style.setProperty('--text', 'black');
    root.style.setProperty('--bg', 'white');
    root.style.setProperty('--header', '#ebebeb');
    theme = 'light';
    document.querySelector('#bulbStreaks').style.display = 'none';
  }
}

let menuOpen = false;

function menuSwitch() {
  if (window.matchMedia('(max-width: 700px)').matches) {
    if (menuOpen) {
      document.getElementById('mobileMenu').style.right = '-100vw';
      document.body.style.overflow = 'scroll';
      document.getElementById('menuBTN').style.display = 'initial';
      document.getElementById('closeBTN').style.display = 'none';
      menuOpen = false;
    } else {
      document.getElementById('mobileMenu').style.right = '0';
      document.body.style.overflow = 'hidden';
      document.getElementById('menuBTN').style.display = 'none';
      document.getElementById('closeBTN').style.display = 'initial';
      menuOpen = true;
    }
  }
}

export default Header;
