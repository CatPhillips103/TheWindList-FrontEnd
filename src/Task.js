import React, {Component} from 'react'

class Task extends Component {
    render() {
        return  (
                     <div className="container">
                        <div className="row">
                            <div className="col-12 cp-3 text-center tasklist">
                                <div className="card">
                                    {this.props.listItem.content}
                                    <div>
                                        <button className="taskbuttons"><i className="far fa-check-circle"></i></button>
                                        <button className="taskbuttons"><i className="far fa-trash-alt"></i></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
        )
    }
}

export default Task