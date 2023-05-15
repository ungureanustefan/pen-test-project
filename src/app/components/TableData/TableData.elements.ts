// Import: Packages
import styled from "styled-components";

// Import: Utils
import { deviceMaxWidth } from "../../../utils/responsiveBreakpoints";
import { defineSeverityColor } from "../../../utils/defineSeverityColor";

export const TableContainer = styled.div`
  display: flex;
  align-self: center;
  background-color: rgb(68, 68, 68);
  flex-direction: column;
  border-radius: 0.5rem;
  width: 100%;
  height: calc(100vh - 8rem);
  padding: 0.5rem 0 0.5rem 0.5rem;
  margin-top: 1rem;
`;

export const Table = styled.table`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  border-radius: 1.25rem 1.25rem 0 0;
  table-layout: fixed;
  border-collapse: collapse;
  background-color: rgb(68, 68, 68);
  @media ${deviceMaxWidth.laptop} {
    margin: auto;
  }
`;

export const TableBody = styled.tbody`
  display: block;
  width: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  ::-webkit-scrollbar {
    width: 0.5rem;
  }
  ::-webkit-scrollbar-track {
    background: rgb(68, 68, 68);
  }
  ::-webkit-scrollbar-thumb {
    background: #888888;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #555555;
  }
`;

export const TableHead = styled.thead`
  background-color: rgb(68, 68, 68);
  font-size: 0.9rem;
`;

export const TableHeadTR = styled.tr`
  display: flex;
  align-items: center;
  height: 2.5rem;
`;

export const TH = styled.th`
  padding: 0.375rem 0.25rem;
  color: #ffffff;
  font-weight: 700;
  :nth-child(1) {
    width: 20%;
    @media ${deviceMaxWidth.tabletM} {
      width: 40%;
    }
  }
  :nth-child(2) {
    width: 45%;
    text-align: left;
    @media ${deviceMaxWidth.tabletM} {
      display: none;
    }
  }
  :nth-child(3) {
    width: 20%;
    @media ${deviceMaxWidth.tabletM} {
      width: 30%;
    }
  }
  :nth-child(4) {
    width: 15%;
  }
`;

export const TR = styled.tr`
  display: flex;
  align-items: center;
  background-color: #333333;
  :nth-child(even) {
    background-color: rgb(68, 68, 68);
  }
`;

interface TDProps {
  severity?: string;
}
export const TD = styled.td<TDProps>`
  padding: 0.375rem 0.25rem;
  text-align: center;
  color: ${({ severity }) => {
    return defineSeverityColor(severity || "");
  }};
  :nth-child(1) {
    width: 20%;
    @media ${deviceMaxWidth.tabletM} {
      width: 40%;
    }
  }
  :nth-child(2) {
    width: 45%;
    text-align: left;
    @media ${deviceMaxWidth.tabletM} {
      display: none;
    }
  }
  :nth-child(3) {
    width: 20%;
    @media ${deviceMaxWidth.tabletM} {
      width: 30%;
    }
  }
  :nth-child(4) {
    width: 15%;
    @media ${deviceMaxWidth.tabletM} {
      width: 20%;
    }
  }
`;
