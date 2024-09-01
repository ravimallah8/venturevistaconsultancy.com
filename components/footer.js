import React from 'react'

const Footer = (props) => {
  return (
    <>
      <footer className="footer-footer">
        <div className="footer-container1">
          <div className="footer-container2">
            <span className="footer-text10">Venture Vista Consultancy Private Limited</span>
            <span>Copyright © 2024 by Mukesh Mallah.</span>
            <br/>
            <span>
              <a href="tel:+91 900 466 3468">
                Phone No: (+91) 900 466 3468
              </a>
            </span>
            <br/>
            <span>  Office: Shop No. 1, Prakash Kunj Mistri Chowk, Kolsewadi, Kalyan East, Thane, Mumbai - 421306</span>
          </div>
          <div className="footer-container3">
            <div className="footer-container4">
              <span className="footer-text12 Large">Company</span>
              <span className="footer-text13 Large">Home</span>
              <span className="footer-text14 Large">Connect</span>
              <span className="footer-text15 Large">Contact Us</span>
            </div>
            {/*<div className="footer-container5">*/}
            {/*  <span className="footer-text16 Large">Pages</span>*/}
            {/*  <span className="footer-text17 Large">Home</span>*/}
            {/*  <span className="footer-text18 Large">Connect</span>*/}
            {/*  <span className="footer-text19 Large">About</span>*/}
            {/*</div>*/}
            <div className="footer-container6">
              <span className="footer-text16 Large">Social Media</span>
              <span className="footer-text17 Large">
                <a href="">Facebook</a>
              </span>
              <span className="footer-text18 Large">
                <a href="">Instagram</a>
              </span>
              <span className="footer-text19 Large">
                <a href="">LinkedIn</a>
              </span>
              <span className="footer-text19 Large">
                <a href="">Twitter</a>
              </span>
            </div>
            {/*<div className="footer-container6">*/}
            {/*  <span className="footer-text20 Large">Products</span>*/}
            {/*  <span className="footer-text21 Large">Free</span>*/}
            {/*  <span className="footer-text22 Large">PRO</span>*/}
            {/*  <span className="footer-text23 Large">Latest</span>*/}
            {/*</div>*/}
          </div>
        </div>
        <img alt="image" src="/waves-white.svg" className="footer-image" />
      </footer>
      <style jsx>
        {`
          .footer-footer {
            width: 100%;
            height: auto;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
            background-image: linear-gradient(310deg, #141727, #3a416f);
          }
          .footer-container1 {
            color: var(--dl-color-gray-white);
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-tripleunit);
            z-index: 1;
            max-width: 1320px;
            justify-content: space-between;
          }
          .footer-container2 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .footer-text10 {
            font-weight: 700;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .footer-container3 {
            display: flex;
            justify-content: space-between;
          }
          .footer-container4 {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .footer-text12 {
            font-weight: 700;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .footer-text13 {
            color: var(--dl-color-gray-800);
            transition: 0.3s;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .footer-text13:hover {
            color: var(--dl-color-gray-white);
          }
          .footer-text14 {
            color: var(--dl-color-gray-800);
            transition: 0.3s;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .footer-text14:hover {
            color: var(--dl-color-gray-white);
          }
          .footer-text15 {
            color: var(--dl-color-gray-800);
            transition: 0.3s;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .footer-text15:hover {
            color: var(--dl-color-gray-white);
          }
          .footer-container5 {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            margin-left: var(--dl-space-space-sixunits);
            flex-direction: column;
          }
          .footer-text16 {
            font-weight: 700;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .footer-text17 {
            color: var(--dl-color-gray-800);
            transition: 0.3s;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .footer-text17:hover {
            color: var(--dl-color-gray-white);
          }
          .footer-text18 {
            color: var(--dl-color-gray-800);
            transition: 0.3s;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .footer-text18:hover {
            color: var(--dl-color-gray-white);
          }
          .footer-text19 {
            color: var(--dl-color-gray-800);
            transition: 0.3s;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .footer-text19:hover {
            color: var(--dl-color-gray-white);
          }
          .footer-container6 {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            margin-left: var(--dl-space-space-sixunits);
            flex-direction: column;
          }
          .footer-text20 {
            font-weight: 700;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .footer-text21 {
            color: var(--dl-color-gray-800);
            transition: 0.3s;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .footer-text21:hover {
            color: var(--dl-color-gray-white);
          }
          .footer-text22 {
            color: var(--dl-color-gray-800);
            transition: 0.3s;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .footer-text22:hover {
            color: var(--dl-color-gray-white);
          }
          .footer-text23 {
            color: var(--dl-color-gray-800);
            transition: 0.3s;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .footer-text23:hover {
            color: var(--dl-color-gray-white);
          }
          .footer-image {
            top: 0px;
            left: auto;
            right: 0px;
            width: 100%;
            height: 100%;
            opacity: 0.7;
            position: absolute;
            object-fit: cover;
          }
          @media (max-width: 991px) {
            .footer-container1 {
              padding: var(--dl-space-space-doubleunit);
            }
          }
          @media (max-width: 767px) {
            .footer-container1 {
              flex-direction: column;
            }
            .footer-container2 {
              align-items: center;
              margin-bottom: var(--dl-space-space-doubleunit);
            }
            .footer-container5 {
              margin-left: var(--dl-space-space-doubleunit);
            }
            .footer-container6 {
              margin-left: var(--dl-space-space-doubleunit);
            }
          }
        `}
      </style>
    </>
  )
}

export default Footer
