const Footer = ({ length }) => {
    const footerstyle = {
        width: "100%",
        padding: "20px",
        backgroundColor: "black",
        color: "white",
        marginTop: "300px"
    }
  return (
    <div style={footerstyle}>{length} List {length === 1 ? "item" : "items"}</div>
  )
}

export default Footer