import React from 'react';
import {useHistory} from 'react-router-dom';
import {Container} from 'react-bootstrap'
import img from '../img/sea.jpg';
import classes from './Pricing.scss';



const Pricing = () => {

    const history = useHistory();
  
    return(
    <section>
        {/* <div className={classes.image}>
            <img className={classes.picSea} src={img} alt="sea"/>
            <div className={classes.overlay}>
                <div className={classes.title}>View of Sea</div>
                <p className={classes.description}>
                    Here we have a concert beside the sea. 
                </p>
            </div>
        </div> */}
        <Container 
        className="d-flex justify-content-center align-items-center" 
        style={{minHeight:"100vh"}}
        >
        <a 
        className="btn btn-success btn-lg" 
        onClick={()=>{history.push('/payment');}}
        >
        Try It Now
        </a>
        </Container>
    </section>)
    
}

export default Pricing;