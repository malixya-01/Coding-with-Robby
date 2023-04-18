import React, { useState, useEffect } from 'react'

export default function Payment() {

    const [image, setImages] = useState();

    const [payment, setPayment] = useState({
        userId:"",
        classId:"",
        slip:""
    });

    function onImageChange(e) {
        setImages(e.target.files[0]);
        console.log(image);
    }


    return (
        <div className='container'>
            <h1>Upload your slip here</h1>
            <input type="file" accept="image/*" onChange={onImageChange} />

            {image && (
                <div style={styles.preview}>
                    <img
                        src={URL.createObjectURL(image)}
                        style={styles.image}
                        alt="Thumb"
                    />
                </div>
            )}

            <a href = "#">
                <button>
                    Upload slip
                </button>
            </a>

        </div>
    );
}

const styles = {
    container: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        paddingTop: 50,
    },
    preview: {
        marginTop: 50,
        display: "flex",
        flexDirection: "column",
    },
    image: { maxWidth: "50%", maxHeight: "50%" },
    delete: {
        cursor: "pointer",
        padding: 15,
        background: "red",
        color: "white",
        border: "none",
    }
};