import React from 'react'
import Link from 'next/link'

import PrimaryPinkButton from './primary-pink-button'

const HeaderFull = (props) => {
  return (
    <>
      <div className="header-full-header">
        <nav className="header-full-nav">
          <div className="header-full-container1">
            <Link href="/">
              <a className="header-full-link1 Large">Venture Vista Consultancy</a>
            </Link>
            <div className="header-full-menu">
              <Link href="/">
                <a className="header-full-link2 Large">Home</a>
              </Link>
              <Link href="/about-us">
                <a className="header-full-link3 Large">About Us</a>
              </Link>
              <Link href="/connect">
                <a className="header-full-link4 Large">Connect</a>
              </Link>
            </div>
            <div className="header-full-container2">
              <div className="header-full-container3">
                <PrimaryPinkButton button="buy now"></PrimaryPinkButton>
              </div>
              <svg viewBox="0 0 1024 1024" className="header-full-icon1">
                <path d="M128 256h768v86h-768v-86zM128 554v-84h768v84h-768zM128 768v-86h768v86h-768z"></path>
              </svg>
            </div>
          </div>
        </nav>
      </div>
      <style jsx>
        {`
          .header-full-header {
            width: 100%;
            height: 60px;
            display: flex;
            z-index: 3;
            box-shadow: 0 0.25rem 0.375rem -0.0625rem hsla(0, 0%, 8%, 0.12),
              0 0.125rem 0.25rem -0.0625rem hsla(0, 0%, 8%, 0.07) !important;
            padding-left: var(--dl-space-space-unitandahalfunit);
            padding-right: var(--dl-space-space-unitandahalfunit);
            justify-content: center;
          }
          .header-full-nav {
            flex: 0 0 auto;
            color: var(--dl-color-secondary-600);
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            max-width: 1320px;
            align-items: center;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-unitandahalfunit);
            padding-right: var(--dl-space-space-unitandahalfunit);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-halfunit);
            justify-content: space-between;
          }
          .header-full-container1 {
            color: var(--dl-color-gray-black);
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .header-full-link1 {
            font-weight: 600;
            margin-right: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .header-full-menu {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .header-full-link2 {
            margin-top: var(--dl-space-space-halfunit);
            transition: 0.3s;
            margin-left: var(--dl-space-space-unit);
            margin-right: var(--dl-space-space-unit);
            margin-bottom: var(--dl-space-space-halfunit);
            text-decoration: none;
          }
          .header-full-link2:hover {
            color: var(--dl-color-gray-500);
          }
          .header-full-link3 {
            margin-top: var(--dl-space-space-halfunit);
            transition: 0.3s;
            margin-left: var(--dl-space-space-unit);
            margin-right: var(--dl-space-space-unit);
            margin-bottom: var(--dl-space-space-halfunit);
            text-decoration: none;
          }
          .header-full-link3:hover {
            color: var(--dl-color-gray-500);
          }
          .header-full-link4 {
            margin-top: var(--dl-space-space-halfunit);
            transition: 0.3s;
            margin-left: var(--dl-space-space-unit);
            margin-right: var(--dl-space-space-unit);
            margin-bottom: var(--dl-space-space-halfunit);
            text-decoration: none;
          }
          .header-full-link4:hover {
            color: var(--dl-color-gray-500);
          }
          .header-full-container2 {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .header-full-container3 {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .header-full-icon1 {
            width: 24px;
            height: 24px;
            display: none;
            margin-left: var(--dl-space-space-unit);
          }
          @media (max-width: 991px) {
            .header-full-nav {
              max-width: 960px;
            }
            .header-full-link1 {
              color: var(--dl-color-secondary-700);
            }
            .header-full-menu {
              display: none;
            }
            .header-full-icon1 {
              display: flex;
            }
          }
          @media (max-width: 479px) {
            .header-full-container3 {
              display: none;
            }
          }
        `}
      </style>
    </>
  )
}

export default HeaderFull
