import * as React from 'react'
import { configure, addDecorator } from '@storybook/react'
import { ThemeProvider } from 'styled-components'
import { createGlobalStyles } from '../src/styles'
import theme from '../src/styles/theme'

function loadStories() {
  require('../stories/alert.stories')
  require('../stories/button.stories')
  require('../stories/formInput.stories')
  require('../stories/formSelect.stories')
  require('../stories/formTextarea.stories')
  require('../stories/navbar.stories')
  require('../stories/spinner.stories')
  require('../stories/typography.stories')
}

const GlobalStyle = createGlobalStyles()

addDecorator(
  story => (
    <ThemeProvider theme={theme}>
      <React.Fragment>
        <GlobalStyle />
        {story()}
      </React.Fragment>
    </ThemeProvider>
  ))

configure(loadStories, module)
