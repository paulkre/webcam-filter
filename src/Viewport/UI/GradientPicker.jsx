import React, { Component } from "react"
import styled from "styled-components"
import ColorPicker from "./ColorPicker"

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  &:not(:last-child) {
    padding-bottom: 0.5rem;
  }
`

const Label = styled.span`
  font-size: 0.9em;
`

const PickerWrap = styled.div`
  display: flex;
  flex-flow: row nowrap;
`

const Picker = styled.div`
  &:not(:last-child) {
    padding-right: 0.5rem;
  }
`

class GradientPicker extends Component {
  componentDidMount() {
    const { onChange, defaultColors, id } = this.props
    if (onChange && defaultColors)
      defaultColors.forEach((hex, key) => onChange({ id, key, hex }))
  }

  render() {
    const { colors, label } = this.props
    if (colors.length === 0) return null
    return (
      <Wrapper>
        <Label>{`${label}:`}</Label>
        <PickerWrap>
          {colors.map((color, i) => (
            <Picker key={i}>
              <ColorPicker color={color} onChange={this.handleColorChange(i)} />
            </Picker>
          ))}
        </PickerWrap>
      </Wrapper>
    )
  }

  handleColorChange = key => hex => {
    const { onChange, id } = this.props
    if (onChange) onChange({ id, key, hex })
  }
}

GradientPicker.defaultProps = { colors: ["white", "white"] }

export default GradientPicker
