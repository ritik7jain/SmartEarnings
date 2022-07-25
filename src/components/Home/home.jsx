
import React from 'react';
import useStyles from '../Products/styles';
import Grid from '@material-ui/core/Grid';
import web from '../../assets/home.png';
import { NavLink } from 'react-router-dom';

const Home = ( ) => {
    const classes = useStyles();
    return (
     <>
    
     <main className={classes.content}>
      <div className={classes.toolbar} />
      <section id="header" className="d-flex  justify-content-center flex-column">
        <div className="container-fluid nav_bg " >
            <div className="row">
                <div className="mx-auto">
                    <div className='row align-items-center' style={{minHeight: "85vh"}}>
                    <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 mt-50 d-flex justify-content-center flex-column">
                        <h1> Grow Your Income  with  <br></br>    <strong className='brand-name'>Smart Earnings</strong></h1>
                        <h4 className="my-3">
                            providing help in training and qualifying Hitapps on UHRS </h4>
                            <div className='mt-3'>
                              {/*<a href='' className="btn-get-started"
                                >
                                Get started</a>*/}  
                                <NavLink class="btn btn-primary" to="/product" role="button">Get Started</NavLink>
                                 </div>
                    </div>
                    <div className="col-lg-6 order-1 order-lg-2 header-img ">
                        <img  src={web} className="img-fluid-animated" alt="home image"/> </div>

                    </div>
                  
                </div>
            </div>
        </div>

     </section>
      
    </main>

     </>
        
     
    );
  };
  
  export default Home;
  
