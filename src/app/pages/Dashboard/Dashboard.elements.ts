// Import: Packages
import styled from "styled-components";
import { deviceMaxWidth } from "../../../utils/responsiveBreakpoints";

export const DashboardContainer = styled.div`
  display: flex;
  padding: 2rem;
  flex-direction: column;
  width: 70%;
  margin: auto;

  @media ${deviceMaxWidth.laptop} {
    width: 100%;
  }
`;
