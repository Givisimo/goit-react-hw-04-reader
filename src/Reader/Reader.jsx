import React, { Component } from 'react';
import T from 'prop-types';
import queryString from 'query-string';
import Controls from '../Controls/Controls';
import Progress from '../Progress/Progress';
import Publication from '../Publication/Publication';

class Reader extends Component {
  state = {};

  static propTypes = {
    items: T.arrayOf(
      T.shape({
        id: T.string.isRequired,
        title: T.string.isRequired,
        text: T.string.isRequired,
      }).isRequired,
    ).isRequired,
    location: T.instanceOf(Object).isRequired,
    history: T.instanceOf(Object).isRequired,
  };

  componentDidMount() {
    const { history, items } = this.props;
    if (this.handlePubInx() <= items.length) {
      return;
    }
    history.replace('/reader?item=1');
  }

  showPublication = () => {
    const pubInxObj = queryString.parse(this.props.location.search);
    const pubInx = pubInxObj.item;
    const pub = this.props.items[pubInx - 1];
    return pub;
  };

  onButtonClick = item => {
    this.props.history.push(`/reader?item=${this.handlePubInx() + item}`);
  };

  handlePubInx = () => {
    const pubInxObj = queryString.parse(this.props.location.search);
    const pubInx = pubInxObj.item;
    return Number(pubInx);
  };

  render() {
    const { items } = this.props;
    const { length } = items;
    const publication = this.showPublication();
    const prevBtnDisabled = this.handlePubInx() === 1;
    const nextBtnDisabled = this.handlePubInx() === length;

    return (
      <>
        <Controls
          onButtonClick={this.onButtonClick}
          prevBtnDisabled={prevBtnDisabled}
          nextBtnDisabled={nextBtnDisabled}
        />
        <Progress currentPage={this.handlePubInx() - 1} totalPages={length} />
        {publication && <Publication publication={publication} />}
      </>
    );
  }
}

export default Reader;
