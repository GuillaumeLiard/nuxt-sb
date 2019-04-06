/* eslint-disable react/react-in-jsx-scope, react/no-this-in-sfc */

import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'

import Logo from '../components/Logo'

storiesOf('Logo', module).add('Logo', () => ({
  components: { Logo },
  template: '<Logo />'
}))
