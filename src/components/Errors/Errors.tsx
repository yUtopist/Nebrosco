import React from 'react'

interface ErrorHandlerTypes {
  element?: any;
  message?: string;
  type?: string
}
export default function ErrorHandler(
  element?: any,
  message?: string,
  type?: string) {
  if (type === 'Dashboard Element') {
    // return console.log('weird error ' + message)
    return <div>???</div>
  }

  return console.log('weird error ' + message)
}