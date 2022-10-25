import P from 'prop-types'

export const Button = ({ children, actionClick}) => {
    return (    
        <button type="button" onClick={actionClick}>{children}</button>
    )
}

Button.propTypes = {
    children: P.node.isRequired,
    actionClick: P.func.isRequired
}