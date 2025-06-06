function Item_Card(props){
    return(
        <div className="item-card">
            <div className="item-card-header">
                <div className="window-controls">
                    <div className="window-control-btn">_</div>
                    <div className="window-control-btn">□</div>
                    <div className="window-control-btn">×</div>
                </div>
            </div>
            <img className="item_card_image" src ={props.src}  alt = "image of item"></img>
            <h2 className="item_card_title">{props.name}</h2>
            <h3 className="item_card_type">{props.type}</h3>
            <p className="item_card_description">{props.description}</p>
        </div>
    );
}

export default Item_Card