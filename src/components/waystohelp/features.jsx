import {Row, Col} from 'reactstrap';

export const Features = (props) => {
    return (
      <div id='features' className='text-center'>
        <div className='container'>
          <Row>
          <div className='col-md-10 col-md-offset-1 section-title'>
            <h2>Added Bonus</h2>
          </div>
          </Row>
          <Row>
          <div className='row featrow'>
            {props.data
              ? props.data.map((d, i) => (
                  <div key={`${d.title}-${i}`} className='col-xs-6 col-md-3 featcol'>
                    {' '}
                    <i className={d.icon}></i>
                    <h3>{d.title}</h3>
                    <p>{d.text}</p>
                  </div>
                ))
              : 'Loading...'}
          </div>
          </Row>
        </div>
      </div>
    )
  }
  