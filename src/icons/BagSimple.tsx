/* GENERATED FILE */
import { forwardRef, ReactElement } from "react";

import { IconWeight, IconProps } from "../lib";
import IconBase from "../lib/IconBase";

const weightsMap = new Map<IconWeight, ReactElement>();

weightsMap.set(
  "bold",
  <>
    <path d="M216,60H178.6A52,52,0,0,0,77.4,60H40A20.1,20.1,0,0,0,20,80V208a20.1,20.1,0,0,0,20,20H216a20.1,20.1,0,0,0,20-20V80A20.1,20.1,0,0,0,216,60ZM128,44a28,28,0,0,1,25.3,16H102.7A28,28,0,0,1,128,44Zm84,160H44V84H212Z" />
  </>
);

weightsMap.set(
  "duotone",
  <>
    <g opacity="0.2">
      <rect x="32" y="72" width="192" height="144" rx="8" />
    </g>
    <path d="M216,64H175.3a48,48,0,0,0-94.6,0H40A16,16,0,0,0,24,80V208a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V80A16,16,0,0,0,216,64ZM128,40a32.1,32.1,0,0,1,31,24H97A32.1,32.1,0,0,1,128,40Zm88,168H40V80H216Z" />
  </>
);

weightsMap.set(
  "fill",
  <>
    <path d="M216,64H175.3a48,48,0,0,0-94.6,0H40A16,16,0,0,0,24,80V208a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V80A16,16,0,0,0,216,64ZM128,40a32.1,32.1,0,0,1,31,24H97A32.1,32.1,0,0,1,128,40Z" />
  </>
);

weightsMap.set(
  "light",
  <>
    <path d="M216,66H173.6a46,46,0,0,0-91.2,0H40A14,14,0,0,0,26,80V208a14,14,0,0,0,14,14H216a14,14,0,0,0,14-14V80A14,14,0,0,0,216,66ZM128,38a34.1,34.1,0,0,1,33.5,28h-67A34.1,34.1,0,0,1,128,38Zm90,170a2,2,0,0,1-2,2H40a2,2,0,0,1-2-2V80a2,2,0,0,1,2-2H216a2,2,0,0,1,2,2Z" />
  </>
);

weightsMap.set(
  "regular",
  <>
    <path d="M216,64H175.3a48,48,0,0,0-94.6,0H40A16,16,0,0,0,24,80V208a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V80A16,16,0,0,0,216,64ZM128,40a32.1,32.1,0,0,1,31,24H97A32.1,32.1,0,0,1,128,40Zm88,168H40V80H216Z" />
  </>
);

weightsMap.set(
  "thin",
  <>
    <path d="M216,68H171.8a44,44,0,0,0-87.6,0H40A12,12,0,0,0,28,80V208a12,12,0,0,0,12,12H216a12,12,0,0,0,12-12V80A12,12,0,0,0,216,68ZM128,36a36.1,36.1,0,0,1,35.8,32H92.2A36.1,36.1,0,0,1,128,36Zm92,172a4,4,0,0,1-4,4H40a4,4,0,0,1-4-4V80a4,4,0,0,1,4-4H216a4,4,0,0,1,4,4Z" />
  </>
);

const BagSimple = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} weightsMap={weightsMap} />
));

BagSimple.displayName = "BagSimple";

export default BagSimple;
