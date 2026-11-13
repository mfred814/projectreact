import { Button, Card, Col, Container, Nav, Navbar, Row } from 'react-bootstrap'
import './App.css'

const services = [
  {
    title: 'Web Development',
    description: 'Learn how to build modern and responsive websites.',
    action: 'Learn More',
    type: 'web',
    number: '01',
  },
  {
    title: 'UI/UX Design',
    description: 'Discover creative and user-friendly website designs.',
    action: 'Explore More',
    type: 'design',
    number: '02',
  },
  {
    title: 'React Development',
    description: 'Build interactive websites using React components.',
    action: 'Get Started',
    type: 'react',
    number: '03',
  },
]

function CardIllustration({ type }) {
  return (
    <div className={`card-illustration illustration-${type}`} aria-hidden="true">
      {type === 'web' && (
        <svg viewBox="0 0 280 180" role="presentation">
          <rect x="36" y="24" width="208" height="132" rx="14" className="art-window" />
          <path d="M36 53h208" className="art-line" />
          <circle cx="54" cy="39" r="4" className="art-dot" />
          <circle cx="68" cy="39" r="4" className="art-dot art-dot-two" />
          <rect x="55" y="72" width="79" height="62" rx="8" className="art-block" />
          <rect x="148" y="76" width="69" height="8" rx="4" className="art-line art-line-wide" />
          <rect x="148" y="94" width="54" height="7" rx="3.5" className="art-muted" />
          <rect x="148" y="110" width="64" height="7" rx="3.5" className="art-muted" />
          <path d="m76 105 13-13 13 13-13 13z" className="art-accent" />
        </svg>
      )}
      {type === 'design' && (
        <svg viewBox="0 0 280 180" role="presentation">
          <rect x="58" y="30" width="164" height="122" rx="15" className="art-window" />
          <rect x="77" y="49" width="66" height="84" rx="10" className="art-block" />
          <circle cx="110" cy="82" r="17" className="art-accent" />
          <path d="M96 113c6-11 22-11 28 0" className="art-line" />
          <rect x="157" y="54" width="45" height="8" rx="4" className="art-line art-line-wide" />
          <rect x="157" y="73" width="38" height="7" rx="3.5" className="art-muted" />
          <rect x="157" y="88" width="42" height="7" rx="3.5" className="art-muted" />
          <rect x="157" y="108" width="35" height="14" rx="7" className="art-pill" />
          <path d="m215 35 6 11 12 2-9 8 2 12-11-6-10 6 2-12-9-8 12-2z" className="art-star" />
        </svg>
      )}
      {type === 'react' && (
        <svg viewBox="0 0 280 180" role="presentation">
          <ellipse cx="140" cy="90" rx="82" ry="31" className="art-orbit" />
          <ellipse cx="140" cy="90" rx="82" ry="31" className="art-orbit orbit-tilt-one" />
          <ellipse cx="140" cy="90" rx="82" ry="31" className="art-orbit orbit-tilt-two" />
          <circle cx="140" cy="90" r="11" className="art-accent" />
          <circle cx="66" cy="78" r="5" className="art-dot" />
          <circle cx="206" cy="110" r="5" className="art-dot art-dot-two" />
        </svg>
      )}
    </div>
  )
}

function App() {
  return (
    <>
      <div className="App">
        <Navbar expand="lg" className="site-navbar">
          <Container>
            <Navbar.Brand href="#home" className="brand">
              <span className="brand-mark">M</span>
              My React Website
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="main-navigation" />
            <Navbar.Collapse id="main-navigation">
              <Nav className="ms-auto align-items-lg-center">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#about">About</Nav.Link>
                <Nav.Link href="#services">Services</Nav.Link>
                <Nav.Link href="#contact">Contact</Nav.Link>
                <Button className="nav-cta" href="#services">Explore services</Button>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <main>
          <section className="hero-section" id="home">
            <Container>
              <div className="hero-content">
                <span className="eyebrow"><span className="eyebrow-dot" /> A little creativity goes a long way</span>
                <h1>Welcome to My <span>React Website</span></h1>
                <p className="hero-subtitle">
                  A friendly place to explore thoughtful design, modern websites, and the magic of React.
                </p>
                <div className="hero-actions">
                  <Button className="button-primary" href="#services">Explore what we do <span aria-hidden="true">→</span></Button>
                  <a className="text-link" href="#about">Get to know us</a>
                </div>
                <div className="hero-note">
                  <span className="note-icon" aria-hidden="true">✦</span>
                  Made for curious minds and big ideas.
                </div>
              </div>
              <div className="hero-decoration decoration-one" aria-hidden="true" />
              <div className="hero-decoration decoration-two" aria-hidden="true" />
            </Container>
          </section>

          <section className="services-section" id="services">
            <Container>
              <div className="section-heading">
                <span className="eyebrow">What we can create</span>
                <h2>Ideas into experiences.</h2>
                <p>Pick a starting point. We’ll make the learning part feel a little more fun.</p>
              </div>
              <Row className="g-4">
                {services.map((service) => (
                  <Col key={service.title} md={6} lg={4}>
                    <Card className="service-card h-100">
                      <CardIllustration type={service.type} />
                      <Card.Body>
                        <div className="card-meta">
                          <span>{service.number}</span>
                          <span className="card-arrow" aria-hidden="true">↗</span>
                        </div>
                        <Card.Title>{service.title}</Card.Title>
                        <Card.Text>{service.description}</Card.Text>
                        <Button variant="link" className="card-link" href="#contact">
                          {service.action} <span aria-hidden="true">→</span>
                        </Button>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Container>
          </section>

          <section className="about-section" id="about">
            <Container className="about-content">
              <span className="about-sparkle" aria-hidden="true">✳</span>
              <div>
                <span className="eyebrow">A good place to begin</span>
                <h2>Small steps. Bright ideas. Real progress.</h2>
              </div>
              <p>
                This website is built from reusable React components—little pieces that work together to make one
                welcoming experience.
              </p>
            </Container>
          </section>

          <section className="contact-section" id="contact">
            <Container>
              <div className="contact-panel">
                <div>
                  <span className="eyebrow">Your next idea starts here</span>
                  <h2>Ready to make something?</h2>
                  <p>Take a look around and find the project that sparks your curiosity.</p>
                </div>
                <Button className="button-light" href="#home">Back to the top <span aria-hidden="true">↑</span></Button>
              </div>
            </Container>
          </section>
        </main>

        <footer className="site-footer">
          <Container>
            <span>© 2026 My React Website</span>
            <span>Built with curiosity and React.</span>
          </Container>
        </footer>
      </div>
    </>
  )
}

export default App
