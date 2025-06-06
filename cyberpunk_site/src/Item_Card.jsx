function Item_Card(){
    return(
        <div className="item-card">
            <div className="item-card-header">
                <div className="window-controls">
                    <div className="window-control-btn">_</div>
                    <div className="window-control-btn">□</div>
                    <div className="window-control-btn">×</div>
                </div>
            </div>
            <img className="item_card_image" src = "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/53bce4ec-4ede-426e-8645-d5a335f6afe5/ddwyzzn-3194e1b4-3f56-4fde-b2b2-be877c42ae45.jpg/v1/fill/w_1192,h_670,q_70,strp/cyberpunk_2077___arasaka_tactical_cyberdeck_cy_r9_by_xaynder_ddwyzzn-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTA4MCIsInBhdGgiOiJcL2ZcLzUzYmNlNGVjLTRlZGUtNDI2ZS04NjQ1LWQ1YTMzNWY2YWZlNVwvZGR3eXp6bi0zMTk0ZTFiNC0zZjU2LTRmZGUtYjJiMi1iZTg3N2M0MmFlNDUuanBnIiwid2lkdGgiOiI8PTE5MjAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.Ve707V0GcUd4SLMTH_VDxY6SN8C3SDl3CxaUsO0L3M4" alt = "image of item"></img>
            <h2 className="item_card_title">Zetatech Parraline 5750</h2>
            <h3 className="item_card_type">Cyberdeck</h3>
            <p className="item_card_description">Military-grade cyberdeck with enhanced ICE-breaking capabilities. Comes with pre-installed demon programs and hardened security protocols.</p>
        </div>
    );
}

export default Item_Card