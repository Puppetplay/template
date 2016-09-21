import React from 'react';
import Header from '../Header'
import Navigation from '../Navigation'
import ActionBar from '../ActionBar'

const styles = {
    root: {
        backgroundColor: "#f5f5f5",
    },
    bdbx: {
        margin: 30,
    },
    inbx: {
        // maxWidth: 1500,
        margin: "0 auto",
        backgroundColor: "white",
    },
}

class SinglePage extends React.Component {

    render() {
        const {
            children,
            snb,
            maxWidth,
            boxStyle,
            className,
        } = this.props

        const inBoxStyle = maxWidth ? (
            Object.assign({}, styles.inbx, {maxWidth: maxWidth})
        ) : (
            styles.inbx
        )

        return (
            <div>
                <Navigation />
                {snb}
                <div className="snbnext">
                    <Header titleVisible={!snb} />
                    <div className="container">
                        <div className="containerin" style={styles.root}>
                            <div className="content">
                                <div className="bdbx" style={boxStyle}>
                                    <div className={className} style={inBoxStyle}>
                                        {children}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <ActionBar />
                </div>
            </div>
        );
    }
}

export default SinglePage
