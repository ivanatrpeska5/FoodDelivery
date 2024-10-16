import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './component/home/home.component';
import { RequestInterceptor } from './request.interceptor';
import { RestaurantsComponent } from './component/restaurants/restaurants.component';
import { RestaurantComponent } from './component/restaurant/restaurant.component';
import { RegisterComponent } from './component/register/register.component';
import { CartComponent } from './component/cart/cart.component';
import { OrderComponent } from './component/order/order.component';
import { AddFoodComponent } from './component/add-food/add-food.component';
import { PaymentComponent } from './component/payment/payment.component';
import { SuccessfulOrderComponent } from './component/successful-order/successful-order.component';
import { CustomerOrdersComponent } from './component/customer-orders/customer-orders.component';
import { RestaurantOrdersComponent } from './component/restaurant-orders/restaurant-orders.component';
import { AcceptOrderDeliveryComponent } from './component/accept-order-delivery/accept-order-delivery.component';
import { CurrentOrderDeliveryComponent } from './component/current-order-delivery/current-order-delivery.component';
import { FinishedOrderDeliveryComponent } from './component/finished-order-delivery/finished-order-delivery.component';
import { AboutUsComponent } from './component/about-us/about-us.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddSaleComponent } from "./component/add-sale/add-sale.component";
import { NgxChartsModule } from "@swimlane/ngx-charts";
import { AdminPanelComponent } from "./component/admin-panel/admin-panel.component";
import { AddRestaurantComponent } from "./component/add-restaurant/add-restaurant.component";
import { NgSelectModule } from "@ng-select/ng-select";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatSelectModule } from "@angular/material/select";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    RestaurantsComponent,
    RestaurantComponent,
    RegisterComponent,
    CartComponent,
    OrderComponent,
    AddFoodComponent,
    PaymentComponent,
    SuccessfulOrderComponent,
    CustomerOrdersComponent,
    RestaurantOrdersComponent,
    AcceptOrderDeliveryComponent,
    CurrentOrderDeliveryComponent,
    FinishedOrderDeliveryComponent,
    AboutUsComponent,
    AddSaleComponent,
    AdminPanelComponent,
    AddRestaurantComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NgxChartsModule,
    NgSelectModule,
    MatFormFieldModule,
    MatSelectModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: RequestInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
