/**
 * Material design: [Icons](https://material.io/guidelines/style/icons.html)
 * `mdi-holiday-iconset-svg` is a iconset for the Material Design Icons collection with the "holiday" tag
 *
 * Example:
 *   <iron-icon icon="mdi-holiday:candycane"></iron-icon>
 *
 * @demo demo/index.html
 */
import "@polymer/iron-icon/iron-icon.js";
import "@polymer/iron-iconset-svg/iron-iconset-svg.js";

import { html } from "@polymer/polymer/lib/utils/html-tag.js";

const template = html`<iron-iconset-svg name="mdi-holiday" size="24">
  <svg>

    <g id="candycane">
      <path d="M10,10A2,2 0 0,1 8,12A2,2 0 0,1 6,10V8C6,7.37 6.1,6.77 6.27,6.2L10,9.93V10M12,2C12.74,2 13.44,2.13 14.09,2.38L11.97,6C11.14,6 10.44,6.5 10.15,7.25L7.24,4.34C8.34,2.92 10.06,2 12,2M17.76,6.31L14,10.07V8C14,7.62 13.9,7.27 13.72,6.97L15.83,3.38C16.74,4.13 17.42,5.15 17.76,6.31M18,13.09L14,17.09V12.9L18,8.9V13.09M18,20A2,2 0 0,1 16,22A2,2 0 0,1 14,20V19.91L18,15.91V20Z"></path>
    </g>

    <g id="gift">
      <path d="M22,12V20A2,2 0 0,1 20,22H4A2,2 0 0,1 2,20V12A1,1 0 0,1 1,11V8A2,2 0 0,1 3,6H6.17C6.06,5.69 6,5.35 6,5A3,3 0 0,1 9,2C10,2 10.88,2.5 11.43,3.24V3.23L12,4L12.57,3.23V3.24C13.12,2.5 14,2 15,2A3,3 0 0,1 18,5C18,5.35 17.94,5.69 17.83,6H21A2,2 0 0,1 23,8V11A1,1 0 0,1 22,12M4,20H11V12H4V20M20,20V12H13V20H20M9,4A1,1 0 0,0 8,5A1,1 0 0,0 9,6A1,1 0 0,0 10,5A1,1 0 0,0 9,4M15,4A1,1 0 0,0 14,5A1,1 0 0,0 15,6A1,1 0 0,0 16,5A1,1 0 0,0 15,4M3,8V10H11V8H3M13,8V10H21V8H13Z"></path>
    </g>

    <g id="ornament">
      <path d="M12,1A3,3 0 0,1 15,4V5A1,1 0 0,1 16,6V7.07C18.39,8.45 20,11.04 20,14A8,8 0 0,1 12,22A8,8 0 0,1 4,14C4,11.04 5.61,8.45 8,7.07V6A1,1 0 0,1 9,5V4A3,3 0 0,1 12,1M12,3A1,1 0 0,0 11,4V5H13V4A1,1 0 0,0 12,3M12,8C10.22,8 8.63,8.77 7.53,10H16.47C15.37,8.77 13.78,8 12,8M6.34,16H7.59L6,14.43C6.05,15 6.17,15.5 6.34,16M12.59,16L8.59,12H6.41L10.41,16H12.59M17.66,12H16.41L18,13.57C17.95,13 17.83,12.5 17.66,12M11.41,12L15.41,16H17.59L13.59,12H11.41M12,20C13.78,20 15.37,19.23 16.47,18H7.53C8.63,19.23 10.22,20 12,20Z"></path>
    </g>

    <g id="ornament-variant">
      <path d="M12,1A3,3 0 0,1 15,4V5A1,1 0 0,1 16,6V7.07C18.39,8.45 20,11.04 20,14A8,8 0 0,1 12,22A8,8 0 0,1 4,14C4,11.04 5.61,8.45 8,7.07V6A1,1 0 0,1 9,5V4A3,3 0 0,1 12,1M12,3A1,1 0 0,0 11,4V5H13V4A1,1 0 0,0 12,3M12,8C10.22,8 8.63,8.77 7.53,10H16.47C15.37,8.77 13.78,8 12,8M12,20C13.78,20 15.37,19.23 16.47,18H7.53C8.63,19.23 10.22,20 12,20M12,12A2,2 0 0,0 10,14A2,2 0 0,0 12,16A2,2 0 0,0 14,14A2,2 0 0,0 12,12M18,14C18,13.31 17.88,12.65 17.67,12C16.72,12.19 16,13 16,14C16,15 16.72,15.81 17.67,15.97C17.88,15.35 18,14.69 18,14M6,14C6,14.69 6.12,15.35 6.33,15.97C7.28,15.81 8,15 8,14C8,13 7.28,12.19 6.33,12C6.12,12.65 6,13.31 6,14Z"></path>
    </g>

    <g id="pine-tree">
      <path d="M10,21V18H3L8,13H5L10,8H7L12,3L17,8H14L19,13H16L21,18H14V21H10Z"></path>
    </g>

    <g id="pine-tree-box">
      <path d="M4,2H20A2,2 0 0,1 22,4V20A2,2 0 0,1 20,22H4A2,2 0 0,1 2,20V4A2,2 0 0,1 4,2M11,19H13V17H18L14,13H17L13,9H16L12,5L8,9H11L7,13H10L6,17H11V19Z"></path>
    </g>

    <g id="snowman">
      <path d="M17,17A5,5 0 0,1 12,22A5,5 0 0,1 7,17C7,15.5 7.65,14.17 8.69,13.25C8.26,12.61 8,11.83 8,11C8,10.86 8,10.73 8,10.59L5.04,8.87L4.83,8.71L2.29,9.39L2.03,8.43L4.24,7.84L2.26,6.69L2.76,5.82L4.74,6.97L4.15,4.75L5.11,4.5L5.8,7.04L6.04,7.14L8.73,8.69C9.11,8.15 9.62,7.71 10.22,7.42C9.5,6.87 9,6 9,5A3,3 0 0,1 12,2A3,3 0 0,1 15,5C15,6 14.5,6.87 13.78,7.42C14.38,7.71 14.89,8.15 15.27,8.69L17.96,7.14L18.2,7.04L18.89,4.5L19.85,4.75L19.26,6.97L21.24,5.82L21.74,6.69L19.76,7.84L21.97,8.43L21.71,9.39L19.17,8.71L18.96,8.87L16,10.59V11C16,11.83 15.74,12.61 15.31,13.25C16.35,14.17 17,15.5 17,17Z"></path>
    </g>

    <g id="stocking">
      <path d="M17,2A2,2 0 0,1 19,4V7A2,2 0 0,1 17,9V17C17,17.85 16.5,18.57 15.74,18.86L9.5,21.77C8.5,22.24 7.29,21.81 6.83,20.81L6,19C5.5,18 5.95,16.8 6.95,16.34L10,14.91V9A2,2 0 0,1 8,7V4A2,2 0 0,1 10,2H17M10,4V7H17V4H10Z"></path>
    </g>

  </svg>
</iron-iconset-svg>`;

document.head.appendChild(template.content);
