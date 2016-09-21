import React from 'react';

class TitleBar extends React.Component {

    componentDidMount(){

    }

    render() {
        const {
            path,
            subTitle
        } = this.props;

        return (
           <div className="sa_container_header">
                <div className="container_menutree">{this.props.path}  <strong>{this.props.subTitle}</strong></div>
                <h1>{this.props.subTitle}</h1>
            </div>
        );
    }
}

export default TitleBar;
