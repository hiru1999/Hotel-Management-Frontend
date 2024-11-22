
function UserTag(props){
    
    return(
        <div>
            <img src={props.imageLink} />
            <span>{props.name}</span>
        </div>
    )
}

export default UserTag;