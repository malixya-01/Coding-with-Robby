import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';


export default function Payment() {

    const [image, setImage] = useState("");
    const [imgUrl, setImgUrl] = useState("");

    const [payment, setPayment] = useState({
        classId: useParams().id,
        slip: ""
    });

    const handleClick = () => {
        //assign url to payment state
        postDetails().then(url => {
            setPayment({
                ...payment,
                slip: url
            })
        }).catch(err => {
            console.log(err);
        });
    }

    //trigger addPayment method once the state is updated
    useEffect(() => {
        if(payment.slip === ""){
        
        } else {
            addPayment();
        }

    }, [payment.slip]);

    //upload the inserted image to cloud and get the link
    const postDetails = () => {
        const data = new FormData()
        data.append("file", image);
        data.append("upload_preset", "payment-slips");
        data.append("cloud_name", "dqudsvth2");

        // Use a promise to wait for the upload to complete
        return new Promise((resolve, reject) => {
            fetch("https://api.cloudinary.com/v1_1/dqudsvth2/image/upload", {
                method: "post",
                body: data
            })
                .then(res => res.json())
                .then(data => {
                    resolve(data.url);
                })
                .catch(err => {
                    reject(err);
                })
        });
    }

    const addPayment = async () => {
        //api calling
        const res = await axios.post("http://localhost:3000/uploadSlip", payment);
    };







    return (
        <div className='container'>
            <h1>Upload your slip here</h1>
            <input
                type="file"
                accept="image/*"
                onChange={(e) => setImage(e.target.files[0])} />
            {/* 
                {payment.slip && (
                    <div style={styles.preview}>
                        <img
                            src={URL.createObjectURL(payment.slip)}
                            style={styles.image}
                            alt="Thumb"
                        />
                    </div>
                )} 
            */}
            <button
                onClick={() => handleClick()}>
                Upload slip
            </button>


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