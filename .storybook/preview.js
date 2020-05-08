import React from 'react'
import GlobalStyles from '../src/GlobalStyles'
import { MemoryRouter as Router } from 'react-router-dom'

export default (renderComponent) => (
  <>
    <Router>
      <GlobalStyles />
      <div style={{ padding: 20, width: 700 }}>{renderComponent()}</div>
    </Router>
  </>
)
