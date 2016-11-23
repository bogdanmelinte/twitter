import { NgModule } from '@angular/core/src/metadata/ng_module';
import { BrowserModule } from '@angular/platform-browser';
import { HomeComponent } from './home/home.component';
import { NoContentComponent } from './no-content/no-content.component';

@NgModule({
    imports: [
        BrowserModule

    ],
    declarations: [
        HomeComponent,
        NoContentComponent
    ],

    exports:[
        HomeComponent,
        NoContentComponent
    ]

})
export class CoreModule {
}