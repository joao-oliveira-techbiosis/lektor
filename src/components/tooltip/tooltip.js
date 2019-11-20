import React from 'react';
import "./tooltip.scss";

class Tooltip extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isVisible: false,
        }
    }

    componentDidMount() {
        window.addEventListener('click', (e) => {
            if (!document.getElementById('tooltip').contains(e.target)) {
                console.log(document.getElementById('tooltip'));
                console.log(e.target);
                this.setState({ isVisible: false });
            }
        });
    }

    openTooltip = () => {
        this.setState({ isVisible: true });
    };

    render = () => {
        const specialWordClassName = this.state.isVisible ? "special-word visible" : "special-word";
        return (
            <span id="tooltip" className={specialWordClassName}
                onClick={() => this.openTooltip()}>
                WORD
                <span className="tooltip">
                    <span className="tooltip-word">word: </span>
                    tooltip description describing something
                </span>
            </span>
        );
    }
}

export default Tooltip;
