import styled from "styled-components";

/*About page*/
export const MainContent = styled.div`
  grid-column: 1/ -1;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
  margin: 1rem;
  gap: 2rem;
  justify-content: center;
  align-items: center;
`;

export const AboutLeft = styled.div`
  column-count: 2;
  & h1 {
  font-family: "Fruktur";
}
`;
export const AboutRight = styled.div`
  display: flex;
  flex-direction: column;
  & span {
  font-family: "Fruktur";
  background: "none";
  }
  & h1 {
  font-family: "Birthstone Bounce";
  align-self: "flex-end";
  margin-right: 3rem;
  }
`;

export const ImgButterfly = styled.img`
  width: 100%;
  height: 100%;
  border-bottom-left-radius: 50%;
  border-top-left-radius: 50%;
  border-top-right-radius: 50%;
  border: 1rem solid #dd5350;
`;

export const ImgArtist = styled.img`
  width: 100%;
  height: 100%;
  border-bottom-left-radius: 50%;
  border-top-right-radius: 50%;
  border-bottom-right-radius: 50%;
  border: 1rem solid #dd5350;
`;

export const AboutParas = styled.p`
  text-align: justify;
  text-justify: auto;
  padding: 1rem;
  font-family: Roboto-Regular;
  font-size: large;
  color: white;
  background-color: #dd5350;
  border-radius: 1rem;
`;

 export const BtnContact = styled.button`
  color: white;
  background-color: #dd5350;
  padding: 1rem 3rem 1rem 3rem;
  border-radius: 0.2rem;
  align-self: flex-start;
  margin-top: 1rem;
  margin-bottom: 1rem;
  font-size: 1.03rem;

  &:visited {
  color: white;
  }

  &:hover {
  background-color: #7c8453;
  } 
`; 


