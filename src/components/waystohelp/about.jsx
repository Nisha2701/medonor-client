import aboutimg from '../../images/Caraousel/Car2.jpg'
import './wth.css'

export const About = (props) => {
    return (
      <div id='about'>
        <div className='container'>
          <div className='row'>
            <div className='col-xs-12 col-md-6'>
              {' '}
              <img src={aboutimg} className='img-responsive' alt='' />{' '}
            </div>
            <div className='col-xs-12 col-md-6 about-pad'>
              <div className='about-text '>
                <h2>Why Donate?</h2>
                <p>{props.data ? props.data.paragraph : 'loading...'}</p>
                </div>
            </div>
          </div>
        </div>
      </div>
    )
  }