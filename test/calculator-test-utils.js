import React from 'react'
import PropTypes from 'prop-types'
import {render as rtlRenderer} from '@testing-library/react'
import {ThemeProvider} from '@emotion/react'
import * as themes from '../src/themes'

function render(ui, {theme = themes.dark, ...options} = {}) {
  const Wrapper = ({children}) => (
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  )
  Wrapper.propTypes = {children: PropTypes.node}

  return rtlRenderer(ui, {wrapper: Wrapper, ...options})
}
export * from '@testing-library/react'
// override the built-in render with our own
export {render}
