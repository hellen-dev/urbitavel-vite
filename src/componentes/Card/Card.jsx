import styled from "@emotion/styled";

const DivEstilizada = styled.div`
  padding: 32px;
  background: #e5f8de;
  border: 1px solid;
  border-color: #2C4928;
  border-radius: 16px;
`;

export const Card = ({ children }) => {
  return <DivEstilizada>{children}</DivEstilizada>;
};
