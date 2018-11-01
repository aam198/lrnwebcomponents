/**
 * Material design: [Icons](https://material.io/guidelines/style/icons.html)
 * `mdi-off-iconset-svg` is a iconset for the Material Design Icons collection with the "off" tag
 *
 * Example:
 *   <iron-icon icon="mdi-off:airplane-off"></iron-icon>
 *
 * @demo demo/index.html
 */
import "@polymer/iron-icon/iron-icon.js";
import "@polymer/iron-iconset-svg/iron-iconset-svg.js";

import { html } from "@polymer/polymer/lib/utils/html-tag.js";

const template = html`<iron-iconset-svg name="mdi-off" size="24">
  <svg>

    <g id="airplane-off">
      <path d="M3.15,5.27L8.13,10.26L2.15,14V16L10.15,13.5V19L8.15,20.5V22L11.65,21L15.15,22V20.5L13.15,19V15.27L18.87,21L20.15,19.73L4.42,4M13.15,9V3.5A1.5,1.5 0 0,0 11.65,2A1.5,1.5 0 0,0 10.15,3.5V7.18L17.97,15L21.15,16V14L13.15,9Z"></path>
    </g>

    <g id="bell-off">
      <path d="M14,20A2,2 0 0,1 12,22A2,2 0 0,1 10,20H14M19.74,21.57L17.17,19H3L6,16V10C6,9.35 6.1,8.72 6.3,8.13L3.47,5.3L4.89,3.89L7.29,6.29L21.15,20.15L19.74,21.57M11,4.08V3A1,1 0 0,1 12,2A1,1 0 0,1 13,3V4.08C15.84,4.56 18,7.03 18,10V14.17L8.77,4.94C9.44,4.5 10.19,4.22 11,4.08Z"></path>
    </g>

    <g id="camcorder-box-off">
      <path d="M6,8H6.73L14,15.27V16H6M2.27,1L1,2.27L3,4.28C2.41,4.62 2,5.26 2,6V18A2,2 0 0,0 4,20H18.73L20.73,22L22,20.73M20,4H7.82L11.82,8H14V10.18L14.57,10.75L18,8V14.18L22,18.17C22,18.11 22,18.06 22,18V6A2,2 0 0,0 20,4Z"></path>
    </g>

    <g id="camcorder-off">
      <path d="M3.27,2L2,3.27L4.73,6H4A1,1 0 0,0 3,7V17A1,1 0 0,0 4,18H16C16.2,18 16.39,17.92 16.54,17.82L19.73,21L21,19.73M21,6.5L17,10.5V7A1,1 0 0,0 16,6H9.82L21,17.18V6.5Z"></path>
    </g>

    <g id="cloud-off-outline">
      <path d="M7.73,10L15.73,18H6A4,4 0 0,1 2,14A4,4 0 0,1 6,10M3,5.27L5.75,8C2.56,8.15 0,10.77 0,14A6,6 0 0,0 6,20H17.73L19.73,22L21,20.73L4.27,4M19.35,10.03C18.67,6.59 15.64,4 12,4C10.5,4 9.15,4.43 8,5.17L9.45,6.63C10.21,6.23 11.08,6 12,6A5.5,5.5 0 0,1 17.5,11.5V12H19A3,3 0 0,1 22,15C22,16.13 21.36,17.11 20.44,17.62L21.89,19.07C23.16,18.16 24,16.68 24,15C24,12.36 21.95,10.22 19.35,10.03Z"></path>
    </g>

    <g id="eye-off">
      <path d="M11.83,9L15,12.16C15,12.11 15,12.05 15,12A3,3 0 0,0 12,9C11.94,9 11.89,9 11.83,9M7.53,9.8L9.08,11.35C9.03,11.56 9,11.77 9,12A3,3 0 0,0 12,15C12.22,15 12.44,14.97 12.65,14.92L14.2,16.47C13.53,16.8 12.79,17 12,17A5,5 0 0,1 7,12C7,11.21 7.2,10.47 7.53,9.8M2,4.27L4.28,6.55L4.73,7C3.08,8.3 1.78,10 1,12C2.73,16.39 7,19.5 12,19.5C13.55,19.5 15.03,19.2 16.38,18.66L16.81,19.08L19.73,22L21,20.73L3.27,3M12,7A5,5 0 0,1 17,12C17,12.64 16.87,13.26 16.64,13.82L19.57,16.75C21.07,15.5 22.27,13.86 23,12C21.27,7.61 17,4.5 12,4.5C10.6,4.5 9.26,4.75 8,5.2L10.17,7.35C10.74,7.13 11.35,7 12,7Z"></path>
    </g>

    <g id="map-marker-off">
      <path d="M16.37,16.1L11.75,11.47L11.64,11.36L3.27,3L2,4.27L5.18,7.45C5.06,7.95 5,8.46 5,9C5,14.25 12,22 12,22C12,22 13.67,20.15 15.37,17.65L18.73,21L20,19.72M12,6.5A2.5,2.5 0 0,1 14.5,9C14.5,9.73 14.17,10.39 13.67,10.85L17.3,14.5C18.28,12.62 19,10.68 19,9A7,7 0 0,0 12,2C10,2 8.24,2.82 6.96,4.14L10.15,7.33C10.61,6.82 11.26,6.5 12,6.5Z"></path>
    </g>

    <g id="microphone-off">
      <path d="M19,11C19,12.19 18.66,13.3 18.1,14.28L16.87,13.05C17.14,12.43 17.3,11.74 17.3,11H19M15,11.16L9,5.18V5A3,3 0 0,1 12,2A3,3 0 0,1 15,5V11L15,11.16M4.27,3L21,19.73L19.73,21L15.54,16.81C14.77,17.27 13.91,17.58 13,17.72V21H11V17.72C7.72,17.23 5,14.41 5,11H6.7C6.7,14 9.24,16.1 12,16.1C12.81,16.1 13.6,15.91 14.31,15.58L12.65,13.92L12,14A3,3 0 0,1 9,11V10.28L3,4.27L4.27,3Z"></path>
    </g>

    <g id="server-network-off">
      <path d="M13,18H14A1,1 0 0,1 15,19H15.73L13,16.27V18M22,19V20.18L20.82,19H22M21,21.72L19.73,23L17.73,21H15A1,1 0 0,1 14,22H10A1,1 0 0,1 9,21H2V19H9A1,1 0 0,1 10,18H11V16H4A1,1 0 0,1 3,15V11A1,1 0 0,1 4,10H6.73L4.73,8H4A1,1 0 0,1 3,7V6.27L1,4.27L2.28,3L21,21.72M4,2H20A1,1 0 0,1 21,3V7A1,1 0 0,1 20,8H9.82L7,5.18V4H5.82L3.84,2C3.89,2 3.94,2 4,2M20,10A1,1 0 0,1 21,11V15A1,1 0 0,1 20,16H17.82L11.82,10H20M9,6H10V4H9V6M9,14H10V13.27L9,12.27V14M5,12V14H7V12H5Z"></path>
    </g>

    <g id="server-off">
      <path d="M4,1H20A1,1 0 0,1 21,2V6A1,1 0 0,1 20,7H8.82L6.82,5H7V3H5V3.18L3.21,1.39C3.39,1.15 3.68,1 4,1M22,22.72L20.73,24L19.73,23H4A1,1 0 0,1 3,22V18A1,1 0 0,1 4,17H13.73L11.73,15H4A1,1 0 0,1 3,14V10A1,1 0 0,1 4,9H5.73L3.68,6.95C3.38,6.85 3.15,6.62 3.05,6.32L1,4.27L2.28,3L22,22.72M20,9A1,1 0 0,1 21,10V14A1,1 0 0,1 20,15H16.82L10.82,9H20M20,17A1,1 0 0,1 21,18V19.18L18.82,17H20M9,5H10V3H9V5M9,13H9.73L9,12.27V13M9,21H10V19H9V21M5,11V13H7V11H5M5,19V21H7V19H5Z"></path>
    </g>

    <g id="speaker-off">
      <path d="M2,5.27L3.28,4L21,21.72L19.73,23L18.27,21.54C17.93,21.83 17.5,22 17,22H7C5.89,22 5,21.1 5,20V8.27L2,5.27M12,18A3,3 0 0,1 9,15C9,14.24 9.28,13.54 9.75,13L8.33,11.6C7.5,12.5 7,13.69 7,15A5,5 0 0,0 12,20C13.31,20 14.5,19.5 15.4,18.67L14,17.25C13.45,17.72 12.76,18 12,18M17,15A5,5 0 0,0 12,10H11.82L5.12,3.3C5.41,2.54 6.14,2 7,2H17A2,2 0 0,1 19,4V17.18L17,15.17V15M12,4C10.89,4 10,4.89 10,6A2,2 0 0,0 12,8A2,2 0 0,0 14,6C14,4.89 13.1,4 12,4Z"></path>
    </g>

  </svg>
</iron-iconset-svg>`;

document.head.appendChild(template.content);
