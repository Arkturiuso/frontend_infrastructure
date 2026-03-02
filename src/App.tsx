import React, { useState } from 'react';
import { shuffle } from 'lodash';

const App = () => {
    const quotes = shuffle([
        'Жизнь - это то, что с тобой происходит, пока ты строишь планы',
        'Будь собой, остальные роли уже заняты',
        'Путь в тысячу миль начинается с первого шага',
        'Не откладывай на завтра то, что можно сделать сегодня',
        'Счастье не в том, чтобы делать всегда что хочешь, а в том чтобы всегда хотеть того что делаешь',
    ]);

    const [quote, setQuote] = useState(quotes[0]);

    const nextQuote = () => {
        setQuote(shuffle(quotes)[0]);
    };

    return (
        <div>
            <h1>{quote}</h1>
            <button onClick={nextQuote}>Тыц</button>
        </div>
    );
};

export default App;
