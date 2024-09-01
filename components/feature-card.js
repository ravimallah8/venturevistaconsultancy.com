import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

const FeatureCard = (props) => {
  return (
    <>
      <div className="feature-card-container">
        <img
          alt={props.imageAlt}
          src={props.imageSrc}
          className="feature-card-image"
        />
        <h5 className="feature-card-text1 HeadingThree">{props.newProp}</h5>
        <span>
          {props.text1 ?? (
            <Fragment>
              <span className="feature-card-text3">
                <span>
                  Get the latest design ideas and turn it into reality.
                </span>
              </span>
            </Fragment>
          )}
        </span>
      </div>
      <style jsx>
        {`
          .feature-card-container {
            flex: 0 0 auto;
            width: 25%;
            display: flex;
            margin-top: var(--dl-space-space-triplequarterunit);
            align-items: center;
            padding-left: var(--dl-space-space-triplequarterunit);
            padding-right: var(--dl-space-space-triplequarterunit);
            flex-direction: column;
          }
          .feature-card-image {
            height: 30px;
            object-fit: cover;
            margin-bottom: var(--dl-space-space-unitandahalfunit);
          }
          .feature-card-text1 {
            color: var(--dl-color-secondary-600);
            margin-top: var(--dl-space-space-halfunit);
            text-align: center;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .feature-card-text3 {
            display: inline-block;
            text-align: center;
            margin-bottom: var(--dl-space-space-unit);
          }
          @media (max-width: 767px) {
            .feature-card-container {
              width: 50%;
            }
          }
          @media (max-width: 479px) {
            .feature-card-container {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

FeatureCard.defaultProps = {
  imageSrc: '/rocket1.svg',
  imageAlt: 'image',
  newProp: 'Design',
  text1: undefined,
}

FeatureCard.propTypes = {
  imageSrc: PropTypes.string,
  imageAlt: PropTypes.string,
  newProp: PropTypes.string,
  text1: PropTypes.element,
}

export default FeatureCard
