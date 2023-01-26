/* GENERATED FILE */
import { forwardRef, ReactElement } from "react";

import { IconWeight, IconProps } from "../lib";
import IconBase from "../lib/IconBase";

const weightsMap = new Map<IconWeight, ReactElement>();

weightsMap.set(
  "bold",
  <>
    <path d="M128,172a52,52,0,0,0,52-52V64A52,52,0,0,0,76,64v56A52,52,0,0,0,128,172ZM100,64a28,28,0,0,1,56,0v56a28,28,0,0,1-56,0Zm40,147.2V232a12,12,0,0,1-24,0V211.2A92.1,92.1,0,0,1,36,120a12,12,0,0,1,24,0,68,68,0,0,0,136,0,12,12,0,0,1,24,0A92.1,92.1,0,0,1,140,211.2Z" />
  </>
);

weightsMap.set(
  "duotone",
  <>
    <g opacity="0.2">
      <rect x="88" y="24" width="80" height="144" rx="40" />
    </g>
    <path d="M128,176a48,48,0,0,0,48-48V64a48,48,0,0,0-96,0v64A48,48,0,0,0,128,176ZM96,64a32,32,0,0,1,64,0v64a32,32,0,0,1-64,0Z" />
    <path d="M200.4,128a8.1,8.1,0,0,0-8.8,7.1,64,64,0,0,1-127.2,0,8,8,0,1,0-15.9,1.8A79.9,79.9,0,0,0,120,207.6V232a8,8,0,0,0,16,0V207.6a79.9,79.9,0,0,0,71.5-70.7A8.1,8.1,0,0,0,200.4,128Z" />
  </>
);

weightsMap.set(
  "fill",
  <>
    <path d="M80,128V64a48,48,0,0,1,96,0v64a48,48,0,0,1-96,0Zm120.4.1a8,8,0,0,0-8.8,7,64,64,0,0,1-127.2,0,8,8,0,0,0-8.8-7,7.9,7.9,0,0,0-7.1,8.8A79.7,79.7,0,0,0,120,207.3V232a8,8,0,0,0,16,0V207.3a79.7,79.7,0,0,0,71.5-70.4A7.9,7.9,0,0,0,200.4,128.1Z" />
  </>
);

weightsMap.set(
  "light",
  <>
    <path d="M128,174a46,46,0,0,0,46-46V64a46,46,0,0,0-92,0v64A46,46,0,0,0,128,174ZM94,64a34,34,0,0,1,68,0v64a34,34,0,0,1-68,0Zm111.5,72.7A77.9,77.9,0,0,1,134,205.8V232a6,6,0,0,1-12,0V205.8a77.9,77.9,0,0,1-71.5-69.1,6,6,0,1,1,11.9-1.4,66,66,0,0,0,131.2,0,6,6,0,1,1,11.9,1.4Z" />
  </>
);

weightsMap.set(
  "regular",
  <>
    <path d="M128,176a48,48,0,0,0,48-48V64a48,48,0,0,0-96,0v64A48,48,0,0,0,128,176ZM96,64a32,32,0,0,1,64,0v64a32,32,0,0,1-64,0Zm111.5,72.9A79.9,79.9,0,0,1,136,207.6V232a8,8,0,0,1-16,0V207.6a79.9,79.9,0,0,1-71.5-70.7,8,8,0,1,1,15.9-1.8,64,64,0,0,0,127.2,0,8,8,0,1,1,15.9,1.8Z" />
  </>
);

weightsMap.set(
  "thin",
  <>
    <path d="M128,172a44,44,0,0,0,44-44V64a44,44,0,0,0-88,0v64A44,44,0,0,0,128,172ZM92,64a36,36,0,0,1,72,0v64a36,36,0,0,1-72,0Zm111.5,72.4A75.8,75.8,0,0,1,132,203.9V232a4,4,0,0,1-8,0V203.9a75.8,75.8,0,0,1-71.5-67.5A3.9,3.9,0,0,1,56,132a4,4,0,0,1,4.4,3.6,68,68,0,0,0,135.2,0A4,4,0,0,1,200,132,3.9,3.9,0,0,1,203.5,136.4Z" />
  </>
);

const Microphone = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} weightsMap={weightsMap} />
));

Microphone.displayName = "Microphone";

export default Microphone;
