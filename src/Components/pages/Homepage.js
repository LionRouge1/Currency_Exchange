import { Component } from 'react';
import { connect } from 'react-redux';
import { currencysymbols } from '../../redux/api/api';
import Currency from '../Currency';
import FilterInput from '../FilterInput';
import '../styles/homepage.css';

class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  filter = (key) => {
    const uKey = key.toUpperCase();
    const li = document.querySelectorAll('li');
    li.forEach((element) => {
      const context = element.textContent.toUpperCase();
      if (context.indexOf(uKey) > -1) {
        element.style.display = '';
      } else {
        element.style.display = 'none';
      }
    })
  }

  componentDidMount() {
    const { symbol } = this.props;
    symbol();

  }

  render() {
    const { currency } = this.props;
    return (
      <>
        <FilterInput
          filter={this.filter}
        />
        <div className='homepage'>
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
      </>
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
