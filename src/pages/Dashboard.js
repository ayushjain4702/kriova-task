import React, { useContext } from 'react';
import { Button } from '@chakra-ui/react';
import { AuthContext } from '../components/AuthProvider';
import './Dashboard.css';
import img1 from '../images/img1.jpg';

const Dashboard = () => {
  const { logout } = useContext(AuthContext);
  return (
   
    <div className='wrapper'>
      <div className='left'>
        <h2>Kriova</h2>
        <img src={img1} alt='profile'/>
        <h4>Ayush Jain</h4>
        
        <p>Web Developer</p>
        <div >
          <Button className='btn' onClick={()=>{
            logout()
          }}>
            Sign Out
          </Button>
        </div>
      </div>
      <div className='right'>
        <div className='info'>
          <h3>Information</h3>
          <div className='info-data'>
            <div className='data'>
              <h4>Email</h4>
              <p>ayushjain4702@gmail.com</p>
            </div>
            <div className='data'>
              <h4>Contact no.</h4>
              <p>9137716225</p>
            </div>
          </div>
        </div>

        <div className='projects'>
          <h3>Projects</h3>
          <div className='projects-data'>
            <div className='data'>
              <h4><a href='https://github.com/ayushjain4702/fitness_exercise_applicaion'target='_blank' className='a'>Fitness applicaion</a></h4>
              <p>With the functionality to choose exercise categories and specific muscle groups, browse more than one thousand exercises</p>
            </div>
            <div className='data'>
              <h4><a className='a' href='https://github.com/ayushjain4702/Amazon_clone' target='_blank'>Amazon-clone</a></h4>
              <p>This is a clone of popular e-commmerce website Amazon made using ReactJs and Firebase</p>
            </div>
          </div>
        </div>

        <div className="footer-social-icons">
          <h4 className="_14">Follow us on</h4>
          <ul className="social-icons">
              <li><a href="https://www.linkedin.com/in/ayush-jain-3bb160205/" target='_blank'className="social-icon"> <i className="fa fa-linkedin"></i></a></li>
              <li><a href="https://github.com/ayushjain4702" target='_blank'className="social-icon"> <i className="fa fa-google-plus"></i></a></li>
          </ul>
      </div>
          
  </div>        
</div>

  )
}

export default Dashboard;