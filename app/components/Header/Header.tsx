import { Link } from '@remix-run/react';

export default function Header() {
  // todo: remove class if it's not the home page

  return (
    <>
      <header className="home">
        <div className="inner-wrap">
          <div>
            <Link to="/" className="logo">
              <svg
                version="1.1"
                id="logo-svg"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                viewBox="0 0 9.5 16.9"
                style={{ enableBackground: 'new 0 0 9.5 16.9' } as any}
                xmlSpace="preserve"
              >
                <g>
                  <path id="logo-path" className="st0" d="M9.5,11.8c0,3.3-1.8,5.1-4.8,5.1c-1.9,0-3.5-0.9-4.7-2.4L1,13c1.1,1.3,2.4,1.9,3.7,1.9 c1.8,0,2.9-1.1,2.9-3.2V1.8h-6V0h7.9V11.8z" />
                </g>
              </svg>
            </Link>
            <span>Joshua Sanger</span>
          </div>
          <span id="menu-trigger"><i className="material-icons">&#xE5D4;</i></span>
        </div>
      </header>
    </>
  )
}