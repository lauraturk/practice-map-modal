import React from 'react';

const clearDay =
  <svg width="100" height="104" viewBox="0 0 100 104">
    <g transform="translate(2 2)" stroke="#263238" strokeWidth="3.5" fill="none" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18.573 9.55c4.737 3.603 11.106 4.902 17.196 2.923C41.86 10.493 46.246 5.7 47.96 0c1.715 5.7 6.103 10.494 12.193 12.473 6.09 1.98 12.458.68 17.196-2.924-1.962 5.62-1.23 12.077 2.534 17.257 3.764 5.18 9.68 7.873 15.63 7.742-4.89 3.39-8.094 9.047-8.094 15.45 0 6.403 3.203 12.06 8.095 15.45-5.95-.13-11.867 2.563-15.63 7.743-3.764 5.18-4.497 11.638-2.534 17.258-4.737-3.603-11.105-4.902-17.195-2.923-6.09 1.98-10.478 6.773-12.193 12.473-1.715-5.7-6.103-10.494-12.193-12.473-6.09-1.98-12.46-.68-17.197 2.924 1.963-5.62 1.23-12.077-2.534-17.257-3.764-5.18-9.68-7.873-15.63-7.742C5.3 62.06 8.503 56.404 8.503 50c0-6.403-3.204-12.06-8.095-15.45 5.95.13 11.866-2.563 15.63-7.743 3.763-5.18 4.496-11.638 2.533-17.258z" fill="#F7E07E"/>
      <circle fill="#FFF" cx="48" cy="50" r="20"/>
      <path d="M49 37c-7.732 0-14 6.268-14 14" fill="#E1F2FA"/>
    </g>
  </svg>

 const clearNight =
  <svg width="104" height="103" viewBox="0 0 104 103">
   <g stroke="#263238" strokeWidth="3.5" fill="#F7E07E" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round">
     <path d="M15.312 63.823c.036.236.335.236.373 0 1.046-6.758 6.378-12.09 13.136-13.136.237-.036.237-.335 0-.374-6.757-1.046-12.09-6.378-13.135-13.136-.036-.236-.335-.236-.373 0-1.047 6.758-6.378 12.09-13.137 13.136-.233.036-.233.338 0 .374 6.76 1.046 12.09 6.378 13.137 13.136zM48.35 29.375C61.87 31.468 72.533 42.132 74.626 55.65c.072.47.67.47.747 0 2.092-13.518 12.756-24.182 26.274-26.275.472-.072.472-.67 0-.747-13.518-2.092-24.182-12.756-26.274-26.274-.072-.472-.67-.472-.747 0-2.093 13.518-12.757 24.182-26.274 26.274-.467.072-.467.675 0 .747zM42.195 86.208c7.51 1.163 13.434 7.087 14.597 14.597.04.262.372.262.415 0 1.162-7.51 7.087-13.434 14.596-14.597.263-.04.263-.372 0-.415-7.51-1.162-13.434-7.087-14.596-14.596-.04-.263-.373-.263-.415 0-1.163 7.51-7.087 13.434-14.597 14.596-.26.04-.26.375 0 .415z"/>
   </g>
  </svg>

 const sleet =
  <svg width="104" height="104" viewBox="0 0 104 104">
    <g stroke="#263238" strokeWidth="3.5" fill="none" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round">
     <path d="M20.52 25.54C20.52 12.56 31.32 2 44.592 2c9.03 0 17.163 4.862 21.3 12.56 1.96-1.103 4.192-1.695 6.477-1.695 7.147 0 12.963 5.688 12.963 12.676 0 .227-.005.453-.018.68C95.083 28.655 102 37.25 102 47.27 102 59.252 92.03 69 79.778 69c0 0-57.884-.05-58.095-.14C10.426 67.616 2 58.42 2 47.27c0-10.595 8.002-19.685 18.52-21.427v-.302z" fill="#EAF0F5"/>
     <path d="M60.976 79.22l-5.952 22.218M44.2 79.12l-3.882 14.488M28.294 79l-1.812 6.76M76.2 79.12l-4.14 15.454" fill="#E1F2FA"/>
    </g>
  </svg>

 const rain =
   <svg width="104" height="104" viewBox="0 0 104 104">
     <g stroke="#263238" strokeWidth="3.5" fill="none" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round">
       <path d="M52 53.815V96.26c0 3.17-2.578 5.74-5.743 5.74-3.17 0-5.743-2.565-5.743-5.742v-1.59"/>
       <path d="M91.344 49.462c-4.848 0-9.425 1.953-13.114 5.53-3.69-3.577-8.267-5.53-13.115-5.53-4.848 0-9.425 1.953-13.115 5.53-3.69-3.577-8.267-5.53-13.115-5.53-4.848 0-9.425 1.953-13.115 5.53-3.69-3.577-8.266-5.53-13.114-5.53-3.825 0-7.47 1.235-10.656 3.502C4.627 27.736 26.048 8 52 8s47.373 19.736 50 44.964c-3.185-2.267-6.83-3.502-10.656-3.502z" fill="#76B6FF"/>
       <path d="M52 2v5.857" fill="#E1F2FA"/>
       <path d="M89.5 14.638c0 3.514 2.8 6.362 6.25 6.362 3.453 0 6.25-2.848 6.25-6.362C102 11.124 95.75 2 95.75 2s-6.25 9.124-6.25 12.638zM60 24.88c0 6.363 5.067 11.52 11.317 11.52s11.315-5.157 11.315-11.52C82.632 18.52 71.314 2 71.314 2S60 18.52 60 24.88z" fill="#D0E6FF"/>
     </g>
  </svg>

 const wind =
   <svg width="104" height="72" viewBox="0 0 104 72">
     <g stroke="#2C84E9" strokeWidth="3.5" fill="none" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round">
       <path d="M15 40h52M76 40h26" fill="#E1F2FA"/>
       <path d="M33 50h58.753c5.52 0 9.997 4.47 9.997 9.987 0 5.516-4.47 9.987-9.995 9.987h.23c-5.52 0-9.994-4.467-9.994-8.987M21 18.974h35.222c3.31 0 5.993-2.687 5.993-5.987C62.215 9.68 59.527 7 56.223 7h.138c-3.308 0-5.99 2.678-5.99 5.388"/>
       <path d="M2 30h16.28" fill="#E1F2FA"/>
       <path d="M28.296 30h59.71C95.737 30 102 23.734 102 16c0-7.732-6.272-14-13.99-14h-.76c-7.726 0-13.99 6.263-13.99 14"/>
     </g>
  </svg>

 const fog =
   <svg width="104" height="81" viewBox="0 0 104 81">
     <g stroke="#263238" strokeWidth="3.5" fill="none" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round">
       <path d="M20.52 25.54C20.52 12.56 31.32 2 44.592 2c9.03 0 17.163 4.862 21.3 12.56 1.96-1.103 4.192-1.695 6.477-1.695 7.147 0 12.963 5.688 12.963 12.676 0 .227-.005.453-.018.68C95.083 28.655 102 37.25 102 47.27H2c0-10.595 8.002-19.685 18.52-21.427v-.302z" fill="#EAF0F5"/>
       <path d="M7 57h54M11 68h82M27 79h24M59 79h12M69 57h28" fill="#E1F2FA"/>
     </g>
  </svg>

 const cloudy =
   <svg width="124" height="91" viewBox="0 0 124 91">
     <g stroke="#263238" strokeWidth="3.5" fill="none" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round">
       <path d="M84.56 2.085l.78 11.173M121.915 34.56l-11.173.78M109.962 10.585l-7.348 8.453M113.415 59.962l-8.453-7.348M69.038 21.386l-8.453-7.348" fill="#E1F2FA"/>
       <path d="M20.52 45.54C20.52 32.56 31.32 22 44.592 22c9.03 0 17.163 4.862 21.3 12.56 1.96-1.103 4.192-1.695 6.477-1.695 7.147 0 12.963 5.688 12.963 12.676 0 .227-.005.453-.018.68C95.083 48.655 102 57.25 102 67.27 102 79.252 92.03 89 79.778 89c0 0-57.884-.05-58.095-.14C10.426 87.616 2 78.42 2 67.27c0-10.595 8.002-19.685 18.52-21.427v-.302z" fill="#EAF0F5"/>
       <path d="M96.74 53.202c5.89-3.547 9.626-10.192 9.114-17.52-.728-10.413-9.76-18.264-20.172-17.536-8.75.612-15.692 7.088-17.253 15.32 1.264-.395 2.593-.6 3.94-.6 7.147 0 12.963 5.687 12.963 12.675 0 .227-.005.453-.018.68 4.572 1.14 8.52 3.63 11.425 6.982z" fill="#F7E07E"/>
     </g>
  </svg>

 const partlyCloudyNight =
   <svg width="124" height="91" viewBox="0 0 124 91">
     <g stroke="#263238" strokeWidth="3.5" fill="none" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round">
       <path d="M20.52 45.54C20.52 32.56 31.32 22 44.592 22c9.03 0 17.163 4.862 21.3 12.56 1.96-1.103 4.192-1.695 6.477-1.695 7.147 0 12.963 5.688 12.963 12.676 0 .227-.005.453-.018.68C95.083 48.655 102 57.25 102 67.27 102 79.252 92.03 89 79.778 89c0 0-57.884-.05-58.095-.14C10.426 87.616 2 78.42 2 67.27c0-10.595 8.002-19.685 18.52-21.427v-.302z" fill="#EAF0F5"/>
       <path d="M97.394 53.993c11.384-.267 21.01-7.644 24.606-17.862-.485.022-.972.033-1.462.033-18.06 0-32.7-14.64-32.7-32.7 0-.49.01-.978.03-1.463C77.462 5.664 70 15.583 70 27.244c0 1.97.213 3.89.617 5.738.578-.078 1.164-.117 1.753-.117 7.147 0 12.963 5.688 12.963 12.676 0 .227-.005.453-.018.68 4.924 1.227 9.124 4.02 12.08 7.773z" fill="#A7B1FF"/>
     </g>
  </svg>

export const compass =
  <svg width="104" height="100" viewBox="0 0 104 100">
    <g stroke="#263238" strokeWidth="3.5" fill="none" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round">
      <path d="M68.528 21.024c-16.113-10.812-34.212-3.73-49.344 11.402C4.05 47.558-3.03 65.658 7.78 81.77c-2.203 3.045-1.893 7.37.902 10.165 2.795 2.795 7.12 3.105 10.165.9 16.112 10.812 34.212 3.73 49.344-11.402C83.324 66.3 90.405 48.2 79.594 32.09c2.204-3.046 1.895-7.37-.9-10.166-2.796-2.795-7.12-3.104-10.165-.9z" fill="#F7E07E"/>
      <path d="M24.758 38.71c-6.077 6.077-10.614 12.722-12.713 19.483m-1.278 7.366c-.05 1.572-.186 3.166.74 5.22" fill="#F9F5FC"/>
      <path d="M87.265 10.405c6.27-3.62 14.477-1.15 14.477-1.15S99.78 17.6 93.51 21.22c-6.273 3.62-14.48 1.148-14.48 1.148s1.963-8.343 8.235-11.963z" fill="#8BE48F"/>
      <path d="M77.942 20.87s2.373-3.2 2.2-9.207c-.172-6.01-4.082-9.92-4.082-9.92" fill="#F9F5FC"/>
    </g>
  </svg>

export const clickIcon =
  <svg width="98" height="106" viewBox="0 0 98 106" >
    <g stroke="#263238" strokeWidth="3.5" fill="none" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round">
      <path fill="#FFF" d="M74.812 79.952L96 72.477l-56.947-31.08 16.602 62.37 12.433-18.6 14.884 18.914 6.725-5.215z"/>
      <path d="M32.013 20.67l-4.28-18.54M49.628 32.51l18.513-4.274M1.884 43.533l18.513-4.274M44.103 21.917l10.07-16.113M16.375 66.292L26.443 50.18M21.142 27.218L5.03 17.148"/>
    </g>
  </svg>

export const swipeIcon =
  <svg width="103" height="99" viewBox="0 0 103 99">
    <g stroke="#263238" strokeWidth="3.5" fill="none" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15.833 30l-14-14 14-14"/>
      <path d="M1.833 16h48M79 16h22" fill="#E1F2FA"/>
      <path d="M96.043 83.368c-.347 1.616-.624 4.26-.62 5.922l.02 6.703c0 .556-.436 1.007-1.002 1.007H57.426c-.554 0-1.012-.45-1.022-.997l-.178-9.81-16.57-33.663c-2.912-4.84 1.193-9.385 5.385-9.385 1.855 0 11.465 15.14 12.38 15.14 1.51 0 .846-7.358.846-9.203v-33.26c0-4.083 2.314-6.124 5.446-6.124 3.13 0 5.676 2.04 5.676 6.123l.718 23.826s29.424 4.393 30.81 12.7c.845 5.07-4.873 31.022-4.873 31.022z" fill="#FFDCBA"/>
    </g>
  </svg>

export const zoomIcon =
  <svg width="104" height="104" viewBox="0 0 104 104">
    <g stroke="#263238" strokeWidth="3.5" fill="none" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round">
      <path d="M33.443 39.742l-8.495 8.495-8.496-8.495M16.452 10.614l8.496-8.495 8.495 8.494"/>
      <path d="M24.948 48.237V2.12" fill="#E1F2FA"/>
      <path d="M10.758 33.943l-8.495-8.495 8.495-8.496"/>
      <path d="M2.263 25.448H48.38" fill="#E1F2FA"/>
      <path d="M39.886 33.943l8.495-8.495-8.494-8.496"/>
      <path d="M96.22 91.24c.03 4.74.028 9.7.028 9.7 0 .556-.438 1.006-1.003 1.006H58.23c-.556 0-1.013-.45-1.023-.997l-.178-9.81S45.086 78.955 43.672 65.05c-.925-5.1 6.384-12.384 6.384-12.384l.91-10.543c0-4.082 4.02-6.123 7.062-6.123 3.04 0 7.06 6.123 7.06 6.123s1.723-4.53 7.63-3.625c5.79.906 5.58 6.952 5.58 6.952s2.287-4.503 7.526-3.737c5.566.814 6.372 7.02 6.372 7.02s9.52-1.632 9.52 7.558c.846 5.073 0 24.22-5.5 34.95z" fill="#FFDCBA"/>
    </g>
  </svg>

export const closeIcon =
  <svg width="20" height="20" viewBox="0 0 20 20">
    <path d="M11.45 10l8.553 8.554L18.556 20l-8.553-8.554L1.45 20 .002 18.554 8.556 10 .003 1.446 1.45 0l8.553 8.554L18.556 0l1.447 1.446" fill="#000" fillRule="evenodd"/>
  </svg>

export const conditionIcons = {
  'clear-day': clearDay,
  'clear-night': clearNight,
  sleet,
  snow: sleet,
  rain,
  wind,
  fog,
  cloudy,
  'partly-cloudy-day': cloudy,
  'partly-cloudy-night': partlyCloudyNight
}
