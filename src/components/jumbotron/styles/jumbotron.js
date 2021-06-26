import styled from "styled-components/macro";

export const Inner = styled.div`
    display: flex;
    align-items: center;
    flex-direction: ${({ direction }) => direction}
    justify-content: space-between;
    max-width: 1100px;
    margin: auto;

    @media (max-width: 1000px){ 
        flex-direction: column;
    }

`;

export const Pane = styled.div`
  width: 50%;
`;

export const Title = styled.h1`
  width: 50%;
`;

export const SubTitle = styled.h2`
  width: 50%;
`;

export const Image = styled.image`
  width: 50%;
`;

export const Container = styled.div``;
