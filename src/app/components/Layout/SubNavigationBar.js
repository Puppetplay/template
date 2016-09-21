import React from 'react';
import LUXButton from 'luna-rocket/LUXButton'

function getStyles(state) {
    return {
        root: {
            backgroundColor: "#f5f5f5",
        },
        snbOpen: {
            border: 'none',
            position: 'absolute',
            top: '22px',
            right: '0',
            width: '15px',
            height: '21px',
            zIndex: 10,
        },
        spLux: {
            display: 'inline-block',
            overflow: 'hidden',
            lineHeight: '100em',
            verticalAlign: 'top',
            width: '15px',
            height: '21px',
            backgroundPosition: state.snbIsOpen ? '-275px -200px' : '-300px -200px',
            backgroundSize: 'auto',
        },
    };
}

class SubNavigationBar extends React.Component {
    state = {
        snbIsOpen: true,
    }

    handleTouchTap = () => {
        let snbIsOpen = this.state.snbIsOpen;

        this.setState({
            snbIsOpen: !snbIsOpen,
        });
    } 

    render() {
        const {
            children,
            title,
        } = this.props;

        const styles = getStyles(this.state);
 
        return (
            <div className={this.state.snbIsOpen ? "snb active" : "snb"}>
                <LUXButton
                    type="image"
                    style={styles.snbOpen}
                    innerStyle={styles.spLux}
                    imageUrl="http://luna.duzon.com/imgs/common/sp_lux.png"
                    onTouchTap={this.handleTouchTap}
                />
                <div className="snbin">
                    <div className="menu_tit">
                        {title}
                    </div>
                    {children}
                </div>
            </div>
        );
    }
}

export default SubNavigationBar
