import React from 'react';

export default function Tele2(props) {
    const {title, priceText, price, currency, usageLimit, hit, internet, internetUnit, internetText, logos, roaming, minutes, minutesUnit, minutesText, messages, messagesText} = props;
    return (
        <div className="lists">
                <div className="list">
                    <span className="list-span title">{title}</span>
                    <span className="price-text">{priceText}</span>
                    <div className="list-price">
                        <span className="list-span price">{price}</span>
                        <div className="per-currency">
                            <span className="currency">{currency}</span> <span className="usage-limit">{usageLimit}</span>
                        </div>
                        <span>{hit.map(i => <img className="hit" src={i} />)}</span>
                    </div>
                </div>
                <div className="list">
                    <span className="list-span internet">{internet} <span className="internet-unit">{internetUnit}</span></span>
                    <span className="list-span internet-text">{internetText}</span>
                    <span className="list-span logos">{logos.map(logo => <img className="logo" src={logo}/>)}</span>
                    <span className="list-span roaming">{roaming}</span>
                </div>
                <div className="list">
                    <span className="list-span minutes">{minutes} <span className="minutes-unit">{minutesUnit}</span></span>
                    <span className="list-span minutes-text">{minutesText}</span>
                </div>
                <div className="list">
                    <span className="list-span messages">{messages} <span className="messages-text">{messagesText}</span></span>
                </div>
        </div>
    );
}
