import { Component } from 'react'
import { withRouter } from 'react-router'

// a component to automatically reset the scroll
// on mount (see https://reacttraining.com/react-router/web/guides/scroll-restoration/scroll-to-top)
class ScrollToTop extends Component {
  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      window.scrollTo(0, 0)
    }
  }

  render() {
    return this.props.children
  }
}

export default withRouter(ScrollToTop)
