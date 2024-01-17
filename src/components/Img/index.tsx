import type { FC } from "react";

import { StyledImg } from "./styled";
import type { TImgProps } from "./types";

const Img: FC<TImgProps> = (props) => {
  return <StyledImg src={props.src} alt={props.alt} />;
};

export { Img };
