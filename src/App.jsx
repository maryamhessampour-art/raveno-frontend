import './App.css'
import { useState , useEffect} from 'react'

const woodenDoorImages = ["wood-door.png", "wood-door2.png"];
const kitchenImages = ["kitchen1.png" , "kitchen3.png" , "kitchen4.png" , "kitchen2.png"]
const customImages = ["custom1.png" , "custom4.png" , "custom2.png" ]

function App() {
    return (
        <>
            <nav>
                <span>RAVENO</span>
                <div>
                    <a href="#">Home</a>
                    <a href="#">Collections</a>
                    <a href="#">Projects</a>
                    <a href="#">About</a>
                    <a href="#">Contact</a>
                </div>
            </nav>

            <div className="hero">
                <img
                    className="monogram"
                    src="/monogram-raveno2.png"
                    alt="RAVENO monogram"
                />

                <div className="title-wrapper" >

                    <svg className="title-brush"
                         viewBox="0 0 500 120"
                         xmlns="http://www.w3.org/2000/svg"
                         aria-hidden="true"
                    >
                        <path
                            d="M15 76
                            Q55 60 105 57
                            Q155 53 205 64
                            Q255 73 305 62
                            Q355 51 405 64
                            Q455 76 505 63
                            Q555 50 605 60
                            Q650 67 658 58

                            L665 99
                            Q630 107 590 96
                            Q540 88 495 101
                            Q445 114 395 99
                            Q345 86 295 101
                            Q245 114 195 99
                            Q145 88 100 99
                            Q55 104 18 95
                            Z"
                            fill="#76563D"
                        />

                        <path
                            d="
                            M18 76
                            Q75 61 130 62
                            Q185 63 235 71
                            Q285 79 335 67
                            Q385 56 435 69
                            Q485 80 535 70
                            Q590 60 665 65
                            L660 79
                            Q600 76 550 84
                            Q500 92 450 82
                            Q395 72 345 84
                            Q290 94 240 84
                            Q185 74 130 79
                            Q70 84 18 87
                            Z"

                            fill="#8A6344"
                            opacity="0.72"
                        />

                        <path
                            d="
                            M35 89
                            Q90 80 145 84
                            Q195 87 245 96
                            Q295 104 345 91
                            Q400 79 450 92
                            Q505 105 555 91
                            Q610 78 675 82
                            L665 96
                            Q610 94 560 105
                            Q510 116 455 103
                            Q400 91 350 106
                            Q295 120 245 106
                            Q190 94 140 97
                            Q85 100 35 99
                            Z"

                            fill="#A77A4D"
                            opacity="0.42"
                        />


                        <path
                            d="
                            M25 72
                            Q90 57 155 61
                            Q215 66 275 74
                            Q335 81 395 68
                            Q455 56 515 68
                            Q580 78 665 61 "

                            fill="none"
                            stroke="#B8945E"
                            stroke-width="7"
                            opacity="0.28"
                        />


                        <path
                            d="
                            M45 93
                            Q105 82 160 88
                            Q220 95 280 103
                            Q335 110 395 96
                            Q455 82 510 96
                            Q575 110 650 89"

                            fill="none"
                            stroke="#C6A66B"
                            stroke-width="3"
                            opacity="0.28"
                        />
                    </svg>

                    <h1>RAVENO</h1>
                </div>
                <p>INTERIOR | FURNITURE | ARCHITECTURE</p>
                <button>Explore Collections</button>
            </div>
            <section className="collections">
                <h2>Our Collections</h2>

                <div className="collection-grid">

                    <CollectionCard
                        title="Wooden Doors"
                        images={woodenDoorImages}
                    />
                    <CollectionCard
                        title="Kitchens"
                        images={kitchenImages}
                    />
                    <CollectionCard
                        title="Customs"
                        images={customImages}
                    />

                </div>

            </section>

            <section className="projects">
                <h2>Selected Projects</h2>

                <div className="project-grid">

                </div>

                <div className="project-card">

                </div>
            </section>
        </>
    )
}

export default App

function CollectionCard({ title , images }) {

    const [currentImage, setCurrentImage] = useState(0);
    const [isLightboxOpen, setIsLightboxOpen] = useState(false)

    useEffect(() => {

        const handleKeyDown = (event) => {
            if (event.key === "Escape") {
                setIsLightboxOpen(false)
            }

            if(event.key === "ArrowLeft") {
                setCurrentImage(
                    (current) => (current - 1 + images.length) % images.length
                )
            }

            if(event.key === "ArrowRight") {
                setCurrentImage(
                    (current) => (current + 1) % images.length)
            }
        }

        window.addEventListener("keydown", handleKeyDown)

        return () => {
            window.removeEventListener("keydown" , handleKeyDown)
        }

    }, [])
    
    return (
        <div
            className="collection-card"
        >
            <div className="image-slider">
                <button
                    onClick={() =>
                        setCurrentImage(
                            (current) => (current -1 + images.length) % images.length
                        )
                    }
                >
                    ‹
                </button>

                <img
                    src={images[currentImage]}
                    alt={title}
                    onClick={() => setIsLightboxOpen(true)}
                />

                <button
                    onClick={() =>
                        setCurrentImage((current) => (current + 1) % images.length)
                    }
                >
                    ›
                </button>

                <div className="slider-dots">
                    {
                        images.map((element, index) => {
                            return (
                                <span className={index === currentImage ? "active" : ""}></span>
                            );
                        })
                    }
                </div>
            </div>
            {isLightboxOpen && (
                <div className="lightbox"
                     onClick={() => setIsLightboxOpen(false)}
                >

                    <button className="prev-button"
                        onClick={(event) => {
                            event.stopPropagation();
                            setCurrentImage(
                                (current) => (current -1 + images.length) % images.length
                            )
                        }}
                    >
                        ‹
                    </button>

                    <img
                        className="lightbox-image"
                        src={images[currentImage]}
                        alt={title}
                        onClick={(event) => {
                            event.stopPropagation()
                        }}
                   />

                    <button className="next-button"
                        onClick={(event) => {
                            event.stopPropagation();
                            setCurrentImage((current) => (current + 1) % images.length)
                        }}
                    >
                        ›
                    </button>

                    <button className="close-button"

                        onClick={() => setIsLightboxOpen(false)}>
                        ×
                    </button>

                </div>
            )}
            <h3>{title}</h3>
        </div>
    );
}