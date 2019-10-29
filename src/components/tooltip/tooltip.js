import React from 'react';
import "./tooltip.scss";

class Tooltip extends React.PureComponent {
    render() {
        return (
            <span class="con-tooltip top">
                {this.props.children}
                <div class="tooltip ">
                    Tope
                </div>
            </span>
        );
    }
}

export default Tooltip;
