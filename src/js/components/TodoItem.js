import React from 'react';

export default class TodoItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const item = this.props.item;
        const classList = 'list-group-item' + (item.completed ? ' disabled ' : '');

        return (
            <li className={classList}>
                <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id={item.id} defaultChecked={item.completed} onChange={this.props.handler} value={item.id} />
                    <label className="custom-control-label" htmlFor={item.id}>{item.title}</label>
                </div>
            </li>
        );
    }
}