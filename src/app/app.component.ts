import { Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent{
  paymentRequest : google.payments.api.PaymentDataRequest = {
    apiVersion: 2,
    apiVersionMinor: 0,
    allowedPaymentMethods: [
      {
        type: 'CARD',
        parameters: {
          allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
          allowedCardNetworks: ['VISA', 'MASTERCARD', 'AMEX'],
        },
        tokenizationSpecification: {
          type: 'PAYMENT_GATEWAY',
          parameters: {
            gateway: 'example',
            gatewayMerchantId: 'examplegatewayMerchantId',

          },
        },
      },
    ],
  merchantInfo: {
    merchantId: '3128-4250-8444',
    merchantName: 'Colegio Pierre Faure',
  },
  transactionInfo: {
    totalPriceStatus: 'FINAL',
    totalPriceLabel: 'Total',
    totalPrice: '0.10',
    currencyCode:  'MXN',
    countryCode: 'MX'
  },
  callbackIntents:  ['PAYMENT_AUTHORIZATION']
};

onLoadPaymentData = (
  event : Event): void => {
    const eventDetail = event as CustomEvent<google.payments.api.PaymentData>;
    console.log('load payment data', eventDetail.detail);
  }

onPaymentDataAuthorized: google.payments.api.PaymentAuthorizedHandler = (paymentData) => {
  console.log('payment authorized', paymentData);
  return {
    transactionState: 'SUCCESS'
  };
}

onError = (event: ErrorEvent): void => {
  console.error('error', event.error);
}
}

//El Darío me la viene pelando
//Dejese venir pues joto
