import styled from "styled-components/macro";

export const AddButton = styled.button`
  background-color: white;
  border: 4px solid #b7cf9e;
  border-radius: 50%;
  margin: 0px 10px;
  width: 40px;
  height: 40px;
  font-size: 25px;
  color: #b7cf9e;
  text-align: center;
  text-align: -webkit-center;
  display: flex;
  justify-content: center;
  padding: 0px;
`;
export const CheckAllButton = styled.button`
  background-color: white;
  border-radius: 35px;
  border: 1px solid #b7cf9e;
  color: black;
  font-size: 20px;
  height: 40px;
  width: 45%;
  font-weight: 100;
  margin: 10px auto;
  &:hover {
    box-shadow: 2px 2px #b7cf9e;
  }
`;
export const DeleteButton = styled.button`
  border-radius: 20px;
  border: 1px solid #ee7d69;
  height: 35px;
  width: 70px;
  background-color: white;
  text-align: center;
  justify-content: flex-end;
  color: black;

  &:hover {
    box-shadow: 2px 2px #ee7d69;
  }
`;
