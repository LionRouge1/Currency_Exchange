import { Component } from 'react';
import { connect } from 'react-redux';
import { currencysymbols } from '../../redux/api/api';
import screenContext from '../screenContex';
import Currency from '../Currency';
import FilterInput from '../FilterInput';
import '../styles/homepage.css';
import { filterAction } from '../../redux/exchange/exchange';

class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const { symbol } = this.props;
    symbol();
  }

  filter = (key) => {
    const { filtring } = this.props;
    filtring(key);
  }

  render() {
    const { currency } = this.props;
    const screenWidth = this.context;
    const phoneUl = screenWidth ? 'phoneUl' : 'homepage';
    return (
      <div className="home_box">
        <FilterInput
          filter={this.filter}
        />
        <div className={phoneUl}>
          <ul>
            {
              currency.map((item) => (
                <Currency
                  key={currency.indexOf(item)}
                  currcy={item}
                />
              ))
            }
          </ul>
        </div>
      </div>
    );
  }
}

Homepage.contextType = screenContext;

const mapStateToProps = (state) => ({
  currency: state.Currency.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  symbol: () => {
    dispatch(currencysymbols());
  },
  filtring: (key) => {
    dispatch(filterAction(key));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);
