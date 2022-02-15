import styled from 'styled-components';
import hero from '../img/hero.jpg';

export const HeaderStyled = styled.header`
    min-height: 95vh;
    background: linear-gradient(to top, rgba(0,0,0, 0.2), rgba(0,0,0, 0.5)), url(${hero}) no-repeat;
    background-size: cover;
    .navigation {
        background: ${({ scrollNav}) => scrollNav ? '#eee' : '#27AE69'};
        position: fixed;
        top: 0;
        right: 0;
        left: 0;
        z-index: 10;
        width: 100%;

        .nav-wrapper{
            margin: 0 10rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
            height: 80px;
            
            @media screen and (max-width: 1187px) {
                margin: 0 10rem;
            }
            @media screen and (max-width: 1187px) {
                margin: 0 5rem;
            }
        }
        .logo{
            img{
                width: 50px;
            }
        }
        ul{
            display: flex;
            align-items: center;
            li{
                margin: 0 1rem;
            }
        }
        .cta-btn{
            display: inline-block;
            background-color: var(--color-primary);
            padding: 1rem 1.7rem;
            border-radius: 7px;
            text-align: center;
            box-shadow: 6px 6px 15px 5px rgba(0,0,0, 0.2);
        }
    }

    .header-content{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
        width: 60%;
        @media screen and (max-width: 1187px) {
            width: 80%;
        }
        h1{
            font-size: 3rem;
            span{
                font-size: 4rem;
                color: var(--color-primary);
            }
            @media screen and (max-width: 780px) {
                font-size: 2rem;
                span{
                    font-size: 3rem;
                }
            }
        }

        .main-para{
            padding: 2rem;
            color: var(--color-white);
        }

        .input-control{
            display: flex;
            justify-content: center;
            flex-direction: row;
            width: 100%;
            input, select{
                background-color: var(--color-white);
                padding: 1.4rem;
                outline: none;
                border: none;
                margin-right: 10px;
                border-radius: 7px;
                font-size: inherit;
                width: 40%;
                color: #a1a1a1;
                font-weight: 500;
                cursor: pointer;
            }
            input[type='text']::placeholder{
                color: #a1a1a1;
            }

            
        }

        .search-btn{
            background-color: var(--color-primary);
            outline: none;
            border: none;
            padding: .5rem 2rem ;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 7px;
            cursor: pointer;
        }
    }


    @media screen and (max-width: 1018px) {
        .nav-items{
            display: none !important;
        }
    }
    @media screen and (min-width: 1025px) {
        .nav-items{
            display: flex !important;
        }
    }
    @media screen and (max-width: 768px) {
        .input-control{
            flex-direction: column !important;
            width: 100%;
            gap: 1rem;

            input, select {
                width: 100% !important;
            }
        }
    }
`;