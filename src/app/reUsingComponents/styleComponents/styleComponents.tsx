import styled from 'styled-components';

export const Peye = styled.p`
    width: 30px;
    height: 30px;
    display: flex;
    right: 10px;
    top: ${(props: { top: string }) => props.top};
    font-size: 20px;
    color: #aeaeae;
    align-items: center;
    justify-content: center;
    position: absolute;
    background-color: transparent;
    cursor: pointer;
`;
export const Htitle = styled.h3`
    margin-bottom: 20px;
    color: #fff;
    position: relative;
`;

const Div = styled.div`
    width: 100px;
    height: 35px;
    margin: 28px auto 8px;
    padding: 3px;
    border-radius: 5px;
    border-radius: 5px;
    overflow: hidden;
    color: #ddd8d8;
    position: relative;
    @media (min-width: 400px) {
        /* padding: 5px 23px; */
    }
    &::before {
        width: 53px;
        height: 84px;
        display: block;
        content: '';
        position: absolute;
        right: 50%;
        bottom: 50%;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-image: ${(props: { bg?: string }) =>
            props.bg || 'linear-gradient(270deg, transparent, #fcfcfc4d, #fdfcfc)'};
        transform-origin: top left;
        animation: rotate 3s linear infinite;
        border-top-right-radius: 100%;
    }
    &::after {
        width: 53px;
        height: 84px;
        display: block;
        content: '';
        position: absolute;
        right: 50%;
        bottom: 50%;
        transform: translate(-50%, -50%);
        background-image: linear-gradient(90deg, transparent, #fcfcfc4d, #fdfcfc);
        transform-origin: bottom right;
        animation: rotate 3s linear infinite;
        border-bottom-left-radius: 100%;
    }
    @keyframes rotate {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
`;
// transparent, #ff37374d, #ff3737;
const Button = styled.button`
    width: 96%;
    height: 96%;
    background: #202124;
    position: absolute;
    top: 50%;
    bottom: 50%;
    right: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 5;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    color: var(--color-text-light);
`;
export const ButtonSubmit: React.FC<{ title: string; bg?: string }> = ({ title, bg }) => {
    return (
        <>
            <Div bg={bg}>
                <Button>{title}</Button>
            </Div>
        </>
    );
};
interface PropsDivContainer {
    width?: string;
    height?: string;
    wrap?: string;
    content?: string;
    bg?: string;
    css?: string;
    padding?: string;
    margin?: string;
    display?: string;
    align?: string;
    radius?: string;
}
export const DivContainer = styled.div<PropsDivContainer>`
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    background-color: ${(props) => props.bg || 'transparent'};
    display: ${(props) => props.display};
    flex-wrap: ${(props) => props.wrap};
    align-items: ${(props) => props.align};
    justify-content: ${(props) => props.content};
    ${(props) => {
        console.log('padding here');

        return props.padding;
    }};
    margin: ${(props) => props.margin};
    border-radius: ${(props) => props.radius};
    ${(props) => props.css};
`;
export const DivImg = styled.div<PropsDivContainer>`
    width: ${(props) => props.width || '100%'};
    height: 100%;
`;

interface PropsHname {
    size?: string;
    css?: string;
}
export const Hname = styled.h3<PropsHname>`
    width: 100%;
    font-size: 1.4rem;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
    ${(props) => props.css}
`;
interface PropsClose {
    size: string;
    top: string;
    left: string;
}
export const DivClose = styled.div<PropsClose>`
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: ${(props) => props.size};
    cursor: pointer;
    top: ${(props) => props.top};
    left: ${(props) => props.left};
    border-radius: 50%;
    &:hover {
        transition: all 0.1s linear;
        background-color: #3c4043;
    }
`;
