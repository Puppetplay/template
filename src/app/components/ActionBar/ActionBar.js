import React from 'react';

class ActionBar extends React.Component {

    render() {
        const {
            children,
        } = this.props

        return (children ? (
            <div className="actionbar">
                <div className="bdbx">
                     <div className="bdbxin">
                        Actionbar
                    </div>
                </div>
            </div>
        ) : null);
    }
}

export default ActionBar;
