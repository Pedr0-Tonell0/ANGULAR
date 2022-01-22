import { InjectionToken } from "@angular/core";
import { PayPalConfig } from "src/app/models/paypal-config";

const PayPalToken = new InjectionToken<PayPalConfig>('PAPAL TOKEN')

export{PayPalToken}
