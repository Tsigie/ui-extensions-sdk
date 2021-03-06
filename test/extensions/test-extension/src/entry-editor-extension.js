import React from 'react'
import PropTypes from 'prop-types'
import { TextInput, Textarea, Card } from '@contentful/forma-36-react-components'

export class EntryEditorExtension extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: props.sdk.entry.fields.title.getValue() || '',
      body: props.sdk.entry.fields.body.getValue() || ''
    }
  }

  componentDidMount() {
    this.props.sdk.entry.fields.title.onValueChanged(value => {
      this.setState({ title: value })
    })
    this.props.sdk.entry.fields.body.onValueChanged(value => {
      this.setState({ body: value })
    })
  }

  onTitleChange = e => {
    const value = e.target.value || ''
    this.setState({ title: value })

    if (value) {
      this.props.sdk.entry.fields.title.setValue(value)
    } else {
      this.props.sdk.entry.fields.title.removeValue()
    }
  }

  onBodyChange = e => {
    const value = e.target.value || ''
    this.setState({ body: value })

    if (value) {
      this.props.sdk.entry.fields.body.setValue(value)
    } else {
      this.props.sdk.entry.fields.body.removeValue()
    }
  }

  render() {
    return (
      <>
        <Card className="f36-margin--xl">
          <TextInput
            className="f36-margin-bottom--xl"
            testId="title-field"
            width="large"
            type="text"
            id="my-title"
            value={this.state.title}
            onChange={this.onTitleChange}
          />
          <Textarea
            testId="body-field"
            width="large"
            type="text"
            id="my-body"
            value={this.state.body}
            onChange={this.onBodyChange}
          />
        </Card>
      </>
    )
  }
}

EntryEditorExtension.propTypes = {
  sdk: PropTypes.object.isRequired
}
