import React from "react";

export default function Previous() {
  return (
    <svg
      height={26}
      width={26}
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 512 512"
      xmlSpace="preserve"
    >
      <defs>
        <linearGradient id="grad1" x1="100%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" style={{ stopColor: "#a5f3fc", stopOpacity: 1 }} />
          <stop
            offset="100%"
            style={{ stopColor: "#0ea5e9", stopOpacity: 1 }}
          />
        </linearGradient>
      </defs>
      <g>
        <g>
          <g>
            <path
              d="M256,0C114.618,0,0,114.618,0,256s114.618,256,256,256s256-114.618,256-256S397.382,0,256,0z M256,469.333
				c-117.818,0-213.333-95.515-213.333-213.333S138.182,42.667,256,42.667S469.333,138.182,469.333,256S373.818,469.333,256,469.333
				z"
              fill="url(#grad1)"
            />
            <path
              d="M313.752,134.248c-8.331-8.331-21.839-8.331-30.17,0L176.915,240.915c-8.331,8.331-8.331,21.839,0,30.17l106.667,106.667
				c8.331,8.331,21.839,8.331,30.17,0c8.331-8.331,8.331-21.839,0-30.17L222.17,256l91.582-91.582
				C322.083,156.087,322.083,142.58,313.752,134.248z"
              fill="url(#grad1)"
            />
          </g>
        </g>
      </g>
    </svg>
  );
}
