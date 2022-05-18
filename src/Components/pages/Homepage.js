import { Component } from 'react';
import { connect } from 'react-redux';
import { currencysymbols } from '../../redux/api/api';
import Currency from '../Currency';

class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  componentDidMount() {
    const { symbol } = this.props;
    symbol();
  }

  render() {
    const { currency } = this.props;
    return (
      <ul>
        {
          currency.map((item) => (
            <Currency
              key={currency.indexOf(item)}
              currcy={item}/>
          ))
        }
      </ul>
    )
  }
}

const mapStateToProps = (state) => ({
  currency: state.Currency.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  symbol: () => {
    dispatch(currencysymbols())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);
