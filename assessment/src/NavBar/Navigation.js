import { Link } from 'react-router-dom';
import {motion} from 'framer-motion';
import classes from './NavBar.module.scss';


const Navigation = () => {

  const animateFrom = {opacity:0, y:-40}
  const animateTo = {opacity:1, y:0}

  return (
    <nav>
      <div className={classes.wrap}>
        <input type="checkbox" className={classes.toggler}/>
          <div className={classes.hamburger}><div></div></div>
            <div className={classes.menu}>
              <div>
              <div>
                <ul>
                  <motion.li initial={animateFrom} animate={animateTo}  transition={{delay:0.10}}>
                  <Link to="/images">Images</Link>
                  </motion.li>
                  <motion.li initial={animateFrom} animate={animateTo} transition={{delay:0.40}}>
                  <Link to="/">Songs</Link>
                  </motion.li>
                  <motion.li initial={animateFrom} animate={animateTo} transition={{delay:0.60}}>
                  <Link to="/pricing">Pricing</Link>
                  </motion.li>
                  <motion.li initial={animateFrom} animate={animateTo} transition={{delay:0.70}}>
                  <Link to="/payments">Payments</Link>
                  </motion.li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav> 
  );
} 

export default Navigation;
