import React, { Component } from 'react';

interface PopupState {
    isVisible: boolean;
}

class Popup extends Component<{}, PopupState> {
    constructor(props: {}) {
        super(props);
        this.state = {
            isVisible: false
        };
    }

    showPopup = () => {
        this.setState({ isVisible: true });

        // Скрыть всплывающее окно через 3 секунды
        setTimeout(() => {
            this.setState({ isVisible: false });
        }, 3000);
    }

    render() {
        const { isVisible } = this.state;

        return (
            <div>
                <button onClick={this.showPopup}>Показать всплывающее окно</button>
                {isVisible && <div>Всплывающее окно</div>}
            </div>
        );
    }
}

export default Popup;
