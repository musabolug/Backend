import {MultiChatSocket,MultiChatWindow,useMultiChatLogic} from "react-chat-engine-advanced"

const  ChatsPage = (props)=>{
    const chatProps= useMultiChatLogic("a6717d6e-fb78-4bca-9154-779e3271d8e8",props.user.username,props.user.secret)
    return( <div style={{height:"100vh"}}>
        <MultiChatSocket {...chatProps} />
        <MultiChatWindow {...chatProps} style={{height:"100%"}} />
    </div>)
}

export default ChatsPage