import React, { Component } from "react"
import TransitionLink, { TransitionPortal } from "gatsby-plugin-transition-link"
import { TimelineMax, Power1 } from "gsap"

export default class Cover extends Component {
  constructor(props) {
    super(props)

    this.vertical = this.vertical.bind(this)

    this.cover = React.createRef()
    this.cover2 = React.createRef()
  }

  vertical = ({ node, props: { length: seconds } }) => {
    const directionTo = "-100%"
    const directionFrom = "100%"

    const wait = seconds / 6
    const half = (seconds - wait) / 2

    const layer1 = new TimelineMax()
      .set(this.cover, { y: directionFrom })
      .to(this.cover, half, {
        y: "0%",
        ease: Power1.easeInOut,
      })
      .set(node, { opacity: 0 })
      .to(
        this.cover,
        half,
        {
          y: directionTo,
          ease: Power1.easeIn,
        },
        `+=${wait}`
      )

    const layer2 = new TimelineMax()
      .set(this.cover2, { y: directionFrom })
      .to(this.cover2, half, {
        y: "0%",
        ease: Power1.easeInOut,
      })
      .set(node, { opacity: 0 })
      .to(
        this.cover2,
        half,
        {
          y: directionTo,
          ease: Power1.easeIn,
        },
        `+=${wait}`
      )
    return layer1, layer2
  }

  render() {
    const length = this.props.duration || 1
    const {
      exit: removedExit,
      entry: removedEntry,
      cover: removedProp,
      ...props
    } = this.props
    return (
      <>
        <TransitionLink
          exit={{
            length: length,
            trigger: ({ exit, node }) => this.vertical({ props: exit, node }),
          }}
          entry={{
            delay: length / 2,
          }}
          {...props}
        >
          {this.props.children}
        </TransitionLink>
        <TransitionPortal>
          <div
            ref={n => (this.cover2 = n)}
            style={{
              position: "fixed",
              background: "#4b2571",
              top: 0,
              left: 0,
              width: "100vw",
              height: "80vh",
              transform: "translateY(130%)",
            }}
          />
          <div
            ref={n => (this.cover = n)}
            style={{
              position: "fixed",
              background: this.props.bg || "#4b2571",
              top: 0,
              left: 0,
              width: "100vw",
              height: "100vh",
              transform: "translateY(100%)",
            }}
          />
        </TransitionPortal>
      </>
    )
  }
}
