import React, { Component } from 'react';
import PropTypes from 'prop-types';


class TypeList extends Component {
    render() {
        return this.props.types.map(type => (
            <div>
                <h3>
                    {type.name}
                </h3>
            </div>
        ))
    }
}

// PropTypes
TypeList.propTypes = {
    types: PropTypes.array.isRequired
}

export default TypeList
