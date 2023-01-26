/* GENERATED FILE */
import { forwardRef, ReactElement } from "react";

import { IconWeight, IconProps } from "../lib";
import IconBase from "../lib/IconBase";

const weightsMap = new Map<IconWeight, ReactElement>();

weightsMap.set(
  "bold",
  <>
    <path d="M200,164a36,36,0,0,0-33.9,24H72a28,28,0,0,1,0-56h96a44,44,0,0,0,0-88H72a12,12,0,0,0,0,24h96a20,20,0,0,1,0,40H72a52,52,0,0,0,0,104h94.1A36,36,0,1,0,200,164Zm0,48a12,12,0,1,1,12-12A12,12,0,0,1,200,212Z" />
  </>
);

weightsMap.set(
  "duotone",
  <>
    <g opacity="0.2">
      <circle cx="200" cy="200" r="24" />
    </g>
    <path d="M200,168a32.1,32.1,0,0,0-31,24H72a32,32,0,0,1,0-64h96a40,40,0,0,0,0-80H72a8,8,0,0,0,0,16h96a24,24,0,0,1,0,48H72a48,48,0,0,0,0,96h97a32,32,0,1,0,31-40Zm0,48a16,16,0,1,1,16-16A16,16,0,0,1,200,216Z" />
  </>
);

weightsMap.set(
  "fill",
  <>
    <path d="M232,200a32,32,0,0,1-63,8H72a48,48,0,0,1,0-96h96a24,24,0,0,0,0-48H72a8,8,0,0,1,0-16h96a40,40,0,0,1,0,80H72a32,32,0,0,0,0,64h97a32,32,0,0,1,63,8Z" />
  </>
);

weightsMap.set(
  "light",
  <>
    <path d="M200,170a30,30,0,0,0-29.4,24H72a34,34,0,0,1,0-68h96a38,38,0,0,0,0-76H72a6,6,0,0,0,0,12h96a26,26,0,0,1,0,52H72a46,46,0,0,0,0,92h98.6A30,30,0,1,0,200,170Zm0,48a18,18,0,1,1,18-18A18.1,18.1,0,0,1,200,218Z" />
  </>
);

weightsMap.set(
  "regular",
  <>
    <path d="M200,168a32.1,32.1,0,0,0-31,24H72a32,32,0,0,1,0-64h96a40,40,0,0,0,0-80H72a8,8,0,0,0,0,16h96a24,24,0,0,1,0,48H72a48,48,0,0,0,0,96h97a32,32,0,1,0,31-40Zm0,48a16,16,0,1,1,16-16A16,16,0,0,1,200,216Z" />
  </>
);

weightsMap.set(
  "thin",
  <>
    <path d="M200,172a27.9,27.9,0,0,0-27.7,24H72a36,36,0,0,1,0-72h96a36,36,0,0,0,0-72H72a4,4,0,0,0,0,8h96a28,28,0,0,1,0,56H72a44,44,0,0,0,0,88H172.3A28,28,0,1,0,200,172Zm0,48a20,20,0,1,1,20-20A20.1,20.1,0,0,1,200,220Z" />
  </>
);

const Path = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} weightsMap={weightsMap} />
));

Path.displayName = "Path";

export default Path;
