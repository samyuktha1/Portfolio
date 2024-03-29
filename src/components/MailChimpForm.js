import MailChimpSubscribe from 'react-mailchimp-subscribe';

export const MailChimpSubscribe=()=>{
    const postUrl=`$(process.env.REACT_APP_MAILCHIMP_URL)?u=$(process.env.REACT_APP_MAILCHIMP_U)$id=${process.env.REACT_APP_MAILCHIMP_ID}`

    return(
        <>
        <MailChimpSubscribe
        url={postUrl}
        render={({subscribe,status,message})=>(
            <></>
    )}
        ></MailChimpSubscribe></>
    )
}