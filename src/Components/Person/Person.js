import React from "react";
import "./Person.css";
import { FaQuoteRight } from "react-icons/fa"

const person = ({ image, name, designation, quotes, className }) => (
    <article className={className}>
        <section className="section-1">
            <div className="image">
                <img className="image" src={image} alt={name} />
            </div>
            <div>
                <h1 className="name">{name}</h1>
                <p className="designation">{designation}</p>
            </div>
        </section>
        <section className="section-2">
            <p className="quote">{quotes}</p>
            <i className="icon"><FaQuoteRight /></i>
        </section>
    </article>
);
export default person;
