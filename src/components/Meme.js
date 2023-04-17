import React, { useEffect, useState } from 'react';

function Meme() {
    const [meme, setMeme] = useState({
        textTop: 'That feeling when your mom',
        textBottom: 'some text ...',
        randomImage: 'https://i.imgflip.com/30b1gx.jpg',
    });

    const [allMeme, setAllMeme] = useState();
    useEffect(() => {
        fetch('https://api.imgflip.com/get_memes')
            .then((res) => res.json())
            .then((data) => setAllMeme(data.data.memes));
    }, []);

    function handleInputChange(e) {
        const { name, value } = e.target;

        setMeme((prevValue) => ({
            ...prevValue,
            [name]: value,
        }));
    }

    function getMemeImage() {
        const memes = allMeme;
        const randomNumber = Math.floor(Math.random() * memes.length);
        const url = memes[randomNumber].url;
        setMeme((prevValue) => ({ ...prevValue, randomImage: url }));
    }

    return (
        <main className="main">
            <form className="main__form">
                <input
                    className="main__input"
                    type="text"
                    placeholder="top text"
                    name="textTop"
                    value={meme.textTop}
                    onChange={handleInputChange}
                />
                <input
                    className="main__input"
                    type="text"
                    placeholder="bottom text"
                    name="textBottom"
                    value={meme.textBottom}
                    onChange={handleInputChange}
                />
                <button className="main__btn" type="button" onClick={getMemeImage}>
                    Get a new meme image 🖼
                </button>
            </form>
            <div className="meme">
                <img alt="" src={meme.randomImage} className="meme__image" />
                <h2 className="meme__text top">{meme.textTop}</h2>
                <h2 className="meme__text bottom">{meme.textBottom}</h2>
            </div>
        </main>
    );
}

export default Meme;
