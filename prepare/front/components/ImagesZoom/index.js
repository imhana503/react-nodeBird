import React, { useState } from 'react';
import { Overlay, Header, CloseBtn, SlickWrapper, ImgWrapper, Global, Indicator } from './styles';
import PropTypes from 'prop-types';
import Slick from 'react-slick';

const ImagesZoom = ({ images, onClose }) => {
    const [currentSlide, setCurrentSlide] = useState(0);

    return(
        <Overlay>
            <Global/>
            <Header>
                <h1>상세 이미지</h1>
                <CloseBtn onClick={onClose}>X</CloseBtn>
            </Header>
            <SlickWrapper>
                <div>
                    <Slick
                        initalSlide={0}
                        afterChange={(slide)=>setCurrentSlide(slide)}
                        infinite
                        arrows={false}
                        slidesToShow={1}
                        slidesToScroll={1}
                    >
                        {images.map((v)=>(
                            <ImgWrapper key={v.src}>
                                <img src={v.src} alt={v.src}/>
                            </ImgWrapper>
                        ))}
                    </Slick>
                    <Indicator>
                        <div>
                            {currentSlide +1}
                            {' '}
                            /
                            {images.length}
                        </div>
                    </Indicator>
                </div>
            </SlickWrapper>
        </Overlay>
    )
}

ImagesZoom.propTypes = {
    images:PropTypes.arrayOf(PropTypes.object).isRequired,
    onClose:PropTypes.func.isRequired,
}

export default ImagesZoom;