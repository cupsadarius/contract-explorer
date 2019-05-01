import Reader from '../components/Reader';
import { connect } from 'react-redux';
import { web3, isConnected} from '../../../redux/components/web3/selectors';
import { contract, contractError} from '../../../redux/components/reader/selectors';
import { setField, setError } from '../../../redux/components/reader/actions';
const mapDispatchToProps = {
  setField,
  setError
};

const mapStateToProps = (state) => ({
  web3: web3(state),
  isConnected: isConnected(state),
  contract: contract(state),
  contractError: contractError(state)
});

export default connect(mapStateToProps, mapDispatchToProps)(Reader);