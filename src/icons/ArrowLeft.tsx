/* GENERATED FILE */
import { forwardRef, ReactElement } from "react";

import { IconWeight, IconProps } from "../lib";
import IconBase from "../lib/IconBase";

const weightsMap = new Map<IconWeight, ReactElement>();

weightsMap.set(
  "bold",
  <>
    <path d="M228,128a12,12,0,0,1-12,12H69l51.5,51.5a12,12,0,0,1,0,17,12.1,12.1,0,0,1-17,0l-72-72a12,12,0,0,1,0-17l72-72a12,12,0,0,1,17,17L69,116H216A12,12,0,0,1,228,128Z" />
  </>
);

weightsMap.set(
  "duotone",
  <>
    <path d="M224,128a8,8,0,0,1-8,8H59.3l58.4,58.3a8.1,8.1,0,0,1,0,11.4,8.2,8.2,0,0,1-11.4,0l-72-72a8.1,8.1,0,0,1,0-11.4l72-72a8.1,8.1,0,0,1,11.4,11.4L59.3,120H216A8,8,0,0,1,224,128Z" />
  </>
);

weightsMap.set(
  "fill",
  <>
    <path d="M224,128a8,8,0,0,1-8,8H120v64a8,8,0,0,1-4.9,7.4,8.5,8.5,0,0,1-3.1.6,8.3,8.3,0,0,1-5.7-2.3l-72-72a8.1,8.1,0,0,1,0-11.4l72-72a8.4,8.4,0,0,1,8.8-1.7A8,8,0,0,1,120,56v64h96A8,8,0,0,1,224,128Z" />
  </>
);

weightsMap.set(
  "light",
  <>
    <path d="M222,128a6,6,0,0,1-6,6H54.5l61.7,61.8a5.9,5.9,0,1,1-8.4,8.4l-72-72a5.8,5.8,0,0,1,0-8.4l72-72a5.9,5.9,0,0,1,8.4,8.4L54.5,122H216A6,6,0,0,1,222,128Z" />
  </>
);

weightsMap.set(
  "regular",
  <>
    <path d="M224,128a8,8,0,0,1-8,8H59.3l58.4,58.3a8.1,8.1,0,0,1,0,11.4,8.2,8.2,0,0,1-11.4,0l-72-72a8.1,8.1,0,0,1,0-11.4l72-72a8.1,8.1,0,0,1,11.4,11.4L59.3,120H216A8,8,0,0,1,224,128Z" />
  </>
);

weightsMap.set(
  "thin",
  <>
    <path d="M220,128a4,4,0,0,1-4,4H49.7l65.1,65.2a3.9,3.9,0,0,1,0,5.6,3.9,3.9,0,0,1-5.6,0l-72-72a3.9,3.9,0,0,1,0-5.6l72-72a4,4,0,0,1,5.6,5.6L49.7,124H216A4,4,0,0,1,220,128Z" />
  </>
);

const ArrowLeft = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} weightsMap={weightsMap} />
));

ArrowLeft.displayName = "ArrowLeft";

export default ArrowLeft;
