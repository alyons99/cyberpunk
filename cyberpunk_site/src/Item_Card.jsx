function Item_Card({type, src, name, description, price}){
    return(
        <div className="item-card" data-type={type}>
            <div className="item-card-header">
                <div className="window-controls">
                    <div className="window-control-btn">_</div>
                    <div className="window-control-btn">□</div>
                    <div className="window-control-btn">×</div>
                </div>
            </div>
            <img className="item_card_image" src ={src}  alt = "image of item"></img>
            <h2 className="item_card_title">{name}</h2>
            <p className="item_card_description">{description}</p>
            <p className="item_card_price">{price}</p>
        </div>
    );
}

export default Item_Card