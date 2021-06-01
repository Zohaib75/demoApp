import styled from "styled-components";
import { Link } from "react-router-dom";

export const Card = styled.div`
  overflow: hidden;
  padding: 100px;
  margin: 100px auto 0;
  width: 400px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.05), 0 0px 40px rgba(0, 0, 0, 0.08);
  border-radius: 15px;
  text-align: center;
`;

export const CardLink = styled(Link)`
  margin-top: 10px;
  display: inline-block;
  font-size: 12px;
  text-decoration: none;
  color: #aaa;
  border-bottom: 1px solid #ddd;
  cursor: pointer;
  transition: color 0.25s ease-in;

  &:hover {
    color: #777;
  }
`;