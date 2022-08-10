// import React, { memo } from 'react'
import React from 'react'
import { defineMessages } from 'react-intl'

import styles from './styles.css'

interface Props {
  active: boolean
}

const HelloWorld = ({ active }: Props) => {
  return <div className={styles.helloWorld}>{active && 'Hello World! 🌎'}</div>
}

// const MemoizedHelloWorld = memo(HelloWorld)

const messages = defineMessages({
  title: {
    id: 'admin/editor.hello-world.title',
    defaultMessage: '',
  },
  activation: {
    id: 'admin/editor.hello-world.activation',
    defaultMessage: '',
  },
})

const defaultProps = {
  active: true,
}

HelloWorld.defaultProps = defaultProps

HelloWorld.schema = {
  title: messages.title.id,
  type: 'object',
  properties: {
    active: {
      type: 'boolean',
      title: messages.activation.id,
      default: defaultProps.active,
    },
  },
}

export default HelloWorld
