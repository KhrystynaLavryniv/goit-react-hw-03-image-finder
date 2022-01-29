import styled from "styled-components";

export const ImageGalleryList = styled.ul`
list-style: none;
  padding: 0;
    margin: 0 auto;
margin-top: 20px;
display: grid;
  max-width: calc(100vw - 120px);
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  grid-gap: 16px;
 
 
`
export const Button = styled.button`
display: block;
  margin: 30px auto;
  font-size: 18px;
  font-weight: 400px;
  padding: 8px 15px;
  border-radius: 5px;
  cursor: pointer;
  border: 1px solid rgba(33, 33, 33, 0.2);
 
 &:hover{
        background-color: #3399ff; 
color:
 }
`
