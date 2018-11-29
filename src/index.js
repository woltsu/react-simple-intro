import React, { Component } from 'react'
import Carousel from 'nuka-carousel'
import styles from './styles'

class Intro extends Component {
  state = {
    current: 0
  }

  updateSlide = (i) => {
    this.setState((prevState) => ({ current: prevState.current + i }))
  }

  afterSlide = (i) => this.setState({ current: i })

  render() {
    const { current } = this.state
    const { active, slides, onFinish } = this.props
    if (!active) { return null }
    const { color } = slides[current]
    const last = (current === slides.length - 1)
    return (
      <Carousel
        slideIndex={current}
        afterSlide={this.afterSlide}
        renderBottomCenterControls={({ nextSlide }) => (
          <React.Fragment>
            { !last && <SlideButton value={<Arrow />} action={nextSlide} /> }
            { last && <SlideButton value={<CheckMark />} action={onFinish} /> }
          </React.Fragment>
        )}
        renderCenterRightControls={() => null}
        renderCenterLeftControls={() => null}
        style={{ ...styles.introContainer, ...(color && { backgroundColor: color }) }}
      >
        { slides.map((slide, i) => {
          return (
            <Slide
              key={i}
              slide={slide}
            />
          )
        }) }
      </Carousel>
    )
  }
}

const Arrow = () => (
  <React.Fragment>
    <span style={styles.arrowBase} />
    <span style={styles.arrowHead} />
  </React.Fragment>
)

const CheckMark = () => <span style={styles.checkMark} />

const SlideButton = ({ value, action }) => (
  <span onClick={(e) => {
    e.preventDefault()
    action()
  }} style={styles.slideButton}>
    { value }
  </span>
)

const Slide = ({ slide }) => {
  const { title, content, color, image } = slide
  return (
    <div style={{ ...styles.cardContainer, ...(color && { backgroundColor: color }) }}>
      <SlideHeader title={title} />
      <div style={styles.cardImageContainer}>{image && <img style={styles.cardImage} src={image} />}</div>
      <div style={styles.cardContent}>{ content }</div>
      <div style={styles.buttons} />
    </div>
  )
}

const SlideHeader = ({ title }) => <div style={styles.cardHeader}>{title}</div>

export default Intro