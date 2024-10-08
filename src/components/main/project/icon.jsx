import React from 'react'
import './icon.css'
export default function Icon({githubLink,websiteLink}) {

  return (
    <div id='icon'>
      <a href={githubLink} target="_blank"><div id='githubIcon'   >
       <svg className='githubIcon'  viewBox="0 -2 97.707 97.707" xmlns="http://www.w3.org/2000/svg">
       <g>
      <path
        stroke="url(#lineGradientLight)"
        strokeWidth={4}
        strokeOpacity={4}
        fill='black'
        fillRule="evenodd"
        d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0112.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z"
        clipRule="evenodd"
      ></path>
      </g>
    </svg>
    </div>
    </a>
    <a href={websiteLink} target="_blank"><div id='websiteIcon'  >
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="72"
        height="53"
        fill="none"
        viewBox="0 0 72 53"
        id='webIcon'
      >
              <defs>
                  <linearGradient id="gradientLang" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="10%" />
                      <stop offset="40%" />
                      <stop offset="100%" />
                  </linearGradient>
              </defs>

        <g id="Frame1" >
          <path
            id="Ellipse 1"
            fill="#000"
            stroke='url(#gradientLang)'
            d="M51.5 26.5c0 13.54-10.755 24.5-24 24.5s-24-10.96-24-24.5S14.255 2 27.5 2s24 10.96 24 24.5z"
          />
          <path
            id="Ellipse 2"
            fill="#000"
            fillOpacity="0.2"
            stroke='url(#gradientLang)'
            d="M35.5 26.253c0 6.656-.946 12.786-2.463 17.235-.759 2.227-1.652 4.005-2.62 5.217-.971 1.217-1.96 1.795-2.917 1.795-.956 0-1.946-.578-2.918-1.795-.967-1.212-1.86-2.99-2.62-5.217-1.516-4.45-2.462-10.58-2.462-17.235 0-6.657.946-12.661 2.462-16.984.758-2.164 1.65-3.88 2.614-5.044C25.544 3.057 26.535 2.5 27.5 2.5c.965 0 1.956.557 2.924 1.725.965 1.165 1.856 2.88 2.614 5.044 1.516 4.323 2.462 10.327 2.462 16.983z"
          />
          <path
            id="Line1"
            fill='none'
            stroke="#D3D3D3"
            strokeLinecap="round"
            d="M49 16H6"
          />
          <path
            id="Line2"
            stroke="#D3D3D3"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M48 38H7"
          />
        </g>
        </svg>
        </div>
        </a>
    </div>
  )
}
