/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from 'react';
import './App.css';
import nose from './character/noses/1.png';
import Header from './component/Header';

function App() {



    function importAll(r) {
        return r.keys().map(r);
    }
    const imagesBody = importAll(
        require.context(
            './character/body',
            false,
            /\.(png|jpe?g|svg)$/
        )
    );
    const imagesGlasses = importAll(
        require.context(
            './character/accessories/glasses',
            false,
            /\.(png|jpe?g|svg)$/
        )
    );
    const imagesClothes1 = importAll(
        require.context(
            './character/clothes/layer_1',
            false,
            /\.(png|jpe?g|svg)$/
        )
    );
    const imagesClothes2 = importAll(
        require.context(
            './character/clothes/layer_2',
            false,
            /\.(png|jpe?g|svg)$/
        )
    );
    const imagesClothes3 = importAll(
        require.context(
            './character/clothes/layer_3',
            false,
            /\.(png|jpe?g|svg)$/
        )
    );
    const imagesEyebrows = importAll(
        require.context(
            './character/eyebrows',
            false,
            /\.(png|jpe?g|svg)$/
        )
    );
    const imagesHair = importAll(
        require.context(
            './character/hair',
            false,
            /\.(png|jpe?g|svg)$/
        )
    );
    const imagesEyes = importAll(
        require.context(
            './character/eyes',
            false,
            /\.(png|jpe?g|svg)$/
        )
    );
    const imagesMouths = importAll(
        require.context(
            './character/mouths',
            false,
            /\.(png|jpe?g|svg)$/
        )
    );

    const arrayCharacter = [
        { name: "Body", images: imagesBody },
        { name: "Glasses", images: imagesGlasses },
        { name: "Clothes1", images: imagesClothes1 },
        { name: "Clothes2", images: imagesClothes2 },
        { name: "Clothes3", images: imagesClothes3 },
        { name: "Eyes", images: imagesEyes },
        { name: "Hair", images: imagesHair },
        { name: "Eyebrows", images: imagesEyebrows },
        { name: "Mouth", images: imagesMouths },
    ]
    const [imagesSource, setImagesSource] = useState(arrayCharacter);

    const randomImageBody = imagesBody[Math.floor(Math.random() * imagesBody.length)]
    const randomImageGlasses = imagesGlasses[Math.floor(Math.random() * imagesGlasses.length)]
    const randomImageClothes1 = imagesClothes1[Math.floor(Math.random() * imagesClothes1.length)]
    const randomImageClothes2 = imagesClothes2[Math.floor(Math.random() * imagesClothes2.length)]
    const randomImageClothes3 = imagesClothes3[Math.floor(Math.random() * imagesClothes3.length)]
    const randomImageEyes = imagesEyes[Math.floor(Math.random() * imagesEyes.length)]
    const randomImageHair = imagesHair[Math.floor(Math.random() * imagesHair.length)]
    const randomImageEyebrows = imagesEyebrows[Math.floor(Math.random() * imagesEyebrows.length)]
    const randomImageMouths = imagesMouths[Math.floor(Math.random() * imagesMouths.length)]

    const randomImage = [
        { z_index: 100, name: "body", image: randomImageBody },
        { z_index: 500, name: "glasses", image: randomImageGlasses },
        { z_index: 300, name: "clothes1", image: randomImageClothes1 },
        { z_index: 300, name: "clothes2", image: randomImageClothes2 },
        { z_index: 300, name: "clothes3", image: randomImageClothes3 },
        { z_index: 400, name: "eyes", image: randomImageEyes },
        { z_index: 600, name: "hair", image: randomImageHair },
        { z_index: 400, name: "eyebrows", image: randomImageEyebrows },
        { z_index: 400, name: "mouths", image: randomImageMouths },
        { z_index: 400, name: "nose", image: nose }
    ]
    const [randomImages, setRandomImages] = useState(randomImage)

    const handleSubmit = (e) => {
        e.preventDefault();
        const a = randomImage.map((e) => e.image)/* output 1 img */
        setRandomImages([...randomImage, a])
    }


    const handleClick = (img) => {
        const images = randomImage.find((element) => element.image = img)
        setRandomImages([...randomImages, images])
    }

    return (
        < div className="container" >
            <Header />
            <div className="image-group">
                <div className="cover">
                    <form onSubmit={handleSubmit} className="avatar-wrapper">
                        <div className="avatar">
                            {randomImages.map((e) => (
                                <img z-index={e.z_index} src={e.image} className="first" ></img>
                            ))}

                        </div>
                        <div className="btn-parent">
                            <button type="submit" className="btn">RANDOMIZE</button>
                        </div>
                    </form>
                </div>
            </div>
            <div>
                {/* THIS IS COMPONENT ... */}
                {imagesSource.map((e) => (
                    <div className="list-image">
                        <h2>{e.name}</h2>
                        <div className="list">
                            {e.images.map((image) =>
                            (<div className="clickable">
                                <img src={image} onClick={() => handleClick(image)} name="body" className="body-part "></img>
                            </div>)
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div >
    )
}

export default App
