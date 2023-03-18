import ItemList from './ItemList'

const contstyle = {
  height: 400,
  width: "100%",
  
}

const Content = (props) => {
  let handleCheck = props.handleCheck
  let handleDelete = props.handleDelete
  let items = props.items
  console.log(props.items);
  return (
    <main style={contstyle}>
      {items.length ? (
        <ItemList items={items}
        handleCheck = {handleCheck}
        handleDelete = {handleDelete}
        />
        ) : (
          <p style={{marginTop: '2rem'}}> Your list is empty</p>
        )}     
    </main>
  )
}

export default Content