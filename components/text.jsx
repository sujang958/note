import rn from "react-native"
import React from "react"

const Text = ({ style, children }) => {
  return (
    <rn.Text
      style={{
        fontFamily: "NotoSansBold",
        color: "#fff",
        ...style,
      }}
    >
      {children}
    </rn.Text>
  )
}

export default Text
