export const withStyle = (WrappedComponent) => {
  return function (props) {
    return (
      <div style={{ padding: "20px", border: "3px solid red" }}>
        <WrappedComponent {...props} />
      </div>
    )
  }
}