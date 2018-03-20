import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import './index.css';

function Email({ email }) {
    let {sender, subject, date, message} = email;
    return (
        <div className="email">
            <input type="checkbox" />
            <i className="fa fa-thumb-tack pin" />
            <div className="content">
                <div className="line1">
                    <div className="sender">{sender}</div>
                    <div className="subject">{subject}</div>
                    <div classname="date">{date}</div>
                </div>
            <div className="message">{message}</div>
            </div>
        </div>
    );
}
Email.propTypes = {
    email: PropTypes.shape({
        sender: PropTypes.string.isRequired,
        subject: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
        message: PropTypes.string.isRequired
    }).isRequired
};

let email1 = {
    sender: "REACT TEAM",
    subject: "A Thanks From The React Team",
    date: "July 15",
    message: "Thank you for using React.js! Refer to our website for any questions about setup / documentation / possibl....."
};

let email2 = {
    sender: "Bob Johnson",
    subject: "Family Update",
    date: "July 14",
    message: "Just a quick update, hope everyone is doing well! Last week, as many of you may already know, we decide...."
};

let email3 = {
    sender: "GLOBO-GYM",
    subject: "Join Now For Exclusive Offer!!",
    date: "July 14",
    message: "Greetings from the team here at GLOBO-GYM, we hope you are enjoying your day and would like to exten...."
};

let email4 = {
    sender: "Big Bank, Inc.",
    subject: "Attn: Your Monthly Statement Is Now Available",
    date: "July 13",
    message: "Afternoon, your monthly statement is now available. Click the provided link to view a breakdown of your mo..."
};

let email5 = {
    sender: "Facebook",
    subject: "You Have 5 New Notifications!",
    date: "July 12",
    message: "You are popular! Login to see what your friends have been up to, and make sure you let them know what y...."
};

let email6 = {
    sender: "eBay",
    subject: "Your Coupon Is About To Expire!",
    date: "July 12",
    message: "Find your summertime favorites and save. Fashion, Home & Garden, and Electronic daily deals are about t..."
};

let email7 = {
    sender: "Priceline.com",
    subject: "Just In: Hotels Up To 60% off, starting at $24!",
    date: "July 11",
    message: "See the neighborhood, amenities, and price of each hotel before you book. No bidding required. Don't miss..."
};

let email8 = {
    sender: "Starbucks",
    subject: "25% Off Whole Bean Coffee & Verismo Pods!",
    date: "July 10",
    message: "Bright summer mornings call for coffee at home, so find your favorite blends and start brewing. Find a store..."
};

ReactDOM.render(
    <div>
    <Email email={email1} />
    <Email email={email2} />
    <Email email={email3} />
    <Email email={email4} />
    <Email email={email5} />
    <Email email={email6} />
    <Email email={email7} />
    <Email email={email8} />
    </div>,
    document.querySelector('#root')
);