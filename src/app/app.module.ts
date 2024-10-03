import { Component, NgModule } from "@angular/core"
import { AppComponent } from "./app.component"
import { RouterModule, Routes } from "@angular/router";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule } from "@angular/forms";
import {StudentlistComponent} from "./components/studentlist/studentlist.component";
import {EmployeeListComponent} from "./components/employee-list/employee-list.component";
import {FruitListComponent} from "./components/fruit-list/fruit-list.component";
import {CourseListComponent} from "./components/course-list/course-list.component";
import {BookListComponent} from "./components/book-list/book-list.component";
import {CityListComponent} from "./components/city-list/city-list.component";
import {MovieListComponent} from "./components/movie-list/movie-list.component";
import {CarModelListComponent} from "./components/car-model-list/car-model-list.component";
import {ProductListComponent} from "./components/product-list/product-list.component";
import {SubjectListComponent} from "./components/subject-list/subject-list.component";
import {CountryListComponent} from "./components/country-list/country-list.component";
import {SportsListComponent} from "./components/sports-list/sports-list.component";
import {VegetableListComponent} from "./components/vegetable-list/vegetable-list.component";
import {AnimalListComponent} from "./components/animal-list/animal-list.component";
import {ToolListComponent} from "./components/tool-list/tool-list.component";
import {LanguageListComponent} from "./components/language-list/language-list.component";
import {GameListComponent} from "./components/game-list/game-list.component";
import {SoftwareListComponent} from "./components/software-list/software-list.component";
import {PhoneContactListComponent} from "./components/phone-contact-list/phone-contact-list.component";
import {MusicPlaylistListComponent} from "./components/music-playlist-list/music-playlist-list.component";
import {FoodMenuListComponent} from "./components/food-menu-list/food-menu-list.component";
import {GroceryListComponent} from "./components/grocery-list/grocery-list.component";


const routes: Routes = [
  {path: '', component: StudentlistComponent},
  {path: 'employee-list', component: EmployeeListComponent},
  {path: 'fruit-list', component: FruitListComponent},
  {path: 'course-list', component: CourseListComponent},
  {path: 'book-list', component: BookListComponent},
  {path: 'city-list', component: CityListComponent},
  {path: 'movie-list', component: MovieListComponent},
  {path: 'car-model-list', component: CarModelListComponent},
  {path: 'product-list', component: ProductListComponent},
  {path: 'subject-list', component: SubjectListComponent},
  {path: 'country-list', component: CountryListComponent},
  {path: 'sports-list', component: SportsListComponent},
  {path: 'vegetable-list', component: VegetableListComponent},
  {path: 'animal-list', component: AnimalListComponent},
  {path: 'tool-list', component: ToolListComponent},
  {path: 'language-list', component: LanguageListComponent},
  {path: 'game-list', component:  GameListComponent},
  {path: 'software-list', component:  SoftwareListComponent},
  {path: 'phone-contact-list', component:  PhoneContactListComponent},
  {path: 'music-playlist-list', component:  MusicPlaylistListComponent},
  {path: 'food-menu-list', component:  FoodMenuListComponent},
  {path: 'grocery-list', component:  GroceryListComponent},



]

@NgModule ({
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes, {enableTracing: true}),
    FormsModule,
  ],

  declarations: [
    AppComponent,
    StudentlistComponent,
    EmployeeListComponent,
    FruitListComponent,
    CourseListComponent,
    BookListComponent,
    CityListComponent,
    MovieListComponent,
    CarModelListComponent,
    ProductListComponent,
    SubjectListComponent,
    CountryListComponent,
    SportsListComponent,
    VegetableListComponent,
    AnimalListComponent,
    ToolListComponent,
    LanguageListComponent,
    GameListComponent,
    SoftwareListComponent,
    PhoneContactListComponent,
    MusicPlaylistListComponent,
    FoodMenuListComponent,
    GroceryListComponent,
  ],

  providers: [

  ],

  bootstrap: [
    AppComponent
  ]
})

export class AppModule {}
