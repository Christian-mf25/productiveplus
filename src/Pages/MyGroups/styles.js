import styled from "styled-components";

export const Container = styled.div`
  .card {
    margin-bottom: 10px;
    width: 380px;
    height: 152px;
    
  }

  .ul-li {
    ul {
      margin: 0;
      padding: 0;
    }
    li.list_groups {
      list-style-type: none;
      padding: 0;
      margin: 0;
      margin: 20px auto;
      margin-bottom: 0;
    }
  }
`;

export const DivColorApp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  height: 100%;
  min-height: 100vh;
  width: 90%;
  margin: 0 auto;
`;

export const HeadSearchAndCreateGroup = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: space-between;
  padding: 20px 0;
  height: 100px;

  .css-4mzek5-MuiFormControl-root-MuiTextField-root {
    width: 100%;
  }

  button {
    width: 100%;
  }

  @media screen and (min-width: 768px) {
    width: 400px;
  }
`;
