/* GENERATED FILE */
import { forwardRef, ReactElement } from "react";

import { IconWeight, IconProps } from "../lib";
import IconBase from "../lib/IconBase";

const weightsMap = new Map<IconWeight, ReactElement>();

weightsMap.set(
  "bold",
  <>
    <path d="M224,108H200a12,12,0,0,0,0,24h11.1A84,84,0,0,1,140,203.1V97.9a36,36,0,1,0-24,0V203.1A84,84,0,0,1,44.9,132H56a12,12,0,0,0,0-24H32a12,12,0,0,0-12,12,108,108,0,0,0,216,0A12,12,0,0,0,224,108ZM128,52a12,12,0,1,1-12,12A12,12,0,0,1,128,52Z" />
  </>
);

weightsMap.set(
  "duotone",
  <>
    <path d="M224,112H200a8,8,0,0,0,0,16h15.6A88,88,0,0,1,136,207.6V95a32,32,0,1,0-16,0V207.6A88,88,0,0,1,40.4,128H56a8,8,0,0,0,0-16H32a8,8,0,0,0-8,8,104,104,0,0,0,208,0A8,8,0,0,0,224,112ZM112,64a16,16,0,1,1,16,16A16,16,0,0,1,112,64Z" />
  </>
);

weightsMap.set(
  "fill",
  <>
    <path d="M224,112H200a8,8,0,0,0,0,16h15.6A88,88,0,0,1,136,207.6V95a32,32,0,1,0-16,0V207.6A88,88,0,0,1,40.4,128H56a8,8,0,0,0,0-16H32a8,8,0,0,0-8,8,104,104,0,0,0,208,0A8,8,0,0,0,224,112ZM112,64a16,16,0,1,1,16,16A16,16,0,0,1,112,64Z" />
  </>
);

weightsMap.set(
  "light",
  <>
    <path d="M224,114H200a6,6,0,0,0,0,12h17.8A90.1,90.1,0,0,1,134,209.8V93.4a30,30,0,1,0-12,0V209.8A90.1,90.1,0,0,1,38.2,126H56a6,6,0,0,0,0-12H32a6,6,0,0,0-6,6,102,102,0,0,0,204,0A6,6,0,0,0,224,114ZM110,64a18,18,0,1,1,18,18A18.1,18.1,0,0,1,110,64Z" />
  </>
);

weightsMap.set(
  "regular",
  <>
    <path d="M224,112H200a8,8,0,0,0,0,16h15.6A88,88,0,0,1,136,207.6V95a32,32,0,1,0-16,0V207.6A88,88,0,0,1,40.4,128H56a8,8,0,0,0,0-16H32a8,8,0,0,0-8,8,104,104,0,0,0,208,0A8,8,0,0,0,224,112ZM112,64a16,16,0,1,1,16,16A16,16,0,0,1,112,64Z" />
  </>
);

weightsMap.set(
  "thin",
  <>
    <path d="M224,116H200a4,4,0,0,0,0,8h19.9A92,92,0,0,1,132,211.9V91.7a28,28,0,1,0-8,0V211.9A92,92,0,0,1,36.1,124H56a4,4,0,0,0,0-8H32a4,4,0,0,0-4,4,100,100,0,0,0,200,0A4,4,0,0,0,224,116ZM108,64a20,20,0,1,1,20,20A20.1,20.1,0,0,1,108,64Z" />
  </>
);

const AnchorSimple = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} weightsMap={weightsMap} />
));

AnchorSimple.displayName = "AnchorSimple";

export default AnchorSimple;
