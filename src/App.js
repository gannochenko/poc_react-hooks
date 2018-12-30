import React, {useState, useEffect} from 'react';
import './App.css';

const SubComponent = () => {
    console.dir('SubComponent render!');

    const [forBatman, setForBatman] = useState(0);
    const [forJoker, setForJoker] = useState(0);
    useEffect(() => {
        let title = 'Who will prevail?';
        if (forBatman > forJoker) {
            title = 'Good is winning';
        } else if (forJoker > forBatman) {
            title = 'Evil is upon us!'
        }
        document.title = title;

        console.dir('Effect called!');

        return () => {
            console.dir('SubComponent unmounted');
            document.title = 'The fight is over';
        };
    }, [forBatman, forJoker]);

    return (
        <React.Fragment>
            Batman: {forBatman}
            {' '}vs
            Joker: {forJoker}
            <button
                onClick={() => setForBatman(forBatman + 1)}
                style={{padding: '1rem 2rem'}}
            >
                One for Batman!
            </button>
            <button
                onClick={() => setForJoker(forJoker + 1)}
                style={{padding: '1rem 2rem'}}
            >
                One for Joker!
            </button>
        </React.Fragment>
    );
};

const App = () => {
    console.dir('App render!');

    const [appCounter, setAppCounter] = useState(0);
    return (
        <div className="App">
            <header className="App-header">
                {
                    appCounter < 5
                    &&
                    <SubComponent/>
                }
                <br />
                Application counter: {appCounter}
                <button
                    onClick={() => setAppCounter(appCounter + 1)}
                    style={{padding: '1rem 2rem'}}
                >
                    One for application
                </button>
            </header>
        </div>
    );
};

export default App;
