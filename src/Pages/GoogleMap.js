import React, { useState } from "react";
import GoogleMapReact from "google-map-react";
import { Col, Row, Container } from "react-bootstrap";

export default function GoogleMap() {
    return(
        <Col>
            <div className="google-map-code map-section">
                <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3602.4561231451694!2d30.998643515014717!3d-25.456440583776324!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1ee849e29de8be87%3A0x5507d2df24c94eb6!2sPangolin%20St%2C%20Kamagugu%2C%20Mbombela%2C%201200!5e0!3m2!1sen!2sza!4v1644406002152!5m2!1sen!2sza"
                width="100%"
                height="450"
                frameBorder="0"
                style={{ border: 0 }}
                allowFullScreen=""
                aria-hidden="false"
                tabIndex="0"
                ></iframe>
            </div>
        </Col>
    );
}