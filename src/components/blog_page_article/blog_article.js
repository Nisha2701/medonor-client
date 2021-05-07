import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './blog_article.css';
import img1 from './img1.jpg';
import pic1 from './pic1.png';
import pic2 from './pic2.png';
import pic3 from './pic3.png';
import {
  Jumbotron,
  Container,
  Row,
  Col,
  Button,
  Card,
  CardDeck,
  Form,
  Badge,
} from 'react-bootstrap';
import { connect } from 'react-redux';

function BlogArticle({ blog }) {
  return (
    <div className='blog-article'>
      <Jumbotron
        className='article-heading'
        style={{ backgroundColor: '#fff' }}
      >
        <Container className='article-heading-content'>
          <h3
            className='article-heading-title'
            style={{ fontSize: '5rem', color: '#1c8a85' }}
          >
            Reconditioning the benefits system for a stronger COVID-19 recovery
          </h3>
          <p>
            {' '}
            <span className='span-published-by'>Published by</span>{' '}
            <span className='span-publisher'>Rachel Green</span> |{' '}
            <span>23 Apr 2021</span>
          </p>
        </Container>
      </Jumbotron>
      <Container fluid='sm' className='blog-article-text'>
        <p style={{ fontSize: '1.7rem' }}>
          <img src={img1} className='blog-article-text-image' />
          <br />
          <br />
          It is undeniable that the benefits system has been a lifeline to many
          during the COVID-19 pandemic, enabling millions of individuals and
          families to continue living with some semblance of normality. The
          demand for Universal Credit in particular has been exceptionally high,
          with 6 million people in receipt of this benefit in January 2021 –
          double the number prior to the pandemic. A smoother system For a
          system with pre-existing issues, the rapid increase in Universal
          Credit applications could have been hugely problematic. But efforts
          made by the Department for Work and Pensions (DWP) during the pandemic
          appear to have protected, if not enhanced, the system. Moving to a
          ‘don’t call us, we’ll call you’ tactic seems to have improved the
          experience of Universal Credit applicants. Similarly, the temporary
          removal of conditionality (in order to speed up the application
          process and because of the impact of the pandemic on the labour
          market) not only helped manage the influx of prospective claimants but
          also improved the experience of recipients. For people claiming
          Universal Credit, the removal of conditionality reduced the potential
          stress of looking for work during such an uncertain time for
          employment across so many sectors. But are people claiming?Despite
          these measures by DWP, new analysis conducted by the University of
          Salford (and funded by the Health Foundation) found that half a
          million (430,000–560,000) people were eligible for Universal Credit at
          the start of the pandemic but did not claim it. According to estimates
          from the study:
          <br />
          <br />
          Nearly a quarter of a million (220,000) people thought they were
          eligible for the payment but didn’t want to claim it. Around 60% of
          this group hadn’t applied because of the perceived hassle of applying,
          including working out if they were eligible, navigating the claims
          process itself or the threat of sanctions. Almost 30% of these people
          say they did not claim because of the stigma surrounding benefits. An
          even greater number (estimated at 280,000–390,000) wrongly thought
          they were ineligible for Universal Credit. An outright majority (59%)
          of those eligible for Universal Credit but who didn’t want to claim it
          said that conditionality would put them off applying for Universal
          Credit in the future. The health consequences of financial strain With
          Health Foundation analysis predicting that 800,000 people in the UK
          will be unemployed and living with poor mental health by the winter,
          it’s vital that the benefits system is available to those who need it.
          A financial safety net can have a considerable impact on people’s
          health – both in reducing mental health concerns such as stress and
          anxiety, but also in improving physical health by ensuring people can
          engage in social activities and afford necessities to live such as
          food and heating.
          <br />
          <br />
          Misunderstanding eligibility and the stigma associated with claiming
          benefits have limited people’s willingness to apply – exacerbating
          financial strains during the current crisis. Research shows that to
          make ends meet, people are taking on more debt, borrowing from family
          or friends, or over-relying on personal savings, which is not
          necessarily sustainable or sufficient to support outgoings. Many of
          those involved in this research reported severe financial strain,
          which means falling behind on bills or not being able to afford fresh
          fruit and vegetables daily. People’s short-term efforts to stabilise
          their financial security ultimately risk undermining their health
          during what has ended up being a prolonged period of pandemic
          restrictions. In using savings or relying on a partner’s income,
          people have become exposed to serious financial hardship, which we
          know causes stress, anxiety and poorer mental health outcomes. In
          turn, this has considerable implications for people’s physical health,
          creating adverse knock-on effects for employment prospects and future
          health. It is clear that an accessible, stigma-free benefits system
          can not only provide financial stability when used as a preventative
          measure, but can also have a hugely positive impact on health.
          <br />
          <br />
          What deters people from applying for Universal Credit? People are
          ostensibly put off from getting the support they need because of a
          lack of understanding of their eligibility or because they have a
          negative perception of the benefits system, often due to the stigma
          associated with claiming. Concern also stems from the negative
          reputation attached to the Universal Credit system itself and to the
          conditionality criteria. While conditionality has an important role to
          play, failing to find the appropriate balance between responsibilities
          and support can do more harm than good – as can a strict sanctioning
          regime. Negative perceptions of Universal Credit appear to have
          deterred thousands of eligible people, who had previously worked and
          suddenly needed a safety net, from claiming financial support.
          <br />
          <br />
          How can access be improved? With some time before the Job Retention
          Scheme ends and unemployment reaches an expected peak by the end of
          the year, the government has an opportunity to do more to address the
          issues that prevent people claiming Universal Credit despite being
          eligible.
          <br />
          <br />
          Easing of conditionality requirements should be continued, to ensure
          people receive the support they need without inappropriate
          expectations to find work while restrictions apply. Keeping good
          practice by maintaining the ‘don’t call us, we’ll call you’ approach
          during the claims process will be key to reducing the mental health
          toll of applying. Better provision of benefits-related information to
          those likely to be at risk of redundancy as the furlough scheme ends
          can also help people prepare for what’s ahead.
          <br />
          <br />
          There is a lot to learn from the pandemic. Rapid changes to Universal
          Credit processes at the start of the first UK lockdown helped the
          benefits system function better. As we move away from lockdown and
          into recovery, the government needs to build on the positive changes
          we have witnessed and continue to protect health through our welfare
          system.
        </p>
      </Container>
      <Jumbotron className='note-jumbo' style={{ backgroundColor: '#DAF1F0' }}>
        <Container>
          <Row>
            <Col>
              <Card body border='light' className='note-card'>
                <Row className='small-note-content'>
                  <Col classname='note-sub-col'>
                    <p>
                      <img src={pic1} className='small-note-image' />
                    </p>
                  </Col>
                  <Col md='auto'>
                    <p className='small-note' style={{ fontSize: '1.3rem' }}>
                      {' '}
                      All our efforts are made possible only because of your
                      support
                    </p>
                  </Col>
                </Row>
              </Card>
            </Col>
            <Col>
              <Card body border='light' className='note-card'>
                <Row className='small-note-content'>
                  <Col classname='note-sub-col'>
                    <p>
                      <img src={pic2} className='small-note-image' />
                    </p>
                  </Col>
                  <Col md='auto'>
                    <p className='small-note' style={{ fontSize: '1.3rem' }}>
                      {' '}
                      Your donations are tax exempted under 80G of the Indian
                      Income Tax Act
                    </p>
                  </Col>
                </Row>
              </Card>
            </Col>
            <Col>
              <Card body border='light' className='note-card'>
                <Row className='small-note-content'>
                  <Col classname='note-sub-col'>
                    <p>
                      <img src={pic3} className='small-note-image' />
                    </p>
                  </Col>
                  <Col md='auto'>
                    <p className='small-note' style={{ fontSize: '1.3rem' }}>
                      {' '}
                      Your donation transactions are completely safe and secure
                    </p>
                  </Col>
                </Row>
              </Card>
            </Col>
          </Row>
        </Container>
      </Jumbotron>
    </div>
  );
}

const mapStateToProps = (state) => ({
  blog: state.ngoblogs.ngoblog,
});

export default connect(mapStateToProps, {})(BlogArticle);
