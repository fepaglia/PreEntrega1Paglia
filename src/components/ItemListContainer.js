const ItemListContainer = (props) => {
    return (
        <div style={{
            border:"1px black solid",
            width: "600px",
            height: "300px",
            backgroundColor: "green",

            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
        }}>
            <p style={{
                fontSize: "2.2rem",
                textAlign: "center",
                paddingTop: "50px"
            }}>{props.greeting}</p>
        </div>

    )
};

export default ItemListContainer;