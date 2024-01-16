import type { FC } from "react";

import { StyledImg } from "./styled";
import { TImgProps } from "../../types/types";

const Img: FC<TImgProps> = (props) => {
  return <StyledImg src={props.src} alt={props.status}></StyledImg>;
};

export { Img };
