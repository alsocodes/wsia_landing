import React, { useEffect } from 'react'

const Carousel2 = ({ slides }) => {

    const [currentSlide, setCurrentSlide] = React.useState(0);

    const plusSlides = (act) => {
        let nextSlide = currentSlide + act
        if (nextSlide === slides.length) {
            return setCurrentSlide(0)
        }
        if (nextSlide < 0) {
            return setCurrentSlide(slides.length - 1)
        }

        return setCurrentSlide(nextSlide)
    }

    useEffect(() => {
        const timer = () => setTimeout(() => { plusSlides(1) }, 8000);
        const timerId = timer();
        return () => {
            clearTimeout(timerId);
        };
    }, [currentSlide])

    return (

        <div className="my-carousel-container">
            <div className="my-carousel">
                {slides.map((item, i) => (
                    <div className={`my-carousel-item fadex ` + (i == currentSlide ? `my-carousel-active` : ``)} key={item.title}
                        style={{ backgroundImage: `url("${item.image}")` }}
                    >
                        {/* <div className="my-carousel-caption" data-aos="fade-up">
                            <div className="container">
                                <h3 className="mcc-title">{item.title}</h3>
                                <div className="mcc-div">
                                    <p>{item.desc}</p>
                                </div>
                            </div>
                        </div> */}
                    </div>
                ))}
                <a className="prev" onClick={() => plusSlides(-1)}>&#10094;</a>
                <a className="next" onClick={() => plusSlides(1)}>&#10095;</a>
            </div>
        </div >
    );
}

export default Carousel2
