/* eslint-disable jsx-a11y/no-redundant-roles */

import React, {useState} from 'react';
import '../../public/assests/contactus.css';

const Contact = () => {
    const regex = "^(?=.{1,64}@)[A-Za-z0-9_-]+(\\.[A-Za-z0-9_-]+)*@"
        + "[^-][A-Za-z0-9-]+(\\.[A-Za-z0-9-]+)*(\\.[A-Za-z]{2,})$";
    const [enteredName, setEnteredName] =useState('');
    const [enteredEmail,setEnteredEmail] = useState('');
    const [enteredMessage, setEnteredMessage] = useState('');
    const [enteredError, setError] = useState('');

    const NameChangeHandler = (event) => {
        setEnteredName(event.target.value);
    };
    const EmailChangeHandler = (event) => {
        setEnteredEmail(event.target.value);
        if(regex.test(enteredEmail)=== false){
            setError('please enter validate email id');
        }else{
            setError('');
            return true;
        }
    };
    const MessageChangeHandler = (event) => {
        setEnteredMessage(event.target.value)
    };
    const submitHandler = (event) => {
        event.preventDefault();
        const contactusData = {
            Name: enteredName,
            Email: enteredEmail,
            Message:enteredMessage,
        };
        console.log(contactusData);
        setEnteredName('');
        setEnteredEmail('');
        setEnteredMessage('');
    };
    const NULLURL = ""

    return (
        <div className='contactbody'>
            <section id="contact">

                <h1 className="section-header">Contact Us</h1>

                <div className="contact-wrapper">



                    <form action="https://formsubmit.co/weboffice956@gmail.com" id="contact-form" className="form-horizontal" role="form"
                        method="POST" onSubmit={submitHandler}>

                        <div className="form-group">
                            <div className="col-sm-12">
                                <input type="text" className="form-control" id="name" placeholder="NAME" name="name" required value={enteredName} onChange={NameChangeHandler} />
                            </div>
                        </div>

                        <div className="form-group">
                            <div className="col-sm-12">
                                <input type="email" className="form-control" id="email" placeholder="EMAIL" name="email" required value={enteredEmail} onChange={EmailChangeHandler} />
                                <p className='text-danger p-2 m-2'>{enteredError}</p>
                            </div>
                        </div>

                        <textarea className="form-control" rows="10" placeholder="MESSAGE" name="message" required value={enteredMessage} onChange={MessageChangeHandler}></textarea >

                        <button className="btn btn-primary send-button" id="submit" type="submit" value="SEND">
                            <div className="alt-send-button">
                                <i className="fa fa-paper-plane"></i><span className="send-text">SEND</span>
                            </div>

                        </button>

                    </form>





                    <div className="direct-contact-container">

                        <ul className="contact-list">
                            <li className="list-item"><i className="fa fa-map-marker fa-2x"><span className="contact-text place">Sri City,
                                A.P</span></i></li>

                            <li className="list-item"><i className="fa fa-phone fa-2x"><span className="contact-text phone"><a href="tel:1-212-555-5555"
                                title="Give me a call">+91 9876543210</a></span></i></li>

                            <li className="list-item"><i className="fa fa-envelope fa-2x"><span className="contact-text gmail"><a href="mailto:#"
                                title="Send me an email">weboffice956@gmail.com</a></span></i></li>

                        </ul>

                        <hr />
                        <ul className="social-media-list">
                            <li><a href={NULLURL} className="contact-icon">
                                <i className="fa fa-github" aria-hidden="true"></i></a>
                            </li>
                            <li><a href={NULLURL} className="contact-icon">
                                <i className="fa fa-linkedin" aria-hidden="true"></i></a>
                            </li>
                            <li><a href={NULLURL} className="contact-icon">
                                <i className="fa fa-twitter" aria-hidden="true"></i></a>
                            </li>
                            <li><a href={NULLURL} className="contact-icon">
                                <i className="fa fa-instagram" aria-hidden="true"></i></a>
                            </li>
                        </ul>
                        <hr />

                        <div className="copyright">Copyright &copy; 2022 WebOffice.All Rights Reserved</div>

                    </div>

                </div>

            </section>
        </div>

    )
}

export default Contact;
