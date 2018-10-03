import React, { Component } from 'react';
import './CurrencyDetails.css';
import { Header, Divider } from 'semantic-ui-react';
import { getDetailsData } from '../../services/api/api';
import CustomLoader from '../Loader/CustomLoader';
import DetailsTable from '../CurrencyDetails/DetailsTable/DetailsTable';
import { formatTwoDecimals } from '../../services/util/Util';

class CurrencyDetails extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            isLoading : true,
            details : []
        }
    }

    componentDidMount() {
        const { params } = this.props.match;
        console.log(typeof params.id, 'props details');
        const detailsId = parseInt(params.id, 10);
        getDetailsData(detailsId).then(response => {
            this.setState({details : response.data, isLoading : false});
            console.log(response.data)
        })
        .catch(error => console.log(error));
    }
    colorPercentage(value) {
        if(value < 0) {
            return 'red'
        } else if(value > 0) {
            return 'green'
        } else {
            return ''
        }
    }
    renderDetails() {
        const { details } = this.state;
        return <div className='details-container'>

                <div className='details-header--panel'>
                
                    <div className='details-header--panel-left'>
                        <Header className='details-header--item header-name' as='h2'>{details.name}</Header>  
                        <Header className='details-header--item header-symbol' as='h4'>{`(${details.symbol})`}</Header>
                    </div>
                    <div className='details-header--panel-right'>
                        <span className='details-header--panel-price'><h3>{`$${formatTwoDecimals(details.quotes.USD.price)}`}</h3></span>
                        <span className='details-header--panel-currency'><h3>USD</h3></span>
                        <span className={`details-header--panel-percentage ${this.colorPercentage(details.quotes.USD.percent_change_24h)}`}><h3>({details.quotes.USD.percent_change_24h}%)</h3></span>
                    </div>
                </div>
                <Divider className='divider' horizontal>details</Divider>
                <div className='details-content'>
                    <DetailsTable columns={['market cap', 'volume (24h)', 'circulating supply', 'max supply']} data={details}/>
                </div>
                <Divider className='divider placeholder-margin' horizontal>placeholder</Divider>
                </div>
    }

    render() {
        const { isLoading } = this.state;
        return isLoading === true ? <CustomLoader/> : this.renderDetails();
    }


}

export default CurrencyDetails;