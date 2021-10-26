import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import productService from '../services/Vaccinations.js'
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import StarIcon from '@mui/icons-material/Star';

const labels = {
    1: 'Very Unsatisfied',
    2: 'Unsatisfied',
    3: 'Neutral',
    4: 'Satisfied',
    5: 'Very Satisfied',
};


const Feedback = ({ Feedback, setFeedBack }) => {
    const [value, setValue] = React.useState(2);
    const [hover, setHover] = React.useState(-1);

    useEffect(() => {
        console.log('effect')
        productService
            .getFeedback()
            .then(initialProducts => {
                setFeedBack(initialProducts)
                console.log(initialProducts)
            })
            .catch(error => {
                console.log("Error:", error.response.data)
            })
    }, [])

    if (Feedback.length !== 0) {

        return (
            <div className="vaccination col-12">
                <div className="App">
                    <div style={{ height: 500, width: 800, background: 'white', textAlign: 'center', color: 'black' }} >
                        <h4>Please Rate Your Experience On The Website</h4>
                        <Box>
                            <Rating 
                                size="large"
                                name="hover-feedback"
                                defaultValue={0}
                                precision={1}
                                onChange={(event, newValue) => {
                                    setValue(newValue);
                                }}
                                onChangeActive={(event, newHover) => {
                                    setHover(newHover);
                                }}
                                emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" size="large" />}
                            />
                            {value !== null && (
                                <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
                            )}
                        </Box>
                    </div>
                </div>
            </div>

        )
    } else {
        return (
            <div className="profile-log-in col-12">
                <h3>Website Feedback</h3>
                <Link className="App-link" to="/login">Click me to log in</Link>
            </div>
        )
    }
}

export default Feedback
