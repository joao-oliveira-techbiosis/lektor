import React from 'react';
import PropTypes from 'prop-types';
import "./tooltip.scss";

class Tooltip extends React.Component {

    static propTypes = {
        word: PropTypes.string,
    };

    static defaultProps = {
        word: '',
    };

    constructor(props) {
        super(props);

        this.state = {
            isVisible: false,
        }
    }

    componentDidMount() {
        window.addEventListener('click', (e) => {
            if (document.getElementById(`tooltip_${this.props.word}`) !== null) {
                if (!document.getElementById(`tooltip_${this.props.word}`).contains(e.target)) {
                    console.log(document.getElementById(`tooltip_${this.props.word}`));
                    console.log(e.target);
                    this.setState({ isVisible: false });
                }
            }
        });
    }

    openTooltip = () => {
        this.setState({ isVisible: true });
    };

    render = () => {
        const specialWordClassName = this.state.isVisible ? "special-word visible" : "special-word";
        return (
            <span id={`tooltip_${this.props.word}`} className={specialWordClassName}
                onClick={() => this.openTooltip()}>
                {this.props.word}
                <span className="tooltip">
                    <span className="tooltip-word">{this.props.word}: </span>
                    {this.props.children}
                </span>
            </span>
        );
    }
}

export default Tooltip;
