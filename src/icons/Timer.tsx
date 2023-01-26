/* GENERATED FILE */
import { forwardRef, ReactElement } from "react";

import { IconWeight, IconProps } from "../lib";
import IconBase from "../lib/IconBase";

const weightsMap = new Map<IconWeight, ReactElement>();

weightsMap.set(
  "bold",
  <>
    <path d="M128,40A100,100,0,1,0,228,140,100.2,100.2,0,0,0,128,40Zm0,176a76,76,0,1,1,76-76A76.1,76.1,0,0,1,128,216ZM170.4,97.6a11.9,11.9,0,0,1,0,16.9l-33.9,34a12.1,12.1,0,0,1-17,0,12,12,0,0,1,0-17l34-33.9A11.9,11.9,0,0,1,170.4,97.6ZM92,12A12,12,0,0,1,104,0h48a12,12,0,0,1,0,24H104A12,12,0,0,1,92,12Z" />
  </>
);

weightsMap.set(
  "duotone",
  <>
    <g opacity="0.2">
      <circle cx="128" cy="128" r="88" />
    </g>
    <path d="M128,32a96,96,0,1,0,96,96A96.2,96.2,0,0,0,128,32Zm0,176a80,80,0,1,1,80-80A80.1,80.1,0,0,1,128,208Z" />
    <path d="M161.9,82.7l-39.6,39.6a8.1,8.1,0,0,0,0,11.4,8.2,8.2,0,0,0,11.4,0l39.6-39.6a8.1,8.1,0,1,0-11.4-11.4Z" />
    <path d="M104,16h48a8,8,0,0,0,0-16H104a8,8,0,0,0,0,16Z" />
  </>
);

weightsMap.set(
  "fill",
  <>
    <path d="M96,8a8,8,0,0,1,8-8h48a8,8,0,0,1,0,16H104A8,8,0,0,1,96,8ZM224,128a96,96,0,1,1-96-96A96.2,96.2,0,0,1,224,128ZM173.3,82.7a8.1,8.1,0,0,0-11.4,0l-39.6,39.6a8.1,8.1,0,0,0,0,11.4,8.2,8.2,0,0,0,11.4,0l39.6-39.6A8.1,8.1,0,0,0,173.3,82.7Z" />
  </>
);

weightsMap.set(
  "light",
  <>
    <path d="M128,34a94,94,0,1,0,94,94A94.1,94.1,0,0,0,128,34Zm0,176a82,82,0,1,1,82-82A82.1,82.1,0,0,1,128,210ZM171.8,84.2a5.8,5.8,0,0,1,0,8.4l-39.6,39.6a5.9,5.9,0,0,1-8.4-8.4l39.6-39.6A5.8,5.8,0,0,1,171.8,84.2ZM98,8a6,6,0,0,1,6-6h48a6,6,0,0,1,0,12H104A6,6,0,0,1,98,8Z" />
  </>
);

weightsMap.set(
  "regular",
  <>
    <path d="M128,32a96,96,0,1,0,96,96A96.2,96.2,0,0,0,128,32Zm0,176a80,80,0,1,1,80-80A80.1,80.1,0,0,1,128,208ZM173.3,82.7a8.1,8.1,0,0,1,0,11.4l-39.6,39.6a8.2,8.2,0,0,1-11.4,0,8.1,8.1,0,0,1,0-11.4l39.6-39.6A8.1,8.1,0,0,1,173.3,82.7ZM96,8a8,8,0,0,1,8-8h48a8,8,0,0,1,0,16H104A8,8,0,0,1,96,8Z" />
  </>
);

weightsMap.set(
  "thin",
  <>
    <path d="M128,36a92,92,0,1,0,92,92A92.1,92.1,0,0,0,128,36Zm0,176a84,84,0,1,1,84-84A84.1,84.1,0,0,1,128,212ZM170.4,85.6a3.9,3.9,0,0,1,0,5.6l-39.6,39.6a3.9,3.9,0,0,1-5.6,0,3.9,3.9,0,0,1,0-5.6l39.6-39.6A3.9,3.9,0,0,1,170.4,85.6ZM100,8a4,4,0,0,1,4-4h48a4,4,0,0,1,0,8H104A4,4,0,0,1,100,8Z" />
  </>
);

const Timer = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} weightsMap={weightsMap} />
));

Timer.displayName = "Timer";

export default Timer;
