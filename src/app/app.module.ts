import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {FlexLayoutModule} from "@angular/flex-layout";
import {MatMenuModule, MatInputModule, MatButtonModule, MatIconModule, MatCheckboxModule, MatCardModule, MatTabsModule,
        MatTooltipModule} from '@angular/material';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

import {CodemirrorModule} from 'ng2-codemirror';

import {AppComponent} from './app.component';
import {Ng2JsonSchemaBuilderComponent} from './ng2-json-schema-builder/ng2-json-schema-builder.component';
import {BaseSchemaComponent,LoadSchemaDirective,SchemaLoaderComponent,StandardInputComponent,TypeSelectorComponent,
        BaseDefinitionsComponent} from './framework/core';
import {ArraySchemaComponent,BooleanSchemaComponent,IntegerSchemaComponent,NullSchemaComponent,
        NumberSchemaComponent,ObjectSchemaComponent,StringSchemaComponent, RefSchemaComponent} from './framework/schemas';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,

    MatTabsModule,
    MatCardModule,
    MatMenuModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatCheckboxModule,
    MatTooltipModule,
    BrowserAnimationsModule,

    FlexLayoutModule,
    CodemirrorModule
  ],
  declarations: [
    AppComponent,
    Ng2JsonSchemaBuilderComponent,
    ArraySchemaComponent,
    BooleanSchemaComponent,
    IntegerSchemaComponent,
    NullSchemaComponent,
    NumberSchemaComponent,
    ObjectSchemaComponent,
    StringSchemaComponent,
    TypeSelectorComponent,
    StandardInputComponent,
    BaseSchemaComponent,
    SchemaLoaderComponent,
    LoadSchemaDirective,
    RefSchemaComponent,
    BaseDefinitionsComponent
  ],
  entryComponents: [
    ArraySchemaComponent,
    BooleanSchemaComponent,
    IntegerSchemaComponent,
    NullSchemaComponent,
    NumberSchemaComponent,
    ObjectSchemaComponent,
    StringSchemaComponent,
    RefSchemaComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
