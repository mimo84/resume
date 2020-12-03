import React from "react"

interface IHeader {
  title: string
}
export default (props: IHeader) => {
  return <h1>{props.title}</h1>
}
