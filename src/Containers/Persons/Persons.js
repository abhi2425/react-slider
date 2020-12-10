import React, { useState, useEffect } from "react";
import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";
import "./Persons.css";
import Person from "../../Components/Person/Person";

const Persons = () => {
    const data = [
        {
            image: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-2_ipcjws.jpg",
            name: "maria ferguson",
            designation: "office manager",
            quotes: "Fingerstache umami squid, kinfolk subway tile selvage tumblr man braid viral kombucha gentrify fanny pack raclette pok pok mustache."
        },
        {
            image: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
            name: "john doe",
            designation: "regular guy",
            quotes: "Gastropub sustainable tousled prism occupy. Viral XOXO roof party brunch actually, chambray listicle microdosing put a bird on it paleo subway tile squid umami."
        },
        {
            image: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959121/person-1_aufeoq.jpg",
            name: "peter smith",
            designation: "product designer",
            quotes: "Drinking vinegar polaroid street art echo park, actually semiotics next level butcher master cleanse hammock flexitarian ethical paleo."
        },
        {
            image: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
            name: "susan andersen",
            designation: "the boss",
            quotes: "Marfa af yr 3 wolf moon kogi, readymade distillery asymmetrical seitan kale chips fingerstache cloud bread mustache twee messenger bag. "
        }
    ]
    let [persons, setPersons] = useState(data)
    let [index, setIndex] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => {
                if (prevIndex === data.length - 1) {
                    prevIndex = -1
                }
                return prevIndex + 1
            })
        }, 3500)
        return () => clearInterval(interval) //cleanUp work 
    }, [index])

    const nextButtonHandler = () => {
        setIndex((prevIndex) => {
            if (prevIndex === data.length - 1) {
                prevIndex = -1
            }
            return prevIndex + 1
        })
    }
    const previousButtonHandler = () => {
        setIndex((prevIndex) => {
            if (prevIndex <= 0) {
                prevIndex = data.length
            }
            return prevIndex - 1
        })
    }
    const personsCopy = persons
    const person = personsCopy.map((person, personIndex) => {
        let className = "nextSlide"
        if (index === personIndex) {
            className = "activeSlide"
        }
        return (
            <Person image={person.image}
                name={person.name}
                designation={person.designation}
                quotes={person.quotes}
                className={className}
            />
        )
    })
    return (
        <main className="main">
            <section>
                <div>
                    <p className="slash">/
                   <span className="reviews">Reviews</span>
                    </p>
                </div>

                <div className="person">
                    <button className="btn prev" onClick={previousButtonHandler}>
                        <FaAngleLeft />
                    </button>
                    {person}
                    <button className="btn next" onClick={nextButtonHandler}>
                        <FaAngleRight />
                    </button>
                </div>
            </section>

        </main>
    );
};
export default Persons;
