import React from 'react'
import GlobalStyles from '../src/GlobalStyles'

export default (renderComponent) => (
  <>
    <GlobalStyles />
    <div style={{ padding: 20, width: 400 }}>{renderComponent()}</div>
  </>
)
