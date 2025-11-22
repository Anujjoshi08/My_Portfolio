import styled from "styled-components";

export const Container = styled.section`
  margin-top: 12rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;

  .hard-skills{
    margin-top: 1.6rem;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(6.4rem, 1fr));
    gap: 1.6rem 1.8rem;
    justify-items: center;
    align-items: center;
  }
  .hability{
    display: flex;
    flex-direction: column;
    align-items: center;

    position: relative;

    img{
      width: 3.4rem;
    }

    .tooltip{
      position: absolute;
      left: 50%;
      transform: translateX(-50%) translateY(6px);
      bottom: -2.6rem;
      background: rgba(0,0,0,0.8);
      color: #fff;
      padding: 0.4rem 0.6rem;
      border-radius: 0.4rem;
      font-size: 1.2rem;
      white-space: nowrap;
      opacity: 0;
      visibility: hidden;
      transition: opacity 150ms ease, transform 150ms ease, visibility 150ms;
      pointer-events: none;
      z-index: 10;
    }

    &:hover .tooltip{
      opacity: 1;
      visibility: visible;
      transform: translateX(-50%) translateY(0);
    }
  }

  h2{
    display: inline-block;
    margin-bottom: 2rem;
    // border-bottom: 0.2rem solid var(--blue);
    font-size :3rem;
    margin-top: 0rem;
    color: var(--green);
  }

  h3{
    margin-top: 2rem;
    color: var(--green);
  }

  p{
    font-size: 1.8rem;
    letter-spacing: 0.1rem;
    font-weight: 500;
  }
  
  

  .about-image{
    text-align: center;
   img{
     margin-top: 2rem;
     width: 75%;
     filter: grayscale(0);
     transition: filter 0.5s;
     &:hover{
       filter: grayscale(0);
     }
   }
  }

  @media only screen and (max-width: 480px) {
    .about-image {
      max-width: 100%;
      margin-top: 4rem;
      img{
        margin-top: 2rem;
        width: 100%;
        filter: grayscale(0);
        transition: filter 0.5s;
        &:hover{
          filter: grayscale(0);
        }
    }
  }

  @media (max-width: 960px){
    display: block;
    text-align: center;
    
    .hard-skills{
      justify-content: center;
    }
    .about-image{
      display: flex;
      max-width: 100%;
      img{
        margin-top: 2rem;
        width: 100%;
        filter: grayscale(0);
        transition: filter 0.5s;
        &:hover{
          filter: grayscale(0);
        }
    }
    
    
  }

`