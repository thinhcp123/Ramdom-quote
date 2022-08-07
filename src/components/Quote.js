import React from 'react';

const Quote = ({quote}) => {
    return (
        <div>
            <div className="quote">
                <div className="anime">{quote.anime}</div>
                <blockquote>{quote.quote}</blockquote>
                <div className="character">{quote.character}</div>
            </div>
        </div>
    );
};

export default Quote;
