import React from 'react';

export default class AllPuppies extends React.Component {
  componentDidMount() {
    console.log('AllPuppies rendered');
    this.props.fetchPuppies();
  }

  render() {
    const { allPuppies } = this.props;
    return (
      <div>
        <ul className="list-unstyled">
          {allPuppies.map(puppy => {
            return (
              <li>
                <a href="#">{puppy.name}</a>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
