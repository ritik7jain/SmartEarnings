import React from 'react';
import useStyles from '../Products/styles';
import Grid from '@material-ui/core/Grid';
import web from '../../assets/home.png';
import { NavLink } from 'react-router-dom';

const About= ( ) => {
    const classes = useStyles();
    return (
     <>
    
     <main className={classes.content}>
      <div  className={classes.toolbar} />
      <section id="header" className="d-flex  justify-content-center flex-column">
        <div className="container-fluid nav_bg " >
            <div className="row">
                <div className="mx-auto">
                    <div className='row'>
                    <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 mt-50 d-flex justify-content-center flex-column">
                        <h3> <strong className='brand-name'>$MART EARNING$</strong></h3>
                        <h5 className="my-3">$MART EARNING$ was established on 19 November 2021 by Ritik Jain and Anushka Maheshwari, To provide solutions for
              UHRS Training and Qualification and have expanded themselves to different countries with more than 100+ happy customers. Its
              Low rates and high-quality services make it different from other platforms in this field. Along with all these
              services, Unique
              daily updated stuff makes it more attractive. Our team's expertise in the different UHRS tasks makes it easy for the customers to learn and earn.
                            </h5>
                            <h3> <strong className='brand-name'>UHRS</strong></h3>
                        <h5 className="my-3">UHRS stands for Universal Human Relevance System. It’s a web-based platform for online work. It gives you the opportunity to earn money from home by completing short (and often repetitive) tasks.

UHRS provides small jobs (known as “Hits” or “HitApps”) for home workers, usually involving categorising and verifying the accuracy of online information.

The kind of tasks (HitApps) you complete on UHRS are generally related to improving the performance of online search engines. They’re tasks that require a human eye and can’t reliably be performed by machines.
                            </h5>
                            
                    </div>
                    <div className="col-lg-6 order-1 order-lg-2 header-img d-flex justify-content-center flex-column ">
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
  
  export default About;
  
