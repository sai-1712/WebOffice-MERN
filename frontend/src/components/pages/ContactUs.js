/* eslint-disable jsx-a11y/no-redundant-roles */
import React from 'react';
import "../../public/assests/contactus.css"
function Contact() {

    const NULLURL = ""

    return (
        <div className='contactbody'>
            <section id="contact">

                <h1 class="section-header">Contact Us</h1>

                <div class="contact-wrapper">
                    <form action="https://formsubmit.co/weboffice956@gmail.com" id="contact-form" class="form-horizontal" role="form"
                        method="POST">

                        <div class="form-group">
                            <div class="col-sm-12">
                                <input type="text" class="contact-form-control" id="name" placeholder="NAME" name="name" required />
                            </div>
                        </div>

                        <div class="form-group">
                            <div class="col-sm-12">
                                <input type="email" class="contact-form-control" id="email" placeholder="EMAIL" name="email" required />
                            </div>
                        </div>

                        <textarea class="contact-form-control" rows="10" placeholder="MESSAGE" name="message" required></textarea>

                        <button class="btn btn-primary send-button" id="submit" type="submit" value="SEND">
                            <div class="alt-send-button">
                                <i class="fa fa-paper-plane"></i><span class="send-text">SEND</span>
                            </div>

                        </button>

                    </form>





                    <div class="direct-contact-container">

                        <ul class="contact-list">
                            <li class="list-item"><i class="fa fa-map-marker fa-2x"><span class="contact-text place">Sri City,
                                A.P</span></i></li>

                            <li class="list-item"><i class="fa fa-phone fa-2x"><span class="contact-text phone"><a href="tel:1-212-555-5555"
                                title="Give me a call">+91 9876543210</a></span></i></li>

                            <li class="list-item"><i class="fa fa-envelope fa-2x"><span class="contact-text gmail"><a href="mailto:#"
                                title="Send me an email">weboffice956@gmail.com</a></span></i></li>

                        </ul>

                        <hr />
                        <ul class="social-media-list">
                            <li><a href={NULLURL} class="contact-icon">
                                <i class="fa fa-github" aria-hidden="true"></i></a>
                            </li>
                            <li><a href={NULLURL} class="contact-icon">
                                <i class="fa fa-linkedin" aria-hidden="true"></i></a>
                            </li>
                            <li><a href={NULLURL} class="contact-icon">
                                <i class="fa fa-twitter" aria-hidden="true"></i></a>
                            </li>
                            <li><a href={NULLURL} class="contact-icon">
                                <i class="fa fa-instagram" aria-hidden="true"></i></a>
                            </li>
                        </ul>
                        <hr />

                        <div class="copyright">Copyright &copy; 2022 WebOffice.All Rights Reserved</div>

                    </div>

                </div>

            </section>
        </div>

    )
}

export default Contact;
