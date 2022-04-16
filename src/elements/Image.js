import React from "react";
import styled from "styled-components";

const Image = (props) => {
    const {shape, src, size, margin} = props;

    const styles = {
        src: src,
        size: size,
        margin: margin,
    }
    
    if(shape === "circle") {
        return (
            <ImageCircle {...styles}></ImageCircle>
        )
    }

    if(shape === "rectangle") {
        return (
            <AspectOutter>
                <AspectInner {...styles}></AspectInner>
            </AspectOutter>
            
        )
    }
    return (
        <React.Fragment>
            <ImageDefault {...styles}></ImageDefault>
        </React.Fragment>
    )
}

Image.defaultProps = {
    shape: "circle",
    src: "http://image.dongascience.com/Photo/2020/03/5bddba7b6574b95d37b6079c199d7101.jpg",
    size: 36,
};

const ImageDefault = styled.div`
    --size: ${(props) => props.size}rem;
    width: var(--size);
    height: var(--size);
    background-image: url("${(props) => props.src}");
    background-size: cover;
`;

const AspectOutter = styled.div`
    width: 100%;
    min-width: 20rem;
    background-position: center;
`;

const AspectInner = styled.div`
    position: relative;
    padding-top: 75%;
    overflow: hidden;
    background-position: center;
    background-image: url("${(props) => props.src}");
    background-size: cover;
    ${(props) => (props.margin ? `margin: ${props.margin};` : "")}
    ${(props) => (props.size? `margin: ${props.size};` : "")}
`;

const ImageCircle = styled.div`
    --size: ${(props) => props.size}rem;
    width: var(--size);
    height: var(--size);
    border-radius: var(--size);

    background-image: url("${(props) => props.src}");
    background-size: cover;
    margin: 0.4rem;
`;


export default Image;