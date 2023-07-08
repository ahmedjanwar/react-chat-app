import {PrettyChatWindow} from 'react-chat-engine-pretty'

//const CHAT_ENGINE_PROJECT_ID = process.env.CHAT_ENGINE_PROJECT_ID;
//const CHAT_ENGINE_PRIVATE_KEY = "90fb097e-a6dd-40c2-af3b-4ed8a6c8a77a";

const ChatsPage = (props)=>{
    return(
        <div style={{height:'100vh'}}>
            <PrettyChatWindow 
                projectId=  'af933ea2-2df6-4465-bdff-ee4d0d727560' //'af933ea2-2df6-4465-bdff-ee4d0d727560'
                username={props.user.username}
                secret={props.user.secret}
                style={
                    
                    {height: '100%'}
                }
            />
        </div>
    ) ;
}
export default ChatsPage