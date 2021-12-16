import React, { useEffect } from 'react'
import AOS from 'aos';
const Carousel2 = () => {
    const slides = [
        {
            title: "Melangkah bersama",
            desc: ".. bangun raga jiwa, untuk satu tekat memberi makna indonesia",
            image: "https://images.unsplash.com/photo-1592066575517-58df903152f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=998&q=80",
        },
        {
            title: "Memandang langit pagi",
            desc: ".. awan pemikat hati, berhias mentari harum mewangi alam ini",
            image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=932&q=80",
        },
        {
            title: "Sayup terdengar doa",
            desc: "Bagi Ibu Pertiwi, Selalu damai, kekal abadi, Indonesia..",
            image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        }

    ];
    // We will start by storing the index of the current image in the state.
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

    // useEffect(() => {
    //     const timer = () => setTimeout(() => { plusSlides(1) }, 8000);
    //     const timerId = timer();
    //     return () => {
    //         clearTimeout(timerId);
    //     };
    // }, [currentSlide])

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
