import React from 'react'

function View(handleSubmit, randomImages) {
    return (
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
    )
}

export default View